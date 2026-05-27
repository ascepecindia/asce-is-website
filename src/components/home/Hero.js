'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

// ─── Inline SVG engineering shapes ─────────────────────────────
const EngineeringSVGs = {
  truss: (
    <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 40L40 0L80 40" stroke="currentColor" strokeWidth="1" />
      <path d="M0 40H80" stroke="currentColor" strokeWidth="1" />
      <path d="M20 40L40 0L60 40" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  ),
  beam: (
    <svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="8" width="60" height="14" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="15" x2="60" y2="15" stroke="currentColor" strokeWidth="0.5" />
      <line x1="10" y1="8" x2="10" y2="22" stroke="currentColor" strokeWidth="0.5" />
      <line x1="20" y1="8" x2="20" y2="22" stroke="currentColor" strokeWidth="0.5" />
      <line x1="30" y1="8" x2="30" y2="22" stroke="currentColor" strokeWidth="0.5" />
      <line x1="40" y1="8" x2="40" y2="22" stroke="currentColor" strokeWidth="0.5" />
      <line x1="50" y1="8" x2="50" y2="22" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),
  bridge: (
    <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 35C25 10 75 10 100 35" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="35" x2="100" y2="35" stroke="currentColor" strokeWidth="1" />
      <line x1="15" y1="35" x2="15" y2="22" stroke="currentColor" strokeWidth="0.5" />
      <line x1="30" y1="35" x2="30" y2="14" stroke="currentColor" strokeWidth="0.5" />
      <line x1="50" y1="35" x2="50" y2="11" stroke="currentColor" strokeWidth="0.5" />
      <line x1="70" y1="35" x2="70" y2="14" stroke="currentColor" strokeWidth="0.5" />
      <line x1="85" y1="35" x2="85" y2="22" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),
  column: (
    <svg viewBox="0 0 30 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="20" height="54" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="8" x2="30" y2="8" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="62" x2="30" y2="62" stroke="currentColor" strokeWidth="1.2" />
      <line x1="5" y1="22" x2="25" y2="22" stroke="currentColor" strokeWidth="0.4" />
      <line x1="5" y1="36" x2="25" y2="36" stroke="currentColor" strokeWidth="0.4" />
      <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  ),
  iBeam: (
    <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="5" x2="35" y2="5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="5" y1="45" x2="35" y2="45" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="5" x2="20" y2="45" stroke="currentColor" strokeWidth="1.2" />
      <line x1="14" y1="5" x2="14" y2="10" stroke="currentColor" strokeWidth="0.5" />
      <line x1="26" y1="5" x2="26" y2="10" stroke="currentColor" strokeWidth="0.5" />
      <line x1="14" y1="40" x2="14" y2="45" stroke="currentColor" strokeWidth="0.5" />
      <line x1="26" y1="40" x2="26" y2="45" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),
  archBridge: (
    <svg viewBox="0 0 90 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 40Q45 0 85 40" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="0" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="1.2" />
      <line x1="25" y1="40" x2="25" y2="25" stroke="currentColor" strokeWidth="0.5" />
      <line x1="45" y1="40" x2="45" y2="12" stroke="currentColor" strokeWidth="0.5" />
      <line x1="65" y1="40" x2="65" y2="25" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),
  cableStay: (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="8" x2="10" y2="50" stroke="currentColor" strokeWidth="0.4" />
      <line x1="50" y1="8" x2="90" y2="50" stroke="currentColor" strokeWidth="0.4" />
      <line x1="50" y1="18" x2="20" y2="50" stroke="currentColor" strokeWidth="0.4" />
      <line x1="50" y1="18" x2="80" y2="50" stroke="currentColor" strokeWidth="0.4" />
      <line x1="50" y1="28" x2="30" y2="50" stroke="currentColor" strokeWidth="0.4" />
      <line x1="50" y1="28" x2="70" y2="50" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  ),
  crossSection: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="0.5" />
      <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="0.4" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  ),
};

// ─── Deterministic float configs (avoid hydration mismatch) ────
const FLOAT_ELEMENTS = [
  { shape: 'truss',       left: '5%',  size: 70,  depth: 'far',  delay: 0,  duration: 28 },
  { shape: 'bridge',      left: '85%', size: 90,  depth: 'far',  delay: 4,  duration: 32 },
  { shape: 'beam',        left: '20%', size: 55,  depth: 'mid',  delay: 2,  duration: 24 },
  { shape: 'column',      left: '70%', size: 45,  depth: 'mid',  delay: 6,  duration: 26 },
  { shape: 'iBeam',       left: '40%', size: 40,  depth: 'near', delay: 1,  duration: 22 },
  { shape: 'archBridge',  left: '55%', size: 80,  depth: 'far',  delay: 8,  duration: 30 },
  { shape: 'cableStay',   left: '15%', size: 85,  depth: 'mid',  delay: 5,  duration: 27 },
  { shape: 'crossSection', left: '90%', size: 35,  depth: 'near', delay: 3,  duration: 20 },
  { shape: 'truss',       left: '60%', size: 50,  depth: 'far',  delay: 10, duration: 34 },
  { shape: 'bridge',      left: '30%', size: 65,  depth: 'mid',  delay: 7,  duration: 25 },
  { shape: 'column',      left: '78%', size: 38,  depth: 'near', delay: 9,  duration: 21 },
  { shape: 'beam',        left: '48%', size: 50,  depth: 'far',  delay: 12, duration: 29 },
];

