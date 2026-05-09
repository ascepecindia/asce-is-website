'use client';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated mesh background */}
      <div className={styles.meshBg}></div>
      {/* Grid pattern overlay */}
      <div className={styles.gridPattern}></div>
      {/* Radial glow accent */}
      <div className={styles.glowAccent}></div>
      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${15 + i * 15}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + i * 1.5}s`,
          }}></div>
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Est. 1989 — Advancing Civil Engineering
          </div>
          <h1 className={styles.title}>
            Engineering India's Future, Together.
          </h1>
          <p className={styles.subtitle}>
            The India Section of ASCE — advancing civil engineering practice, education, and research across 4 regional branches and 47 student chapters.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/events" className="btn-hero-primary">
              Explore Events
            </Link>
            <Link href="/membership" className="btn-hero-secondary">
              Join ASCE
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className={styles.bottomFade}></div>
    </section>
  );
}
