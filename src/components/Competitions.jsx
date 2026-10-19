import React, { useState } from 'react';
import { Cpu, Code2, Compass, Bot, Activity, Flame, ExternalLink, Filter, Search } from 'lucide-react';

export const Competitions = ({ onRegister }) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const competitionsData = [
    {
      id: 'urban-mobility',
      name: 'Urban Autonomous Mobility Challenge',
      category: 'robotics',
      prize: '₹2,50,000',
      difficulty: 'Hard',
      teamSize: '1-4 Members',
      desc: 'Build vision-guided autonomous rovers capable of navigating complex Indian micro-traffic lanes, detecting pedestrian obstacles, and executing precision parking.',
      tags: ['Computer Vision', 'ROS2', 'Autonomous Nav'],
    },
    {
      id: 'ev-infra',
      name: 'EV Infra & Green Mobility AI',
      category: 'ai',
      prize: '₹3,00,000',
      difficulty: 'Expert',
      teamSize: '1-3 Members',
      desc: 'Formulate predictive spatial AI models to forecast EV grid congestion, optimize dynamic charging pricing, and deploy smart battery swapping routing algorithms.',
      tags: ['Machine Learning', 'Spatial AI', 'Smart Grid'],
    },
    {
      id: 'quant-conflux',
      name: 'The Quantitative Code Conflux',
      category: 'coding',
      prize: '₹2,00,000',
      difficulty: 'Extreme',
      teamSize: 'Solo / Duo',
      desc: 'High-frequency algorithmic trading competition. Process simulated microsecond tick orderbooks, backtest alpha strategies, and avoid liquidation risks under volatility.',
      tags: ['C++', 'High Frequency Trading', 'Stochastic Calc'],
    },
    {
      id: 'namma-space',
      name: 'Namma Space: 3D Spatial Engine',
      category: 'spatial',
      prize: '₹1,75,000',
      difficulty: 'Intermediate',
      teamSize: '1-4 Members',
      desc: 'Architect a 3D digital-twin indoor spatial navigation system with live point-cloud rendering, SLAM reconstruction, and multi-floor pathfinding.',
      tags: ['WebGL', 'SLAM', '3D Geospatial'],
    },
    {
      id: 'code-auditor',
      name: 'Code Auditor AI Hackathon',
      category: 'coding',
      prize: '₹2,20,000',
      difficulty: 'Hard',
      teamSize: '1-4 Members',
      desc: 'Train and orchestrate autonomous LLM security agents that inspect open-source code repositories, identify zero-day vulnerabilities, and synthesize automated fixes.',
      tags: ['Agentic AI', 'Cybersecurity', 'Static Analysis'],
    },
    {
      id: 'roboracer',
      name: 'RoboRacer High-Speed Track',
      category: 'robotics',
      prize: '₹1,50,000',
      difficulty: 'Intermediate',
      teamSize: '1-4 Members',
      desc: 'High-velocity RC & autonomous sprint racing through rugged terrains, inclines, hairpins, and elevated chicanes built inside the IIT Bombay sports arena.',
      tags: ['Embedded Systems', 'Motor Control', 'Aerodynamics'],
    },
  ];

  const filtered = competitionsData.filter((c) => {
    const matchesFilter = filter === 'all' || c.category === filter;
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.desc.toLowerCase().includes(search.toLowerCase()) ||
                          c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="competitions"
      style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="tech-badge" style={{ marginBottom: '14px' }}>
          NATIONAL & INTERNATIONAL LEAGUES
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          FEATURED <span style={{ color: 'var(--neon-cyan)' }}>CHALLENGES</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0' }}>
          Compete against the brightest minds from MIT, Stanford, IITs, and top engineering universities for cash rewards, incubation grants, and industry placement.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '36px',
        }}
      >
        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Leagues' },
            { id: 'robotics', label: 'Robotics & Hardware' },
            { id: 'ai', label: 'Artificial Intelligence' },
            { id: 'coding', label: 'Coding & Quant' },
            { id: 'spatial', label: 'Spatial & Metaverse' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                background: filter === cat.id ? 'var(--neon-cyan)' : 'rgba(15, 23, 42, 0.6)',
                color: filter === cat.id ? '#000' : 'var(--text-muted)',
                border: filter === cat.id ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 18px',
                borderRadius: '8px',
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '8px',
            padding: '8px 16px',
            width: '280px',
          }}
        >
          <Search size={16} color="var(--text-dim)" />
          <input
            type="text"
            placeholder="Search competitions or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '0.9rem',
              width: '100%',
              fontFamily: 'inherit',
            }}
          />
        </div>
      </div>

      {/* Grid of Competition Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}
      >
        {filtered.map((comp) => (
          <div
            key={comp.id}
            className="glass-card-interactive"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--neon-amber)',
                    textShadow: '0 0 10px rgba(255, 170, 0, 0.3)',
                  }}
                >
                  {comp.prize}
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--neon-cyan)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  {comp.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  lineHeight: '1.3',
                  marginBottom: '12px',
                  color: '#fff',
                }}
              >
                {comp.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                }}
              >
                {comp.desc}
              </p>

              {/* Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {comp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-rajdhani)',
                      fontWeight: 600,
                      color: 'var(--neon-cyan)',
                      background: 'rgba(0, 240, 255, 0.08)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(0, 240, 255, 0.2)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '16px',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>
                {comp.teamSize}
              </span>
              <button
                onClick={() => onRegister(comp)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--neon-cyan)',
                  fontFamily: 'var(--font-orbitron)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  letterSpacing: '1px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
              >
                Register Track <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
