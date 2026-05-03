import HallOfFame from '@/components/awards/HallOfFame';
import AwardCategories from '@/components/awards/AwardCategories';
import styles from './page.module.css';

export const metadata = {
  title: "Awards | ASCE India Section",
  description: "Celebrating excellence in civil engineering across India.",
};

export default function Awards() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <div className="container">
        <div className={styles.hero}>
          <h1 className="text-display">HALL OF FAME</h1>
          <p className="text-hero-sub" style={{ color: 'var(--accent-blue)', marginTop: '16px' }}>// RECOGNIZING LIFETIME CONTRIBUTIONS TO THE BUILT ENVIRONMENT</p>
        </div>
        
        <HallOfFame />
        <AwardCategories />
      </div>
    </div>
  );
}
