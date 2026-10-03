import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

/**
 * Contact Component
 * Conversion-focused: Direct phone, email, and directions links alongside
 * a fully styled interactive quote request form with immediate feedback.
 */
export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || business.services[0]?.title || '',
    postcode: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if preselectedService changes from service card click
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant clean frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: business.services[0]?.title || '',
      postcode: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.title}
          description={business.contact.description}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-48)',
            alignItems: 'start',
          }}
        >
          {/* Direct Contact Information & Directions */}
          <div
            className="card"
            style={{
              padding: 'var(--space-48)',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              border: 'none',
              boxShadow: 'var(--shadow-hover)',
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-beige-dark)',
                marginBottom: 'var(--space-16)',
                display: 'block',
              }}
            >
              Direct Reach
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                color: 'var(--color-white)',
                marginBottom: 'var(--space-24)',
                lineHeight: 1.2,
              }}
            >
              Speak directly with your local tradesperson.
            </h3>

            <p
              style={{
                color: '#E6DCF0',
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: 'var(--space-32)',
              }}
            >
              For urgent plumbing repairs or to discuss an upcoming installation, call or message us directly.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-24)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {/* Telephone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-16)' }}>
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-white)',
                  }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-beige-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Telephone</div>
                  <a
                    href={`tel:${business.phone}`}
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--color-white)',
                      textDecoration: 'none',
                    }}
                  >
                    {business.formattedPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-16)' }}>
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-white)',
                  }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-beige-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</div>
                  <a
                    href={`mailto:${business.email}`}
                    style={{
                      fontSize: '1rem',
                      color: 'var(--color-white)',
                      textDecoration: 'none',
                      wordBreak: 'break-all',
                    }}
                  >
                    {business.email}
                  </a>
                </div>
              </div>

              {/* Address & Directions */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-16)' }}>
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-white)',
                  }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-beige-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Operating Base</div>
                  <address
                    style={{
                      fontStyle: 'normal',
                      fontSize: '0.95rem',
                      color: 'var(--color-white)',
                      lineHeight: 1.5,
                      marginBottom: 'var(--space-12)',
                    }}
                  >
                    {business.fullAddress}
                  </address>
                  <a
                    href={business.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-beige)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'underline',
                    }}
                  >
                    Get Directions on Google Maps ↗
                  </a>
                </div>
              </div>

              {/* WhatsApp Link - rendered ONLY if whatsappNumber exists */}
              {business.whatsappNumber && (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-16)' }}>
                  <span
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--color-white)',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-beige-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>WhatsApp</div>
                    <a
                      href={`https://wa.me/${business.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '1rem',
                        color: 'var(--color-white)',
                        textDecoration: 'underline',
                      }}
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div style={{ paddingTop: 'var(--space-16)', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <Button href={`tel:${business.phone}`} variant="light" className="w-full" style={{ width: '100%' }}>
                Call Now: {business.formattedPhone}
              </Button>
            </div>
          </div>

          {/* Interactive Quote Request Form */}
          <div
            className="card"
            style={{
              padding: 'var(--space-48)',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-beige-border)',
            }}
          >
            {isSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: 'var(--space-32) 0',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(59, 22, 85, 0.08)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-24) auto',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--space-12)',
                  }}
                >
                  Quote Request Received
                </h3>
                <p
                  style={{
                    color: 'var(--color-ink-muted)',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-32)',
                    maxWidth: '48ch',
                    margin: '0 auto var(--space-32) auto',
                  }}
                >
                  Thank you, {formData.name || 'there'}. We have received your inquiry for <strong>{formData.service}</strong> and will be in touch shortly.
                </p>
                <Button variant="secondary" onClick={handleReset}>
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    color: 'var(--color-ink)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  Request a Free Quote
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-ink-muted)',
                    marginBottom: 'var(--space-32)',
                  }}
                >
                  Fill in your details below and we will get back to you promptly with an initial assessment.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 'var(--space-16)',
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. 07460 690078"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 'var(--space-16)',
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="postcode" className="form-label">
                      Location / Postcode *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      required
                      placeholder="e.g. NR13 3LT"
                      value={formData.postcode}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {business.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other Plumbing Work">Other Domestic Plumbing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Details of the Plumbing Issue or Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Briefly describe what needs fixing or installing..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Sending Request...' : business.ctaPrimary}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
