import React from 'react';
import { Section, Card, Container } from '../../base';
import { depoimentos } from '../../../data/depoimentos';
import styles from './DepoimentosSection.module.css';

/**
 * Componente DepoimentosSection - Depoimentos de clientes
 */
export const DepoimentosSection = () => {
  return (
    <Section dark={true} role="region" aria-label="Depoimentos de clientes">
      <Container size="xl">
        <div className={styles.header}>
          <div className={styles.sectionLabel} style={{ textAlign: 'center' }}>
            Depoimentos
          </div>
          <h2 style={{ textAlign: 'center', marginBottom: '0' }}>
            Quem já usa o PromptProBR
          </h2>
        </div>

        <div className={styles.depoGrid}>
          {depoimentos.map((depo) => (
            <Card
              key={depo.id}
              variant="testimonial"
              className={styles.depoCard}
              role="article"
              aria-label={`Depoimento de ${depo.author}`}
            >
              <div className={styles.stars} aria-label={`${depo.stars} estrelas`}>
                {'★'.repeat(depo.stars)}
              </div>

              <p className={styles.depoText}>{depo.text}</p>

              <div className={styles.depoAuthor}>
                <div className={`${styles.avatar} ${styles[depo.avatarClass]}`}>
                  {depo.avatar}
                </div>
                <div>
                  <div className={styles.authorName}>{depo.author}</div>
                  <div className={styles.authorRole}>{depo.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
