import React from 'react';
import styles from './Footer.module.css';

/**
 * Componente Footer - Rodapé
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.content}>
        <div className={styles.brand}>
          <strong>PromptProBR</strong>
        </div>
        <div className={styles.credit}>
          Todos os direitos reservados · promptprobr.com.br
        </div>
        <div className={styles.contact}>
          Dúvidas? <a href="mailto:matrainer4@gmail.com">matrainer4@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};
