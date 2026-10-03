import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * FAQ Component
 * Clean, accessible accordion addressing genuine homeowner enquiries.
 */
export default function Faq() {
  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  // Open first item by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: '860px' }}>
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.title}
          description={business.faq.subtitle}
          align="center"
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
          }}
        >
          {business.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)',
                  border: isOpen
                    ? '1px solid var(--color-accent)'
                    : '1px solid var(--color-beige-border)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: 'var(--space-24)',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--space-16)',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      color: 'var(--color-ink)',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.question}
                  </span>

                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-beige-surface)',
                      color: isOpen ? 'var(--color-white)' : 'var(--color-ink)',
                      flexShrink: 0,
                      transition: 'transform var(--transition), background-color var(--transition), color var(--transition)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 var(--space-24) var(--space-24) var(--space-24)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'var(--color-ink-muted)',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
