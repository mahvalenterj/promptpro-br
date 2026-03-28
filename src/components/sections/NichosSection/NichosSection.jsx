import React from 'react';
import { Section, Card, Container } from '../../base';
import { nichos } from '../../../data/nichos';
import styles from './NichosSection.module.css';

/**
 * Componente NichosSection - Exibe os 13 nichos cobertos
 */
export const NichosSection = () => {
  return (
    <Section id="nichos" dark={true} role="region" aria-label="Nichos cobertos">
      <Container size="xl">
        <div className={styles.header}>
          <div className={styles.sectionLabel} style={{ textAlign: 'center' }}>
            O que está incluído
          </div>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            13 coleções. Um por nicho.<br />
            Prontos para usar agora.
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '17px', maxWidth: '500px', margin: '0 auto' }}>
            Cada coleção tem entre 80 e 150 prompts organizados em subcategorias
            funcionais.
          </p>
        </div>

        <div className={styles.nichosGrid}>
          {nichos.map((nicho) => (
            <Card key={nicho.name} variant="nicho">
              <div className={styles.emoji} aria-hidden="true">
                {nicho.emoji}
              </div>
              <div className={styles.nichoCa}>
                <div className={styles.name}>{nicho.name}</div>
                <div className={styles.count}>{nicho.count} prompts</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
