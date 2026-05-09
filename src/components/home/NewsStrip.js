'use client';
import Link from 'next/link';
import styles from './NewsStrip.module.css';

const NEWS = [
  {
    id: 1,
    date: "April 12, 2024",
    headline: "New Seismic Design Code Guidelines Released",
    excerpt: "The latest updates to IS 1893 reflect modern computational approaches to earthquake-resistant structural design.",
    slug: "seismic-design-code"
  },
  {
    id: 2,
    date: "March 28, 2024",
    headline: "ASCE India Section Wins Outstanding International Branch",
    excerpt: "Recognized globally for our commitment to student mentorship and technical excellence programmes across the subcontinent.",
    slug: "outstanding-international-branch"
  },
  {
    id: 3,
    date: "March 15, 2024",
    headline: "Call for Papers: Sustainable Concrete Tech",
    excerpt: "Submit your abstracts for the upcoming special issue of the ASCE India Technical Journal on green building materials.",
    slug: "call-for-papers"
  }
];

export default function NewsStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Latest News</h2>
        
        <div className={styles.newsGrid}>
          {NEWS.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.date}>{item.date}</div>
              <h3 className={styles.headline}>{item.headline}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              <Link href={`/news/${item.slug}`} className={styles.readLink}>
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className={styles.newsletterBand}>
        <div className="container">
          <div className={styles.newsletterContent}>
            <h2>Stay Updated</h2>
            <p className={styles.newsletterDesc}>
              Get the latest news, event invitations, and technical updates from ASCE India Section.
            </p>
            
            <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                className={styles.emailInput} 
                placeholder="Enter your email address" 
                required
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
