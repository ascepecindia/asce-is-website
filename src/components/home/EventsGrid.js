import Link from 'next/link';
import styles from './EventsGrid.module.css';

const EVENTS = [
  {
    id: 1,
    title: "Structural Engineering Summit 2024",
    date: "2024.08.15",
    branch: "North",
    branchColor: "#3B82F6",
    format: "HYBRID",
    city: "NEW DELHI",
    coords: "+28.6, +77.2"
  },
  {
    id: 2,
    title: "Sustainable Infrastructure Symposium",
    date: "2024.09.02",
    branch: "South",
    branchColor: "#22D3EE",
    format: "IN-PERSON",
    city: "BENGALURU",
    coords: "+12.9, +77.5"
  },
  {
    id: 3,
    title: "Bridge Design Masterclass",
    date: "2024.09.18",
    branch: "East",
    branchColor: "#EF9F27",
    format: "VIRTUAL",
    city: "ONLINE",
    coords: "+22.5, +88.3"
  }
];

export default function EventsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-section">UPCOMING EVENTS</h2>
          <p className={styles.subtitle}>// NEXT_EVENTS LOADED &middot; BRANCH: ALL</p>
        </div>
        
        <div className={styles.grid}>
          {EVENTS.map((event) => (
            <div key={event.id} className={styles.card}>
              <div 
                className={styles.topStrip} 
                style={{ backgroundColor: event.branchColor }}
              ></div>
              
              <div className={styles.coordLabel}>{event.coords}</div>
              
              <div className={styles.cardBody}>
                <div className={styles.date}>{event.date}</div>
                <h3 className={styles.title}>{event.title}</h3>
                
                <div className={styles.badges}>
                  <span className={styles.badge}>{event.format}</span>
                  <span className={styles.badge}>{event.city}</span>
                </div>
                
                <Link href={`/events/${event.id}`} className={styles.registerLink}>
                  REGISTER &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
