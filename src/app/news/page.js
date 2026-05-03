import NewsGrid from '@/components/news/NewsGrid';
import CategoryFilters from '@/components/news/CategoryFilters';
import styles from './page.module.css';

export const metadata = {
  title: "News & Blog | ASCE India Section",
  description: "Field reports, innovation stories, and press releases from the ASCE India Section.",
};

export default function News() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <div className="container">
        <div className={styles.hero}>
          <h1 className="text-display">FIELD_REPORTS // ASCE INDIA</h1>
          <p className="text-hero-sub" style={{ color: 'var(--accent-blue)', marginTop: '16px' }}>// ARCHIVING THE FUTURE OF INFRASTRUCTURE</p>
        </div>
        
        <CategoryFilters />
        <NewsGrid />
      </div>
    </div>
  );
}
