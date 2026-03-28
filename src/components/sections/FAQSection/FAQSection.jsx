import React, { useState } from 'react';
import { Section, Container } from '../../base';
import { faqData } from '../../../data/faq';
import styles from './FAQSection.module.css';

/**
 * Componente FAQSection - Perguntas frequentes
 */
export const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section role="region" aria-label="Perguntas frequentes">
      <Container size="md">
        <div className={styles.header}>
          <div className={styles.sectionLabel} style={{ textAlign: 'center' }}>
            Dúvidas frequentes
          </div>
          <h2 style={{ textAlign: 'center' }}>Perguntas e respostas</h2>
        </div>

        <div className={styles.faqList}>
          {faqData.map((item) => (
            <div key={item.id} className={styles.faqItem}>
              <button
                className={styles.faqQ}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                {item.question}
              </button>

              {openId === item.id && (
                <div
                  id={`faq-answer-${item.id}`}
                  className={styles.faqA}
                  role="region"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
