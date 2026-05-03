'use client';
import { useState } from 'react';
import styles from './Mentorship.module.css';

export default function Mentorship() {
  const [isMatching, setIsMatching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleFindMentor = () => {
    setIsMatching(true);
    setTimeout(() => {
      setIsMatching(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-section" style={{ textAlign: 'center', marginBottom: '48px' }}>MENTORSHIP PROGRAM</h2>
        <div className={styles.formCard}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label>SPECIALISATION</label>
              <select className={styles.select}>
                <option>STRUCTURAL</option>
                <option>TRANSPORTATION</option>
                <option>GEOTECHNICAL</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>CAREER STAGE</label>
              <select className={styles.select}>
                <option>UNDERGRADUATE</option>
                <option>GRADUATE</option>
                <option>EARLY CAREER</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>LOCATION</label>
              <select className={styles.select}>
                <option>REMOTE</option>
                <option>NORTH INDIA</option>
                <option>SOUTH INDIA</option>
              </select>
            </div>
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: '32px' }} onClick={handleFindMentor}>
            {isMatching ? 'MATCHING...' : 'FIND MY MENTOR'}
          </button>
        </div>

        {showResult && (
          <div className={styles.results}>
            <div className={styles.mentorCard}>
               <div className={styles.matchScore}>MATCH: 94%</div>
               <h3 className={styles.mentorName}>DR. AMIT K.</h3>
               <p className={styles.mentorExp}>Expert in Seismic Retrofitting, 20+ years exp.</p>
               <button className={styles.contactBtn}>$ connect --mentor</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
