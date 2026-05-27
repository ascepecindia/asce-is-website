'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './NewsStrip.module.css';

/* ── News data ─────────────────────────────────────────────── */
const NEWS = [
  {
    id: 1,
    date: 'May 2025',
    category: 'Recognition',
    headline: 'Dr. Sandhu Receives ASCE Distinguished Service Medal',
    excerpt:
      'President of ASCE India Section honoured for outstanding contributions to civil engineering education and international engagement at the 2025 ASCE Global Summit.',
    slug: 'sandhu-distinguished-medal',
  },
  {
    id: 2,
    date: 'April 2025',
    category: 'Academic',
    headline: 'New Term 2025-2027 Officers Elected',
    excerpt:
      'The ASCE India Section welcomes its new leadership team for the 2025-2027 term, with elected officers across all four regional branches.',
    slug: 'officers-elected-2025',
  },
  {
    id: 3,
    date: 'March 2025',
    category: 'Technical',
    headline: 'Sustainable Infrastructure Workshop Series',
    excerpt:
      'A nationwide workshop series on green building materials, seismic-resistant design, and smart city infrastructure launched across all regions.',
    slug: 'sustainable-infrastructure-workshops',
  },
];

/* Category → color token mapping */
const CAT_COLORS = {
  Recognition: 'catRecognition',
  Academic: 'catAcademic',
  Technical: 'catTechnical',
};

/* ── Arrow icon ────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginLeft: 4, transition: 'transform 0.25s ease' }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Component ─────────────────────────────────────────────── */
export default function NewsStrip() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* TODO: wire to newsletter API */
    setEmail('');
  };

  return (
    <section className={styles.section}>
      {/* ── Section header ──────────────────────────────── */}
      <div className="container">
        <div className={styles.header}>
          <span className={styles.monoLabel}>Latest Updates</span>
          <h2 className={styles.heading}>News &amp; Announcements</h2>
        </div>

        {/* ── News cards ──────────────────────────────────── */}
        <div className={styles.newsGrid}>
          {NEWS.map((item) => (
            <article
              key={item.id}
              className={styles.newsCard}
            >
              {/* Top row: category pill + date */}
              <div className={styles.cardMeta}>
                <span
                  className={`${styles.pill} ${styles[CAT_COLORS[item.category]] || ''}`}
                >
                  {item.category}
                </span>
                <span className={styles.date}>{item.date}</span>
              </div>

              {/* Headline */}
              <h3 className={styles.headline}>{item.headline}</h3>

              {/* Excerpt (2-line clamp) */}
              <p className={styles.excerpt}>{item.excerpt}</p>

              {/* Read more */}
              <Link href={`/news/${item.slug}`} className={styles.readLink}>
                Read more <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* ── Newsletter CTA Band ────────────────────────── */}
      <div className={styles.newsletterBand}>
        <div className={styles.meshOverlay} aria-hidden="true" />
        <div className="container">
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterHeading}>Stay Connected</h2>
            <p className={styles.newsletterDesc}>
              Get the latest news, event invitations, and technical updates
              delivered straight to your inbox.
            </p>

            <form className={styles.emailForm} onSubmit={handleSubmit}>
              <input
                type="email"
                className={styles.emailInput}
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.btnArrow}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            <p className={styles.trustLine}>
              Join 13,000+ engineers. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
