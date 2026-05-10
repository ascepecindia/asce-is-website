'use client';
import styles from './RegionList.module.css';

const REGIONS = [
  {
    name: "Northern Region (IS-NR)",
    officeBearer: "Dr. Arshdeep Singh (President)",
    email: "asceisnr@gmail.com",
    city: "Chandigarh / Delhi",
    color: "#003DA5"
  },
  {
    name: "Southern Region (IS-SR)",
    officeBearer: "President, ASCE ISSR",
    email: "asceissr@gmail.com",
    city: "Chennai / Bangalore",
    color: "#00A9E0"
  },
  {
    name: "Eastern Region (IS-ER)",
    officeBearer: "Dr. Sandip Kumar Deb (President)",
    email: "asceer@gmail.com",
    city: "Kolkata",
    color: "#00B388"
  },
  {
    name: "Western Region (IS-WR)",
    officeBearer: "President, ASCE IS-WR",
    email: "asceiswr@gmail.com",
    city: "Mumbai / Pune",
    color: "#6B21A8"
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
                <div className={styles.row}>
                  <span className={styles.label}>OFFICE BEARER:</span>
                  <span className={styles.value}>{region.officeBearer}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>EMAIL ADDR:</span>
                  <a href={`mailto:${region.email}`} className={styles.emailValue}>{region.email}</a>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>HQ CITY:</span>
                  <span className={styles.value}>{region.city}</span>
                </div>
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
