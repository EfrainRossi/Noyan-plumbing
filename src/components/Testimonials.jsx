import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials Component
 * Rendered ONLY if real testimonials exist in business.js.
 * Otherwise returns null to cleanly omit without leaving empty gaps or filler.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Client Experiences"
          title="What local clients say about our service."
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {business.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: 'var(--space-32)',
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-beige-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--color-ink)',
                  lineHeight: '1.7',
                  marginBottom: 'var(--space-24)',
                }}
              >
                "{t.quote}"
              </p>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                  }}
                >
                  {t.author}
                </div>
                {t.location && (
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-ink-muted)',
                    }}
                  >
                    {t.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
