import React from 'react';
import styles from './Card.module.css';

/**
 * Componente Card - base reutilizável para cards
 * @param {React.ReactNode} children - Conteúdo do card
 * @param {string} variant - 'default' | 'nicho' | 'testimonial' (padrão: 'default')
 * @param {string} className - Classes CSS adicionais
 * @param {React.ComponentProps<'div'>} props - Props padrão de div
 */
export const Card = React.forwardRef(
  ({ children, variant = 'default', className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.card} ${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
