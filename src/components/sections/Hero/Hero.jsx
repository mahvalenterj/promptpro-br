import React from 'react';
import { Button, Badge, Container } from '../../base';
import styles from './Hero.module.css';

/**
 * Componente Hero - Seção principal com headline e CTAs
 */
export const Hero = () => {
  return (
    <section className={styles.hero} role="main" aria-label="Seção principal">
      <Container size="lg" className={styles.heroContent}>
        <div className={styles.heroLabel}>
          <Badge variant="primary">
            <span className={styles.dot} />
            Novo — Biblioteca completa de prompts para IA
          </Badge>
        </div>

        <h1 className={styles.headline}>
          A IA não é fraca.<br />
          Você só não sabe como<br />
          <span className={styles.highlight}>mandar ela trabalhar.</span>
        </h1>

        <p className={styles.description}>
          Mais de 1.300 prompts profissionais, organizados por nicho, testados para
          entregar resultado de especialista sênior — não de estagiário.
        </p>

        <div className={styles.heroCtas}>
          <Button
            as="a"
            variant="primary"
            size="md"
            href="#oferta"
            aria-label="Ir para seção de oferta"
          >
            Quero meus prompts agora →
          </Button>

          <Button
            as="a"
            variant="ghost"
            size="md"
            href="#nichos"
            aria-label="Ver todos os nichos"
          >
            Ver todos os nichos
          </Button>
        </div>
      </Container>
    </section>
  );
};
