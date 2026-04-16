const demoApp = document.getElementById("demoApp");
const dialogBackdrop = document.getElementById("dialogBackdrop");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const cancelDialogBtn = document.getElementById("cancelDialogBtn");
const createIssueForm = document.getElementById("createIssueForm");
const summaryInput = document.getElementById("summaryInput");
const descriptionInput = document.getElementById("descriptionInput");
const summaryError = document.getElementById("summaryError");
const todoColumn = document.getElementById("todoColumn");
const todoCount = document.getElementById("todoCount");
const sidepanelSandbox = document.getElementById("sidepanelSandbox");
const recordBtn = document.getElementById("recordBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");
const saveRecordingBtn = document.getElementById("saveRecordingBtn");
const actionList = document.getElementById("actionList");
const workflowTitle = document.getElementById("workflowTitle");
const replayProgress = document.getElementById("replayProgress");
const replayProgressFill = document.getElementById("replayProgressFill");
const stepsList = document.getElementById("stepsList");
const stopReplayBtn = document.getElementById("stopReplayBtn");
const nariHeroNote = document.getElementById("nariHeroNote");
const nariCapturedCount = document.getElementById("nariCapturedCount");
const nariWorkflowCard = document.getElementById("nariWorkflowCard");
const nariWorkflowTitle = document.getElementById("nariWorkflowTitle");
const nariWorkflowMeta = document.getElementById("nariWorkflowMeta");
const nariWorkflowSupporting = document.getElementById("nariWorkflowSupporting");
const nariShareBtn = document.getElementById("nariShareBtn");
const nariNewWorkflowBtn = document.getElementById("nariNewWorkflowBtn");

const createButtons = [
  document.getElementById("createGlobalBtn"),
  document.getElementById("createBoardBtn"),
  document.getElementById("createColumnBtn"),
].filter(Boolean);

const BASE_TODO_COUNT = Number.parseInt(todoCount?.textContent || "0", 10) || 0;
const DEFAULT_NARI_DRAFT = {
  title: "Create support ticket in Jira",
  supporting: "Start in fake Nari, move into Jira for the ticket flow, then swap back here.",
  hero: "Start on the fake Nari home, hit Capture, and the demo swaps into Jira without ever leaving this page.",
};

let nextIssueNumber = 143;
let currentSite = "jira";
let isRecording = false;
let isPaused = false;
let recordedSteps = [];
let recordedKeys = new Set();
let latestDraft = {
  issueKey: "",
  title: DEFAULT_NARI_DRAFT.title,
  supporting: DEFAULT_NARI_DRAFT.supporting,
};

function isEmbedPlaying() {
  return !!document.getElementById("nari-root");
}

createButtons.forEach((button) => {
  button.addEventListener("click", () => { openDialog(); });
});

recordBtn.addEventListener("click", startRecording);
pauseBtn.addEventListener("click", togglePause);
restartBtn.addEventListener("click", restartRecording);
saveRecordingBtn.addEventListener("click", stopRecording);
stopReplayBtn.addEventListener("click", resetPanel);
closeDialogBtn.addEventListener("click", closeDialog);
cancelDialogBtn.addEventListener("click", closeDialog);

if (nariWorkflowCard) {
  nariWorkflowCard.addEventListener("click", () => {
    nariWorkflowCard.classList.add("is-focused");
    if (!isRecording || isPaused) return;
    recordStep(
      "Click",
      "Open workflow draft",
      "Focused the imported workflow draft inside the fake Nari app.",
      "nari-open-workflow"
    );
  });
}

if (nariShareBtn) {
  nariShareBtn.addEventListener("click", () => {
    if (!isRecording || isPaused) return;
    recordStep(
      "Click",
      "Share workflow draft",
      "Opened the share action from the Nari home view.",
      "nari-share-draft"
    );
  });
}

if (nariNewWorkflowBtn) {
  nariNewWorkflowBtn.addEventListener("click", () => {
    if (!isRecording) {
      recordBtn.click();
      return;
    }
    if (isPaused) return;
    recordStep(
      "Click",
      "Start capture from Nari home",
      "Used the home hero action before moving into the Jira sandbox.",
      "nari-new-workflow"
    );
  });
}

dialogBackdrop.addEventListener("click", (event) => {
  if (event.target === dialogBackdrop) {
    closeDialog();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !dialogBackdrop.hidden) {
    closeDialog();
  }
});

summaryInput.addEventListener("input", () => {
  if (!isRecording || isPaused) return;
  const value = summaryInput.value.trim();
  if (!value) return;
  recordStep("Input", "Fill summary field", `Entered "${shorten(value, 42)}".`, "summary");
});

descriptionInput.addEventListener("input", () => {
  if (!isRecording || isPaused) return;
  const value = descriptionInput.value.trim();
  if (!value) return;
  recordStep("Input", "Fill description field", "Added issue context for the support workflow.", "description");
});

createIssueForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const summary = summaryInput.value.trim();
  const description = descriptionInput.value.trim();
  const issueKey = `SE-${nextIssueNumber}`;

  if (!summary) {
    summaryError.hidden = false;
    summaryInput.focus();
    return;
  }

  summaryError.hidden = true;

  if (isRecording) {
    recordStep("Submit", "Create Jira issue", `Issue ${issueKey} was created and placed in In progress.`, "submit");
  }

  addIssueCard(summary, description, issueKey);
  closeDialog();

  window.setTimeout(() => {
    switchToNariSite(issueKey, summary, description);
  }, 320);
});

function openDialog() {
  dialogBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  if (isRecording && !isPaused) {
    recordStep("Click", "Open Create issue", "Triggered the Jira issue-creation dialog.", "open-dialog");
  }
  window.setTimeout(() => {
    summaryInput.focus();
  }, 10);
}

function closeDialog() {
  dialogBackdrop.hidden = true;
  document.body.style.overflow = "";
  createIssueForm.reset();
  summaryError.hidden = true;
}

function addIssueCard(summary, description, issueKey) {
  const card = document.createElement("article");
  card.className = "issue-card issue-card-new issue-card-generated";
  card.innerHTML = `
    <div class="issue-card-top">
      <span class="issue-type issue-type-task"></span>
      <span class="issue-key">${escapeHtml(issueKey)}</span>
    </div>
    <h3>${escapeHtml(summary)}</h3>
    ${description ? `<div class="issue-tag-row"><span class="lozenge lozenge-subtle">${escapeHtml(shorten(description, 36))}</span></div>` : ""}
    <div class="issue-footer">
      <span class="priority priority-medium">Medium</span>
      <div class="avatar avatar-purple avatar-small">SO</div>
    </div>
  `;

  todoColumn.prepend(card);
  nextIssueNumber += 1;

  if (todoCount) {
    todoCount.textContent = String(Number.parseInt(todoCount.textContent || "0", 10) + 1);
  }
}

function startRecording() {
  if (isRecording) return;
  isRecording = true;
  isPaused = false;
  recordedSteps = [];
  recordedKeys = new Set();
  sidepanelSandbox.classList.remove("loaded-mode");
  sidepanelSandbox.classList.add("recording-mode");
  recordBtn.classList.add("recording");
  recordBtn.setAttribute("aria-pressed", "true");
  pauseBtn.classList.remove("paused");
  actionList.innerHTML = "";
  recordStep("Start", "Capture started", "Nari is now watching the fake workflow from this page.", "start");

  if (currentSite === "nari") {
    recordStep(
      "Navigation",
      "Open Jira sandbox",
      "Swapped the fake Nari home into the Jira board so the ticket flow can be recorded on one demo page.",
      "open-jira"
    );
    setActiveSite("jira");
  }
}

function stopRecording() {
  if (!isRecording && recordedSteps.length === 0) return;
  isRecording = false;
  isPaused = false;
  sidepanelSandbox.classList.remove("recording-mode");
  sidepanelSandbox.classList.add("loaded-mode");
  recordBtn.classList.remove("recording");
  recordBtn.setAttribute("aria-pressed", "false");
  pauseBtn.classList.remove("paused");

  // Convert recorded steps to WorkflowAction shape and hand off to the React app
  const actions = recordedSteps.map((step, i) => ({
    id: `step-${i + 1}`,
    workflow_id: "demo",
    item_type: "action",
    itemType: "action",
    type: step.badge === "Navigation" ? "navigation" : step.badge === "Input" ? "input" : "click",
    sequence: i + 1,
    timestamp: new Date().toISOString(),
    title: step.title,
    page: { url: window.location.href, title: step.site },
    element: null,
    note: step.description || null,
  }));

  if (window.parent !== window) {
    window.parent.postMessage({ type: "nari-save", steps: actions }, "*");
  } else {
    try {
      localStorage.setItem("nari_demo_steps", JSON.stringify(actions));
    } catch { /* ignore */ }
    window.location.href = new URL("/demo/app.html", window.location.origin).href;
  }
}

function recordStep(badge, title, description, key, site = getCurrentSiteLabel()) {
  if (!isRecording && badge !== "Start") return;
  if (key && recordedKeys.has(key)) return;

  if (key) {
    recordedKeys.add(key);
  }

  const step = { badge, title, description, site };
  recordedSteps.push(step);

  const item = document.createElement("article");
  item.className = "action-item";
  item.innerHTML = `
    <div class="step-col">
      <div class="step-num">${String(recordedSteps.length).padStart(2, "0")}</div>
      <div class="step-line"></div>
    </div>
    <div class="action-body">
      <div class="action-header-row">
        <span class="action-type-pill type-${escapeHtml(badge.toLowerCase())}">${escapeHtml(badge)}</span>
        <span class="action-title">${escapeHtml(title)}</span>
      </div>
      <div class="action-meta">${escapeHtml(description)}</div>
    </div>
  `;
  actionList.appendChild(item);
  updateNariDraftUi();
}

