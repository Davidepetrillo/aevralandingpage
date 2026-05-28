/* 🕷️ SPIDER-MAN MODE — MAXIMUM CHAOS 🕷️ */
(function () {
  'use strict';

  /* ---- Corner web SVGs ---- */
  const WEB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">
    <defs>
      <radialGradient id="wg${Math.random().toString(36).slice(2)}" cx="0%" cy="0%" r="100%">
        <stop offset="0%"   stop-color="#FF3333" stop-opacity="0.85"/>
        <stop offset="45%"  stop-color="#CC0000" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#CC0000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <g stroke="#FF3333" stroke-linecap="round" fill="none">
      <line x1="0" y1="0" x2="320" y2="0"   stroke-opacity="0.7" stroke-width="1.3"/>
      <line x1="0" y1="0" x2="320" y2="55"  stroke-opacity="0.55" stroke-width="1.1"/>
      <line x1="0" y1="0" x2="320" y2="110" stroke-opacity="0.5"  stroke-width="1"/>
      <line x1="0" y1="0" x2="320" y2="175" stroke-opacity="0.45" stroke-width="0.9"/>
      <line x1="0" y1="0" x2="320" y2="240" stroke-opacity="0.38" stroke-width="0.8"/>
      <line x1="0" y1="0" x2="240" y2="320" stroke-opacity="0.38" stroke-width="0.8"/>
      <line x1="0" y1="0" x2="175" y2="320" stroke-opacity="0.45" stroke-width="0.9"/>
      <line x1="0" y1="0" x2="110" y2="320" stroke-opacity="0.5"  stroke-width="1"/>
      <line x1="0" y1="0" x2="55"  y2="320" stroke-opacity="0.55" stroke-width="1.1"/>
      <line x1="0" y1="0" x2="0"   y2="320" stroke-opacity="0.7"  stroke-width="1.3"/>
      <!-- Concentric arcs -->
      <path d="M 45,0  Q 22,22  0,45"  stroke-opacity="0.7" stroke-width="1.2"/>
      <path d="M 90,0  Q 45,45  0,90"  stroke-opacity="0.65" stroke-width="1.1"/>
      <path d="M 135,0 Q 67,67  0,135" stroke-opacity="0.6" stroke-width="1"/>
      <path d="M 180,0 Q 90,90  0,180" stroke-opacity="0.5" stroke-width="0.9"/>
      <path d="M 225,0 Q 112,112 0,225" stroke-opacity="0.42" stroke-width="0.8"/>
      <path d="M 270,0 Q 135,135 0,270" stroke-opacity="0.35" stroke-width="0.7"/>
      <path d="M 315,0 Q 157,157 0,315" stroke-opacity="0.28" stroke-width="0.6"/>
      <!-- Detail connectors -->
      <path d="M 67,0  Q 33,33  0,67"  stroke-opacity="0.4" stroke-width="0.55" stroke-dasharray="2,5"/>
      <path d="M 112,0 Q 56,56  0,112" stroke-opacity="0.38" stroke-width="0.55" stroke-dasharray="2,5"/>
      <path d="M 157,0 Q 78,78  0,157" stroke-opacity="0.35" stroke-width="0.5" stroke-dasharray="2,5"/>
      <path d="M 202,0 Q 101,101 0,202" stroke-opacity="0.3" stroke-width="0.5" stroke-dasharray="2,5"/>
      <path d="M 247,0 Q 123,123 0,247" stroke-opacity="0.25" stroke-width="0.45" stroke-dasharray="2,5"/>
    </g>
  </svg>`;

  const corners = [
    { cls: 'tl', style: 'top:0;left:0;' },
    { cls: 'tr', style: 'top:0;right:0;transform:scaleX(-1);transform-origin:right top;' },
    { cls: 'bl', style: 'bottom:0;left:0;transform:scaleY(-1);transform-origin:left bottom;' },
    { cls: 'br', style: 'bottom:0;right:0;transform:scale(-1,-1);transform-origin:right bottom;' },
  ];

  corners.forEach(c => {
    const el = document.createElement('div');
    el.className = `spidey-web-corner spidey-web-corner--${c.cls}`;
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = `position:fixed;pointer-events:none;z-index:110;${c.style}`;
    el.innerHTML = WEB_SVG;
    document.body.appendChild(el);
  });

  /* ---- Hero web overlay ---- */
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    const overlay = document.createElement('div');
    overlay.className = 'spidey-hero-web-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    heroEl.appendChild(overlay);
  }

  /* ---- Side badge ---- */
  const badge = document.createElement('div');
  badge.className = 'spidey-side-badge';
  badge.setAttribute('aria-hidden', 'true');
  badge.textContent = '🕷️ WITH GREAT POWER 🕷️';
  document.body.appendChild(badge);

  /* ============================================
     CANVAS: Floating web threads
  ============================================ */
  const threadCanvas = document.createElement('canvas');
  threadCanvas.id = 'spidey-thread-canvas';
  threadCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:88;';
  document.body.appendChild(threadCanvas);
  const tCtx = threadCanvas.getContext('2d');

  function resizeThreadCanvas() {
    threadCanvas.width  = window.innerWidth;
    threadCanvas.height = window.innerHeight;
  }
  resizeThreadCanvas();
  window.addEventListener('resize', resizeThreadCanvas);

  const threads = [];
  let lastThread = 0;

  function makeThread() {
    const edge = Math.floor(Math.random() * 4);
    let x, y, vx, vy;
    const W = threadCanvas.width, H = threadCanvas.height;
    const spd = 1.2 + Math.random() * 2.5;
    if (edge === 0) { x = Math.random() * W; y = -5;  vx = (Math.random()-.5)*2; vy = spd; }
    else if (edge===1){ x = W+5; y = Math.random()*H;   vx = -spd; vy = (Math.random()-.5)*2; }
    else if (edge===2){ x = Math.random()*W; y = H+5;  vx = (Math.random()-.5)*2; vy = -spd; }
    else               { x = -5; y = Math.random()*H;   vx = spd; vy = (Math.random()-.5)*2; }

    threads.push({
      x, y, vx, vy,
      pts: [],
      op: 0.2 + Math.random() * 0.45,
      lw: 0.4 + Math.random() * 1.4,
      life: 0,
      max: 90 + Math.floor(Math.random() * 130),
      col: Math.random() > 0.25 ? '#CC0000' : '#FFD700',
      sway: (Math.random() - 0.5) * 0.08,
      grav: 0.03 + Math.random() * 0.04,
    });
  }

  function tickThreads(ts) {
    tCtx.clearRect(0, 0, threadCanvas.width, threadCanvas.height);

    if (ts - lastThread > 900) { makeThread(); lastThread = ts; }

    for (let i = threads.length - 1; i >= 0; i--) {
      const t = threads[i];
      t.life++;
      t.vx += t.sway;
      t.vy += t.grav;
      t.x  += t.vx;
      t.y  += t.vy;
      t.pts.push({ x: t.x, y: t.y });
      if (t.pts.length > 35) t.pts.shift();

      const fade = t.life < 25 ? t.life / 25
                 : t.life > t.max - 25 ? (t.max - t.life) / 25
                 : 1;

      if (t.pts.length > 2) {
        tCtx.beginPath();
        tCtx.moveTo(t.pts[0].x, t.pts[0].y);
        for (let j = 1; j < t.pts.length; j++) tCtx.lineTo(t.pts[j].x, t.pts[j].y);
        tCtx.strokeStyle = t.col;
        tCtx.globalAlpha = t.op * fade;
        tCtx.lineWidth   = t.lw;
        tCtx.stroke();
        tCtx.globalAlpha = 1;
      }

      const W = threadCanvas.width, H = threadCanvas.height;
      if (t.life >= t.max || t.x < -150 || t.x > W+150 || t.y < -150 || t.y > H+150) {
        threads.splice(i, 1);
      }
    }

    requestAnimationFrame(tickThreads);
  }
  requestAnimationFrame(tickThreads);

  /* ============================================
     CANVAS: Web-crack effect on click
  ============================================ */
  const crackCanvas = document.createElement('canvas');
  crackCanvas.id = 'spidey-crack-canvas';
  crackCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99998;';
  document.body.appendChild(crackCanvas);
  const cCtx = crackCanvas.getContext('2d');

  function resizeCrackCanvas() {
    crackCanvas.width  = window.innerWidth;
    crackCanvas.height = window.innerHeight;
  }
  resizeCrackCanvas();
  window.addEventListener('resize', resizeCrackCanvas);

  const cracks = [];

  function spawnCrack(x, y) {
    const numArms = 7 + Math.floor(Math.random() * 6);
    const arms = [];
    for (let i = 0; i < numArms; i++) {
      const baseAngle = (i / numArms) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const totalLen  = 28 + Math.random() * 75;
      const segs = [];
      let cx = 0, cy = 0, a = baseAngle;
      const nSeg = 2 + Math.floor(Math.random() * 4);
      for (let s = 0; s < nSeg; s++) {
        const len = totalLen / nSeg * (0.7 + Math.random() * 0.6);
        a += (Math.random() - 0.5) * 0.55;
        const nx = cx + Math.cos(a) * len;
        const ny = cy + Math.sin(a) * len;
        segs.push({ x1: cx, y1: cy, x2: nx, y2: ny });
        cx = nx; cy = ny;
      }
      arms.push(segs);
    }
    cracks.push({ x, y, arms, op: 1, fade: 0.018 + Math.random() * 0.012 });
  }

  function tickCracks() {
    cCtx.clearRect(0, 0, crackCanvas.width, crackCanvas.height);
    for (let i = cracks.length - 1; i >= 0; i--) {
      const c = cracks[i];
      c.op -= c.fade;
      if (c.op <= 0) { cracks.splice(i, 1); continue; }
      cCtx.globalAlpha  = c.op;
      cCtx.strokeStyle  = '#FF3333';
      cCtx.shadowColor  = '#FF0000';
      cCtx.shadowBlur   = 8;
      cCtx.lineWidth    = 1.5;
      for (const arm of c.arms) {
        for (const s of arm) {
          cCtx.beginPath();
          cCtx.moveTo(c.x + s.x1, c.y + s.y1);
          cCtx.lineTo(c.x + s.x2, c.y + s.y2);
          cCtx.stroke();
        }
      }
      cCtx.shadowBlur  = 0;
      cCtx.globalAlpha = 1;
    }
    requestAnimationFrame(tickCracks);
  }
  requestAnimationFrame(tickCracks);

  /* ============================================
     THWIP / POW text
  ============================================ */
  const WORDS = ['THWIP!', 'WHOOSH!', 'POW!', 'SNAP!', 'ZWOOSH!', 'WEB-UP!', 'SPIDEY!', '🕷️', 'THWACK!', 'SWOOSH!'];

  function spawnThwip(x, y) {
    if (Math.random() > 0.45) return;
    const el = document.createElement('div');
    el.className = 'spidey-thwip';
    el.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
    el.style.left = (x + (Math.random() - 0.5) * 80 - 20) + 'px';
    el.style.top  = (y - 40 + (Math.random() - 0.5) * 40) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 950);
  }

  /* ============================================
     Spider-sense ring burst
  ============================================ */
  function spawnSenseRing(x, y) {
    const ring = document.createElement('div');
    ring.className = 'spidey-sense-ring';
    ring.style.left = x + 'px';
    ring.style.top  = y + 'px';
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 700);
  }

  /* ============================================
     Click handler
  ============================================ */
  document.addEventListener('click', e => {
    spawnCrack(e.clientX, e.clientY);
    spawnThwip(e.clientX, e.clientY);
    spawnSenseRing(e.clientX, e.clientY);
  });

  /* Extra web bursts on CTA buttons */
  document.querySelectorAll('.hero-demo-link, .btn-primary, .closing-form__submit').forEach(btn => {
    btn.addEventListener('click', e => {
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          spawnCrack(e.clientX + (Math.random()-0.5)*50, e.clientY + (Math.random()-0.5)*50);
        }, i * 70);
      }
      // Force thwip
      const el = document.createElement('div');
      el.className = 'spidey-thwip';
      el.textContent = 'THWIP!';
      el.style.left = e.clientX + 'px';
      el.style.top  = (e.clientY - 60) + 'px';
      el.style.fontSize = '3.5rem';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 950);
    });
  });

  /* ============================================
     Mouse trail
  ============================================ */
  let trailThrottle = false;
  document.addEventListener('mousemove', e => {
    if (trailThrottle) return;
    trailThrottle = true;
    setTimeout(() => { trailThrottle = false; }, 35);
    const dot = document.createElement('div');
    dot.className = 'spidey-trail-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 500);
  });

  /* ============================================
     Spider crawler
  ============================================ */
  const crawler = document.createElement('div');
  crawler.className = 'spidey-crawler';
  crawler.innerHTML = '🕷️';
  crawler.setAttribute('aria-hidden', 'true');
  document.body.appendChild(crawler);

  let sX = 60, sY = 200, sDX = 1.8, sDY = 1.1, sRot = 0;

  function moveCrawler() {
    sX  += sDX;
    sY  += sDY;
    sRot += 4;

    if (sX > window.innerWidth  - 32) { sX = window.innerWidth  - 32; sDX = -Math.abs(sDX); }
    if (sX < 0)                        { sX = 0;                        sDX =  Math.abs(sDX); }
    if (sY > window.innerHeight - 32) { sY = window.innerHeight - 32; sDY = -Math.abs(sDY); }
    if (sY < 0)                        { sY = 0;                        sDY =  Math.abs(sDY); }

    if (Math.random() < 0.008) sDX = (Math.random() - 0.5) * 4;
    if (Math.random() < 0.008) sDY = (Math.random() - 0.5) * 4;
    sDX = Math.sign(sDX) * Math.max(0.6, Math.min(3, Math.abs(sDX)));
    sDY = Math.sign(sDY) * Math.max(0.6, Math.min(3, Math.abs(sDY)));

    crawler.style.left      = sX + 'px';
    crawler.style.top       = sY + 'px';
    crawler.style.transform = `rotate(${sRot}deg)`;
    requestAnimationFrame(moveCrawler);
  }
  moveCrawler();

  /* ============================================
     Periodic red glow bursts in background
  ============================================ */
  setInterval(() => {
    const burst = document.createElement('div');
    const bx = Math.random() * window.innerWidth;
    const by = Math.random() * window.innerHeight;
    burst.style.cssText = `
      position:fixed;left:${bx}px;top:${by}px;
      width:4px;height:4px;border-radius:50%;
      background:rgba(200,0,0,0.5);
      pointer-events:none;z-index:85;
      transform:translate(-50%,-50%);
    `;
    document.body.appendChild(burst);
    let sz = 4, op = 0.5;
    const expand = setInterval(() => {
      sz += 12; op -= 0.055;
      burst.style.width  = sz + 'px';
      burst.style.height = sz + 'px';
      burst.style.opacity = op;
      burst.style.boxShadow = `0 0 ${sz/2}px rgba(200,0,0,${op * 0.6})`;
      if (op <= 0) { clearInterval(expand); burst.remove(); }
    }, 28);
  }, 2800);

  /* ============================================
     Hero heading spider-sense wiggle
  ============================================ */
  const heroH = document.querySelector('.hero-heading');
  if (heroH) {
    setInterval(() => {
      if (Math.random() < 0.2) {
        heroH.style.transition = 'transform 0.08s, text-shadow 0.08s';
        heroH.style.transform  = `skewX(${(Math.random()-0.5)*2}deg)`;
        heroH.style.textShadow = `${Math.random()*6-3}px 0 22px rgba(255,0,0,0.7), ${Math.random()*6-3}px 0 22px rgba(255,0,0,0.5)`;
        setTimeout(() => {
          heroH.style.transform  = '';
          heroH.style.textShadow = '';
        }, 220);
      }
    }, 2400);
  }

  /* ============================================
     Intro THWIP burst on page load
  ============================================ */
  window.addEventListener('load', () => {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'spidey-thwip';
      el.textContent = '🕷️ SPIDER-MAN MODE: ACTIVATED 🕷️';
      el.style.cssText += `
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1.5) !important;
        font-size: 2rem;
        text-align: center;
        width: max-content;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }, 800);
  });

  /* ---- Console easter egg ---- */
  console.log('%c🕷️  SPIDER-MAN MODE ACTIVATED  🕷️', 'color:#FF3333;font-size:22px;font-weight:bold;text-shadow:2px 2px 4px #000;');
  console.log('%cWith great power comes great responsibility.', 'color:#FFD700;font-size:13px;font-style:italic;');
})();
