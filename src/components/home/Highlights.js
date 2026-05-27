'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Highlights.module.css';

const ACHIEVEMENTS = [
  {
    year: '2025',
    badge: 'Award',
    title: 'Distinguished Service Medal',
    desc: 'Dr. H.A.S. Sandhu, President of ASCE India Section, received the ASCE Distinguished Service Medal for outstanding contributions to civil engineering education and international engagement.',
    color: '#F59E0B',
    icon: '🏅'
  },
  {
    year: '2025',
    badge: 'Award',
    title: 'Outstanding Faculty Advisor',
    desc: 'Dr. H.A.S. Sandhu was honoured with the ASCE Outstanding Faculty Advisor Award for exemplary leadership of student chapters at Punjab Engineering College.',
    color: '#003DA5',
    icon: '🎓'
  },
  {
    year: '2024',
    badge: 'Milestone',
    title: '47 Active Student Chapters',
    desc: 'ASCE India Section reached a landmark of 47 active student chapters across leading engineering institutions — the largest network of any international section.',
    color: '#10B981',
    icon: '🏛️'
  },
  {
    year: '2024',
    badge: 'Recognition',
    title: 'Outstanding International Branch',
    desc: 'Globally recognised for exceptional student mentorship, technical excellence, and community outreach across the Indian subcontinent.',
    color: '#8B5CF6',
    icon: '🌏'
  }
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    handle: '@asce-india-section',
    url: 'https://www.linkedin.com/company/asce-india-section/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0A66C2',
    gradient: 'linear-gradient(135deg, #0A66C2, #004182)'
  },
  {
    name: 'ASCE Collaborate',
    handle: 'collaborate.asce.org',
    url: 'https://collaborate.asce.org/indias/home',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: '#003DA5',
    gradient: 'linear-gradient(135deg, #003DA5, #001845)'
  },
  {
    name: 'ASCE.org',
    handle: 'Official Global Site',
    url: 'https://www.asce.org',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    color: '#00A9E0',
    gradient: 'linear-gradient(135deg, #00A9E0, #0088AA)'
  }
];

export default function Highlights() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx);
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, idx]));
            }, idx * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-idx]');
    items?.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>RECOGNITION & MILESTONES</div>
          <h2 className={styles.heading}>
            Awards & <span className={styles.accent}>Achievements</span>
          </h2>
          <p className={styles.subheading}>
            Celebrating excellence in Indian civil engineering — our proudest moments.
          </p>
        </div>

        {/* Achievement cards */}
        <div className={styles.achievementGrid} ref={timelineRef}>
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={i}
              data-idx={i}
              className={`${styles.achieveCard} ${visibleItems.has(i) ? styles.achieveVisible : ''}`}
            >
              <div className={styles.achieveIcon}>{item.icon}</div>
              <div className={styles.achieveYear} style={{ color: item.color }}>{item.year}</div>
              <span className={styles.achieveBadge} style={{ background: item.color }}>{item.badge}</span>
              <h3 className={styles.achieveTitle}>{item.title}</h3>
              <p className={styles.achieveDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Social Section */}
        <div className={styles.socialSection}>
          <div className={styles.socialText}>
            <div className={styles.sectionLabel}>CONNECT WITH US</div>
            <h2 className={styles.heading} style={{ fontSize: '32px' }}>
              Join the <span className={styles.accent}>Conversation</span>
            </h2>
            <p className={styles.subheading} style={{ marginBottom: '0' }}>
              Follow us and stay connected with 13,000+ engineers building India's future.
            </p>
          </div>
          <div className={styles.socialCards}>
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <div className={styles.socialIconWrap} style={{ background: s.gradient }}>
                  <span className={styles.socialIcon}>{s.icon}</span>
                </div>
                <div className={styles.socialInfo}>
                  <span className={styles.socialName}>{s.name}</span>
                  <span className={styles.socialHandle}>{s.handle}</span>
                </div>
                <span className={styles.socialArrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
