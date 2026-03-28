import React from 'react';
import styles from './Button.module.css';

/**
 * Componente Button reutilizável
 * @param {string} variant - 'primary' | 'ghost' (padrão: 'primary')
 * @param {string} size - 'sm' | 'md' | 'lg' (padrão: 'md')
 * @param {string} className - Classes CSS adicionais
 * @param {React.ReactNode} children - Conteúdo do botão
 * @param {React.ComponentProps<'button' | 'a'>} props - Props padrão de button/a
 */
export const Button = React.forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      as = 'button',
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;
    const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    return (
      <Component ref={ref} className={classNames} {...props}>
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
