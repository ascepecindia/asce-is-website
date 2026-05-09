'use client';
import { useState } from 'react';
import styles from './EventsList.module.css';

const EVENTS_DATA = [
  {
    id: 1,
    title: 'International Civil Engineering Symposium',
    date: 'August 15-18, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'IIT Delhi & Virtual',
    type: 'conference',
    status: 'upcoming',
    description: 'A global gathering of industry leaders discussing the future of sustainable infrastructure and smart cities.',
    image: '/cityscape-day.png',
  },
  {
    id: 2,
    title: 'Advanced Concrete Technologies Workshop',
    date: 'September 5, 2026',
    time: '10:00 AM - 02:00 PM',
    location: 'BITS Pilani, Rajasthan',
    type: 'workshop',
    status: 'upcoming',
    description: 'Hands-on training session on next-generation composite materials and ultra-high performance concrete.',
    image: '/cityscape-night.png',
  },
  {
    id: 3,
    title: 'Bridge Design Automation Webinar',
    date: 'October 12, 2026',
    time: '04:00 PM - 06:00 PM',
    location: 'Online',
    type: 'webinar',
    status: 'upcoming',
    description: 'Exploring algorithmic approaches to bridge design using modern CAD and AI-assisted parametric modeling.',
    image: '/cityscape-day.png',
  },
  {
    id: 4,
    title: 'Annual ASCE India Conference 2025',
    date: 'December 10-12, 2025',
    time: '09:00 AM - 06:00 PM',
    location: 'Mumbai',
    type: 'conference',
    status: 'past',
    description: 'Our flagship yearly event featuring keynote speakers from top engineering firms across the subcontinent.',
    image: '/cityscape-night.png',
  },
  {
    id: 5,
    title: 'Seismic Retrofitting Masterclass',
    date: 'January 20, 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'IIT Madras',
    type: 'workshop',
    status: 'past',
    description: 'Specialized training for structural engineers focusing on earthquake-resistant building techniques.',
    image: '/cityscape-day.png',
  },
  {
    id: 6,
    title: 'Coastal Infrastructure Management',
    date: 'March 15, 2026',
    time: '03:00 PM - 05:00 PM',
    location: 'Online',
    type: 'webinar',
    status: 'past',
    description: 'Strategies for mitigating climate change impacts on coastal developments and ports.',
    image: '/cityscape-night.png',
  }
];

export default function EventsList() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredEvents = EVENTS_DATA.filter(e => e.status === activeTab);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'upcoming' ? styles.active : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'past' ? styles.active : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredEvents.map(event => (
          <div key={event.id} className={styles.card}>
            <div className={styles.cardVisual} style={{ backgroundImage: `url(${event.image})` }}>
              <div className={styles.typeTag}>{event.type.toUpperCase()}</div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.dateInfo}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{event.date}</span>
                <span className={styles.separator}>•</span>
                <span>{event.time}</span>
              </div>
              
              <h3 className={styles.title}>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
              
              <div className={styles.cardFooter}>
                <div className={styles.location}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{event.location}</span>
                </div>
                
                {activeTab === 'upcoming' ? (
                  <button className="btn-primary">Register Now</button>
                ) : (
                  <button className="btn-secondary">View Highlights</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
