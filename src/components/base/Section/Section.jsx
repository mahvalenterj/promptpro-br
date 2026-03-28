import React from 'react';
import styles from './Section.module.css';

/**
 * Componente Section - wrapper padrão para seções
 * @param {React.ReactNode} children - Conteúdo da seção
 * @param {string} className - Classes CSS adicionais
 * @param {string} id - ID da seção
 * @param {boolean} dark - Se a seção tem fundo escuro (padrão: false)
 * @param {React.ComponentProps<'section'>} props - Props padrão de section
 */
export const Section = React.forwardRef(
  ({ children, className = '', id, dark = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`${styles.section} ${dark ? styles.dark : ''} ${className}`}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