function renderSummary() {
  if (recordedSteps.length === 0) {
    workflowTitle.textContent = "Workflow";
    replayProgress.textContent = "";
    replayProgressFill.style.width = "0%";
    stepsList.innerHTML = '<div class="simple-step-empty">Nothing captured yet. Use the fake Jira page to build a ticket-creation walkthrough.</div>';
    return;
  }

  const visitedSites = new Set(recordedSteps.map((step) => step.site));
  workflowTitle.textContent = visitedSites.size > 1 ? "Nari and Jira capture demo" : "Jira ticket creation walkthrough";
  replayProgress.textContent = `${recordedSteps.length}/${recordedSteps.length}`;
  replayProgressFill.style.width = "100%";
  stepsList.innerHTML = recordedSteps.map((step, index) => `
    <article class="replay-action-item ${index === 0 ? "current" : ""}">
      <div class="replay-action-header">
        <span class="replay-action-title">${escapeHtml(step.title)}</span>
        <span class="replay-action-number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="replay-action-expanded">
        <div class="replay-action-description">${escapeHtml(step.description)}</div>
        <div class="replay-action-meta">
          <span class="replay-action-type">${escapeHtml(step.badge)}</span>
          <span>${escapeHtml(step.site)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function togglePause() {
  if (!isRecording) return;
  isPaused = !isPaused;
  pauseBtn.classList.toggle("paused", isPaused);
  if (isPaused) {
    recordStep("Start", "Recording paused", "Capture is temporarily paused.", `pause-${recordedSteps.length + 1}`);
  }
}

function restartRecording() {
  if (!isRecording && !recordedSteps.length) {
    startRecording();
    return;
  }

  resetPanel();
  startRecording();
}

function resetPanel() {
  isRecording = false;
  isPaused = false;
  recordedSteps = [];
  recordedKeys = new Set();
  sidepanelSandbox.classList.remove("recording-mode", "loaded-mode");
  recordBtn.classList.remove("recording");
  recordBtn.setAttribute("aria-pressed", "false");
  pauseBtn.classList.remove("paused");
  actionList.innerHTML = '<div class="no-actions">Live actions appear here once recording starts.</div>';
  workflowTitle.textContent = "Workflow";
  replayProgress.textContent = "";
  replayProgressFill.style.width = "0%";
  stepsList.innerHTML = "";
  resetDemoSurface();
}

function switchToNariSite(issueKey, summary, description) {
  hydrateNariDraft(issueKey, summary, description);
  setActiveSite("nari");

  if (isRecording && !isPaused) {
    recordStep(
      "Navigation",
      "Open Nari workspace",
      `Swapped the demo surface after creating ${issueKey} so the workflow can continue on one fake page.`,
      "open-nari"
    );
  }
}

function hydrateNariDraft(issueKey = "", summary = "", description = "") {
  latestDraft = {
    issueKey,
    title: summary || DEFAULT_NARI_DRAFT.title,
    supporting: issueKey
      ? `${issueKey} created on the fake Jira board and staged inside this Nari mock${description ? ` with ${shorten(description, 34)}.` : "."}`
      : DEFAULT_NARI_DRAFT.supporting,
  };

  updateNariDraftUi();
}

function updateNariDraftUi() {
  const actionCount = recordedSteps.length;
  const actionLabel = `${actionCount} action${actionCount === 1 ? "" : "s"} captured`;
  const heroCopy = latestDraft.issueKey
    ? `Draft ${latestDraft.issueKey} is ready for review. The demo surface swapped into Nari so the recording stays on one fake site.`
    : DEFAULT_NARI_DRAFT.hero;

  if (nariCapturedCount) {
    nariCapturedCount.textContent = String(actionCount);
  }

  if (nariWorkflowTitle) {
    nariWorkflowTitle.textContent = latestDraft.title;
  }

  if (nariWorkflowMeta) {
    nariWorkflowMeta.textContent = actionLabel;
  }

  if (nariWorkflowSupporting) {
    nariWorkflowSupporting.textContent = latestDraft.supporting;
  }

  if (nariHeroNote) {
    nariHeroNote.textContent = heroCopy;
  }
}

function resetDemoSurface() {
  closeDialog();
  resetJiraBoard();
  latestDraft = {
    issueKey: "",
    title: DEFAULT_NARI_DRAFT.title,
    supporting: DEFAULT_NARI_DRAFT.supporting,
  };

  if (nariWorkflowCard) {
    nariWorkflowCard.classList.remove("is-focused");
  }

  setActiveSite("jira");
  updateNariDraftUi();
}

function resetJiraBoard() {
  document.querySelectorAll(".issue-card-generated").forEach((card) => card.remove());
  nextIssueNumber = 143;

  if (todoCount) {
    todoCount.textContent = String(BASE_TODO_COUNT);
  }
}

function setActiveSite(site) {
  closeDialog();
  currentSite = site;
  demoApp.classList.toggle("site-mode--jira", site === "jira");
  demoApp.classList.toggle("site-mode--nari", site === "nari");
}

function getCurrentSiteLabel() {
  return currentSite === "nari" ? "Nari app mock" : "Jira sandbox";
}

function shorten(value, maxLength) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1)}...`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

resetPanel();
