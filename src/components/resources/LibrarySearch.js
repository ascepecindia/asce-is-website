'use client';
import { useState } from 'react';
import styles from './LibrarySearch.module.css';

const MOCK_RESULTS = [
  { path: "/standards/ASCE-7-22.pdf", name: "Wind Loads for Buildings", size: "1.2MB" },
  { path: "/journals/SE-2024-Q1.pdf", name: "Structural Engineering Journal Q1", size: "3.4MB" },
  { path: "/webinars/sustainable_concrete.mp4", name: "Sustainable Concrete Workshop", size: "45MB" }
];

export default function LibrarySearch() {
  const [query, setQuery] = useState('');

  return (
    <div className={styles.container}>
       <div className={styles.terminal}>
          <div className={styles.prompt}>
             <span className={styles.symbol}>ASCE_IS_LIBRARY:~$</span>
             <input 
               type="text" 
               className={styles.input} 
               placeholder="search_resources_" 
               value={query}
               onChange={(e) => setQuery(e.target.value)}
             />
             <div className={styles.cursor}></div>
          </div>
       </div>

       {query.length > 0 && (
         <div className={styles.results}>
            {MOCK_RESULTS.map((res, i) => (
              <div key={i} className={styles.row}>
                 <span className={styles.icon}>📄</span>
                 <span className={styles.path}>{res.path}</span>
                 <span className={styles.name}>— {res.name}</span>
                 <span className={styles.size}>[{res.size}]</span>
              </div>
            ))}
         </div>
       )}
    </div>
  );
}
