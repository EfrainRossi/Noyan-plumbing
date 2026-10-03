import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * WhyChooseUs Component
 * Grounded strictly in factual local business points with clean editorial numbering.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.title}
          description={business.whyChooseUs.subtitle}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {business.whyChooseUs.points.map((point) => (
            <div
              key={point.number}
              className="card"
              style={{
                padding: 'var(--space-32)',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-beige-border)',
              }}
            >
              {/* Editorial Number */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--color-primary-light)',
                  marginBottom: 'var(--space-16)',
                  lineHeight: 1,
                }}
              >
                {point.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-12)',
                  lineHeight: 1.3,
                }}
              >
                {point.title}
              </h3>

              {/* One clear line / brief description */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.6,
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
