import React from 'react';
import { Section, Button, Container } from '../../base';
import styles from './FooterCTA.module.css';

/**
 * Componente FooterCTA - Seção CTA final antes do footer
 */
export const FooterCTA = () => {
  return (
    <Section role="region" aria-label="Chamada para ação final">
      <Container size="md">
        <h2 className={styles.headline}>
          Pronto para parar de<br />
          <span className={styles.highlight}>desperdiçar a IA?</span>
        </h2>

        <p className={styles.description}>
          Acesso imediato. Garantia de 7 dias. Sem risco.
        </p>

        <Button
          as="a"
          variant="primary"
          size="lg"
          href="#oferta"
          className={styles.cta}
          aria-label="Rolar para seção de oferta"
        >
          Quero meus prompts agora →
        </Button>
      </Container>
    </Section>
  );
};
