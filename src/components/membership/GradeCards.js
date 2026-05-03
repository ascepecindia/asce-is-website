import styles from './GradeCards.module.css';

const GRADES = [
  {
    name: "STUDENT",
    color: "#EF9F27",
    criteria: "ENROLLED IN ENG. DEGREE",
    fee: "₹0",
    benefits: [
      { text: "ASCE Library Access", included: true },
      { text: "Branch Events", included: true },
      { text: "Competitions", included: true },
      { text: "Voting Rights", included: false }
    ]
  },
  {
    name: "ASSOCIATE",
    color: "#22D3EE",
    criteria: "ENG. GRADUATE < 5 YRS",
    fee: "₹2,800",
    benefits: [
      { text: "ASCE Library Access", included: true },
      { text: "Branch Events", included: true },
      { text: "Technical Journals", included: true },
      { text: "Voting Rights", included: false }
    ]
  },
  {
    name: "MEMBER",
    color: "#3B82F6",
    criteria: "LICENSED OR > 5 YRS EXP",
    fee: "₹4,500",
    recommended: true,
    benefits: [
      { text: "ASCE Library Access", included: true },
      { text: "Branch Events", included: true },
      { text: "Leadership Roles", included: true },
      { text: "Voting Rights", included: true }
    ]
  },
  {
    name: "FELLOW",
    color: "#A855F7",
    criteria: "BY NOMINATION ONLY",
    fee: "VARIES",
    benefits: [
      { text: "Global Recognition", included: true },
      { text: "Life Membership", included: true },
      { text: "Advisory Council", included: true },
      { text: "Voting Rights", included: true }
    ]
  }
];

export default function GradeCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-section" style={{ marginBottom: '48px' }}>MEMBERSHIP GRADES</h2>
        <div className={styles.grid}>
          {GRADES.map((grade) => (
            <div key={grade.name} className={`${styles.card} ${grade.recommended ? styles.recommended : ''}`}>
              <div className={styles.accent} style={{ backgroundColor: grade.color }}></div>
              {grade.recommended && <div className={styles.badge}>RECOMMENDED</div>}
              
              <div className={styles.cardHeader}>
                <div className={styles.name}>{grade.name}</div>
                <div className={styles.criteria}>{grade.criteria}</div>
              </div>
              
              <div className={styles.benefits}>
                {grade.benefits.map((benefit, i) => (
                  <div key={i} className={`${styles.benefit} ${!benefit.included ? styles.excluded : ''}`}>
                    <span className={styles.check}>{benefit.included ? '[✓]' : '[✗]'}</span>
                    <span className={styles.benefitText}>{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.footer}>
                <div className={styles.fee}>{grade.fee} <span className={styles.period}>/ YEAR</span></div>
                <button className={styles.applyBtn}>APPLY NOW &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
