import React from 'react';
import { Section, Button, Badge, Container } from '../../base';
import styles from './OfertaSection.module.css';

/**
 * Componente OfertaSection - Oferta e CTA de compra
 */
export const OfertaSection = () => {
  return (
    <Section id="oferta" role="region" aria-label="Oferta especial">
      <Container size="md">
        <div className={styles.ofertaBox}>
          <Badge variant="danger" className={styles.badge}>
            ⚡ Oferta por tempo limitado
          </Badge>

          <h2 className={styles.title}>Acesso Rápido Completo ao PromptProBR</h2>

          <p className={styles.subtitle}>
            13 coleções · +1.300 prompts · Acesso imediato
          </p>

          <div className={styles.precoSection}>
            <div className={styles.precoDe}>De R$ 97</div>
            <div className={styles.precoPor}>
              <sup>R$</sup>29,90
            </div>
            <div className={styles.precoDesc}>
              Pagamento único · Sem mensalidade · Acesso vitalício
            </div>
          </div>

          <Button
            as="a"
            variant="primary"
            size="lg"
            href="https://www.asaas.com/c/ox4lity6xw9w4s3j"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.ctaButton}
            aria-label="Comprar PromptProBR agora"
          >
            Quero meus prompts agora →
          </Button>

          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>🔒 Pagamento seguro</div>
            <div className={styles.trustItem}>⚡ Acesso em 5 minutos</div>
            <div className={styles.trustItem}>💳 Pix, cartão ou boleto</div>
          </div>

          <div className={styles.garantia}>
            🛡 Garantia incondicional de 7 dias — 100% do dinheiro de volta
          </div>
        </div>
      </Container>
    </Section>
  );
};
