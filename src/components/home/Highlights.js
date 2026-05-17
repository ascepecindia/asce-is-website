import Link from 'next/link';
import styles from './Highlights.module.css';

const ACHIEVEMENTS = [
  {
    year: '2025',
    badge: 'Award',
    title: 'Distinguished Service Medal',
    desc: 'Dr. H.A.S. Sandhu, President of ASCE India Section, received the ASCE Distinguished Service Medal for outstanding contributions to civil engineering education and international engagement.',
    color: '#F59E0B'
  },
  {
    year: '2025',
    badge: 'Award',
    title: 'Outstanding Faculty Advisor Award',
    desc: 'Dr. H.A.S. Sandhu was honoured with the ASCE Outstanding Faculty Advisor Award for exemplary leadership of student chapters at Punjab Engineering College.',
    color: '#003DA5'
  },
  {
    year: '2024',
    badge: 'Milestone',
    title: '47 Active Student Chapters',
    desc: 'ASCE India Section reached a landmark of 47 active student chapters across leading engineering institutions — the largest network of any international section.',
    color: '#10B981'
  },
  {
    year: '2024',
    badge: 'Recognition',
    title: 'Outstanding International Branch',
    desc: 'ASCE India Section was globally recognised for exceptional student mentorship programmes, technical excellence, and community outreach across the Indian subcontinent.',
    color: '#8B5CF6'
  }
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/asce-india-section/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0A66C2'
  },
  {
    name: 'ASCE Collaborate',
    url: 'https://collaborate.asce.org/indias/home',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: '#003DA5'
  },
  {
    name: 'ASCE Global',
    url: 'https://www.asce.org',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    color: '#00A9E0'
  }
];

export default function Highlights() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Achievements */}
        <div className={styles.sectionLabel}>RECOGNITION & MILESTONES</div>
        <h2 className={styles.heading}>Awards & Achievements</h2>
        <p className={styles.subheading}>
          Celebrating the accomplishments of our members and the Section in the current ASCE year.
        </p>

        <div className={styles.timeline}>
          {ACHIEVEMENTS.map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineLeft}>
                <div className={styles.yearBadge}>{item.year}</div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.timelineCard} style={{ '--border-color': item.color }}>
                <span className={styles.badge} style={{ background: item.color }}>{item.badge}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Social / Community */}
        <div className={styles.socialSection}>
          <div className={styles.socialText}>
            <div className={styles.sectionLabel}>CONNECT WITH US</div>
            <h2 className={styles.heading}>Join the Conversation</h2>
            <p className={styles.subheading}>
              Follow us, engage with our community, and stay connected with civil engineering developments across India and the world.
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
                style={{ '--s-color': s.color }}
              >
                <span className={styles.socialIcon} style={{ color: s.color }}>{s.icon}</span>
                <span className={styles.socialName}>{s.name}</span>
                <span className={styles.socialArrow}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
