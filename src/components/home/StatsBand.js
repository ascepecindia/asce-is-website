'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './StatsBand.module.css';

/* ── Icon SVGs ─────────────────────────────────────────────── */
const icons = {
  members: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  branches: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  years: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <rect x="8" y="14" width="3" height="3" rx="0.5" />
    </svg>
  ),
};

/* ── Stats data ────────────────────────────────────────────── */
const STATS = [
  { target: 13247, label: 'Members', prefix: '', suffix: '+', icon: 'members' },
  { target: 4, label: 'Regional Branches', prefix: '', suffix: '', icon: 'branches' },
  { target: 36, label: 'Years Active', prefix: '', suffix: '+', icon: 'years' },
  { target: 200, label: 'Annual Events', prefix: '', suffix: '+', icon: 'events' },
];

/* ── Easing ────────────────────────────────────────────────── */
const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);

/* ── Single Counter ────────────────────────────────────────── */
function Counter({ target, label, prefix, suffix, icon, delay }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  /* Intersection Observer — trigger counting once in view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounting && count === 0) {
          /* Staggered reveal: delay each stat */
          setTimeout(() => {
            setIsVisible(true);
            setIsCounting(true);
          }, delay);
        }
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [count, isCounting, delay]);

  /* rAF counter animation */
  useEffect(() => {
    if (!isCounting) return;

    let startTime = null;
    const duration = 2200;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const percentage = progress / duration;
        setCount(Math.floor(target * easeOutQuint(percentage)));
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
        setIsCounting(false);
        setHasFinished(true);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isCounting, target]);

  return (
    <div
      className={`${styles.statBox} ${isVisible ? styles.statBoxVisible : ''}`}
      ref={elementRef}
    >
      {/* Icon with glow ring */}
      <div
        className={`${styles.iconWrap} ${isCounting ? styles.iconGlow : ''} ${hasFinished ? styles.iconSettled : ''}`}
      >
        {icons[icon]}
      </div>

      {/* Number */}
      <div className={styles.number}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>

      {/* Label */}
      <div className={styles.label}>{label}</div>

      {/* Animated gradient underline */}
      <div
        className={`${styles.underline} ${isVisible ? styles.underlineActive : ''}`}
      />
    </div>
  );
}

/* ── StatsBand ─────────────────────────────────────────────── */
export default function StatsBand() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.statsRow}`}>
        {STATS.map((stat, index) => (
          <div key={index} className={styles.statCol}>
            <Counter {...stat} delay={index * 120} />
            {index < STATS.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
}
