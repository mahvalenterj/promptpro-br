import React from 'react';
import { Section, Card, Container } from '../../base';
import { dorProblems } from '../../../data/dorProblems';
import styles from './DorSection.module.css';

/**
 * Componente DorSection - Seção de problemas/dores do usuário
 */
export const DorSection = () => {
  return (
    <Section role="region" aria-label="Problemas que PromptProBR resolve">
      <Container size="xl">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>O problema real</div>
          <h2>
            Você usa IA todo dia.<br />
            E o resultado ainda parece mediano.
          </h2>
        </div>

        <div className={styles.dorGrid}>
          {dorProblems.map((problem) => (
            <Card key={problem.id} variant="default" className={styles.dorCard}>
              <div className={styles.icon} aria-hidden="true">
                {problem.emoji}
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
