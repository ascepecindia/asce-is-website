import styles from './ResourceFolders.module.css';

const FOLDERS = [
  { name: "Technical Standards", count: 142, color: "#3B82F6", items: ["ASCE 7-22", "ASCE 41-17", "ASCE 24-14"] },
  { name: "Research Papers", count: 850, color: "#22D3EE", items: ["Seismic Retrofitting", "Green Concrete", "Smart Grids"] },
  { name: "Webinar Recordings", count: 215, color: "#EF9F27", items: ["Design for Floods", "BIM Workflows", "Bridge Safety"] },
  { name: "Code Practice", count: 48, color: "#F87171", items: ["Python for Eng.", "FEA Basics", "OpenSees Intro"] },
  { name: "Career Resources", count: 32, color: "#A855F7", items: ["PE Exam Prep", "CV Workshop", "Ethics Guide"] },
  { name: "Student Guides", count: 64, color: "#10B981", items: ["Chapter Manual", "Competition FAQ", "Grant Apps"] }
];

export default function ResourceFolders() {
  return (
    <div className={styles.grid}>
       {FOLDERS.map((folder, i) => (
         <div key={i} className={styles.folderCard}>
            <div className={styles.tab} style={{ backgroundColor: folder.color }}>
               {folder.name.toUpperCase()}
            </div>
            <div className={styles.body}>
               <div className={styles.count}>{folder.count}</div>
               <div className={styles.label}>FILES_INDEXED</div>
               <ul className={styles.preview}>
                  {folder.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
               </ul>
            </div>
         </div>
       ))}
    </div>
  );
}
