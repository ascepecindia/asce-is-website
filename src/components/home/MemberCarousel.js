'use client';
import { useRef } from 'react';
import styles from './MemberCarousel.module.css';

const MEMBERS = [
  { id: 1, name: "Arjun Mehta", role: "Structural Engineer", branch: "Northern", quote: "Engineering is the art of organizing and directing men and controlling the forces and materials of nature.", initials: "AM", color: "#003DA5" },
  { id: 2, name: "Priya Sharma", role: "Urban Planner", branch: "Southern", quote: "Designing cities that breathe and evolve with their inhabitants — that's the future of civil engineering.", initials: "PS", color: "#00A9E0" },
  { id: 3, name: "Ravi Kumar", role: "Bridge Designer", branch: "Eastern", quote: "A bridge is more than concrete and steel; it is a connection between communities and a symbol of progress.", initials: "RK", color: "#10B981" },
  { id: 4, name: "Anita Desai", role: "Geotechnical Lead", branch: "Western", quote: "The foundation of every great structure lies beneath the earth. Understanding soil is understanding possibility.", initials: "AD", color: "#8B5CF6" },
  { id: 5, name: "Sanjay Patel", role: "Water Resources", branch: "Northern", quote: "Managing every drop to ensure a sustainable future for the next generation — that's our duty as engineers.", initials: "SP", color: "#F59E0B" },
  { id: 6, name: "Meera Reddy", role: "Transportation", branch: "Southern", quote: "Moving people and goods efficiently is the lifeblood of our economy and the backbone of nation-building.", initials: "MR", color: "#EF4444" }
];

export default function MemberCarousel() {
  const scrollRef = useRef(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>COMMUNITY VOICES</div>
          <h2 className={styles.heading}>
            What Our <span className={styles.accent}>Members</span> Say
          </h2>
        </div>
      </div>

      <div className={styles.carouselContainer} ref={scrollRef}>
        <div className={styles.track}>
          <div className={styles.scrollContent}>
            {[...MEMBERS, ...MEMBERS].map((member, idx) => (
              <div key={`${member.id}-${idx}`} className={styles.card}>
                {/* Quote mark */}
                <div className={styles.quoteMark}>"</div>

                <p className={styles.quote}>{member.quote}</p>

                <div className={styles.cardFooter}>
                  {/* Avatar */}
                  <div className={styles.avatar} style={{ background: member.color }}>
                    <span>{member.initials}</span>
                  </div>

                  <div className={styles.info}>
                    <div className={styles.name}>{member.name}</div>
                    <div className={styles.role}>
                      {member.role}
                    </div>
                    <div className={styles.branch}>{member.branch} Branch</div>
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
