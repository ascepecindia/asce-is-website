'use client';
import styles from './EventHero.module.css';

export default function EventHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.leftAccent}></div>
          <div className={styles.body}>
            <div className={styles.badge}>Featured Event</div>
            <h2 className={styles.title}>National Conference on Smart Infrastructure 2024</h2>
            <p className={styles.meta}>December 15–17, 2024 · New Delhi · Hybrid</p>
            
            <div className={styles.countdown}>
              <div className={styles.unit}>
                <span className={styles.val}>42</span>
                <span className={styles.label}>Days</span>
              </div>
              <div className={styles.unit}>
                <span className={styles.val}>08</span>
                <span className={styles.label}>Hours</span>
              </div>
              <div className={styles.unit}>
                <span className={styles.val}>15</span>
                <span className={styles.label}>Mins</span>
              </div>
              <div className={styles.unit}>
                <span className={styles.val}>32</span>
                <span className={styles.label}>Secs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
