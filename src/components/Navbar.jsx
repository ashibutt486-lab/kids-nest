import React, { useState, useEffect, useCallback } from 'react';
import { Search, Heart, ShoppingBag, ChevronRight } from 'lucide-react';
import '../styles/Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'About Us', href: '#about' },
];

const MOBILE_BREAKPOINT = 900;

export default function Navbar({ cartCount, onOpenCart, logoSrc, onSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [query, setQuery] = useState('');

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  // Shadow on the navbar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link of the section currently on screen
  useEffect(() => {
    const elements = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeMenu();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen, closeMenu]);

  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Auto-close when resizing up to desktop
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`);
    const onChange = (e) => e.matches && closeMenu();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [closeMenu]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
    closeMenu();
  };

  const tabIndex = mobileMenuOpen ? 0 : -1;

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        {/* Hamburger (mobile only) */}
        <button
          type="button"
          className={`nav-icon-btn mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {/* 3 bars that morph into an X (pure CSS, no icon needed) */}
          <span className="hamburger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        {/* Logo */}
        <div className="logo-container">
          <a href="#home" onClick={closeMenu}>
            <img src={logoSrc} alt="Kids Nest Logo" className="logo-img" />
          </a>
        </div>

        {/* Desktop links */}
        <ul className="nav-menu">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button
            type="button"
            className="nav-icon-btn nav-action-search"
            title="Search"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            className="nav-icon-btn nav-action-wishlist"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart size={18} />
          </button>
          <button
            type="button"
            className="nav-icon-btn"
            onClick={onOpenCart}
            title="Cart"
            aria-label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ''}`}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>

        {/* Mobile dropdown (inside <nav> so it sits right under the bar) */}
        <div
          id="mobile-menu"
          className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          {/* Search lives here on phones to keep the top bar clean */}
          <form className="panel-search" onSubmit={handleSearch} role="search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for kidswear..."
              aria-label="Search"
              tabIndex={tabIndex}
            />
          </form>

          <div className="panel-links">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={tabIndex}
                  className={isActive ? 'active' : ''}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} />
                </a>
              );
            })}
          </div>

          <div className="panel-footer">
            <button type="button" className="panel-chip" tabIndex={tabIndex}>
              <Heart size={16} /> Wishlist
            </button>
          </div>
        </div>
      </nav>

      {/* Dim backdrop - click to close (outside <nav> because of backdrop-filter) */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}