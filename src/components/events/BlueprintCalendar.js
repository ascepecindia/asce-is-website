import styles from './BlueprintCalendar.module.css';

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const CALENDAR_DAYS = Array.from({ length: 35 }, (_, i) => i - 2); // Sample offset

export default function BlueprintCalendar() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {DAYS.map(d => <div key={d} className={styles.headerCell}>{d}</div>)}
        {CALENDAR_DAYS.map((d, i) => (
          <div key={i} className={styles.cell}>
            <span className={styles.date}>{d > 0 && d <= 31 ? d : ''}</span>
            {d === 12 && <div className={styles.eventBar} style={{ backgroundColor: '#3B82F6' }}>SUMMIT</div>}
            {d === 13 && <div className={styles.eventBar} style={{ backgroundColor: '#3B82F6' }}>SUMMIT</div>}
            {d === 18 && <div className={styles.eventBar} style={{ backgroundColor: '#22D3EE' }}>WEBINAR</div>}
            {d === 25 && <div className={styles.eventBar} style={{ backgroundColor: '#EF9F27' }}>WORKSHOP</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
