import React from 'react';
import styles from './Badge.module.css';

/**
 * Componente Badge - para labels e tags
 * @param {React.ReactNode} children - Conteúdo do badge
 * @param {string} variant - 'primary' | 'success' | 'danger' | 'info' (padrão: 'primary')
 * @param {string} className - Classes CSS adicionais
 * @param {React.ComponentProps<'span'>} props - Props padrão de span
 */
export const Badge = React.forwardRef(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`${styles.badge} ${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
