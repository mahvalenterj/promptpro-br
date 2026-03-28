import React from 'react';
import { stats } from '../../../data/stats';
import styles from './StatsBar.module.css';

/**
 * Componente StatsBar - Barra de estatísticas
 */
export const StatsBar = () => {
  return (
    <div
      className={styles.statsBar}
      role="region"
      aria-label="Estatísticas do PromptProBR"
    >
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <div className={styles.stat}>
            <div className={styles.statNum}>
              {stat.num}
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>

          {index < stats.length - 1 && <div className={styles.divider} />}
        </React.Fragment>
      ))}
    </div>
  );
};
