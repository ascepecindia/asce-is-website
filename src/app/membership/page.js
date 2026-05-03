import TerminalQuiz from '@/components/membership/TerminalQuiz';
import GradeCards from '@/components/membership/GradeCards';
import BenefitsGrid from '@/components/membership/BenefitsGrid';
import styles from './page.module.css';

export const metadata = {
  title: "Membership | ASCE India Section",
  description: "Join the ASCE India Section. Discover your membership grade and benefits.",
};

export default function Membership() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <div className={styles.heroSection}>
        <div className="container">
          <h1 className="text-display" style={{ textAlign: 'center', marginBottom: '40px' }}>JOIN THE SECTION</h1>
          <TerminalQuiz />
        </div>
      </div>
      
      <GradeCards />
      <BenefitsGrid />
    </div>
  );
}
