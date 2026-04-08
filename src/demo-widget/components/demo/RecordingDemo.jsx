import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './RecordingDemo.module.scss';

const RECORD_EMAIL = 'sarah@acme.io';
const REPLAY_NAME = 'Sarah Chen';
const REPLAY_EMAIL = 'sarah@acme.io';
const AGENT_EMAIL = 'accounts@northstar.io';
const AGENT_COMPANY = 'Northstar Labs';
const AGENT_VENDOR_ID = 'V-20418';
const AGENT_TERMS = 'Net 30';
const AGENT_FIELDS = [
  { label: 'Vendor name', value: AGENT_COMPANY },
  { label: 'Vendor email', value: AGENT_EMAIL },
  { label: 'Vendor ID', value: AGENT_VENDOR_ID },
  { label: 'Payment terms', value: AGENT_TERMS },
];
const EMPTY_AGENT_VALUES = Object.fromEntries(AGENT_FIELDS.map((field) => [field.label, '']));
const SCENE_PLAYBACK_BOOT_MS = 90;
const RECORD_SCENE_END_MS = 1360 + RECORD_EMAIL.length * 68 + 120 + 2000;
const REPLAY_NAME_DONE_MS = 1080 + REPLAY_NAME.length * 62 + 180;
const REPLAY_SCENE_END_MS = REPLAY_NAME_DONE_MS + 920 + REPLAY_EMAIL.length * 58 + 180 + 1500;
const AGENT_FULL_SCENE_END_MS = 2900 + 12 * 78 + 720;

export const HERO_SCENE_PLAYBACK_SECONDS = [
  (SCENE_PLAYBACK_BOOT_MS + RECORD_SCENE_END_MS) / 1000,
  (SCENE_PLAYBACK_BOOT_MS + REPLAY_SCENE_END_MS) / 1000,
  (SCENE_PLAYBACK_BOOT_MS + AGENT_FULL_SCENE_END_MS) / 1000,
];

function joinClasses(...values) {
  return values.filter(Boolean).join(' ');
}

function measureRect(container, element, padding = 5) {
  if (!container || !element) return null;

  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return {
    top: elementRect.top - containerRect.top - padding,
    left: elementRect.left - containerRect.left - padding,
    width: elementRect.width + padding * 2,
    height: elementRect.height + padding * 2,
  };
}

function measureCursor(container, element) {
  if (!container || !element) return null;

  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return {
    x: elementRect.left - containerRect.left + 12,
    y: elementRect.top - containerRect.top + elementRect.height / 2 - 7,
  };
}

function measurePoint(container, element) {
  if (!container || !element) return null;

  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return {
    x: elementRect.left - containerRect.left + elementRect.width / 2,
    y: elementRect.top - containerRect.top + elementRect.height / 2,
  };
}

