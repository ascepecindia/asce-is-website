'use client';
import { useRef } from 'react';
import styles from './MemberCarousel.module.css';

const MEMBERS = [
  { id: 1, name: "Arjun Mehta", role: "STRUCTURAL ENG.", branch: "NORTH", quote: `"Engineering is the art of organizing and directing men and controlling the forces and materials of nature."` },
  { id: 2, name: "Priya Sharma", role: "URBAN PLANNER", branch: "SOUTH", quote: `"Designing cities that breathe and evolve with their inhabitants."` },
  { id: 3, name: "Ravi Kumar", role: "BRIDGE DESIGNER", branch: "EAST", quote: `"A bridge is more than concrete; it is a connection between communities."` },
  { id: 4, name: "Anita Desai", role: "GEOTECH LEAD", branch: "WEST", quote: `"The foundation of every great structure lies beneath the earth."` },
  { id: 5, name: "Sanjay Patel", role: "WATER RESOURCES", branch: "NORTH", quote: `"Managing every drop to ensure a sustainable future for the next generation."` },
  { id: 6, name: "Meera Reddy", role: "TRANSPORTATION", branch: "SOUTH", quote: `"Moving people and goods efficiently is the lifeblood of our economy."` }
];

export default function MemberCarousel() {
  const scrollRef = useRef(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-section">MEET OUR MEMBERS</h2>
      </div>
      
      <div className={styles.carouselContainer} ref={scrollRef}>
        <div className={styles.track}>
          {/* Duplicate for infinite loop effect if needed, but requirements say "auto-rotating horizontal scroller (momentum scroll)" */}
          {/* We'll use CSS animation for auto-scroll and pause on hover */}
          <div className={styles.scrollContent}>
            {[...MEMBERS, ...MEMBERS].map((member, idx) => (
              <div key={`${member.id}-${idx}`} className={styles.card}>
                <div className={styles.hexBorder}>
                  <div className={styles.hexImage}>
                    {/* Placeholder for member image, using CSS gradient for now */}
                  </div>
                </div>
                
                <h3 className={styles.name}>{member.name}</h3>
                <div className={styles.role}>
                  {member.role} &middot; {member.branch}
                </div>
                
                <div className={styles.quoteWrapper}>
                  <p className={styles.quote}>{member.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
