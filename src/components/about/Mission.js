'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Mission.module.css';

const MISSION_TEXT = "To deliver value to our members, advance civil engineering, and protect the public health, safety, and welfare by leading the profession in India.";
const VISION_TEXT = "A world where civil engineers are global leaders building a better quality of life. We aim to integrate sustainable practices, foster innovation, and inspire the next generation of infrastructure pioneers across the subcontinent.";

function AnimatedText({ text, isVisible }) {
  const words = text.split(' ');
  
  return (
    <p className={styles.textBody}>
      {words.map((word, index) => (
        <span 
          key={index} 
          className={`${styles.word} ${isVisible ? styles.visible : ''}`}
          style={{ transitionDelay: `${index * 30}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}

export default function Mission() {
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
    <section id="mission" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Mission Card */}
          <div className={`${styles.card} ${styles.cardMission}`}>
            <div className={styles.bgHash}>#</div>
            <h2 className={styles.title}>OUR MISSION</h2>
            <AnimatedText text={MISSION_TEXT} isVisible={isVisible} />
          </div>
          
          {/* Vision Card */}
          <div className={`${styles.card} ${styles.cardVision}`}>
            <div className={styles.bgHash}>#</div>
            <h2 className={styles.title}>OUR VISION</h2>
            <AnimatedText text={VISION_TEXT} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}
