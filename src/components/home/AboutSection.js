'use client';
import { useState } from 'react';
import styles from './AboutSection.module.css';

const TABS = [
  {
    id: 'history',
    label: 'History',
    icon: '🏛️',
    content: {
      heading: 'Established 1989',
      body: 'The ASCE India Section was officially established in 1989, making it one of the oldest and most active international sections of the American Society of Civil Engineers. Founded by pioneering Indian civil engineers committed to raising professional standards, the Section has grown from a handful of founding members to over 13,000 professionals across the Indian subcontinent. It represents the collective ambition of a generation of engineers dedicated to applying global best practices to India\'s rapidly evolving infrastructure landscape.'
    }
  },
  {
    id: 'mission',
    label: 'Mission & Vision',
    icon: '🎯',
    content: {
      heading: 'Advancing Civil Engineering in India',
      body: 'Our mission is to advance the art, science, and practice of civil engineering to enhance the welfare of humanity. We achieve this through technical knowledge sharing, professional development workshops, student mentorship, and active collaboration with government bodies, academic institutions, and industry partners. Our vision is to be the pre-eminent professional body for civil engineers in India — fostering innovation, ethical practice, and sustainable infrastructure development that meets the nation\'s needs for generations to come.'
    }
  },
  {
    id: 'structure',
    label: 'Structure',
    icon: '🗺️',
    content: {
      heading: '4 Regional Branches, 47 Student Chapters',
      body: 'The India Section is organised into four regional branches — Northern, Southern, Eastern, and Western — each led by elected office bearers. These branches coordinate local events, workshops, and technical programmes tailored to the unique engineering challenges of their respective regions. Complementing this, 47 active student chapters at leading engineering colleges across the country form the next generation pipeline, engaging thousands of undergraduate and postgraduate students in technical competitions, field visits, and mentorship programmes every year.'
    }
  },
  {
    id: 'membership',
    label: 'Membership',
    icon: '👥',
    content: {
      heading: 'Open to All Civil Engineering Professionals',
      body: 'ASCE membership is open to students, early-career professionals, and experienced engineers alike. As a member of the ASCE India Section, you gain access to a global network of over 150,000 civil engineers worldwide, technical journals and publications, CE Talks and webinars, discounted conference registrations, leadership opportunities within the Section and its branches, and recognition programmes for outstanding contributions. Student membership is available at no cost, making it accessible for the next generation of Indian civil engineers to connect with a world-class professional community from day one.'
    }
  },
  {
    id: 'student_events',
    label: 'Student Events',
    icon: '🎓',
    content: {
      heading: 'Student-Oriented Activities',
      body: ''
    }
  }
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('history');
  const active = TABS.find(t => t.id === activeTab);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionLabel}>WHO WE ARE</div>
        <h2 className={styles.heading}>About the ASCE India Section</h2>
        <p className={styles.subheading}>
          A premier professional organisation advancing civil engineering across the Indian subcontinent since 1989.
        </p>

        <div className={styles.layout}>
          {/* Tab nav */}
          <div className={styles.tabs}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabIcon}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className={styles.panel}>
            {activeTab === 'student_events' ? (
              <div className={styles.comingSoon}>
                <div className={styles.comingSoonIcon}>🎓</div>
                <h3 className={styles.panelHeading}>Student-Oriented Activities</h3>
                <p className={styles.panelBody} style={{ marginBottom: '28px' }}>
                  This section will feature student-oriented events, competitions, workshops, field visits,
                  and mentorship opportunities organised by ASCE India Section and its 47 student chapters.
                </p>
                <div className={styles.activityTags}>
                  {['Technical Competitions', 'Bridge Building Contest', 'Concrete Canoe', 'Mentorship Programme', 'Field Visits', 'Webinars & CE Talks', 'Student Chapter Awards'].map((tag, i) => (
                    <span key={i} className={styles.activityTag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.loadingBanner}>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingText}>Information Loading Soon — Check Back Shortly</span>
                </div>
                <a href="/students" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
                  Visit Student Chapters →
                </a>
              </div>
            ) : (
              <>
                <h3 className={styles.panelHeading}>{active.content.heading}</h3>
                <p className={styles.panelBody}>{active.content.body}</p>

                {activeTab === 'membership' && (
                  <a
                    href="https://sp360.asce.org/personifyebusiness/Membership/Join-ASCE/MembershipJoinRegistration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ marginTop: '24px', display: 'inline-flex' }}
                  >
                    Join ASCE Today →
                  </a>
                )}
                {activeTab === 'structure' && (
                  <a href="/regions" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
                    View Regional Branches →
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
