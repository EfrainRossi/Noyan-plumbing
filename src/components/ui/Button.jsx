import React from 'react';

/**
 * Reusable Button component adhering to the Luxury Design System
 * Supports 'primary', 'secondary', 'light', 'outline-light' variants.
 */
export default function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  icon = null,
  ariaLabel,
}) {
  const baseClass = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        onClick={onClick}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
      >
        <span>{children}</span>
        {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
    </button>
  );
}
