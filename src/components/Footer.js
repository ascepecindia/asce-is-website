'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Office Bearers', path: '/about' },
  { name: 'Student Chapters', path: '/students' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>ASCE India Section</div>
          <p className={styles.desc}>
            The India Section of the American Society of Civil Engineers — advancing civil engineering practice, education, and research across the subcontinent since 1989.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.linksList}>
            {LINKS.map((l) => (
              <Link key={l.name} href={l.path} className={styles.footerLink}>
                {l.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <p className={styles.contactLine}>asce.india@asce.org</p>
          <p className={styles.contactLine}>New Delhi, India</p>
          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>in</a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>𝕏</a>
            <a href="#" aria-label="Email" className={styles.socialIcon}>✉</a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className={styles.bottomStrip}>
        <div className="container">
          <p>© {new Date().getFullYear()} ASCE India Section. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
