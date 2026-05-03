'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './StatsBand.module.css';

const STATS = [
  { target: 13247, label: "MEMBERS", prefix: "", suffix: "+" },
  { target: 4, label: "REGIONAL BRANCHES", prefix: "", suffix: "" },
  { target: 36, label: "YEARS ACTIVE", prefix: "", suffix: "+" },
  { target: 200, label: "ANNUAL EVENTS", prefix: "", suffix: "+" }
];

const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);

function Counter({ target, label, prefix, suffix }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounting && count === 0) {
          setIsCounting(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [count, isCounting]);

  useEffect(() => {
    if (!isCounting) return;

    let startTime = null;
    const duration = 2200; // 2.2 seconds
    const overshoot = target > 10 ? 5 : 2; // Overshoot by 5 for large numbers, 2 for small
    const totalTarget = target + overshoot;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        // Easing up to the overshoot target
        const percentage = progress / duration;
        const currentCount = Math.floor(totalTarget * easeOutQuint(percentage));
        setCount(currentCount);
        requestAnimationFrame(animateCount);
      } else if (progress < duration + 400) {
        // Settle back to actual target
        setCount(target);
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
        setIsCounting(false);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isCounting, target]);

  return (
    <div className={styles.statBox} ref={elementRef}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>
          {prefix}{count.toLocaleString()}{suffix}
        </span>
        {isCounting && <span className={styles.cursor}>_</span>}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className={styles.statsBand}>
      <div className={`container ${styles.statsContainer}`}>
        {STATS.map((stat, index) => (
          <div key={index} className={styles.statCol}>
            <Counter {...stat} />
            {index < STATS.length - 1 && <div className={styles.divider}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
