'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const TYPEWRITER_TEXTS = [
  "// 13,247 MEMBERS · 4 BRANCHES · 177 COUNTRIES · EST. 1989.",
  "// ADVANCING CIVIL ENGINEERING ACROSS INDIA",
  "// BUILDING THE FOUNDATION FOR TOMORROW"
];

export default function Hero() {
  const [parallaxPos, setParallaxPos] = useState({ x: 0, y: 0 });
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  // Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) * 0.03;
      const y = (e.clientY - innerHeight / 2) * 0.03;
      setParallaxPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 100;
    const currentString = TYPEWRITER_TEXTS[typewriterIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentString.length) {
        setCharIndex(prev => prev + 1);
        setTypewriterText(currentString.substring(0, charIndex + 1));
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(prev => prev - 1);
        setTypewriterText(currentString.substring(0, charIndex - 1));
      } else if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typewriterIndex]);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      {/* Decorative Elements */}
      <div className={`${styles.cadCircle} ${styles.circle1}`}></div>
      <div className={`${styles.cadCircle} ${styles.circle2}`}></div>
      
      <div className={styles.crosshair}>
        <div className={styles.crosshairH}></div>
        <div className={styles.crosshairV}></div>
      </div>

      {/* Content Container */}
      <div 
        className={styles.contentWrapper}
        style={{ transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0)` }}
      >
        <h1 className={styles.heroTitle}>
          ENGINEERING<br/>
          INDIA'S FUTURE
        </h1>
        
        <div className={styles.subtitleContainer}>
          <p className="text-hero-sub">
            {typewriterText}
            <span className={styles.cursor}>_</span>
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/membership" className="btn-primary">
            JOIN THE SECTION
          </Link>
          <Link href="/events" className="btn-secondary">
            EXPLORE EVENTS
          </Link>
        </div>
      </div>
    </section>
  );
}
