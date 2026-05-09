'use client';
import { useRef } from 'react';
import styles from './MemberCarousel.module.css';

const MEMBERS = [
  { id: 1, name: "Arjun Mehta", role: "Structural Engineer", branch: "North", quote: "Engineering is the art of organizing and directing men and controlling the forces and materials of nature." },
  { id: 2, name: "Priya Sharma", role: "Urban Planner", branch: "South", quote: "Designing cities that breathe and evolve with their inhabitants." },
  { id: 3, name: "Ravi Kumar", role: "Bridge Designer", branch: "East", quote: "A bridge is more than concrete; it is a connection between communities." },
  { id: 4, name: "Anita Desai", role: "Geotech Lead", branch: "West", quote: "The foundation of every great structure lies beneath the earth." },
  { id: 5, name: "Sanjay Patel", role: "Water Resources", branch: "North", quote: "Managing every drop to ensure a sustainable future for the next generation." },
  { id: 6, name: "Meera Reddy", role: "Transportation", branch: "South", quote: "Moving people and goods efficiently is the lifeblood of our economy." }
];

export default function MemberCarousel() {
  const scrollRef = useRef(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2>What Our Members Say</h2>
      </div>
      
      <div className={styles.carouselContainer} ref={scrollRef}>
        <div className={styles.track}>
          <div className={styles.scrollContent}>
            {[...MEMBERS, ...MEMBERS].map((member, idx) => (
              <div key={`${member.id}-${idx}`} className={styles.card}>
                <div className={styles.avatar}>
                  <span>{member.name.charAt(0)}</span>
                </div>
                
                <p className={styles.quote}>"{member.quote}"</p>
                
                <div className={styles.info}>
                  <div className={styles.name}>{member.name}</div>
                  <div className={styles.role}>
                    {member.role} · {member.branch} Branch
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
