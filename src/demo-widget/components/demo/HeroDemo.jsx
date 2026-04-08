import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { RecordScene, ReplayScene, AgentScene, HERO_SCENE_PLAYBACK_SECONDS } from './RecordingDemo';
import styles from './HeroDemo.module.scss';

const SCENES = [
  {
    eyebrow: 'Chrome Extension',
    lines: ['Record anything', 'on the web'],
    body: ['Capture any workflow in one click.', 'Share knowledge with your team.'],
    bgColor: '#f6efe6',
    hold: 4.2,
  },
  {
    eyebrow: 'Workflow Guides',
    lines: ['Visual guides.', '30h saved per employee'],
    body: ['Every recording becomes a', 'step-by-step guide instantly.'],
    bgColor: '#edf1f4',
    flip: true,
    hold: 4.2,
  },
  {
    eyebrow: 'AI Agent',
    lines: ['Agent extracts', 'context.'],
    body: ['AI autofills every input from the context.', 'The workflow can be executed in seconds.'],
    bgColor: '#e2e5ea',
    hold: 8.0,
  },
];

const SCENE_BACKDROPS = [
  {
    glowA: 'rgba(227, 195, 152, 0.32)',
    glowB: 'rgba(255, 255, 255, 0.28)',
    grid: 'rgba(24, 28, 34, 0.06)',
    beam: 'rgba(255, 255, 255, 0.44)',
  },
  {
    glowA: 'rgba(170, 192, 216, 0.28)',
    glowB: 'rgba(214, 220, 228, 0.22)',
    grid: 'rgba(24, 28, 34, 0.055)',
    beam: 'rgba(255, 255, 255, 0.36)',
  },
  {
    glowA: 'rgba(168, 175, 184, 0.24)',
    glowB: 'rgba(205, 210, 217, 0.2)',
    grid: 'rgba(24, 28, 34, 0.05)',
    beam: 'rgba(255, 255, 255, 0.3)',
  },
];

const SCENE_GAP = 0.5;
const TRANSITION_OVERLAP_SECONDS = 0.79;

export function HeroDemo() {
  const [tokens, setTokens] = useState([1, 0, 0]);
  const heroRef = useRef(null);
  const sceneRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const hero = heroRef.current;
    const els = sceneRefs.map(r => r.current);

    gsap.set(hero, { backgroundColor: SCENES[0].bgColor });
    gsap.set(els, { opacity: 0, x: 0, scale: 1, filter: 'blur(0px)' });
    gsap.set(els[0], { opacity: 1 });

    const initTexts = els[0].querySelectorAll('[data-anim]');
    gsap.fromTo(initTexts,
      { opacity: 0, y: 22, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, ease: 'power3.out', delay: 0.3 },
    );

    const tl = gsap.timeline({ repeat: -1 });

    function slide(fromIdx, toIdx, runtimeSeconds) {
      const from  = els[fromIdx];
      const to    = els[toIdx];
      const fromT = from.querySelectorAll('[data-anim]');
      const toT   = to.querySelectorAll('[data-anim]');
      const runtime = Math.max(runtimeSeconds, 0);
      const linger = { value: 0 };

      tl
        .to(linger, {
          value: 1,
          duration: runtime,
          ease: 'none',
        })
        .to(linger, {
          value: 2,
          duration: SCENE_GAP,
          ease: 'none',
        })
        // ── Exit texts
        .to(fromT, {
          opacity: 0, y: -18, scale: 0.94,
          duration: 0.22, stagger: 0.05, ease: 'power3.in',
        })
        // ── Exit scene + background morph
        .to(from, {
          x: -80, opacity: 0, scale: 0.91, filter: 'blur(10px)',
          duration: 0.42, ease: 'power2.in',
        }, '<+0.04')
        .to(hero, {
          backgroundColor: SCENES[toIdx].bgColor,
          duration: 0.55, ease: 'power2.inOut',
        }, '<+0.08')
        // ── Prep next scene
        .set(to,  { x: 90, opacity: 0, scale: 1.08, filter: 'blur(10px)' })
        .set(toT, { opacity: 0, y: 24, scale: 0.95 })
        // ── Trigger scene animation
        .call(() => setTokens(t => { const n = [...t]; n[toIdx] += 1; return n; }))
        // ── Enter scene
        .to(to, {
          x: 0, opacity: 1, scale: 1, filter: 'blur(0px)',
          duration: 0.46, ease: 'power2.out',
        })
        // ── Enter texts
        .to(toT, {
          opacity: 1, y: 0, scale: 1,
          duration: 0.55, stagger: 0.09, ease: 'power3.out',
        }, '<+0.06');
    }

    slide(0, 1, HERO_SCENE_PLAYBACK_SECONDS[0]);
    slide(1, 2, HERO_SCENE_PLAYBACK_SECONDS[1] - TRANSITION_OVERLAP_SECONDS);
    slide(2, 0, HERO_SCENE_PLAYBACK_SECONDS[2] - TRANSITION_OVERLAP_SECONDS);

    return () => tl.kill();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={heroRef} className={styles.hero}>
      <div className={styles.orb} />
      <div className={styles.orb} />
      <div className={styles.orb} />

      {SCENES.map((scene, i) => (
        <div
          key={i}
          ref={sceneRefs[i]}
          className={`${styles.scene} ${scene.flip ? styles.sceneFlip : ''}`}
        >
          <div
            className={styles.sceneBackdrop}
            style={{
              '--scene-bg': scene.bgColor,
              '--scene-glow-a': SCENE_BACKDROPS[i].glowA,
              '--scene-glow-b': SCENE_BACKDROPS[i].glowB,
              '--scene-grid': SCENE_BACKDROPS[i].grid,
              '--scene-beam': SCENE_BACKDROPS[i].beam,
            }}
          />

          {/* ── Text block */}
          <div className={styles.text}>
            <p className={styles.eyebrow} data-anim="">{scene.eyebrow}</p>
            <h2 className={styles.h2} data-anim="">
              {scene.lines.map((line, j) => (
                <span key={j} className={styles.line}>{line}</span>
              ))}
            </h2>
            <p className={styles.body} data-anim="">
              {scene.body.map((line, j) => (
                <span key={j} className={styles.bodyLine}>{line}</span>
              ))}
            </p>
          </div>

          {/* ── Demo block */}
          <div className={styles.demo}>
            {i === 0 && <RecordScene playToken={tokens[0]} />}
            {i === 1 && <ReplayScene playToken={tokens[1]} />}
            {i === 2 && <AgentScene  playToken={tokens[2]} mode="full" />}
          </div>
        </div>
      ))}
    </div>
  );
}
