import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, Trophy, Users, ShieldAlert, Cpu, ChevronRight, Play } from 'lucide-react';

export const Hero = ({ onExplore, onOpenPortal }) => {
  // Countdown timer to Techfest IIT Bombay
  const targetDate = new Date('2026-12-18T09:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Fallback live display
        setTimeLeft({ days: 42, hours: 14, minutes: 28, seconds: 40 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px',
        textAlign: 'center',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(255,0,127,0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
        className="animate-pulse-glow"
      />

      {/* IIT Bombay Pill Badge */}
      <div
        className="tech-badge"
        style={{
          marginBottom: '24px',
          padding: '6px 18px',
          fontSize: '0.9rem',
          letterSpacing: '1.5px',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00ffaa',
            boxShadow: '0 0 10px #00ffaa',
            display: 'inline-block',
          }}
        />
        INDIAN INSTITUTE OF TECHNOLOGY BOMBAY PRESENTS
      </div>

      {/* Main Massive Title */}
      <h1
        style={{
          fontFamily: 'var(--font-orbitron)',
          fontWeight: 900,
          fontSize: 'clamp(2.8rem, 7vw, 6.2rem)',
          lineHeight: '1.05',
          letterSpacing: '2px',
          marginBottom: '18px',
          textTransform: 'uppercase',
        }}
      >
        TECHFEST <span style={{ color: 'var(--neon-cyan)', WebkitTextStroke: '1px var(--neon-cyan)' }}>2026</span>
      </h1>

      {/* Subtitle / Theme */}
      <div
        style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          letterSpacing: '4px',
          color: '#ffffff',
          marginBottom: '20px',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <span>AN AETHERIAL RENAISSANCE</span>
        <span style={{ color: 'var(--neon-magenta)' }}>//</span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>
          ASIA'S LARGEST SCIENCE & TECH FESTIVAL
        </span>
      </div>

      {/* Descriptive summary */}
      <p
        style={{
          maxWidth: '740px',
          color: 'var(--text-muted)',
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          marginBottom: '40px',
          lineHeight: '1.7',
        }}
      >
        Over 175,000+ visionaries, technologists, and competitors unite at the iconic Powai campus.
        Witness heavyweight Robowars, international robotics expos, high-stakes coding arenas, 
        and keynotes from Nobel Laureates & tech pioneers.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          gap: '18px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '56px',
        }}
      >
        <button onClick={onOpenPortal} className="btn-cyber-primary">
          Claim Free Festival Pass <ChevronRight size={18} />
        </button>
        <a href="#events" className="btn-cyber-outline">
          Explore Arenas & Competitions
        </a>
      </div>

      {/* Countdown Timer HUD */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 36px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(70px, 1fr))',
          gap: '24px',
          maxWidth: '560px',
          width: '100%',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        {[
          { label: 'DAYS', val: timeLeft.days },
          { label: 'HOURS', val: timeLeft.hours },
          { label: 'MINUTES', val: timeLeft.minutes },
          { label: 'SECONDS', val: timeLeft.seconds },
        ].map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: idx === 3 ? 'var(--neon-magenta)' : 'var(--neon-cyan)',
                textShadow: '0 0 12px rgba(0,240,255,0.4)',
                lineHeight: 1,
              }}
            >
              {String(item.val).padStart(2, '0')}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-rajdhani)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: 'var(--text-dim)',
                marginTop: '6px',
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Micro Metrics bar below countdown */}
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 600,
          letterSpacing: '1px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={16} color="var(--neon-cyan)" /> IIT BOMBAY, MUMBAI
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trophy size={16} color="var(--neon-amber)" /> ₹40+ LAKHS PRIZE POOL
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={16} color="var(--neon-emerald)" /> 175,000+ FOOTFALL
        </div>
      </div>
    </section>
  );
};
