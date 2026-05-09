'use client';
import { useState } from 'react';
import styles from './EventFilters.module.css';

export default function EventFilters() {
  const [branch, setBranch] = useState('all');
  const [type, setType] = useState('all');
  const [month, setMonth] = useState('all');

  return (
    <div className={styles.bar}>
      <div className={styles.filters}>
        <select className={styles.select} value={branch} onChange={(e) => setBranch(e.target.value)}>
          <option value="all">All Branches</option>
          <option value="north">North</option>
          <option value="south">South</option>
          <option value="east">East</option>
          <option value="west">West</option>
        </select>
        
        <select className={styles.select} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="conference">Conference</option>
          <option value="webinar">Webinar</option>
          <option value="workshop">Workshop</option>
        </select>
        
        <select className={styles.select} value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="all">All Months</option>
          <option value="jan">January</option>
          <option value="feb">February</option>
          <option value="mar">March</option>
        </select>

        <button 
          className={styles.clearBtn}
          onClick={() => { setBranch('all'); setType('all'); setMonth('all'); }}
        >
          Clear
        </button>
      </div>
      
      <div className={styles.results}>12 events found</div>
    </div>
  );
}
