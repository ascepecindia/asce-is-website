import IndiaMap from '@/components/students/IndiaMap';
import Leaderboard from '@/components/students/Leaderboard';
import Mentorship from '@/components/students/Mentorship';
import styles from './page.module.css';

export const metadata = {
  title: "Students | ASCE India Section",
  description: "Empowering the next generation of civil engineers in India.",
};

export default function Students() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <div className={styles.hero}>
        <div className="container">
          <h1 className="text-display">47 STUDENT CHAPTERS</h1>
          <p className="text-hero-sub" style={{ color: 'var(--accent-blue)' }}>// ACROSS THE INDIAN SUBCONTINENT</p>
        </div>
      </div>
      
      <IndiaMap />
      <Leaderboard />
      <Mentorship />
    </div>
  );
}
