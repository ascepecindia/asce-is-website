'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './StatsBand.module.css';

const STATS = [
  { target: 13247, label: "Members", prefix: "", suffix: "+" },
  { target: 4, label: "Regional Branches", prefix: "", suffix: "" },
  { target: 36, label: "Years Active", prefix: "", suffix: "+" },
  { target: 200, label: "Annual Events", prefix: "", suffix: "+" }
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
    const duration = 2200;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const percentage = progress / duration;
        const currentCount = Math.floor(target * easeOutQuint(percentage));
        setCount(currentCount);
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
      <div className={styles.number}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.statsRow}`}>
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
