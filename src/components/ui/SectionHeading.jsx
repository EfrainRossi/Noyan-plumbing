import React from 'react';

/**
 * Reusable SectionHeading component
 * Enforces anti-AI-slop rules: clean unboxed eyebrow, balanced title, 65ch max-width description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  isLight = false,
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: isCentered ? 'center' : 'left',
        maxWidth: isCentered ? '760px' : '680px',
        marginLeft: isCentered ? 'auto' : '0',
        marginRight: isCentered ? 'auto' : '0',
        marginBottom: 'var(--space-48)',
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{
            color: isLight ? 'var(--color-beige-surface)' : 'var(--color-accent)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          color: isLight ? 'var(--color-white)' : 'var(--color-ink)',
          marginBottom: description ? 'var(--space-16)' : '0',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            color: isLight ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-ink-muted)',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            marginLeft: isCentered ? 'auto' : '0',
            marginRight: isCentered ? 'auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
