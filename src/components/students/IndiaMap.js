'use client';
import { useState } from 'react';
import styles from './IndiaMap.module.css';
import { INDIA_MAP_DATA } from './IndiaMapData';

const NETWORK_DATA = [
  { id: 1, name: "IIT DELHI", x: "32%", y: "25%", branch: "North", type: "student", members: 145, history: "Annual Civil Symposium & TechFest", awards: "ASCE Outstanding Chapter 2024" },
  { id: 2, name: "IIT BOMBAY", x: "20%", y: "55%", branch: "West", type: "student", members: 180, history: "Aakaar National Symposium Host", awards: "Certificate of Commendation" },
  { id: 3, name: "IIT MADRAS", x: "38%", y: "82%", branch: "South", type: "student", members: 210, history: "CEA Fest & Concrete Canoe", awards: "Excellence in Innovation" },
  { id: 4, name: "IIT KHARAGPUR", x: "75%", y: "52%", branch: "East", type: "student", members: 165, history: "Megasthenis Symposium", awards: "Distinguished Service 2023" },
  { id: 5, name: "BITS PILANI", x: "25%", y: "32%", branch: "North", type: "student", members: 110, history: "Apogee Civil Engineering Events", awards: "Best New Chapter 2022" },
];

export default function IndiaMap() {
  const [selectedNode, setSelectedNode] = useState(null);

  const activeNodes = NETWORK_DATA;

  return (
    <section className={styles.section}>
      <div className="container">
        
        <div className={styles.hudHeader}>
          <h2 className={styles.title}>NETWORK EXPLORER</h2>
          <div className={styles.subtitle}>ASCE INDIA REGIONAL DATABASE</div>
        </div>

        <div className={styles.explorerWrapper}>
          {/* Left Panel: Refractive Controls */}
          <div className={styles.controls}>
            <div className={styles.controlPanel}>
              <div className={styles.panelTitle}>DATALINK FILTERS</div>
              <button 
                className={`${styles.filterBtn} ${styles.activeBtn}`}
                disabled
              >
                STUDENT CHAPTERS
              </button>


            </div>
          </div>

          {/* Center: 3D Map Interface */}
          <div className={styles.mapCenter}>
            <div className={styles.mapContainer}>
              <div className={styles.mapBg}>
                 <svg width="100%" height="100%" viewBox="0 0 612 696" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <g className={styles.mapGroup}>
                      {INDIA_MAP_DATA.map(loc => (
                        <path key={loc.id} d={loc.path} className={styles.svgPathSolid} />
                      ))}
                    </g>
                 </svg>
              </div>
              
              {activeNodes.map(node => {
                const isSelected = selectedNode?.id === node.id;
                
                return (
                  <div 
                    key={node.id} 
                    className={`${styles.node} ${isSelected ? styles.nodeSelected : ''}`} 
                    style={{ left: node.x, top: node.y }}
                    onClick={() => setSelectedNode(node)}
                  >
                     <div className={styles.pulse}></div>
                     <div className={styles.core}></div>
                     {!isSelected && <div className={styles.nodeLabel}>{node.name}</div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Intelligence Card Reveal */}
          <div className={styles.intelPanel}>
            {selectedNode ? (
              <div className={styles.intelCard}>
                <div className={styles.intelHeader}>
                  <div className={styles.typeTag}>
                    {selectedNode.type === 'student' ? 'STUDENT CHAPTER' : 'PRO SECTION'}
                  </div>
                  <h3>{selectedNode.name}</h3>
                  <div className={styles.branchTag}>{selectedNode.branch} Sector</div>
                </div>
                
                <div className={styles.intelBody}>
                  <div className={styles.dataRow}>
                    <span className={styles.dataLabel}>ACTIVE MEMBERS</span>
                    <span className={styles.dataValue}>{selectedNode.members}</span>
                  </div>
                  <div className={styles.dataBlock}>
                    <span className={styles.dataLabel}>SYMPOSIUM HISTORY</span>
                    <p className={styles.dataText}>{selectedNode.history}</p>
                  </div>
                  <div className={styles.dataBlock}>
                    <span className={styles.dataLabel}>ASCE RECOGNITION</span>
                    <p className={styles.dataText}>{selectedNode.awards}</p>
                  </div>
                </div>
                
                <button className={styles.closeBtn} onClick={() => setSelectedNode(null)}>
                  CLOSE LINK
                </button>
              </div>
            ) : (
              <div className={styles.emptyIntel}>
                <div className={styles.scanLine}></div>
                <p>SELECT A NODE TO ESTABLISH DATALINK</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
