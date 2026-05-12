'use client';
import styles from './RegionList.module.css';

const REGIONS = [
  {
    name: "Northern Region (IS-NR)",
    color: "#003DA5",
    website: "https://asceisnorthernregion.org",
    email: "asceisnr@gmail.com",
    bearers: [
      { title: "President", name: "Dr. Arshdeep Singh" },
      { title: "Secretary", name: "Dr. Ankit Bansal" },
    ]
  },
  {
    name: "Southern Region (IS-SR)",
    color: "#00A9E0",
    website: "https://www.asceissr.com",
    email: "asceissr@gmail.com",
    bearers: [
      { title: "President", name: "S. Pradeep" },
      { title: "Secretary", name: "Elson John" },
      { title: "Treasurer", name: "Dr. Kishor Pankan" },
    ]
  },
  {
    name: "Eastern Region (IS-ER)",
    color: "#00B388",
    website: null,
    email: "asceiser@gmail.com",
    bearers: [
      { title: "President", name: "Dr. Sandip Kumar Deb" },
      { title: "Secretary", name: "Dilip Kumar Dhar" },
    ]
  },
  {
    name: "Western Region (IS-WR)",
    color: "#6B21A8",
    website: null,
    email: "asceiswr@gmail.com",
    bearers: [
      { title: "President", name: "Ravi Sinha" },
      { title: "Secretary", name: "Yasser Khizer Fatehi" },
      { title: "Treasurer", name: "Hiten R. Mahimtura" },
    ]
  }
];

export default function RegionList() {
  return (
    <div className={styles.terminal}>
      <div className={styles.topBar}>
        <div className={styles.dots}>
          <span></span><span></span><span></span>
        </div>
        <div className={styles.title}>REGIONAL_RECORDS_INDEX v2.4</div>
      </div>

      <div className={styles.content}>
        <div className={styles.prompt}>
          <span className={styles.user}>user@asce-india:~$</span> LIST_REGIONS --DETAILED
        </div>

        <div className={styles.grid}>
          {REGIONS.map((region, i) => (
            <div key={i} className={styles.regionCard} style={{ '--accent': region.color }}>
              <div className={styles.regionHeader}>
                <span className={styles.index}>[0{i + 1}]</span>
                <h3 className={styles.regionName}>{region.name}</h3>
              </div>

              <div className={styles.details}>
                <div className={styles.bearersList}>
                  {region.bearers.map((bearer, j) => (
                    <div key={j} className={styles.bearerRow}>
                      <span className={styles.label}>{bearer.title}:</span>
                      <span className={styles.value}>{bearer.name}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.row} style={{ marginTop: '16px' }}>
                  <span className={styles.label}>EMAIL:</span>
                  <a href={`mailto:${region.email}`} className={styles.emailValue}>{region.email}</a>
                </div>

                {region.website && (
                  <div className={styles.row}>
                    <span className={styles.label}>WEBSITE:</span>
                    <a href={region.website} target="_blank" rel="noopener noreferrer" className={styles.emailValue}>
                      {region.website.replace('https://', '')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerPrompt}>
          <span className={styles.cursor}>_</span>
        </div>
      </div>
    </div>
  );
}
