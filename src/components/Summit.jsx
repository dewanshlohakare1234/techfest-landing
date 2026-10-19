import React, { useState } from 'react';
import { Award, Mic2, Star, Calendar, Clock, ChevronRight } from 'lucide-react';

export const Summit = () => {
  const [activeTab, setActiveTab] = useState('speakers');

  const speakers = [
    {
      name: 'Dr. S. Somanath',
      role: 'Former Chairman, ISRO',
      topic: 'Gaganyaan & India’s Deep Space Frontier',
      tag: 'Keynote Speaker',
      color: '#00f0ff',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Prof. Ada Yonath',
      role: 'Nobel Laureate in Chemistry',
      topic: 'Ribosome Architecture & Future Therapeutics',
      tag: 'Nobel Luminary',
      color: '#ff007f',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Yann LeCun',
      role: 'Chief AI Scientist, Meta & Turing Laureate',
      topic: 'World Models & Objective-Driven AI Architectures',
      tag: 'Turing Laureate',
      color: '#ffaa00',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'N. R. Narayana Murthy',
      role: 'Founder, Infosys',
      topic: 'Engineering Discipline, Integrity & National Wealth Creation',
      tag: 'Industry Icon',
      color: '#00ffaa',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const workshops = [
    {
      title: 'Autonomous Mobile Robots with ROS 2 & Isaac Sim',
      trainer: 'NVIDIA Robotics Labs',
      duration: '8 Hours Hands-on',
      level: 'Advanced',
      capacity: '60 Seats',
    },
    {
      title: 'Large Multimodal Reasoning Agents & Gemini API',
      trainer: 'Google DeepMind Engineers',
      duration: '6 Hours Intensive',
      level: 'Intermediate - Advanced',
      capacity: '75 Seats',
    },
    {
      title: 'Quantum Computing Algorithms on Qiskit',
      trainer: 'IBM Quantum Systems',
      duration: '6 Hours Lab',
      level: 'All Levels',
      capacity: '50 Seats',
    },
    {
      title: 'Aerodynamic Modeling & Micro-UAV Telemetry',
      trainer: 'IIT Bombay Aerospace Dept',
      duration: '2-Day Bootcamp',
      level: 'Hands-on Hardware',
      capacity: '40 Seats',
    },
  ];

  return (
    <section
      id="speakers"
      style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="tech-badge" style={{ marginBottom: '14px' }}>
          GLOBAL THOUGHT LEADERSHIP
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          SUMMIT & <span style={{ color: 'var(--neon-magenta)' }}>MASTERCLASSES</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0' }}>
          Learn directly from global vanguards shaping space exploration, artificial intelligence, and deep tech policy.
        </p>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
          <button
            onClick={() => setActiveTab('speakers')}
            className={activeTab === 'speakers' ? 'btn-cyber-primary' : 'btn-cyber-outline'}
            style={{ padding: '10px 24px', fontSize: '0.85rem' }}
          >
            Distinguished Speakers
          </button>
          <button
            onClick={() => setActiveTab('workshops')}
            className={activeTab === 'workshops' ? 'btn-cyber-primary' : 'btn-cyber-outline'}
            style={{ padding: '10px 24px', fontSize: '0.85rem' }}
          >
            Certified Workshops
          </button>
        </div>
      </div>

      {activeTab === 'speakers' ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {speakers.map((s, idx) => (
            <div
              key={idx}
              className="glass-card-interactive"
              style={{
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${s.color}35`,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(35%) contrast(110%)',
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(35%) contrast(110%)')}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${s.color}`,
                    color: s.color,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                  }}
                >
                  {s.tag}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '4px',
                }}
              >
                {s.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-rajdhani)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: s.color,
                  marginBottom: '12px',
                }}
              >
                {s.role}
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.5',
                  marginTop: 'auto',
                }}
              >
                <strong>Keynote:</strong> "{s.topic}"
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {workshops.map((w, idx) => (
            <div
              key={idx}
              className="glass-card-interactive"
              style={{
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-rajdhani)',
                      fontWeight: 700,
                      color: 'var(--neon-emerald)',
                      fontSize: '0.85rem',
                      letterSpacing: '1px',
                    }}
                  >
                    {w.trainer}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      background: 'rgba(255,255,255,0.08)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {w.level}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: '#fff',
                    lineHeight: '1.4',
                  }}
                >
                  {w.title}
                </h3>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {w.duration} • {w.capacity}
                </div>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--neon-cyan)',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Book Seat <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
