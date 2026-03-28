import React from 'react';
import { Button, Badge, Container } from '../../base';
import styles from './Navbar.module.css';

/**
 * Componente Navbar - Navegação principal com logo e CTA
 */
export const Navbar = () => {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Navegação principal">
      <Container size="xl" className={styles.navContainer}>
        <div className={styles.logo}>
          Prompt<span className={styles.logoAccent}>ProBR</span>
        </div>

        <div className={styles.navBadge}>
          <Badge variant="primary">✦ +1.300 prompts profissionais</Badge>
        </div>

        <Button
          as="a"
          variant="primary"
          size="sm"
          href="https://www.asaas.com/c/ox4lity6xw9w4s3j"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Acessar PromptProBR"
        >
          Quero acesso →
        </Button>
      </Container>
    </nav>
  );
};
