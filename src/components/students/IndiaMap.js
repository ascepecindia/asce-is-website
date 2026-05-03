'use client';
import styles from './IndiaMap.module.css';

const CHAPTERS = [
  { id: 1, name: "IIT DELHI", x: "32%", y: "25%", branch: "North" },
  { id: 2, name: "IIT BOMBAY", x: "20%", y: "55%", branch: "West" },
  { id: 3, name: "IIT MADRAS", x: "38%", y: "82%", branch: "South" },
  { id: 4, name: "IIT KHARAGPUR", x: "75%", y: "52%", branch: "East" },
  { id: 5, name: "BITS PILANI", x: "25%", y: "32%", branch: "North" }
];

export default function IndiaMap() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.mapContainer}>
          {/* Simplified SVG Map of India background */}
          <div className={styles.mapBg}>
             <svg width="100%" height="100%" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M280 50 L350 80 L380 150 L450 180 L500 250 L480 350 L550 420 L480 500 L400 650 L300 680 L200 650 L120 550 L100 450 L50 350 L100 250 L150 150 L200 80 Z" 
                      fill="rgba(0, 100, 255, 0.05)" 
                      stroke="rgba(59, 130, 246, 0.3)" 
                      strokeWidth="2" />
             </svg>
          </div>
          
          {CHAPTERS.map(chap => (
            <div key={chap.id} className={styles.dot} style={{ left: chap.x, top: chap.y }}>
               <div className={styles.pulse}></div>
               <div className={styles.tooltip}>{chap.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
