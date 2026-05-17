'use client';
import styles from './RegionList.module.css';

const REGIONS = [
  {
    name: "Northern Region (IS-NR)",
    color: "#003DA5",
    website: "https://asceisnorthernregion.org",
    email: "asceisnr@gmail.com",
    bearers: [
      { title: "President", name: "Arshdeep Singh, Ph.D., Aff.M.ASCE", email: "arshdeepsingh@pec.edu.in" },
      { title: "Secretary", name: "Ankit Bansal, Ph.D., Aff.M.ASCE", email: "ankitbansal596@gmail.com" },
      { title: "Treasurer", name: "Saswati Datta, Ph.D., Aff.M.ASCE", email: "saswati.datta@ddn.upes.ac.in" },
    ]
  },
  {
    name: "Eastern Region (IS-ER)",
    color: "#00B388",
    website: null,
    email: "asceiser@gmail.com",
    bearers: [
      { title: "President", name: "Sandip Kumar Deb, BEngr, LL.B., MSc, M.ASCE", email: "sandip@valuerdeb.com" },
      { title: "Secretary", name: "Dilip Kumar Dhar, C.Eng., M.ASCE", email: "dkandhar@gmail.com" },
      { title: "Treasurer", name: "Piyali Sengupta, Ph.D., M.ASCE", email: "piyali@iitism.ac.in" },
    ]
  },
  {
    name: "Western Region (IS-WR)",
    color: "#6B21A8",
    website: null,
    email: "asceiswr@gmail.com",
    bearers: [
      { title: "President", name: "Ravi Sinha, Ph.D., M.ASCE", email: "rsinha@civil.iitb.ac.in" },
      { title: "Secretary", name: "Yasser Khizer Fatehi, P.E., M.ASCE", email: "kyfatehiconstructions@gmail.com" },
      { title: "Treasurer", name: "Hiten R. Mahimtura, P.E., M.ASCE", email: "hiten@mahimtura.net" },
    ]
  },
  {
    name: "Southern Region (IS-SR)",
    color: "#00A9E0",
    website: "https://www.asceissr.com",
    email: "asceissr@gmail.com",
    bearers: [
      { title: "President", name: "S. Pradeep, M.ASCE", email: "pradeeps@srmist.edu.in" },
      { title: "Secretary", name: "Elson John, Ph.D., S.E., M.ASCE", email: "elson@mace.ac.in" },
      { title: "Treasurer", name: "Kishor Pankan, MBA, Ph.D., PMP, Prince2, A.M.ASCE", email: "habiletelearningsolutions@gmail.com" },
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
        <div className={styles.title}>REGIONAL_RECORDS_INDEX — Term 2025–2027</div>
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
                      <a href={`mailto:${bearer.email}`} className={styles.emailValue}>{bearer.email}</a>
                    </div>
                  ))}
                </div>

                <div className={styles.row} style={{ marginTop: '16px' }}>
                  <span className={styles.label}>BRANCH EMAIL:</span>
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
