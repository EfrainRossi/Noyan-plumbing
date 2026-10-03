import React, { useState } from 'react';

/**
 * ServiceCard Component
 * Displays service with elevated aspect-ratio image container, tonal hover zoom,
 * unboxed category metadata, title, clear description, and direct quote CTA.
 */
export default function ServiceCard({ service, onSelectService }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="card service-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-beige-border)',
        overflow: 'hidden',
        transition: 'transform var(--transition), box-shadow var(--transition), border-color var(--transition)',
      }}
    >
      {/* Visual Carrier */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: 'var(--color-beige-surface)',
        }}
      >
        {service.image && !imgError ? (
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="service-card-img"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--color-beige-surface) 0%, var(--color-beige) 100%)',
              padding: 'var(--space-24)',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                color: 'var(--color-primary)',
                opacity: 0.8,
              }}
            >
              {service.category || 'Noyan Plumbing'}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: 'var(--space-24)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {service.category && (
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-accent)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {service.category}
          </div>
        )}

        <h3
          style={{
            fontSize: '1.25rem',
            color: 'var(--color-ink)',
            marginBottom: 'var(--space-8)',
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: '1.6',
            color: 'var(--color-ink-muted)',
            marginBottom: 'var(--space-24)',
            flexGrow: 1,
          }}
        >
          {service.description}
        </p>

        <div
          style={{
            paddingTop: 'var(--space-16)',
            borderTop: '1px solid var(--color-beige-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#contact"
            onClick={() => onSelectService && onSelectService(service.title)}
            style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'var(--color-primary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Request quote
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}
