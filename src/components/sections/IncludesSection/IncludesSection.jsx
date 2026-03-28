import React from 'react';
import { Section, Container } from '../../base';
import { includes, supportedAIs } from '../../../data/includes';
import styles from './IncludesSection.module.css';

/**
 * Componente IncludesSection - O que está incluído no PromptProBR
 */
export const IncludesSection = () => {
  return (
    <Section role="region" aria-label="O que está incluído">
      <Container size="xl">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>O que você recebe</div>
          <h2>
            Tudo o que está<br />
            incluído no PromptProBR
          </h2>
        </div>

        <div className={styles.grid}>
          <div>
            {includes.map((item) => (
              <div key={item.id} className={styles.includeItem}>
                <div className={styles.checkIcon} aria-hidden="true">
                  ✓
                </div>
                <div className={styles.includeText}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.aiBox}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(124,92,252,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className={styles.aiBoxLabel}>Funciona com</div>
            <div className={styles.aisList}>
              {supportedAIs.map((ai) => (
                <div key={ai.name} className={styles.aiItem}>
                  <span className={styles.aiIcon}>{ai.icon}</span> {ai.name}
                </div>
              ))}
            </div>
            <div className={styles.aiFooter}>
              Todos em português brasileiro. Testados e organizados.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
