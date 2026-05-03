'use client';
import { useState, useEffect } from 'react';
import styles from './EventHero.module.css';

export default function EventHero() {
  const [timeLeft, setTimeLeft] = useState({ days: '03', hrs: '12', mins: '44', secs: '09' });

  useEffect(() => {
    const timer = setInterval(() => {
      // Basic timer decrement logic
      setTimeLeft(prev => {
        let s = parseInt(prev.secs) - 1;
        if (s < 0) s = 59;
        return { ...prev, secs: s < 10 ? `0${s}` : `${s}` };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.info}>
            <div className={styles.tag}>// FEATURED_EVENT</div>
            <h1 className={styles.title}>ANNUAL SECTION SUMMIT 2024</h1>
            <div className={styles.meta}>SEPTEMBER 12-14 &middot; NEW DELHI &middot; HYBRID</div>
            <div className={styles.counter}>
               <span className={styles.dot}></span> 182 ENGINEERS REGISTERED
            </div>
          </div>
          
          <div className={styles.countdown}>
            {Object.entries(timeLeft).map(([unit, val]) => (
              <div key={unit} className={styles.unitCard}>
                <div className={styles.val}>{val}</div>
                <div className={styles.label}>{unit.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
