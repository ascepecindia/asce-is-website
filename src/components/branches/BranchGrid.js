import styles from './BranchGrid.module.css';

const BRANCHES = [
  { name: "NORTH BRANCH", head: "New Delhi", focus: "Infrastructure Policy", icon: "🏛️" },
  { name: "SOUTH BRANCH", head: "Chennai", focus: "Coastal Engineering", icon: "🌊" },
  { name: "EAST BRANCH", head: "Kolkata", focus: "Sustainable Materials", icon: "🌿" },
  { name: "WEST BRANCH", head: "Mumbai", focus: "High-Rise Dynamics", icon: "🏢" }
];

export default function BranchGrid() {
  return (
    <div className={styles.grid}>
       {BRANCHES.map((b, i) => (
         <div key={i} className={styles.card}>
            <div className={styles.icon}>{b.icon}</div>
            <h3 className={styles.title}>{b.name}</h3>
            <div className={styles.meta}>
               <div className={styles.label}>HQ_LOCATION</div>
               <div className={styles.value}>{b.head}</div>
            </div>
            <div className={styles.meta}>
               <div className={styles.label}>TECHNICAL_FOCUS</div>
               <div className={styles.value}>{b.focus}</div>
            </div>
            <button className={styles.btn}>$ view --branch-details</button>
         </div>
       ))}
    </div>
  );
}
