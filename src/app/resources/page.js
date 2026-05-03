import LibrarySearch from '@/components/resources/LibrarySearch';
import ResourceFolders from '@/components/resources/ResourceFolders';
import styles from './page.module.css';

export const metadata = {
  title: "Resources | ASCE India Section",
  description: "Access technical standards, journals, and webinar recordings in the ASCE India library.",
};

export default function Resources() {
  return (
    <div className={`bg-grid ${styles.pageWrapper}`}>
      <div className="container">
        <div className={styles.hero}>
          <h1 className="text-display">ASCE_IS_LIBRARY</h1>
          <p className="text-hero-sub" style={{ color: 'var(--accent-blue)', marginTop: '16px' }}>// TECHNICAL DATASETS & DOCUMENTATION</p>
        </div>
        
        <LibrarySearch />
        <ResourceFolders />
      </div>
    </div>
  );
}
