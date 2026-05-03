'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './BenefitsGrid.module.css';

const BENEFITS = [
  { id: 1, title: "Technical Journals", desc: "Access to world-class research papers." },
  { id: 2, title: "Global Network", desc: "Connect with 150,000+ members worldwide." },
  { id: 3, title: "Conferences", desc: "Member-only discounts on global summits." },
  { id: 4, title: "Certifications", desc: "Recognized professional development hours." },
  { id: 5, title: "Job Board", desc: "Exclusive access to international engineering roles." },
  { id: 6, title: "Student Chapters", desc: "Mentorship and campus-led initiatives." },
  { id: 7, title: "Webinars", desc: "Free access to live technical presentations." },
  { id: 8, title: "Design Codes", desc: "Latest updates on ASCE building standards." },
  { id: 9, title: "Awards", desc: "Eligibility for national and global recognition." },
  { id: 10, title: "Mentorship", desc: "One-on-one sessions with industry leads." },
  { id: 11, title: "Policy Advocacy", desc: "Voice in infrastructure policy making." },
  { id: 12, title: "E-Learning", desc: "Unlimited access to on-demand training." }
];

export default function BenefitsGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <h2 className="text-section" style={{ marginBottom: '48px' }}>MEMBER BENEFITS</h2>
        <div className={styles.grid}>
          {BENEFITS.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className={`${styles.tile} ${isVisible ? styles.animate : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={styles.iconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 7h10M7 12h10M7 17h10" />
                </svg>
              </div>
              <h3 className={styles.title}>{benefit.title}</h3>
              <p className={styles.desc}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
