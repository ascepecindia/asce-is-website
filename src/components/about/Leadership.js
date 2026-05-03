'use client';
import styles from './Leadership.module.css';

const LEADERS = [
  {
    id: 1,
    name: "DR. VIKRAM SINGH",
    title: "PRESIDENT",
    branch: "NORTH",
    yearsActive: "15 YEARS",
    specialisation: "STRUCTURAL DYNAMICS",
    bio: "Dr. Singh has led major infrastructure projects across the capital region and authored over 40 papers on earthquake engineering.",
    tags: ["SEISMIC", "STEEL", "CODE_DEV"]
  },
  {
    id: 2,
    name: "ANANYA RAO",
    title: "VICE PRESIDENT",
    branch: "SOUTH",
    yearsActive: "12 YEARS",
    specialisation: "URBAN MOBILITY",
    bio: "Pioneering sustainable transport systems in tier-1 cities. Former chief engineer for the Metro Rail corporation.",
    tags: ["TRANSIT", "POLICY", "URBAN"]
  },
  {
    id: 3,
    name: "K. T. MATHEW",
    title: "SECRETARY",
    branch: "WEST",
    yearsActive: "8 YEARS",
    specialisation: "WATER RESOURCES",
    bio: "Expert in hydrology and dam safety. Leads the technical committee for the national river linking project.",
    tags: ["HYDRO", "DAMS", "CLIMATE"]
  },
  {
    id: 4,
    name: "SMRITI DAS",
    title: "TREASURER",
    branch: "EAST",
    yearsActive: "10 YEARS",
    specialisation: "GEOTECHNICAL",
    bio: "Specializes in deep foundation design for high-rise structures in challenging soil conditions.",
    tags: ["SOIL", "FOUNDATIONS", "PILING"]
  },
  {
    id: 5,
    name: "RAHUL VERMA",
    title: "STUDENT CHAIR",
    branch: "NORTH",
    yearsActive: "4 YEARS",
    specialisation: "CONSTRUCTION MGT.",
    bio: "Bridging the gap between academia and industry. Drives the annual student concrete canoe competition.",
    tags: ["MENTORSHIP", "ACADEMIA", "BIM"]
  },
  {
    id: 6,
    name: "PRIYANKA JOSHI",
    title: "TECHNICAL CHAIR",
    branch: "WEST",
    yearsActive: "14 YEARS",
    specialisation: "SUSTAINABILITY",
    bio: "Lead author of the ASCE India guidelines on green building materials and low-carbon concrete.",
    tags: ["GREEN_BLDG", "MATERIALS", "LCA"]
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className={styles.section}>
      <div className="container">
        <h2 className="text-section">LEADERSHIP TEAM</h2>
        
        <div className={styles.grid}>
          {LEADERS.map((leader) => (
            <div key={leader.id} className={styles.cardWrapper}>
              <div className={styles.cardInner}>
                
                {/* Front of Card */}
                <div className={styles.cardFront}>
                  <div className={styles.hexBorder}>
                    <div className={styles.hexImage}></div>
                  </div>
                  <h3 className={styles.name}>{leader.name}</h3>
                  <div className={styles.title}>{leader.title}</div>
                  
                  <div className={styles.specTable}>
                    <div className={styles.specRow}>
                      <span className={styles.specLabel}>BRANCH</span>
                      <span className={styles.specValue}>{leader.branch}</span>
                    </div>
                    <div className={styles.specRow}>
                      <span className={styles.specLabel}>ACTIVE</span>
                      <span className={styles.specValue}>{leader.yearsActive}</span>
                    </div>
                    <div className={styles.specRow}>
                      <span className={styles.specLabel}>SPEC.</span>
                      <span className={styles.specValue}>{leader.specialisation}</span>
                    </div>
                  </div>
                </div>
                
                {/* Back of Card */}
                <div className={styles.cardBack}>
                  <p className={styles.bio}>{leader.bio}</p>
                  
                  <div className={styles.tags}>
                    {leader.tags.map(tag => (
                      <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                  </div>
                  
                  <a href="#" className={styles.connectBtn} onClick={(e) => e.preventDefault()}>
                    $ connect --linkedin
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
