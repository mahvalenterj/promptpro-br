import React from 'react';
import styles from './BackgroundEffects.module.css';

/**
 * Componente BackgroundEffects - Orbs flutuantes + Grid de fundo
 * Renderizado fora do fluxo principal com z-index baixo
 */
export const BackgroundEffects = () => {
  return (
    <div className={styles.effectsContainer}>
      {/* GRID BACKGROUND */}
      <div className={styles.gridBackground} />

      {/* ORBS */}
      <div className={styles.orb} data-orb="1" />
      <div className={styles.orb} data-orb="2" />
      <div className={styles.orb} data-orb="3" />
    </div>
  );
};
