import React, { useState } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * About Component
 * Refined two-column layout: High-craft imagery on one side,
 * genuine editorial text and local highlights on the other.
 */
export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
        >
          {/* Image Column with Architectural Frame */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-hover)',
              border: '1px solid var(--color-beige-border)',
              aspectRatio: '4 / 3',
              backgroundColor: 'var(--color-beige-surface)',
            }}
          >
            {!imgError ? (
              <img
                src={business.images.about}
                alt="Plumbing craft tools and copper fittings neatly arranged"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--space-32)',
                  textAlign: 'center',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                }}
              >
                {business.name} · Workshop Standards
              </div>
            )}
          </div>

          {/* Text Column */}
          <div>
            <span className="eyebrow">{business.about.eyebrow}</span>
            <h2
              style={{
                fontSize: 'var(--text-h2)',
                color: 'var(--color-ink)',
                marginBottom: 'var(--space-24)',
                lineHeight: 1.18,
              }}
            >
              {business.about.title}
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--color-ink)',
                fontWeight: 500,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.about.lead}
            </p>

            {business.about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: 'var(--color-ink-muted)',
                  marginBottom: 'var(--space-24)',
                }}
              >
                {p}
              </p>
            ))}

            {/* Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-16)',
                paddingTop: 'var(--space-24)',
                marginTop: 'var(--space-24)',
                borderTop: '1px solid var(--color-beige-border)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {business.about.highlights.map((item, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-accent)',
                      marginBottom: 'var(--space-4)',
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Button href="#contact" variant="primary">
                Speak With Us Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
