'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './SVGDraw.module.css';

export default function SVGDraw() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.svgContainer}>
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1200 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.svg} ${isVisible ? styles.animate : ''}`}
          >
            {/* Bridge Truss (Left) */}
            <g className={styles.bridgeGroup}>
              <path className={styles.drawPath} d="M50 300 L350 300" stroke="#3B82F6" strokeWidth="2"/>
              <path className={styles.drawPath} d="M50 300 L125 200 L200 300 L275 200 L350 300" stroke="#3B82F6" strokeWidth="2"/>
              <path className={styles.drawPath} d="M125 200 L275 200" stroke="#3B82F6" strokeWidth="2"/>
              <path className={styles.drawPath} d="M125 200 L125 300 M275 200 L275 300 M200 200 L200 300" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4"/>
              
              <g className={styles.callout}>
                <text x="200" y="330" fill="#A0C4FF" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">↔ 1.2km SPAN</text>
              </g>
            </g>

            {/* Building Frame (Center) */}
            <g className={styles.buildingGroup}>
              <path className={styles.drawPath} d="M500 350 L700 350" stroke="#22D3EE" strokeWidth="2"/>
              <path className={styles.drawPath} d="M520 350 L520 100 L680 100 L680 350" stroke="#22D3EE" strokeWidth="2"/>
              <path className={styles.drawPath} d="M520 150 L680 150 M520 200 L680 200 M520 250 L680 250 M520 300 L680 300" stroke="#22D3EE" strokeWidth="1.5"/>
              <path className={styles.drawPath} d="M600 100 L600 350" stroke="#22D3EE" strokeWidth="1" strokeDasharray="4 4"/>
              
              <g className={styles.callout} style={{ transitionDelay: '3s' }}>
                <text x="730" y="225" fill="#A0C4FF" fontSize="11" fontFamily="var(--font-mono)">↕ 320m</text>
                <path d="M720 100 L720 350" stroke="#A0C4FF" strokeWidth="1" />
                <path d="M715 100 L725 100 M715 350 L725 350" stroke="#A0C4FF" strokeWidth="1" />
              </g>
            </g>

            {/* Road Cross-section (Right) */}
            <g className={styles.roadGroup}>
              <path className={styles.drawPath} d="M850 300 L1150 300" stroke="#EF9F27" strokeWidth="2"/>
              <path className={styles.drawPath} d="M880 300 L860 350 L1140 350 L1120 300" stroke="#EF9F27" strokeWidth="2"/>
              <path className={styles.drawPath} d="M1000 300 L1000 350" stroke="#EF9F27" strokeWidth="1" strokeDasharray="10 10"/>
              
              <g className={styles.callout} style={{ transitionDelay: '3.5s' }}>
                <text x="1000" y="380" fill="#A0C4FF" fontSize="11" fontFamily="var(--font-mono)" textAnchor="middle">↔ 4-LANE HIGHWAY</text>
              </g>
            </g>
          </svg>
        </div>
        
        <div className={styles.caption}>
          <p>// INDIA'S BUILT ENVIRONMENT — ENGINEERED BY ASCE MEMBERS.</p>
        </div>
      </div>
    </section>
  );
}
