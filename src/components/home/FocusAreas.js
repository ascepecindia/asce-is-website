import styles from './FocusAreas.module.css';

const AREAS = [
  {
    icon: '🏗️',
    title: 'Structural Engineering',
    desc: 'Seismic-resistant design, high-rise structures, bridges, and industrial buildings using the latest codes and computational tools.',
    color: '#003DA5'
  },
  {
    icon: '🌍',
    title: 'Geotechnical Engineering',
    desc: 'Soil mechanics, foundation design, slope stability, and earthquake geotechnics for India\'s diverse and challenging terrain.',
    color: '#00A9E0'
  },
  {
    icon: '💧',
    title: 'Water Resources',
    desc: 'Hydraulics, hydrology, dam safety, irrigation systems, and integrated watershed management for sustainable water use.',
    color: '#00B388'
  },
  {
    icon: '🛣️',
    title: 'Transportation Engineering',
    desc: 'Highway design, traffic systems, urban transit planning, and smart mobility infrastructure for India\'s growing cities.',
    color: '#F59E0B'
  },
  {
    icon: '🌿',
    title: 'Environmental Engineering',
    desc: 'Waste management, pollution control, environmental impact assessment, and sustainable construction practices.',
    color: '#10B981'
  },
  {
    icon: '🏙️',
    title: 'Urban & Construction',
    desc: 'Project management, smart city infrastructure, urban planning, and construction technology for 21st-century development.',
    color: '#8B5CF6'
  }
];

export default function FocusAreas() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionLabel}>TECHNICAL DOMAINS</div>
        <h2 className={styles.heading}>Key Focus Areas</h2>
        <p className={styles.subheading}>
          Our members lead research and practice across all major disciplines of civil engineering.
        </p>

        <div className={styles.grid}>
          {AREAS.map((area, i) => (
            <div key={i} className={styles.card} style={{ '--card-color': area.color }}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{area.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
