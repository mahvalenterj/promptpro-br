import { useEffect } from 'react';

const STORAGE_KEY = 'popupShown';

export function useExitIntent(onIntent, isOpen) {
  useEffect(() => {
    if (isOpen) {
      return;
    }

    const isAlreadyShown = localStorage.getItem(STORAGE_KEY) === 'true';
    if (isAlreadyShown) {
      return;
    }

    const onMouseLeave = (event) => {
      if (event.clientY <= 0) {
        onIntent('desktop');
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        onIntent('visibility');
      }
    };

    const mobileDelay = window.setTimeout(() => {
      onIntent('mobile');
    }, 12000);

    window.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.clearTimeout(mobileDelay);
      window.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [isOpen, onIntent]);
}

export function markPopupShown() {
  localStorage.setItem(STORAGE_KEY, 'true');
}
