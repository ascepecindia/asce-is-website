import CompassUI from '@/components/branches/CompassUI';
import BranchGrid from '@/components/branches/BranchGrid';
import styles from './page.module.css';

export const metadata = {
  title: "Branches | ASCE India Section",
  description: "Explore the North, South, East, and West branches of the ASCE India Section.",
};

export default function Branches() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <div className="container">
        <div className={styles.hero}>
          <h1 className="text-display">REGIONAL BRANCHES</h1>
          <p className="text-hero-sub" style={{ color: 'var(--accent-blue)', marginTop: '16px' }}>// GEOGRAPHICAL DISTRIBUTION OF ENGINEERING EXCELLENCE</p>
        </div>
        
        <CompassUI />
        <BranchGrid />
      </div>
    </div>
  );
}
