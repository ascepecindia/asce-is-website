import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.breadcrumb}>
            // ASCE_IS / about
          </div>
          <h1 className="text-display">OUR STORY</h1>
        </div>
      </div>
    </section>
  );
}
