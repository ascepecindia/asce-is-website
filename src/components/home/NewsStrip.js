'use client';
import Link from 'next/link';
import styles from './NewsStrip.module.css';

const NEWS = [
  {
    id: 1,
    date: "2024.04.12",
    headline: "New Seismic Design Code Guidelines Released",
    excerpt: "The latest updates to IS 1893 reflect modern computational approaches to earthquake-resistant structural design.",
    slug: "seismic-design-code"
  },
  {
    id: 2,
    date: "2024.03.28",
    headline: "ASCE India Section Wins Outstanding International Branch",
    excerpt: "Recognized globally for our commitment to student mentorship and technical excellence programs across the subcontinent.",
    slug: "outstanding-international-branch"
  },
  {
    id: 3,
    date: "2024.03.15",
    headline: "Call for Papers: Sustainable Concrete Tech",
    excerpt: "Submit your abstracts for the upcoming special issue of the ASCE India Technical Journal on green building materials.",
    slug: "call-for-papers"
  }
];

export default function NewsStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* News Teaser Grid */}
        <div className={styles.newsGrid}>
          {NEWS.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.date}>{item.date}</div>
              <h3 className={styles.headline}>{item.headline}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              <Link href={`/news/${item.slug}`} className={styles.readLink}>
                READ &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA Band */}
      <div className={styles.newsletterBand}>
        <div className="container">
          <div className={styles.newsletterContent}>
            <h2 className="text-section" style={{ fontSize: '36px', marginBottom: '24px' }}>
              STAY UPDATED WITH ASCE INDIA SECTION
            </h2>
            
            <form className={styles.terminalForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.prompt}>
                <span className={styles.promptUser}>user@asce-india:~$</span>
                <input 
                  type="email" 
                  className={styles.input} 
                  placeholder="enter email_" 
                  required
                />
                <div className={styles.cursor}></div>
              </div>
              <button type="submit" className={styles.submitBtn}>SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
