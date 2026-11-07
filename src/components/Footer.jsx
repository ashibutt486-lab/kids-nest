import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight } from 'lucide-react';
import '../styles/Footer.css';

const CARE_LINKS = [
  { label: 'Size Guide', href: '#' },
  { label: 'Shipping Info', href: '#' },
  { label: 'Returns & Refunds', href: '#' },
  { label: 'Contact Support', href: '#' },
];

// TODO: replace with your real contact details
const CONTACT = {
  email: 'hello@kidsnest.com',
  phone: '+92 300 1234567',
  address: 'Karachi, Pakistan',
};

/* Inline social icons (no extra package needed) */
const SocialIcon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <SocialIcon>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </SocialIcon>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <SocialIcon>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </SocialIcon>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <SocialIcon>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </SocialIcon>
    ),
  },
];

export default function Footer({ logoSrc }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: connect to your newsletter service / backend here
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* ---------- Newsletter band (compact) ---------- */}
        <div >
          {/* <div className="newsletter-text">
            <h3>Join the Nest 🌿</h3>
            <p>Get 10% off your first order.</p>
          </div> */}
{/* 
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-field">
              <Mail size={18} aria-hidden="true" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscribed) setSubscribed(false);
                }}
                placeholder="Your email address"
                aria-label="Email address"
                required
              />
            </div>
            <button type="submit" className="newsletter-btn">
              Subscribe <ArrowRight size={16} />
            </button>
            <p className="newsletter-msg" role="status" aria-live="polite">
              {subscribed ? "Thank you! You're on the list 💛" : ''}
            </p>
          </form> */}
        </div>

        {/* ---------- Main columns: Brand | Customer Care | Contact ---------- */}
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logoSrc} alt="Kids Nest Logo" className="footer-logo" />
            <p className="footer-desc">
              Where little dreams take flight. Premium, sustainable clothing for active kids aged 1
              to 14.
            </p>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="social-btn">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Customer Care</h4>
            <ul className="footer-links">
              {CARE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Kids Nest. Crafted for Little Dreamers.
          </p>

          <div className="footer-badges">
            <span>Secure Checkout</span>
            <span>Cash on Delivery</span>
            <span>Easy Returns</span>
          </div>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}