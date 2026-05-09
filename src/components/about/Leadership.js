'use client';
import Image from 'next/image';
import styles from './Leadership.module.css';

const LEADERS = [
  {
    id: 1,
    name: "Dr. Har Amrit Singh Sandhu",
    title: "President",
    institution: "Punjab Engineering College, Chandigarh",
    specialisation: "GIS, Remote Sensing & Drone Technology",
    bio: "Assistant Professor in Civil Engineering at PEC Chandigarh. Recipient of ASCE's Distinguished Service Medal (2025) and Outstanding Faculty Advisor Award. Pioneering the use of GIS, remote sensing, and drone technology in civil engineering education and practice across India.",
    image: "/sandhu_profile.png",
    linkedin: "https://www.linkedin.com/in/har-amrit-singh-sandhu/"
  },
  {
    id: 2,
    name: "Dr. Kavita Tandon",
    title: "Secretary",
    institution: "HBTU, Kanpur",
    specialisation: "Geotechnical Earthquake Engineering",
    bio: "Assistant Professor in Civil Engineering at Harcourt Butler Technical University, Kanpur. Ph.D. from IIT Delhi, M.Tech in Earthquake Engineering from IIT Roorkee. Expert in soil dynamics, machine foundations, and seismic geotechnical analysis.",
    image: "/tandon.jpg",
    linkedin: "https://www.linkedin.com/in/dr-kavita-tandon-29843a23/"
  },
  {
    id: 3,
    name: "Ashwani Kundal",
    title: "Treasurer",
    institution: "ASCE India Section",
    specialisation: "Civil & Environmental Engineering",
    bio: "Experienced civil engineer and dedicated ASCE India Section leader. Active contributor to the Indian Society of Earthquake Technology (ISET) and instrumental in managing the financial operations of the ASCE India Section.",
    image: "/kundal.jpg",
    linkedin: "https://www.linkedin.com/in/ashwani-kundal-318705138/"
  }
];

export default function Leadership() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {LEADERS.map((leader) => (
            <div key={leader.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={160}
                  height={160}
                  className={styles.photo}
                />
                <div className={styles.titleBadge}>{leader.title}</div>
              </div>
              <h3 className={styles.name}>{leader.name}</h3>
              <div className={styles.institution}>{leader.institution}</div>
              <div className={styles.specialisation}>{leader.specialisation}</div>
              <p className={styles.bio}>{leader.bio}</p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinBtn}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
