import styles from './BranchTerminals.module.css';

const BRANCHES = [
  { name: "NORTH", email: "north@asce-india.org", coord: "28.6139° N, 77.2090° E" },
  { name: "SOUTH", email: "south@asce-india.org", coord: "13.0827° N, 80.2707° E" },
  { name: "EAST", email: "east@asce-india.org", coord: "22.5726° N, 88.3639° E" },
  { name: "WEST", email: "west@asce-india.org", coord: "19.0760° N, 72.8777° E" }
];

export default function BranchTerminals() {
  return (
    <div className={styles.container}>
       {BRANCHES.map((b, i) => (
         <div key={i} className={styles.terminal}>
            <div className={styles.head}>{b.name}_BRANCH_CMD</div>
            <div className={styles.body}>
               <div className={styles.line}>
                  <span className={styles.label}>EMAIL:</span> {b.email}
               </div>
               <div className={styles.line}>
                  <span className={styles.label}>COORD:</span> {b.coord}
               </div>
            </div>
         </div>
       ))}
    </div>
  );
}
