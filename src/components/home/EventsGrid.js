import Link from 'next/link';
import styles from './EventsGrid.module.css';

const EVENTS = [
  {
    id: 1,
    title: "Structural Engineering Summit 2024",
    date: "August 15, 2024",
    branch: "North",
    branchColor: "#3B82F6",
    format: "Hybrid",
    city: "New Delhi"
  },
  {
    id: 2,
    title: "Sustainable Infrastructure Symposium",
    date: "September 2, 2024",
    branch: "South",
    branchColor: "#22D3EE",
    format: "In-Person",
    city: "Bengaluru"
  },
  {
    id: 3,
    title: "Bridge Design Masterclass",
    date: "September 18, 2024",
    branch: "East",
    branchColor: "#EF9F27",
    format: "Virtual",
    city: "Online"
  }
];

export default function EventsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Upcoming Events</h2>
          <p className={styles.subtitle}>Conferences, webinars, and workshops across all branches</p>
        </div>
        
        <div className={styles.grid}>
          {EVENTS.map((event) => (
            <div key={event.id} className={styles.card}>
              <div 
                className={styles.leftBorder} 
                style={{ backgroundColor: event.branchColor }}
              ></div>
              
              <div className={styles.cardBody}>
                <div className={styles.date}>{event.date}</div>
                <h3 className={styles.title}>{event.title}</h3>
                
                <div className={styles.badges}>
                  <span className={styles.badge}>{event.format}</span>
                  <span className={styles.badge}>{event.city}</span>
                </div>
                
                <Link href={`/events`} className={styles.registerLink}>
                  Register →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
