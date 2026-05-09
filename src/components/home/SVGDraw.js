'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.imageArea}>
            <Image
              src="/about-section.png"
              alt="ASCE India Section engineers collaborating on infrastructure projects"
              width={600}
              height={450}
              className={styles.sectionImage}
              priority={false}
            />
          </div>

          <div className={styles.textArea}>
            <h2>About the Section</h2>
            <p className={styles.body}>
              The ASCE India Section was established in 1989 to serve the civil engineering community across the Indian subcontinent. We connect over 13,000 professionals, academics, and students through 4 regional branches.
            </p>
            <div className={styles.facts}>
              <div className={styles.fact}>
                <strong>Mission</strong>
                <p>Advance civil engineering practice, knowledge, and professional development in India.</p>
              </div>
              <div className={styles.fact}>
                <strong>Reach</strong>
                <p>47 active student chapters across leading engineering colleges, with annual competitions and mentorship programmes.</p>
              </div>
              <div className={styles.fact}>
                <strong>Impact</strong>
                <p>200+ technical events annually — from seismic design workshops to sustainable infrastructure summits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
