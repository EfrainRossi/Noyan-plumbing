import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

/**
 * Navbar Component
 * Adheres to Top Bar Contract: Brand title wordmark, clean text navigation links, primary action.
 * Readable on load, refined luxury aesthetic with responsive mobile menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--header-height)',
        backgroundColor: isScrolled ? 'rgba(250, 248, 245, 0.96)' : 'rgba(250, 248, 245, 0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: isScrolled ? '1px solid var(--color-beige-border)' : '1px solid rgba(226, 216, 199, 0.6)',
        boxShadow: isScrolled ? 'var(--shadow-rest)' : 'none',
        transition: 'background-color var(--transition), border-color var(--transition), box-shadow var(--transition)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {/* Zone 1: Single Brand Wordmark in display face */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
          onClick={closeMenu}
        >
          {business.name}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-32)',
          }}
          className="desktop-nav"
        >
          {business.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--color-ink)',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color var(--transition)',
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-16)',
          }}
        >
          <div className="desktop-cta">
            <Button href="#contact" variant="primary">
              {business.ctaPrimary}
            </Button>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              background: 'none',
              border: '1px solid var(--color-beige-border)',
              borderRadius: 'var(--radius-sm)',
              padding: '8px 12px',
              cursor: 'pointer',
              color: 'var(--color-primary)',
              display: 'none',
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-canvas)',
            borderBottom: '1px solid var(--color-beige-border)',
            padding: 'var(--space-24)',
            boxShadow: 'var(--shadow-hover)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
          }}
        >
          {business.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'var(--color-ink)',
                padding: 'var(--space-8) 0',
                borderBottom: '1px solid var(--color-beige-surface)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ marginTop: 'var(--space-8)' }}>
            <Button
              href="#contact"
              variant="primary"
              onClick={closeMenu}
              className="w-full"
              style={{ width: '100%' }}
            >
              {business.ctaPrimary}
            </Button>
          </div>
        </div>
      )}

      {/* Responsive Styles for Navbar */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
        @media (max-width: 480px) {
          .desktop-cta {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
    </header>
  );
}
