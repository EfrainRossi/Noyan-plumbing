import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

/**
 * Services Component
 * Elevated service showcase:
 * 1. Marquee feature cards with large imagery, aspect ratio containers, and tonal hover zoom.
 * 2. Refined service directory covering all domestic plumbing specialties.
 */
export default function Services({ onSelectService }) {
  const featuredServices = business.services.filter((s) => s.featured);
  const standardServices = business.services.filter((s) => !s.featured);

  return (
    <section id="services" className="section section--alt">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Specialist Services"
          title="Engineered solutions for every plumbing need."
          description="Whether addressing an urgent water leak or planning a luxury bathroom upgrade in Norwich, our work is carried out to the highest standard of durability and cleanliness."
          align="center"
        />

        {/* Marquee Featured Services (3 Across Desktop, 1 Mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Secondary Services Directory */}
        <div
          style={{
            marginTop: 'var(--space-64)',
            paddingTop: 'var(--space-48)',
            borderTop: '1px solid var(--color-beige-border)',
          }}
        >
          <div
            style={{
              marginBottom: 'var(--space-32)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 'var(--space-16)',
            }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                color: 'var(--color-primary)',
              }}
            >
              Additional Plumbing & Heating Disciplines
            </h3>
            <span
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-ink-muted)',
              }}
            >
              All works fully tested & guaranteed
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-24)',
            }}
          >
            {standardServices.map((service) => (
              <div
                key={service.id}
                className="card"
                style={{
                  padding: 'var(--space-24)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-beige-border)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-accent)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {service.category}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      color: 'var(--color-ink)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    {service.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-ink-muted)',
                      lineHeight: '1.6',
                      marginBottom: 'var(--space-16)',
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: 'var(--color-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: 'var(--space-8)',
                  }}
                >
                  Book this service <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
