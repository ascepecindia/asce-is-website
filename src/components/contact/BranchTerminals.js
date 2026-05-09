import styles from './BranchTerminals.module.css';

const BRANCHES = [
  { name: "North Branch", city: "New Delhi", email: "north@asce-india.org", color: "#3B82F6" },
  { name: "South Branch", city: "Chennai", email: "south@asce-india.org", color: "#22D3EE" },
  { name: "East Branch", city: "Kolkata", email: "east@asce-india.org", color: "#EF9F27" },
  { name: "West Branch", city: "Mumbai", email: "west@asce-india.org", color: "#A855F7" }
];

export default function BranchTerminals() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Branch Offices</h3>
      {BRANCHES.map((b, i) => (
        <div key={i} className={styles.card} style={{ borderLeftColor: b.color }}>
          <div className={styles.branchName}>{b.name}</div>
          <div className={styles.detail}>{b.city}</div>
          <div className={styles.detail}>{b.email}</div>
        </div>
      ))}
    </div>
  );
}
