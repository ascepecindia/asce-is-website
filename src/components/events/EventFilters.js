import styles from './EventFilters.module.css';

export default function EventFilters() {
  return (
    <div className={styles.bar}>
       <div className={styles.prompt}>
          <span className={styles.symbol}>$</span> filter --branch=all --type=all --month=september
       </div>
       <div className={styles.results}>
          RESULTS: 14 EVENTS FOUND
       </div>
    </div>
  );
}
