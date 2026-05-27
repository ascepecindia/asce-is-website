'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './FocusAreas.module.css';

const AREAS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-4h6v4"/><path d="M9 12h6"/><path d="M12 8v4"/>
      </svg>
    ),
    title: 'Structural Engineering',
    desc: 'Seismic-resistant design, high-rise structures, bridges, and industrial buildings using the latest codes and computational tools.',
    gradient: 'linear-gradient(135deg, #003DA5 0%, #0055D4 100%)',
    stat: '45%',
    statLabel: 'of members'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
    title: 'Geotechnical Engineering',
    desc: 'Soil mechanics, foundation design, slope stability, and earthquake geotechnics for India\'s diverse terrain.',
    gradient: 'linear-gradient(135deg, #00A9E0 0%, #0088CC 100%)',
    stat: '20%',
    statLabel: 'of research'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
      </svg>
    ),
    title: 'Water Resources',
    desc: 'Hydraulics, hydrology, dam safety, irrigation systems, and integrated watershed management.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    stat: '15%',
    statLabel: 'of projects'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 3 20 16 16 16"/><line x1="1" y1="22" x2="22" y2="22"/><line x1="6" y1="16" x2="6" y2="22"/><line x1="18" y1="16" x2="18" y2="22"/>
      </svg>
    ),
    title: 'Transportation',
    desc: 'Highway design, traffic systems, urban transit planning, and smart mobility infrastructure.',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    stat: '10%',
    statLabel: 'of events'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22l1-1h3l9-9"/><path d="M3 21v-3l9-9"/><circle cx="16" cy="6" r="4"/><path d="M18 4l-2 4"/>
      </svg>
    ),
    title: 'Environmental',
    desc: 'Waste management, pollution control, environmental impact assessment, and green building practices.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    stat: '10%',
    statLabel: 'of focus'
  }
];

export default function FocusAreas() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx);
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, idx]));
            }, idx * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-idx]');
    cards?.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>TECHNICAL DOMAINS</div>
          <h2 className={styles.heading}>
            What We <span className={styles.headingAccent}>Engineer</span>
          </h2>
          <p className={styles.subheading}>
            Our 13,000+ members lead innovation across every discipline of civil engineering.
          </p>
        </div>

        <div className={styles.grid}>
          {AREAS.map((area, i) => (
            <div
              key={i}
              data-idx={i}
              className={`${styles.card} ${visibleCards.has(i) ? styles.cardVisible : ''}`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient top accent */}
              <div className={styles.cardAccent} style={{ background: area.gradient }}></div>

              {/* Icon */}
              <div className={styles.iconWrap} style={{ background: area.gradient }}>
                {area.icon}
              </div>

              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.desc}</p>

              {/* Mini stat */}
              <div className={styles.cardStat}>
                <span className={styles.statValue}>{area.stat}</span>
                <span className={styles.statLabel}>{area.statLabel}</span>
              </div>

              {/* Hover glow */}
              <div
                className={styles.cardGlow}
                style={{
                  background: hoveredCard === i
                    ? area.gradient.replace('135deg', '180deg')
                    : 'transparent'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
