import React from 'react';
import { Zap, Heart, Mail, Phone, MapPin, Globe, ExternalLink, Share2, Compass, Radio } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'rgba(5, 7, 12, 0.95)',
        borderTop: '1px solid rgba(0, 240, 255, 0.15)',
        padding: '70px 24px 30px',
        color: 'var(--text-muted)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}
      >
        {/* Col 1: Brand & IITB Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #00f0ff 0%, #ff007f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Zap size={18} color="#000" />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontWeight: 900,
                fontSize: '1.2rem',
                color: '#fff',
                letterSpacing: '1px',
              }}
            >
              TECHFEST
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.7', color: 'var(--text-dim)', marginBottom: '18px' }}>
            Asia’s Largest Science and Technology Festival, organized by the student body of the Indian Institute of Technology Bombay.
          </p>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={15} color="var(--neon-cyan)" /> Student Activity Centre (SAC), IIT Bombay, Powai, Mumbai - 400076
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={15} color="var(--neon-magenta)" /> info@techfest.org
            </div>
          </div>
        </div>

        {/* Col 2: Fast Navigation */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '18px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Festival Wings
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <li>
              <a href="#events" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                International Robowars
              </a>
            </li>
            <li>
              <a href="#events" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                International Tech Expo
              </a>
            </li>
            <li>
              <a href="#competitions" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                Coding & Robotics Leagues
              </a>
            </li>
            <li>
              <a href="#speakers" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                Global Leadership Summit
              </a>
            </li>
            <li>
              <a href="#events" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                Techfest World MUN
              </a>
            </li>
            <li>
              <a href="#events" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                Technoholix Pro Shows
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Portals */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '18px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Direct Portals
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
            <li>
              <a href="https://techfest.org" target="_blank" rel="noreferrer" style={{ color: 'var(--neon-cyan)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Official techfest.org Live <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="#schedule" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                Accommodation Booking Portal
              </a>
            </li>
            <li>
              <a href="#schedule" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                College Ambassador Program
              </a>
            </li>
            <li>
              <a href="#terminal" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                Interactive CLI Console
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
                Media & Press Room
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Patronage & Socials */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '18px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Patronage & Socials
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '16px' }}>
            Under the patronage of <strong>UNESCO</strong>, <strong>UNICEF</strong>, and the <strong>Government of India</strong>.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'X', href: 'https://twitter.com/Techfest_IITB' },
              { label: 'IG', href: 'https://instagram.com/techfest_iitbombay' },
              { label: 'LI', href: 'https://linkedin.com/company/techfest' },
              { label: 'GH', href: 'https://github.com' },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--neon-cyan)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-orbitron)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {soc.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: 'var(--text-dim)',
        }}
      >
        <div>
          © 2026 Techfest, IIT Bombay. All rights reserved. Crafted for Asia's premier science and technology festival.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Rulebooks</a>
        </div>
      </div>
    </footer>
  );
};
