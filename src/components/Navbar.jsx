import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, Bell, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ onOpenPortal, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events & Arenas', href: '#events' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Summit & Keynotes', href: '#speakers' },
    { name: 'Interactive Terminal', href: '#terminal' },
    { name: 'Schedule', href: '#schedule' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 9, 14, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.15)' : '1px solid transparent',
        padding: scrolled ? '12px 24px' : '20px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00f0ff 0%, #ff007f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)',
            }}
          >
            <Zap size={22} color="#000" strokeWidth={2.5} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontWeight: 900,
                fontSize: '1.25rem',
                letterSpacing: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              TECHFEST
              <span style={{ color: 'var(--neon-cyan)', fontSize: '0.8rem' }}>2026</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-rajdhani)',
                fontSize: '0.75rem',
                letterSpacing: '1px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}
            >
              IIT Bombay • 28th Edition
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'none',
            gap: '28px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '1px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--neon-cyan)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onOpenPortal}
            className="btn-cyber-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.8rem',
              letterSpacing: '1px',
            }}
          >
            Pass Portal <ArrowUpRight size={16} />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
              padding: '8px',
              cursor: 'pointer',
            }}
            className="mobile-burger-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '16px',
            background: 'rgba(9, 12, 20, 0.98)',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
