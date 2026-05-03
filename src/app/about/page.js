import Hero from '@/components/about/Hero';
import Timeline from '@/components/about/Timeline';
import Mission from '@/components/about/Mission';
import Leadership from '@/components/about/Leadership';
import styles from './page.module.css';

export const metadata = {
  title: "About Us | ASCE India Section",
  description: "History, Mission, and Leadership of the ASCE India Section.",
};

export default function About() {
  return (
    <div className={`bg-grid ${styles.aboutPage}`}>
      {/* Sticky TOC Sidebar (Desktop only) */}
      <aside className={styles.tocSidebar}>
        <ul className={styles.tocTree}>
          <li className={styles.tocNode}>
            <a href="#history" className={styles.tocLink}>├─ Our History</a>
          </li>
          <li className={styles.tocNode}>
            <a href="#mission" className={styles.tocLink}>├─ Mission & Vision</a>
          </li>
          <li className={styles.tocNode}>
            <a href="#leadership" className={styles.tocLink}>└─ Leadership Team</a>
          </li>
        </ul>
      </aside>

      <div className={styles.content}>
        <Hero />
        <Timeline />
        <Mission />
        <Leadership />
      </div>
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ASCE India Section",
            "foundingDate": "1989",
            "areaServed": "India",
            "url": "https://asceindia.org"
          })
        }}
      />
    </div>
  );
}