// ─── Deterministic particle configs ────────────────────────────
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  left: `${4 + (i * 4.1) % 92}%`,
  size: 2 + (i % 3),
  delay: (i * 0.8) % 12,
  duration: 7 + (i % 5) * 2,
  opacity: 0.3 + (i % 4) * 0.15,
  drift: ((i % 2 === 0 ? 1 : -1) * (10 + (i % 6) * 5)),
  color: i % 5 === 0
    ? 'rgba(52, 211, 153, 0.7)'
    : i % 7 === 0
      ? 'rgba(96, 165, 250, 0.7)'
      : 'rgba(255, 255, 255, 0.6)',
}));

const HEADLINE = "Engineering India's Future, Together.";

const STATS = [
  { number: '13,000+', label: 'Members' },
  { number: '47', label: 'Student Chapters' },
  { number: '4', label: 'Regional Branches' },
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const typingStartedRef = useRef(false);

  // ─── Intersection Observer for viewport entry ────────────────
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ─── Type-on animation via requestAnimationFrame ─────────────
  useEffect(() => {
    if (!isVisible || typingStartedRef.current) return;
    typingStartedRef.current = true;

    let charIndex = 0;
    let lastTime = 0;
    const typeSpeed = 45; // ms per character

    const tick = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      if (elapsed >= typeSpeed) {
        charIndex++;
        setDisplayedText(HEADLINE.slice(0, charIndex));
        lastTime = timestamp;
      }

      if (charIndex < HEADLINE.length) {
        requestAnimationFrame(tick);
      } else {
        setTypingDone(true);
      }
    };

    // Small initial delay for dramatic effect
    const timeout = setTimeout(() => {
      requestAnimationFrame(tick);
    }, 600);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  // Memoize the opacity map for depth layers
  const depthOpacity = useMemo(() => ({
    far: 0.04,
    mid: 0.07,
    near: 0.12,
  }), []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Layer 0 — Animated Blueprint Grid */}
      <div className={styles.blueprintGrid} />

      {/* Layer 1 — Mesh Radial Glow */}
      <div className={styles.meshGlow} />

      {/* Layer 2 — Floating Engineering Elements */}
      <div className={styles.floatingElements}>
        {FLOAT_ELEMENTS.map((el, i) => (
          <div
            key={`eng-${i}`}
            className={styles.engElement}
            data-depth={el.depth}
            style={{
              left: el.left,
              bottom: '-120px',
              width: `${el.size}px`,
              height: `${el.size}px`,
              color: 'rgba(255, 255, 255, 0.9)',
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
              '--elem-opacity': depthOpacity[el.depth],
            }}
          >
            {EngineeringSVGs[el.shape]}
          </div>
        ))}
      </div>

      {/* Layer 3 — Particle Field */}
      <div className={styles.particleField}>
        {PARTICLES.map((p, i) => (
          <div
            key={`p-${i}`}
            className={styles.particle}
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--spark-opacity': p.opacity,
              '--spark-drift': `${p.drift}px`,
            }}
          />
        ))}
      </div>

      {/* Layer 4 — Ambient Light Sweep */}
      <div className={styles.lightSweep} />

      {/* Layer 10 — Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          {/* Status Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Est. 1989 — Advancing Civil Engineering
          </div>

          {/* Typewriter Headline */}
          <h1 className={styles.title}>
            {displayedText}
            <span
              className={`${styles.cursor} ${typingDone ? styles.cursorHidden : ''}`}
              aria-hidden="true"
            />
          </h1>

          {/* Subtitle — fades in after typing */}
          <p
            className={`${styles.subtitle} ${typingDone ? styles.subtitleVisible : ''}`}
          >
            The India Section of ASCE — advancing civil engineering practice,
            education, and research across 4 regional branches and 47 student chapters.
          </p>

          {/* CTA Buttons — stagger slide up */}
          <div className={styles.ctaGroup}>
            <div
              className={`${styles.ctaBtn} ${typingDone ? styles.ctaBtnVisible : ''}`}
              style={{ transitionDelay: typingDone ? '0.15s' : '0s' }}
            >
              <Link href="/events" className="btn-hero-primary">
                Explore Events
              </Link>
            </div>
            <div
              className={`${styles.ctaBtn} ${typingDone ? styles.ctaBtnVisible : ''}`}
              style={{ transitionDelay: typingDone ? '0.35s' : '0s' }}
            >
              <a
                href="https://sp360.asce.org/personifyebusiness/Membership/Join-ASCE/MembershipJoinRegistration"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                Join ASCE
              </a>
            </div>
          </div>

          {/* Stat highlights */}
          <div
            className={`${styles.statsRow} ${typingDone ? styles.statsRowVisible : ''}`}
          >
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollChevron}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Bottom Fade to White */}
      <div className={styles.bottomFade} />
    </section>
  );
}
