import styles from './Leaderboard.module.css';

const RESULTS = [
  { rank: "001", team: "IIT BOMBAY", competition: "STEEL BRIDGE", score: "98.4" },
  { rank: "002", team: "IIT DELHI", competition: "CONCRETE CANOE", score: "96.2" },
  { rank: "003", team: "NIT TRICHY", competition: "STEEL BRIDGE", score: "94.8" },
  { rank: "004", team: "IIT MADRAS", competition: "GEO-WALL", score: "93.1" },
  { rank: "005", team: "IIT KANPUR", competition: "CONCRETE CANOE", score: "91.5" }
];

export default function Leaderboard() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.terminal}>
          <div className={styles.header}>
            ASCE_IS_COMPETITION_RESULTS {'>'} live_2024
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>RANK</th>
                <th>TEAM_NAME</th>
                <th>COMPETITION</th>
                <th>SCORE</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((res) => (
                <tr key={res.rank} className={res.rank === "001" ? styles.winner : ''}>
                  <td>{res.rank}</td>
                  <td>{res.team}</td>
                  <td>{res.competition}</td>
                  <td>{res.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
