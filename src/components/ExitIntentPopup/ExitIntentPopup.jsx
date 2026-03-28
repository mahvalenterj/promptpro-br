import { useCallback, useEffect, useMemo, useState } from 'react';
import { markPopupShown, useExitIntent } from './useExitIntent';
import styles from './ExitIntentPopup.module.css';

const initialState = { name: '', email: '' };

const isEmailValid = (email) => {
  const normalized = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
};

const getPopupWasShown = () => localStorage.getItem('popupShown') === 'true';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canShow = useMemo(() => !getPopupWasShown() && !isOpen && !isSubmitted, [isOpen, isSubmitted]);

  const handleOpen = useCallback(() => {
    if (getPopupWasShown()) return;

    markPopupShown();
    setIsOpen(true);
  }, []);

  useExitIntent(() => {
    if (canShow) {
      handleOpen();
    }
  }, isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const validate = () => {
    const nextErrors = { name: '', email: '' };
    if (!formData.name.trim()) nextErrors.name = 'Nome é obrigatório.';
    if (!formData.email.trim()) nextErrors.email = 'Email é obrigatório.';
    else if (!isEmailValid(formData.email)) nextErrors.email = 'Email inválido.';

    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    if (!validate()) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Popup antes de sair"
    >
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Fechar popup">
          ×
        </button>
        <h2 className={styles.title}>Antes de sair...</h2>
        <p className={styles.text}>Baixe grátis meu ebook com +100 IAs que aumentam sua produtividade</p>

        {isSubmitted ? (
          <p className={styles.successText}>Pronto! Verifique seu email 📩</p>
        ) : (
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <label>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                autoComplete="name"
                aria-label="Nome"
                required
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </label>

            <label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                autoComplete="email"
                aria-label="Email"
                required
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </label>

            <button className={styles.submitButton} type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Quero receber o ebook'}
            </button>

            <p className={styles.mobileHint}>Envio imediato no seu email.</p>
          </form>
        )}
      </div>
    </div>
  );
}
