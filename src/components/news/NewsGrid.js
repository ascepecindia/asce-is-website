import Link from 'next/link';
import styles from './NewsGrid.module.css';

const ARTICLES = [
  { id: 1, title: "Modernizing India's Expressway Foundations", date: "2024.05.01", category: "TECHNICAL", featured: true },
  { id: 2, title: "Section President Vikram Singh on Urban Mobility", date: "2024.04.25", category: "POLICY", featured: false },
  { id: 3, title: "Upcoming Bridge Maintenance Workshop", date: "2024.04.20", category: "EVENTS", featured: false },
  { id: 4, title: "Smart Cities: A Civil Engineering Perspective", date: "2024.04.15", category: "TECHNICAL", featured: false },
  { id: 5, title: "Advocating for Carbon-Neutral Infrastructure", date: "2024.04.10", category: "POLICY", featured: false },
  { id: 6, title: "Member Spotlight: Innovations in Geotech", date: "2024.04.05", category: "TECHNICAL", featured: false }
];

export default function NewsGrid() {
  return (
    <div className={styles.grid}>
       {ARTICLES.map(article => (
         <div key={article.id} className={`${styles.card} ${article.featured ? styles.featured : ''}`}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
               <div className={styles.meta}>
                  <span className={styles.category}>{article.category}</span>
                  <span className={styles.date}>{article.date}</span>
               </div>
               <h3 className={styles.title}>{article.title}</h3>
               <Link href={`/news/${article.id}`} className={styles.link}>READ_REPORT &rarr;</Link>
            </div>
         </div>
       ))}
    </div>
  );
}
