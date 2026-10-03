import React from 'react';
import { business } from '../config/business';

/**
 * Footer Component
 * Minimal, calm, and trustworthy: business wordmark, factual contact channels, address, and current year.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary-dark)',
        color: 'var(--color-beige)',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 600,
                color: 'var(--color-white)',
                marginBottom: 'var(--space-12)',
              }}
            >
              {business.name}
            </div>
            <p
              style={{
                color: '#D8CCE2',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.tagline}
            </p>
            <div
              style={{
                fontSize: '0.85rem',
                color: '#B5A5C2',
              }}
            >
              Operating in {business.city}, Freethorpe & East Norfolk
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-beige-dark)',
                marginBottom: 'var(--space-16)',
              }}
            >
              Navigation
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-8)',
              }}
            >
              {business.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#EFE8DC',
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    transition: 'color var(--transition)',
                  }}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Address */}
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-beige-dark)',
                marginBottom: 'var(--space-16)',
              }}
            >
              Operating Address
            </div>
            <address
              style={{
                fontStyle: 'normal',
                color: '#EFE8DC',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.fullAddress}
            </address>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-8)',
                fontSize: '0.92rem',
              }}
            >
              <a
                href={`tel:${business.phone}`}
                style={{ color: 'var(--color-white)', fontWeight: 600 }}
              >
                Tel: {business.formattedPhone}
              </a>
              <a
                href={`mailto:${business.email}`}
                style={{ color: '#D8CCE2' }}
              >
                {business.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            paddingTop: 'var(--space-24)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-16)',
            fontSize: '0.85rem',
            color: '#B5A5C2',
          }}
        >
          <div>
            © {currentYear} {business.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-16)' }}>
            <span>Domestic & Emergency Plumbing</span>
            <span aria-hidden="true">·</span>
            <span>Norwich, Norfolk</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-white) !important;
          transform: translateX(2px);
        }
      `}</style>
    </footer>
  );
}
