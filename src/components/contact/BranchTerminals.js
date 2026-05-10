import styles from './BranchTerminals.module.css';

const IS_CONTACTS = [
  { 
    name: "Dr. Har Amrit Singh Sandhu", 
    role: "President, ASCE India Section", 
    email: "asceindia@gmail.com", 
    phone: "+91 94635 94149",
    color: "#003DA5" 
  },
  { 
    name: "Dr. Kavita Tandon", 
    role: "Secretary, ASCE India Section", 
    email: "asceindia@gmail.com", 
    phone: "+91 99140 14848",
    color: "#00A9E0" 
  }
];

export default function BranchTerminals() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>India Section (IS) Contacts</h3>
      {IS_CONTACTS.map((c, i) => (
        <div key={i} className={styles.card} style={{ borderLeftColor: c.color }}>
          <div className={styles.branchName}>{c.name}</div>
          <div className={styles.detail} style={{ fontWeight: 600, color: 'var(--asce-blue)' }}>{c.role}</div>
          <div className={styles.detail}>Email: <a href={`mailto:${c.email}`}>{c.email}</a></div>
          <div className={styles.detail}>Phone: {c.phone}</div>
        </div>
      ))}
    </div>
  );
}
