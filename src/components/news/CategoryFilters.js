import styles from './CategoryFilters.module.css';

export default function CategoryFilters() {
  return (
    <div className={styles.container}>
       <div className={styles.prompt}>
          <span className={styles.symbol}>$</span> category=
          <span className={styles.active}>all</span> | 
          <span>technical</span> | 
          <span>events</span> | 
          <span>policy</span>
       </div>
    </div>
  );
}
