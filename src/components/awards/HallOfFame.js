import styles from './HallOfFame.module.css';

const WINNERS = [
  { name: "DR. RAJESH KUMAR", year: "2023", citation: "LIFETIME ACHIEVEMENT IN HYDROLOGY", region: "NORTH" },
  { name: "SARAH WILLIAMS", year: "2022", citation: "EXCELLENCE IN URBAN PLANNING", region: "WEST" },
  { name: "ARJUN MEHTA", year: "2021", citation: "INNOVATION IN SEISMIC DESIGN", region: "SOUTH" },
  { name: "PRIYA SHARMA", year: "2020", citation: "SUSTAINABLE INFRASTRUCTURE LEADERSHIP", region: "EAST" }
];

export default function HallOfFame() {
  return (
    <div className={styles.section}>
       <div className={styles.scrollContainer}>
          {WINNERS.map((w, i) => (
            <div key={i} className={styles.awardCard}>
               <div className={styles.year}>{w.year}</div>
               <div className={styles.profileBox}>
                  <div className={styles.placeholder}></div>
               </div>
               <h3 className={styles.name}>{w.name}</h3>
               <div className={styles.citation}>{w.citation}</div>
               <div className={styles.region}>[{w.region}_BRANCH]</div>
            </div>
          ))}
       </div>
    </div>
  );
}
