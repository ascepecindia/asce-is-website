import styles from './AwardCategories.module.css';

const CATS = [
  { name: "Technical Excellence", desc: "For breakthrough research and design innovations." },
  { name: "Young Engineer", desc: "Recognizing leaders under the age of 35." },
  { name: "Sustainable Project", desc: "Highest impact on carbon reduction and efficiency." },
  { name: "Service to Section", desc: "Volunteer leadership and community building." }
];

export default function AwardCategories() {
  return (
    <div className={styles.section}>
       <h2 className="text-section">OPEN NOMINATIONS</h2>
       <div className={styles.grid}>
          {CATS.map((cat, i) => (
            <div key={i} className={styles.card}>
               <div className={styles.top}>
                  <span className={styles.status}>STATUS: OPEN</span>
                  <span className={styles.code}>ID: ASCE_AW_{2024 + i}</span>
               </div>
               <h3 className={styles.title}>{cat.name}</h3>
               <p className={styles.desc}>{cat.desc}</p>
               <button className={styles.btn}>$ nominate --self</button>
            </div>
          ))}
       </div>
    </div>
  );
}
