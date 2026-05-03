'use client';
import { useRef, useState } from 'react';
import styles from './Timeline.module.css';

const MILESTONES = [
  { year: "1989", coord: "1989.01", title: "SECTION FOUNDED", location: "MUMBAI", desc: "Initial charter signed by 14 founding members." },
  { year: "1995", coord: "1995.05", title: "FIRST CONFERENCE", location: "DELHI", desc: "National symposium on sustainable construction." },
  { year: "2001", coord: "2001.11", title: "1,000 MEMBERS", location: "INDIA", desc: "Reached milestone of 1,000 active civil engineers." },
  { year: "2005", coord: "2005.07", title: "STUDENT CHAPTERS", location: "VARIOUS", desc: "Launched first 5 student chapters in universities." },
  { year: "2010", coord: "2010.03", title: "REGIONAL BRANCHES", location: "N/S/E/W", desc: "Structured into 4 regional zones for better outreach." },
  { year: "2015", coord: "2015.09", title: "5,000 MEMBERS", location: "INDIA", desc: "Exponential growth in membership across subcontinent." },
  { year: "2018", coord: "2018.12", title: "AWARDS LAUNCHED", location: "BENGALURU", desc: "First annual ASCE India Excellence Awards." },
  { year: "2020", coord: "2020.04", title: "VIRTUAL PIVOT", location: "ONLINE", desc: "Transitioned all technical sessions to digital platform." },
  { year: "2022", coord: "2022.08", title: "10,000 MEMBERS", location: "INDIA", desc: "Crossed major milestone during national summit." },
  { year: "2025", coord: "2025.01", title: "BLUEPRINT REBORN", location: "GLOBAL", desc: "Launch of new technical identity and digital platform." },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="history" className={styles.section}>
      <div className="container">
        <h2 className="text-section">OUR HISTORY</h2>
        <p className={styles.dragIndicator}>&larr; drag timeline &rarr;</p>
      </div>

      <div 
        className={`${styles.timelineContainer} ${isDragging ? styles.active : ''}`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.timelineTrack}>
          {/* Spine Line */}
          <div className={styles.spine}></div>
          
          {MILESTONES.map((item, index) => {
            const isTop = index % 2 === 0;
            return (
              <div key={item.year} className={`${styles.tickContainer} ${isTop ? styles.topAligned : styles.bottomAligned}`}>
                
                {isTop ? (
                  <>
                    <div className={styles.cardArea}>
                      <div className={styles.eventCard}>
                        <div className={styles.coordLabel}>{item.coord}</div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <div className={styles.cardLocation}>LOC: {item.location}</div>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>
                    </div>
                    <div className={styles.tickLineTop}></div>
                    <div className={styles.node}></div>
                    <div className={styles.yearLabel}>{item.year}</div>
                  </>
                ) : (
                  <>
                    <div className={styles.yearLabelTop}>{item.year}</div>
                    <div className={styles.node}></div>
                    <div className={styles.tickLineBottom}></div>
                    <div className={styles.cardAreaBottom}>
                      <div className={styles.eventCard}>
                        <div className={styles.coordLabel}>{item.coord}</div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <div className={styles.cardLocation}>LOC: {item.location}</div>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>
                    </div>
                  </>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