function CursorSvg() {
  return (
    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M2 1.5L2 17.5L5.8 14L8.8 21L11.5 19.9L8.5 12.8L14.5 12.8Z"
        fill="#1a1a1a"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M2.9 3.2L2.9 16.4L6.2 13.3L9 19.6L10.7 18.9L7.9 12.1L12.8 12.1Z"
        fill="white"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScreenshotNavigate() {
  return (
    <svg width="100%" height="48" viewBox="0 0 172 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="172" height="48" fill="#f4f5f2" />
      <rect x="0" y="0" width="172" height="11" fill="#ececea" />
      <rect x="6" y="3.5" width="4" height="4" rx="2" fill="#d4d4d0" />
      <rect x="12" y="3.5" width="4" height="4" rx="2" fill="#d4d4d0" />
      <rect x="18" y="3.5" width="4" height="4" rx="2" fill="#d4d4d0" />
      <rect x="28" y="3" width="72" height="5" rx="2.5" fill="#e2e2df" />
      <rect x="38" y="19" width="50" height="5" rx="2.5" fill="#d0d0cc" />
      <rect x="50" y="28" width="72" height="3" rx="1.5" fill="#e0e0dc" />
      <rect x="56" y="34" width="60" height="3" rx="1.5" fill="#e8e8e5" />
    </svg>
  );
}

function ScreenshotInput() {
  return (
    <svg width="100%" height="48" viewBox="0 0 172 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="172" height="48" fill="#f9f9f8" />
      <rect x="12" y="8" width="28" height="4" rx="2" fill="#d8d8d4" />
      <rect x="12" y="16" width="148" height="22" rx="6" fill="white" stroke="#e0e0dc" strokeWidth="1" />
      <rect x="20" y="24.5" width="52" height="5" rx="2" fill="#bbbbb7" />
      <rect x="74" y="22" width="1.5" height="10" rx="0.75" fill="#ec4899" opacity="0.8" />
    </svg>
  );
}

function ScreenshotButton() {
  return (
    <svg width="100%" height="48" viewBox="0 0 172 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="172" height="48" fill="#f9f9f8" />
      <rect x="12" y="8" width="148" height="14" rx="6" fill="white" stroke="#e0e0dc" strokeWidth="1" />
      <rect x="20" y="12.5" width="40" height="5" rx="2" fill="#c8c8c4" />
      <rect x="12" y="28" width="148" height="14" rx="6" fill="#111" />
      <rect x="58" y="33" width="56" height="4" rx="2" fill="rgba(255,255,255,0.65)" />
    </svg>
  );
}

function ReplayCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function TabButton({ active, label, onClick }) {
  return (
    <button
      type="button"
      className={joinClasses(styles.tabButton, active && styles.tabButtonActive)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function PdfFileIcon() {
  return (
    <svg width="58" height="72" viewBox="0 0 58 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M14 3.5H34.5L46 15V62C46 65.3137 43.3137 68 40 68H14C10.6863 68 8 65.3137 8 62V9.5C8 6.18629 10.6863 3.5 14 3.5Z"
        fill="#FCFBF8"
        stroke="rgba(17,24,39,0.14)"
      />
      <path
        d="M34.5 3.5V12C34.5 13.6569 35.8431 15 37.5 15H46"
        fill="#F4EFE7"
      />
      <path
        d="M34.5 3.5V12C34.5 13.6569 35.8431 15 37.5 15H46"
        stroke="rgba(17,24,39,0.12)"
        strokeLinejoin="round"
      />
      <rect x="14" y="12" width="16" height="7" rx="3.5" fill="#D96B5B" />
      <rect x="18" y="14.3" width="8" height="2.3" rx="1.15" fill="rgba(255,255,255,0.9)" />
      <rect x="14" y="28" width="26" height="4" rx="2" fill="#D9D4CB" />
      <rect x="14" y="36" width="24" height="4" rx="2" fill="#E7E1D8" />
      <rect x="14" y="44" width="18" height="4" rx="2" fill="#E7E1D8" />
      <rect x="14" y="56" width="24" height="1.5" rx="0.75" fill="rgba(17,24,39,0.1)" />
    </svg>
  );
}

function StageChrome({ url }) {
  return (
    <div className={styles.browserChrome}>
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.urlBar}>{url}</div>
    </div>
  );
}

function PanelTopbar({ showBack = false }) {
  return (
    <div className={styles.panelTopbar}>
      <button
        type="button"
        className={joinClasses(styles.panelIconButton, !showBack && styles.panelIconButtonHidden)}
        aria-label="Back"
      >
        <svg className={styles.panelIconSvg} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M15.5 19.5L8 12l7.5-7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button type="button" className={joinClasses(styles.panelIconButton, styles.panelHomeButton)} aria-label="Home">
        <svg className={styles.panelIconSvg} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M3 10.5l9-7 9 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <span className={styles.panelTopbarSpacer} aria-hidden="true" />
    </div>
  );
}

function AgentFieldCard({ label, value, displayValue, showCaret, pulse }) {
  const active = showCaret || displayValue.length > 0;

  return (
    <div className={joinClasses(styles.singleFieldCard, active && styles.singleFieldCardAgent, pulse && styles.singleFieldCardAgentPulse)}>
      <div className={styles.agentFieldLabel}>{label}</div>
      <div className={joinClasses(styles.input, styles.agentValueSurface, active && styles.inputAgent, showCaret && styles.inputAgentTyping)}>
        <span className={styles.agentValueText}>{displayValue || ' '}</span>
        {showCaret && displayValue.length < value.length ? <span className={styles.agentCaretInline} aria-hidden="true" /> : null}
      </div>
    </div>
  );
}

function AgentVariableRow({ label, value, visible }) {
  return (
    <div className={joinClasses(styles.agentVariableRow, visible && styles.agentVariableRowVisible)}>
      <span className={styles.agentVariableKey}>{label}</span>
      <span className={styles.agentVariableValue}>{value}</span>
    </div>
  );
}

function useScenePlayback(playToken, reset, animate) {
  const timeoutsRef = useRef([]);

  const clearScene = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const at = useCallback((ms, fn) => {
    const timeoutId = setTimeout(fn, ms);
    timeoutsRef.current.push(timeoutId);
  }, []);

  useEffect(() => {
    reset();

    return () => {
      clearScene();
    };
  }, [clearScene, reset]);

  useEffect(() => {
    if (playToken < 1) return;

    clearScene();
    reset();

    const initId = setTimeout(() => {
      animate({ clearScene, at });
    }, SCENE_PLAYBACK_BOOT_MS);

    timeoutsRef.current.push(initId);

    return () => {
      clearTimeout(initId);
      clearScene();
    };
  }, [animate, at, clearScene, playToken, reset]);

  return { clearScene };
}

export function RecordScene({ playToken }) {
  const browserRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const [cursorPos, setCursorPos] = useState({ x: -40, y: -40 });
  const [clicking, setClicking] = useState(false);
  const [highlightTarget, setHighlightTarget] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [flashKey, setFlashKey] = useState(0);

  const reset = useCallback(() => {
    setVisibleSteps([]);
    setTypedText('');
    setHighlightTarget(null);
    setClicking(false);
    setCursorPos({ x: -40, y: -40 });
  }, []);

  const animate = useCallback(({ clearScene, at }) => {
    clearScene();

    const browser = browserRef.current;
    const input = inputRef.current;
    const button = buttonRef.current;
    if (!browser || !input || !button) return;

    const browserRect = browser.getBoundingClientRect();
    const inputRect = input.getBoundingClientRect();
    const neutral = { x: inputRect.left - browserRect.left - 80, y: browserRect.height - 44 };
    const onInput = measureCursor(browser, input);
    const onButton = measureCursor(browser, button);
    if (!onInput || !onButton) return;

    setVisibleSteps([]);
    setTypedText('');
    setHighlightTarget(null);
    setClicking(false);
    setCursorPos(neutral);

    at(480, () => setCursorPos(onInput));
    at(1000, () => setHighlightTarget({ rect: measureRect(browser, input), visible: true }));

    const typeStart = 1360;
    RECORD_EMAIL.split('').forEach((_, index) => {
      at(typeStart + index * 68, () => setTypedText(RECORD_EMAIL.slice(0, index + 1)));
    });

    at(typeStart + 180, () => setVisibleSteps([
      { text: 'Navigated to signup', type: 'navigate', Screenshot: ScreenshotNavigate },
    ]));

    const typeDone = typeStart + RECORD_EMAIL.length * 68 + 120;

    at(typeDone, () => setFlashKey((value) => value + 1));
    at(typeDone + 120, () => setVisibleSteps([
      { text: 'Navigated to signup', type: 'navigate', Screenshot: ScreenshotNavigate },
      { text: 'Filled email field', type: 'input', Screenshot: ScreenshotInput },
    ]));

    at(typeDone + 220, () => setHighlightTarget((value) => (value ? { ...value, visible: false } : value)));
    at(typeDone + 560, () => setCursorPos(onButton));
    at(typeDone + 980, () => setHighlightTarget({ rect: measureRect(browser, button), visible: true }));

    at(typeDone + 1360, () => {
      setClicking(true);
      setFlashKey((value) => value + 1);
    });
    at(typeDone + 1640, () => setClicking(false));
    at(typeDone + 1460, () => {
      setHighlightTarget((value) => (value ? { ...value, visible: false } : value));
      setVisibleSteps([
        { text: 'Navigated to signup', type: 'navigate', Screenshot: ScreenshotNavigate },
        { text: 'Filled email field', type: 'input', Screenshot: ScreenshotInput },
        { text: 'Clicked "Get started"', type: 'click', Screenshot: ScreenshotButton },
      ]);
    });

    at(typeDone + 2000, () => setCursorPos(neutral));
  }, []);

  useScenePlayback(playToken, reset, animate);

  return (
    <div className={styles.dualPane}>
      <div className={styles.browser} ref={browserRef}>
        <StageChrome url="app.nari.ai/invite" />

        <div className={styles.browserPage}>
          <div className={styles.form}>
            <div className={styles.formIntro}>
              <div className={styles.formHeading}>Join your team</div>
              <div className={styles.formSub}>Free trial. No card needed.</div>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.inputLabel}>Work email</div>
              <input
                ref={inputRef}
                className={styles.input}
                placeholder="you@company.com"
                value={typedText}
                readOnly
              />
            </div>
            <button ref={buttonRef} className={styles.button}>
              Get started {'->'}
            </button>
          </div>
        </div>

        {highlightTarget?.rect ? (
          <div
            className={styles.highlight}
            style={{
              top: highlightTarget.rect.top,
              left: highlightTarget.rect.left,
              width: highlightTarget.rect.width,
              height: highlightTarget.rect.height,
              opacity: highlightTarget.visible ? 1 : 0,
            }}
          >
            <div className={styles.highlightLabel}>Will capture this</div>
          </div>
        ) : null}

        {flashKey > 0 ? <div key={flashKey} className={styles.flash} /> : null}

        <div className={styles.cursor} style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}>
          <div className={clicking ? styles.cursorInnerClicking : styles.cursorInner}>
            <CursorSvg />
          </div>
        </div>
      </div>

      <div className={styles.extension}>
        <PanelTopbar />

        <div className={styles.panelBody}>
          <div className={styles.panelStatusRow}>
            <span className={styles.panelStatusPill}>
              <span className={styles.extRecDot} />
              <span className={styles.extRecLabel}>Recording</span>
            </span>
            <span className={styles.panelCount}>{visibleSteps.length} steps</span>
          </div>

          <div className={styles.extContent}>
            {visibleSteps.length === 0 ? (
              <div className={styles.panelEmptyState}>Captured steps appear here</div>
            ) : null}

            {visibleSteps.map((step, index) => {
              const isCurrent = index === visibleSteps.length - 1;

              return (
                <div
                  key={step.text}
                  className={joinClasses(styles.actionItem, isCurrent && styles.actionItemCurrent)}
                >
                  <div className={styles.actionHeaderRow}>
                    <span className={styles.actionTitle}>{step.text}</span>
                  </div>
                  {isCurrent ? (
                    <div className={styles.screenshot}>
                      <step.Screenshot />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReplayScene({ playToken }) {
  const browserRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const buttonRef = useRef(null);

  const [cursorPos, setCursorPos] = useState({ x: -40, y: -40 });
  const [clicking, setClicking] = useState(false);
  const [highlightTarget, setHighlightTarget] = useState(null);
  const [typedName, setTypedName] = useState('');
  const [typedEmail, setTypedEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const reset = useCallback(() => {
    setTypedName('');
    setTypedEmail('');
    setCurrentStep(0);
    setClicking(false);
    setHighlightTarget(null);
    setCursorPos({ x: -40, y: -40 });
  }, []);

  const animate = useCallback(({ clearScene, at }) => {
    clearScene();

    const browser = browserRef.current;
    const name = nameRef.current;
    const email = emailRef.current;
    const button = buttonRef.current;
    if (!browser || !name || !email || !button) return;

    const browserRect = browser.getBoundingClientRect();
    const nameRect = name.getBoundingClientRect();
    const neutral = { x: nameRect.left - browserRect.left - 80, y: browserRect.height - 44 };
    const onName = measureCursor(browser, name);
    const onEmail = measureCursor(browser, email);
    const onButton = measureCursor(browser, button);
    if (!onName || !onEmail || !onButton) return;

    setTypedName('');
    setTypedEmail('');
    setCurrentStep(0);
    setClicking(false);
    setHighlightTarget(null);
    setCursorPos(neutral);

    at(320, () => setCursorPos(onName));
    at(780, () => setHighlightTarget({ rect: measureRect(browser, name), visible: true }));

    const nameStart = 1080;
    REPLAY_NAME.split('').forEach((_, index) => {
      at(nameStart + index * 62, () => setTypedName(REPLAY_NAME.slice(0, index + 1)));
    });
    at(nameStart - 80, () => setCurrentStep(1));

    const nameDone = nameStart + REPLAY_NAME.length * 62 + 180;

    at(nameDone, () => setHighlightTarget((value) => (value ? { ...value, visible: false } : value)));
    at(nameDone + 280, () => setCursorPos(onEmail));
    at(nameDone + 700, () => setHighlightTarget({ rect: measureRect(browser, email), visible: true }));

    const emailStart = nameDone + 920;
    at(emailStart - 60, () => setCurrentStep(2));
    REPLAY_EMAIL.split('').forEach((_, index) => {
      at(emailStart + index * 58, () => setTypedEmail(REPLAY_EMAIL.slice(0, index + 1)));
    });

    const emailDone = emailStart + REPLAY_EMAIL.length * 58 + 180;

    at(emailDone, () => setHighlightTarget((value) => (value ? { ...value, visible: false } : value)));
    at(emailDone + 280, () => setCursorPos(onButton));
    at(emailDone + 660, () => setHighlightTarget({ rect: measureRect(browser, button), visible: true }));
    at(emailDone + 720, () => setCurrentStep(3));
    at(emailDone + 980, () => setClicking(true));
    at(emailDone + 1130, () => setClicking(false));
    at(emailDone + 1080, () => setHighlightTarget((value) => (value ? { ...value, visible: false } : value)));
    at(emailDone + 1280, () => setCurrentStep(4));
    at(emailDone + 1500, () => setCursorPos(neutral));
  }, []);

  useScenePlayback(playToken, reset, animate);

  const stepStates = [
    { number: '01', label: 'Add teammate name', state: currentStep > 1 ? 'done' : currentStep === 1 ? 'active' : 'idle' },
    { number: '02', label: 'Add work email', state: currentStep > 2 ? 'done' : currentStep === 2 ? 'active' : 'idle' },
    { number: '03', label: 'Send invite', state: currentStep > 3 ? 'done' : currentStep === 3 ? 'active' : 'idle' },
  ];
  const replayProgress = currentStep > 3 ? 100 : (Math.min(currentStep, 3) / 3) * 100;

  return (
    <div className={styles.dualPane}>
      <div className={styles.browser} ref={browserRef}>
        <StageChrome url="app.nari.ai/invite" />

        <div className={styles.browserPage}>
          <div className={styles.form}>
            <div className={styles.formIntro}>
              <div className={styles.formHeading}>Invite a teammate</div>
              <div className={styles.formSub}>Nari shows one next step at a time.</div>
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.inputLabel}>Name</div>
              <input ref={nameRef} className={styles.input} placeholder="Sarah Chen" value={typedName} readOnly />
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.inputLabel}>Work email</div>
              <input ref={emailRef} className={styles.input} placeholder="sarah@acme.io" value={typedEmail} readOnly />
            </div>
            <button ref={buttonRef} className={styles.button}>Send invite</button>
          </div>
        </div>

        {highlightTarget?.rect ? (
          <div
            className={joinClasses(styles.highlight, styles.highlightReplay)}
            style={{
              top: highlightTarget.rect.top,
              left: highlightTarget.rect.left,
              width: highlightTarget.rect.width,
              height: highlightTarget.rect.height,
              opacity: highlightTarget.visible ? 1 : 0,
            }}
          >
            <div className={joinClasses(styles.highlightLabel, styles.highlightLabelReplay)}>Do this next</div>
          </div>
        ) : null}

        <div className={styles.cursor} style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}>
          <div className={clicking ? styles.cursorInnerClicking : styles.cursorInner}>
            <CursorSvg />
          </div>
        </div>
      </div>

      <div className={styles.extension}>
        <PanelTopbar showBack />

        <div className={styles.panelBody}>
          <div className={styles.replayHeader}>
            <h3 className={styles.replayTitle}>Invite teammate</h3>
            <span className={styles.replayProgress}>{currentStep > 3 ? 'Done' : `${Math.min(currentStep, 3)} / 3`}</span>
            <div className={styles.replayProgressTrack}>
              <div className={styles.replayProgressFill} style={{ width: `${replayProgress}%` }} />
            </div>
          </div>

          {currentStep > 3 ? (
            <div className={styles.replayComplete}>
              <div className={styles.replayCompleteIcon}>
                <ReplayCheckIcon />
              </div>
              <p className={styles.replayCompleteTitle}>Done</p>
              <p className={styles.replayCompleteSub}>3 steps completed</p>
            </div>
          ) : (
            <div className={styles.replayList}>
              {stepStates.map((step) => (
                <div
                  key={step.number}
                  className={joinClasses(
                    styles.replayActionItem,
                    step.state === 'done' && styles.replayActionItemCompleted,
                    step.state === 'active' && styles.replayActionItemCurrent
                  )}
                >
                  <div className={styles.replayActionHeader}>
                    <span className={styles.replayStepNumber}>{step.number}</span>
                    <span className={styles.replayActionTitle}>{step.label}</span>
                  </div>
                  <span className={styles.replayActionMeta}>
                    {step.state === 'active' ? 'Next' : step.state === 'done' ? 'Done' : 'Queued'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// mode: 'drop' = PDF drop + analysis only, 'fill' = website filling only, 'full' = both
export function AgentScene({ playToken, mode = 'full' }) {
  const workspaceRef = useRef(null);
  const dropZoneRef = useRef(null);

  const [phase, setPhase] = useState(mode === 'fill' ? 'website' : 'nari');
  const [pdfVisible, setPdfVisible] = useState(false);
  const [pdfDropped, setPdfDropped] = useState(false);
  const [pdfPosition, setPdfPosition] = useState({ x: -160, y: 70 });
  const [analysisVisible, setAnalysisVisible] = useState(false);
  const [mappedVisible, setMappedVisible] = useState(false);
  const [agentCarets, setAgentCarets] = useState(false);
  const [typedFields, setTypedFields] = useState(EMPTY_AGENT_VALUES);
  const [fillPulse, setFillPulse] = useState(false);

  const reset = useCallback(() => {
    setPhase(mode === 'fill' ? 'website' : 'nari');
    setPdfVisible(false);
    setPdfDropped(false);
    setPdfPosition({ x: -160, y: 70 });
    setAnalysisVisible(false);
    setMappedVisible(false);
    setAgentCarets(false);
    setTypedFields(EMPTY_AGENT_VALUES);
    setFillPulse(false);
  }, [mode]);

  const animate = useCallback(({ clearScene, at }) => {
    clearScene();

    // ── Fill-only mode ────────────────────────────────────────────────
    if (mode === 'fill') {
      setPhase('website');
      setPdfVisible(false);
      setTypedFields(EMPTY_AGENT_VALUES);
      setAgentCarets(false);
      setFillPulse(false);

      at(280, () => setAgentCarets(true));
      const typeStart = 380;
      const typeSteps = 12;
      for (let step = 1; step <= typeSteps; step += 1) {
        at(typeStart + step * 72, () => {
          const progress = step / typeSteps;
          setTypedFields(
            Object.fromEntries(
              AGENT_FIELDS.map((field) => [
                field.label,
                field.value.slice(0, Math.max(1, Math.round(field.value.length * progress))),
              ])
            )
          );
        });
      }
      at(typeStart + typeSteps * 72 + 100, () => {
        setAgentCarets(false);
        setFillPulse(true);
      });
      at(typeStart + typeSteps * 72 + 650, () => setFillPulse(false));
      return;
    }

    // ── Drop (+ optionally fill) mode ─────────────────────────────────
    const browser = workspaceRef.current;
    const dropZone = dropZoneRef.current;
    if (!browser || !dropZone) return;

    const targetPoint = measurePoint(browser, dropZone);
    if (!targetPoint) return;

    const startPoint = { x: targetPoint.x - 58, y: -84 };
    const dropPoint = { x: targetPoint.x - 58, y: targetPoint.y - 20 };

    setPhase('nari');
    setPdfVisible(true);
    setPdfDropped(false);
    setAnalysisVisible(false);
    setMappedVisible(false);
    setAgentCarets(false);
    setTypedFields(EMPTY_AGENT_VALUES);
    setFillPulse(false);
    setPdfPosition(startPoint);

    at(260, () => setPdfPosition(dropPoint));
    at(900, () => setPdfDropped(true));
    at(980, () => setAnalysisVisible(true));
    at(1380, () => setPdfVisible(false));
    at(1700, () => {
      setAnalysisVisible(false);
      setMappedVisible(true);
    });

    if (mode === 'full') {
      at(2520, () => setPhase('website'));
      at(2800, () => setAgentCarets(true));
      const typeStart = 2900;
      const typeSteps = 12;
      for (let step = 1; step <= typeSteps; step += 1) {
        at(typeStart + step * 78, () => {
          const progress = step / typeSteps;
          setTypedFields(
            Object.fromEntries(
              AGENT_FIELDS.map((field) => [
                field.label,
                field.value.slice(0, Math.max(1, Math.round(field.value.length * progress))),
              ])
            )
          );
        });
      }
      at(typeStart + typeSteps * 78 + 120, () => { setAgentCarets(false); setFillPulse(true); });
      at(typeStart + typeSteps * 78 + 720, () => setFillPulse(false));
    }
  }, [mode]);

  useScenePlayback(playToken, reset, animate);

  return (
    <div className={styles.agentFullPane} ref={workspaceRef}>

      {/* ── Floating PDF icon dragged by cursor ─── */}
      {pdfVisible && (
        <div
          className={joinClasses(styles.agentFloatingPdf, pdfDropped && styles.agentFloatingPdfDropped)}
          style={{ transform: `translate(${pdfPosition.x}px, ${pdfPosition.y}px)` }}
        >
          <PdfFileIcon />
          <div className={styles.agentDragCursor}><CursorSvg /></div>
        </div>
      )}

      {/* ── Nari: drop + analysis ─────────────────── */}
      <div className={joinClasses(styles.agentPhasePanel, phase === 'nari' ? styles.agentPhasePanelVisible : styles.agentPhasePanelHidden)}>
        <div className={styles.agentCard}>
          <div className={styles.agentCardHead}>
            <span className={styles.agentCardEyebrow}>Nari Agent</span>
            <div className={styles.agentCardTitle}>Select documents</div>
          </div>

          <div
            ref={dropZoneRef}
            className={joinClasses(styles.agentDropZoneLarge, pdfDropped && styles.agentDropZoneLargeActive)}
          >
            {!pdfDropped ? (
              <span className={styles.agentDropHint}>Drop PDF here</span>
            ) : (
              <div
                className={joinClasses(
                  styles.agentAnalysisCard,
                  analysisVisible && styles.agentAnalysisCardActive,
                  mappedVisible && styles.agentAnalysisCardDone
                )}
              >
                {analysisVisible ? <div className={styles.agentScanLine} /> : null}
                <div
                  className={joinClasses(
                    styles.agentAnalysisRow,
                    (analysisVisible || mappedVisible) && styles.agentAnalysisRowVisible,
                    mappedVisible && styles.agentAnalysisRowDone
                  )}
                >
                  <span className={styles.agentAnalysisDot} />
                  <span>
                    {analysisVisible ? 'Analyzing PDF…' : mappedVisible ? 'Mapped 4 variables' : 'Processing…'}
                  </span>
                </div>
                <div className={joinClasses(styles.agentVariableList, mappedVisible && styles.agentVariableListVisible)}>
                  {AGENT_FIELDS.map((field) => (
                    <AgentVariableRow key={field.label} label={field.label} value={field.value} visible={mappedVisible} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Website: form fill ────────────────────── */}
      <div className={joinClasses(styles.agentPhasePanel, phase === 'website' ? styles.agentPhasePanelVisible : styles.agentPhasePanelHidden)}>
        <div className={styles.agentCard}>
          <div className={styles.agentCardHead}>
            <span className={styles.agentCardEyebrow}>Website · vendorhub.io</span>
            <div className={styles.agentCardTitle}>Vendor setup form</div>
          </div>
          <div className={styles.websiteFields}>
            {AGENT_FIELDS.map((field) => (
              <AgentFieldCard
                key={field.label}
                label={field.label}
                value={field.value}
                displayValue={typedFields[field.label] ?? ''}
                showCaret={agentCarets}
                pulse={fillPulse}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecordingDemo() {
  const [activeTab, setActiveTab] = useState('record');
  const [playToken, setPlayToken] = useState(0);

  const handleSelectTab = useCallback((tab) => {
    setActiveTab(tab);
    setPlayToken(0);
  }, []);

  const handlePlay = useCallback(() => {
    setPlayToken((value) => value + 1);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Preview studies</div>
        <p className={styles.summary}>
          One focused motion study at a time. Record captures actions, Replay guides the user, Agent first reads the document and then fills the website.
        </p>
      </div>

      <div className={styles.tabBar}>
        <TabButton active={activeTab === 'record'} label="Record" onClick={() => handleSelectTab('record')} />
        <TabButton active={activeTab === 'replay'} label="Replay" onClick={() => handleSelectTab('replay')} />
        <TabButton active={activeTab === 'agent'} label="Agent" onClick={() => handleSelectTab('agent')} />
      </div>

      <div className={styles.stage}>
        {activeTab === 'record' ? <RecordScene playToken={playToken} /> : null}
        {activeTab === 'replay' ? <ReplayScene playToken={playToken} /> : null}
        {activeTab === 'agent' ? <AgentScene playToken={playToken} /> : null}
      </div>

      <div className={styles.controlsBar}>
        <button type="button" className={styles.playButton} onClick={handlePlay}>
          Play current scene
        </button>
        <span className={styles.controlsHint}>Animation stays paused until you restart it.</span>
      </div>
    </div>
  );
}
