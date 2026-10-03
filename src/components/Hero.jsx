import React from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * Hero Component
 * Luxury aesthetic with full-height presence (min-height: 90vh),
 * rich architectural background, balanced left-aligned hierarchy,
 * dual CTAs, and quiet local trust line.
 */
export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + var(--space-48))',
        paddingBottom: 'var(--space-64)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-primary-dark)',
      }}
      aria-label="Welcome to Noyan Plumbing"
    >
      {/* Background Photography with Tonal Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <img
          src={business.images.hero}
          alt="Luxury modern master bathroom interior with bespoke fixtures"
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />
        {/* Tonal Scrim Overlay for WCAG AA Contrast */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(
              135deg,
              rgba(39, 13, 58, 0.94) 0%,
              rgba(59, 22, 85, 0.85) 50%,
              rgba(28, 25, 30, 0.82) 100%
            )`,
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 'var(--max-width)',
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
          }}
        >
          {/* Eyebrow (City + Business Type) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-8)',
              fontSize: 'var(--text-eyebrow)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--color-beige-dark)',
              marginBottom: 'var(--space-24)',
            }}
          >
            <span>{business.city}</span>
            <span aria-hidden="true" style={{ opacity: 0.6 }}>·</span>
            <span>{business.businessType}</span>
          </div>

          {/* Large Confident H1 Headline */}
          <h1
            style={{
              color: 'var(--color-white)',
              lineHeight: 1.12,
              marginBottom: 'var(--space-24)',
              textWrap: 'balance',
            }}
          >
            {business.tagline}
          </h1>

          {/* Short Supporting Line */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#EFE7F6',
              maxWidth: '62ch',
              marginBottom: 'var(--space-32)',
            }}
          >
            Delivering precision plumbing across Norwich and Freethorpe. From immediate burst pipe and leak repair to full luxury bathroom and heating installations.
          </p>

          {/* Dual CTAs + Direct Call Button */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-16)',
              marginBottom: 'var(--space-48)',
            }}
          >
            <Button href="#contact" variant="light">
              {business.ctaPrimary}
            </Button>
            <Button href="#services" variant="outline-light">
              {business.ctaSecondary}
            </Button>
            <Button
              href={`tel:${business.phone}`}
              variant="outline-light"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              }
            >
              Call {business.formattedPhone}
            </Button>
          </div>

          {/* Quiet Trust Line */}
          <div
            style={{
              paddingTop: 'var(--space-24)',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'var(--space-16)',
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: '0.9rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#A855F7',
                  display: 'inline-block',
                }}
              />
              Serving {business.city}, Freethorpe & Surrounds
            </span>
            <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
            <span>Direct Tradesperson Advice</span>
            <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
            <span>Pressure Tested Standards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
