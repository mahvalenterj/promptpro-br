import React from 'react';
import styles from './Container.module.css';

/**
 * Componente Container - wrapper para centralizar conteúdo
 * @param {React.ReactNode} children - Conteúdo do container
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl' (padrão: 'lg')
 * @param {string} className - Classes CSS adicionais
 * @param {React.ComponentProps<'div'>} props - Props padrão de div
 */
export const Container = React.forwardRef(
  ({ children, size = 'lg', className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.container} ${styles[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
