'use client';
import { useState } from 'react';
import styles from './CompassUI.module.css';

const REGIONS = [
  { name: "NORTH", angle: 0, color: "#3B82F6", stats: "4,200 MEMBERS | 12 CHAPTERS" },
  { name: "EAST", angle: 90, color: "#EF9F27", stats: "2,800 MEMBERS | 8 CHAPTERS" },
  { name: "SOUTH", angle: 180, color: "#22D3EE", stats: "3,500 MEMBERS | 15 CHAPTERS" },
  { name: "WEST", angle: 270, color: "#F87171", stats: "2,747 MEMBERS | 12 CHAPTERS" }
];

export default function CompassUI() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={styles.section}>
       <div className={styles.compassWrapper}>
          <div className={styles.rotatingBg}></div>
          <svg className={styles.compass} viewBox="0 0 400 400">
             {/* Center Circle */}
             <circle cx="200" cy="200" r="100" fill="var(--bg-surface)" stroke="var(--asce-blue)" strokeWidth="2" />
             
             {/* Arms */}
             {REGIONS.map(reg => (
               <g 
                 key={reg.name} 
                 className={styles.arm}
                 onMouseEnter={() => setHovered(reg)}
                 onMouseLeave={() => setHovered(null)}
               >
                  <line 
                    x1="200" y1="200" 
                    x2={200 + 150 * Math.sin(reg.angle * Math.PI / 180)} 
                    y2={200 - 150 * Math.cos(reg.angle * Math.PI / 180)} 
                    stroke={hovered?.name === reg.name ? reg.color : "var(--asce-blue)"} 
                    strokeWidth="4"
                  />
                  <circle 
                    cx={200 + 150 * Math.sin(reg.angle * Math.PI / 180)} 
                    cy={200 - 150 * Math.cos(reg.angle * Math.PI / 180)} 
                    r="8" 
                    fill={hovered?.name === reg.name ? reg.color : "var(--bg-surface)"}
                    stroke={reg.color}
                  />
                  <text 
                    x={200 + 180 * Math.sin(reg.angle * Math.PI / 180)} 
                    y={200 - 180 * Math.cos(reg.angle * Math.PI / 180)} 
                    fill="var(--text-primary)" 
                    fontFamily="var(--font-bebas)" 
                    fontSize="20"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                     {reg.name}
                  </text>
               </g>
             ))}
          </svg>

          {hovered && (
            <div className={styles.statChip} style={{ borderColor: hovered.color }}>
               {hovered.stats}
            </div>
          )}
       </div>
    </div>
  );
}
