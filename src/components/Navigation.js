'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Membership', path: '/membership' },
  { name: 'Students', path: '/students' },
  { name: 'Events', path: '/events' },
  { name: 'News', path: '/news' },
  { name: 'Resources', path: '/resources' },
  { name: 'Branches', path: '/branches' },
  { name: 'Awards', path: '/awards' },
  { name: 'Contact', path: '/contact' }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} container`}>
        <div className={styles.logoArea}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="ASCE IS"
              width={150}
              height={150}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className={styles.ctaArea}>
          <Link href="/membership" className="btn-primary">
            JOIN SECTION
          </Link>
          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerTop : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerMid : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerBot : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.overlayOpen : ''} bg-grid`}>
        <div className={styles.mobileNavContainer}>
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${styles.mobileNavLink} ${pathname === link.path ? styles.mobileActive : ''}`}
              style={{ transitionDelay: `${isMobileMenuOpen ? index * 0.05 : 0}s` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
