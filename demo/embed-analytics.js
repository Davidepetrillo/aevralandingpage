(function () {
  const MESSAGE_TYPE = "aevra-demo-embed-analytics";
  const STORAGE_KEY = "aevra_demo_embed_analytics_state";
  const STEP_META_PATTERN = /Step\s+(\d+)\s+of\s+(\d+)/i;

  const defaultState = () => ({
    sessionId: "",
    sessionStartedAt: 0,
    startMode: "",
    activeStepIndex: null,
    activeStepTitle: "",
    activeStepStartedAt: 0,
    totalSteps: 0,
    lastCompletedStepIndex: 0,
    stepVisitCounts: {},
    resumeExpected: false,
    pendingNavigationAction: "",
    pendingNavigationAt: 0,
  });

  let state = loadState();
  let tooltipVisible = false;
  let lastStepSignature = "";
  let pendingAction = "";
  let queuedSync = false;
  let launcherTracked = false;

  function loadState() {
    try {
      const rawValue = sessionStorage.getItem(STORAGE_KEY);
      if (!rawValue) {
        return defaultState();
      }

      const parsedValue = JSON.parse(rawValue);
      if (!parsedValue || typeof parsedValue !== "object") {
        return defaultState();
      }

      return {
        ...defaultState(),
        ...parsedValue,
        stepVisitCounts:
          parsedValue.stepVisitCounts && typeof parsedValue.stepVisitCounts === "object"
            ? parsedValue.stepVisitCounts
            : {},
      };
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage failures in private mode or restricted environments.
    }
  }

  function resetState() {
    state = defaultState();
    saveState();
  }

  function generateSessionId() {
    if (window.crypto?.randomUUID) {
      return window.crypto.randomUUID();
    }

    return `demo-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function getNow() {
    return Date.now();
  }

  function getProgressPercent(stepIndex, totalSteps) {
    if (!stepIndex || !totalSteps) {
      return null;
    }

    return Number(((stepIndex / totalSteps) * 100).toFixed(2));
  }

  function buildStepProperties(stepIndex, totalSteps, stepTitle, extraProperties = {}) {
    return {
      session_id: state.sessionId,
      session_started_at: state.sessionStartedAt ? new Date(state.sessionStartedAt).toISOString() : null,
      step_index: stepIndex ?? null,
      total_steps: totalSteps ?? null,
      step_title: stepTitle || null,
      progress_percent: getProgressPercent(stepIndex, totalSteps),
      page_path: window.location.pathname,
      page_url: window.location.href,
      start_mode: state.startMode || null,
      ...extraProperties,
    };
  }

  function emit(eventName, properties = {}) {
    const payload = {
      type: MESSAGE_TYPE,
      event: eventName,
      properties,
    };

    window.dispatchEvent(new CustomEvent(MESSAGE_TYPE, { detail: payload }));

    if (window.parent && window.parent !== window) {
      window.parent.postMessage(payload, "*");
    }
  }

  function emitCurrentSnapshot() {
    const tooltip = document.getElementById("nari-tooltip");
    const isTooltipVisible = Boolean(tooltip?.classList.contains("nari-visible"));
    const visitKey =
      typeof state.activeStepIndex === "number" && state.activeStepTitle
        ? `${state.activeStepIndex}:${state.activeStepTitle}`
        : null;

    if (!state.sessionId && !isTooltipVisible) {
      return;
    }

    emit(
      "state_snapshot",
      buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
        completed_steps_count: state.lastCompletedStepIndex,
        pending_navigation_action: state.pendingNavigationAction || null,
        step_visit_number: visitKey ? state.stepVisitCounts[visitKey] || 0 : 0,
        tooltip_visible: isTooltipVisible,
      })
    );
  }

  function ensureSession() {
    if (!state.sessionId) {
      state.sessionId = generateSessionId();
    }

    if (!state.sessionStartedAt) {
      state.sessionStartedAt = getNow();
    }

    if (!state.startMode) {
      state.startMode = "auto";
    }
  }

  function parseStepMeta(metaText) {
    if (typeof metaText !== "string") {
      return null;
    }

    const match = metaText.match(STEP_META_PATTERN);
    if (!match) {
      return null;
    }

    return {
      stepIndex: Number.parseInt(match[1], 10),
      totalSteps: Number.parseInt(match[2], 10),
    };
  }

  function getTargetMode() {
    const ring = document.getElementById("nari-ring");
    const screenshot = document.querySelector("#nari-tooltip .nari-screenshot");

    if (ring?.classList.contains("nari-visible")) {
      return "element";
    }

    if (screenshot && screenshot.style.display !== "none") {
      return "screenshot";
    }

    return "tooltip";
  }

  function emitSessionStartedIfNeeded() {
    ensureSession();

    if (!state.resumeExpected && state.activeStepIndex === null && state.lastCompletedStepIndex === 0) {
      emit(
        "session_started",
        buildStepProperties(null, null, null, {
          session_start_mode: state.startMode,
        })
      );
      return;
    }

    if (state.resumeExpected) {
      emit(
        "session_resumed",
        buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
          resumed_after_navigation: true,
          resumed_from_step_index: state.activeStepIndex,
          pending_navigation_action: state.pendingNavigationAction || null,
        })
      );
      state.resumeExpected = false;
      saveState();
    }
  }

  function emitPendingCompletionIfNeeded(nextStepIndex, nextStepTitle, resumedFromNavigation) {
    if (
      state.pendingNavigationAction !== "next" ||
      typeof state.activeStepIndex !== "number" ||
      !state.activeStepStartedAt
    ) {
      return;
    }

    const stepDurationMs = Math.max(0, getNow() - state.activeStepStartedAt);

    emit(
      "step_completed",
      buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
        completed_via: "next",
        next_step_index: nextStepIndex ?? null,
        next_step_title: nextStepTitle || null,
        navigated_between_pages: resumedFromNavigation,
        step_duration_ms: stepDurationMs,
      })
    );

    state.lastCompletedStepIndex = Math.max(state.lastCompletedStepIndex, state.activeStepIndex);
    state.pendingNavigationAction = "";
    state.pendingNavigationAt = 0;
    saveState();
  }

  function handleStepViewed(stepIndex, totalSteps, stepTitle) {
    const signature = `${stepIndex}:${totalSteps}:${stepTitle}`;
    const resumedFromNavigation = state.resumeExpected;

    if (tooltipVisible && lastStepSignature === signature) {
      return;
    }

    ensureSession();
    emitSessionStartedIfNeeded();
    emitPendingCompletionIfNeeded(stepIndex, stepTitle, resumedFromNavigation);

    const visitKey = `${stepIndex}:${stepTitle}`;
    const visitNumber = (state.stepVisitCounts[visitKey] || 0) + 1;
    const targetMode = getTargetMode();

    state.stepVisitCounts[visitKey] = visitNumber;
    state.activeStepIndex = stepIndex;
    state.totalSteps = totalSteps;
    state.activeStepTitle = stepTitle;
    state.activeStepStartedAt = getNow();
    state.pendingNavigationAction = "";
    state.pendingNavigationAt = 0;
    saveState();

    emit(
      "step_viewed",
      buildStepProperties(stepIndex, totalSteps, stepTitle, {
        step_visit_number: visitNumber,
        completed_steps_count: state.lastCompletedStepIndex,
        target_mode: targetMode,
      })
    );

    if (targetMode !== "element") {
      emit(
        "step_target_missing",
        buildStepProperties(stepIndex, totalSteps, stepTitle, {
          target_mode: targetMode,
        })
      );
    }

    tooltipVisible = true;
    lastStepSignature = signature;
    pendingAction = "";
  }

  function endSession(eventName, reason) {
    if (!state.sessionId) {
      resetState();
      tooltipVisible = false;
      lastStepSignature = "";
      pendingAction = "";
      return;
    }

    const currentTime = getNow();
    const currentStepDurationMs = state.activeStepStartedAt
      ? Math.max(0, currentTime - state.activeStepStartedAt)
      : null;

    if (eventName === "session_completed" && typeof state.activeStepIndex === "number") {
      emit(
        "step_completed",
        buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
          completed_via: "finish",
          next_step_index: null,
          next_step_title: null,
          navigated_between_pages: false,
          step_duration_ms: currentStepDurationMs,
        })
      );

      state.lastCompletedStepIndex = Math.max(state.lastCompletedStepIndex, state.activeStepIndex);
    }

    emit(
      eventName,
      buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
        session_duration_ms: state.sessionStartedAt ? Math.max(0, currentTime - state.sessionStartedAt) : null,
        completed_steps_count: state.lastCompletedStepIndex,
        stopped_step_index: reason === "exit" ? state.activeStepIndex : null,
        stopped_step_title: reason === "exit" ? state.activeStepTitle : null,
        completion_rate:
          typeof state.totalSteps === "number" && state.totalSteps > 0
            ? Number((state.lastCompletedStepIndex / state.totalSteps).toFixed(4))
            : null,
        current_step_duration_ms: currentStepDurationMs,
      })
    );

    resetState();
    tooltipVisible = false;
    lastStepSignature = "";
    pendingAction = "";
  }

  function handleTooltipHidden() {
    if (!tooltipVisible && !state.pendingNavigationAction && !pendingAction) {
      return;
    }

    const resolvedAction = pendingAction || state.pendingNavigationAction;

    if (resolvedAction === "finish") {
      endSession("session_completed", "finish");
      return;
    }

    if (resolvedAction === "exit") {
      endSession("session_exited", "exit");
      return;
    }

    tooltipVisible = false;
    lastStepSignature = "";
    pendingAction = "";
  }

  function queueSync() {
    if (queuedSync) {
      return;
    }

    queuedSync = true;

    requestAnimationFrame(() => {
      queuedSync = false;

      const tooltip = document.getElementById("nari-tooltip");
      const isTooltipVisible = Boolean(tooltip?.classList.contains("nari-visible"));

      if (!isTooltipVisible) {
        handleTooltipHidden();
        return;
      }

      const metaText = tooltip.querySelector(".nari-meta")?.textContent?.trim() || "";
      const titleText = tooltip.querySelector(".nari-title")?.textContent?.trim() || "";
      const parsedStep = parseStepMeta(metaText);

      if (!parsedStep) {
        return;
      }

      handleStepViewed(parsedStep.stepIndex, parsedStep.totalSteps, titleText);
    });
  }

  function handleDocumentClick(event) {
    const launcher = event.target.closest("#nari-trigger");
    if (launcher) {
      ensureSession();
      state.startMode = "launcher";
      saveState();

      emit(
        "launcher_clicked",
        buildStepProperties(null, null, null, {
          session_start_mode: "launcher",
        })
      );
      return;
    }

    const nextButton = event.target.closest(".nari-next");
    if (nextButton) {
      const actionName = nextButton.textContent?.trim() === "Finish" ? "finish" : "next";
      pendingAction = actionName;
      state.pendingNavigationAction = actionName;
      state.pendingNavigationAt = getNow();
      saveState();

      emit(
        "navigation_clicked",
        buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
          navigation_action: actionName,
        })
      );
      return;
    }

    const prevButton = event.target.closest(".nari-prev");
    if (prevButton) {
      pendingAction = "prev";
      state.pendingNavigationAction = "prev";
      state.pendingNavigationAt = getNow();
      saveState();

      emit(
        "navigation_clicked",
        buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
          navigation_action: "prev",
        })
      );
      return;
    }

    const exitButton = event.target.closest(".nari-exit");
    if (exitButton) {
      pendingAction = "exit";
      state.pendingNavigationAction = "exit";
      state.pendingNavigationAt = getNow();
      saveState();

      emit(
        "navigation_clicked",
        buildStepProperties(state.activeStepIndex, state.totalSteps, state.activeStepTitle, {
          navigation_action: "exit",
        })
      );
    }
  }

  function handleAnalyticsMessage(event) {
    if (event.data?.type !== "aevra-demo-embed-analytics-request-state") {
      return;
    }

    emitCurrentSnapshot();
  }

  function observeOverlay() {
    const observer = new MutationObserver(() => {
      const launcher = document.getElementById("nari-trigger");
      if (launcher && !launcherTracked) {
        launcherTracked = true;
        emit(
          "launcher_rendered",
          buildStepProperties(null, null, null, {
            session_start_mode: "launcher",
          })
        );
      }

      queueSync();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"],
      characterData: true,
    });
  }

  document.addEventListener("click", handleDocumentClick, true);
  document.addEventListener("DOMContentLoaded", queueSync);
  window.addEventListener("load", queueSync);
  window.addEventListener("message", handleAnalyticsMessage);

  window.addEventListener("pagehide", () => {
    if (state.pendingNavigationAction === "next") {
      state.resumeExpected = true;
      saveState();
    }
  });

  observeOverlay();
  queueSync();
})();
