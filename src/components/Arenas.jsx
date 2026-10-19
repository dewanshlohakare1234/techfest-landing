import React, { useState } from 'react';
import { Swords, Eye, GraduationCap, Globe, Lightbulb, Music, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Arenas = ({ onSelectArena }) => {
  const [selectedArena, setSelectedArena] = useState(0);

  const arenas = [
    {
      id: 'robowars',
      title: 'International Robowars',
      tagline: 'Metal Carnage in India’s Most Fortified Arena',
      icon: Swords,
      accent: '#ff007f',
      prize: '₹12,00,000+',
      description: 'The heavyweight titan clash. Killer combat robots from 15+ countries face off with high-speed spinning drums, pneumatic flippers, and vertical axes in a shatterproof polycarbonate battlecage.',
      highlights: ['60kg & 15kg Categories', 'International Combat Teams', 'Live Flame & Hydraulic Arenas'],
      stats: { teams: '120+ Teams', rounds: '3 Days of Knockouts', arenaSpecs: 'Bulletproof Enclosure' },
      themeImage: 'linear-gradient(135deg, rgba(255, 0, 127, 0.25) 0%, rgba(20, 5, 20, 0.9) 100%)',
    },
    {
      id: 'exhibitions',
      title: 'International Tech Expo',
      tagline: 'World-Leading Humanoids, Bionics & Space Tech',
      icon: Eye,
      accent: '#00f0ff',
      prize: 'Live Demonstrations',
      description: 'Featuring global prototypes: humanoid robots walking among visitors, advanced prosthetic bionic limbs, ISRO planetary rover models, and R&D secrets directly from IIT Bombay laboratories.',
      highlights: ['Unitree AI Humanoid Displays', 'ISRO & Aerospace Pavilions', 'TechConnect IITB In-house R&D'],
      stats: { exhibits: '50+ Global Exhibits', countries: '20+ Nations', visitors: '100k+ Attendees' },
      themeImage: 'linear-gradient(135deg, rgba(0, 240, 255, 0.25) 0%, rgba(5, 20, 30, 0.9) 100%)',
    },
    {
      id: 'competitions',
      title: 'Flagship Competitions',
      tagline: 'Autonomous Mobility, Green AI & Quant Conflux',
      icon: Lightbulb,
      accent: '#ffaa00',
      prize: '₹28,00,000+',
      description: 'Test your engineering and problem-solving supremacy across national-level tracks: Urban Autonomous Driving challenges, EV Micro-Mobility, Spatial Engine Digital Twins, and Algorithmic Code Auditor.',
      highlights: ['Urban Autonomous Mobility', 'Quantitative Code Conflux', 'Namma Space 3D Spatial Engines'],
      stats: { tracks: '25+ Competitions', participants: '45,000+ Coders', finals: 'On-Campus Grand Finale' },
      themeImage: 'linear-gradient(135deg, rgba(255, 170, 0, 0.25) 0%, rgba(30, 20, 5, 0.9) 100%)',
    },
    {
      id: 'lectures',
      title: 'Global Leadership Summit',
      tagline: 'Nobel Laureates, CEOs & Scientific Pioneers',
      icon: GraduationCap,
      accent: '#00ffaa',
      prize: 'Open to Registered Delegates',
      description: 'Step into the Convocation Hall to hear firsthand from world visionaries. Past luminaries include ISRO Directors, Nobel Prize Laureates, Turing Awardees, and high-impact tech founders.',
      highlights: ['Keynote Addresses', 'Fireside Tech Debates', 'Exclusive Student Q&A Sessions'],
      stats: { speakers: '18+ Keynote Speakers', sessions: 'Masterclasses', hallCapacity: '2500+ Seater' },
      themeImage: 'linear-gradient(135deg, rgba(0, 255, 170, 0.25) 0%, rgba(5, 30, 20, 0.9) 100%)',
    },
    {
      id: 'worldmun',
      title: 'Techfest World MUN',
      tagline: 'Simulating Global Geopolitics & AI Governance',
      icon: Globe,
      accent: '#8a2be2',
      prize: 'Best Delegate Awards',
      description: 'One of Asia’s most prestigious Model United Nations conferences, convening 600+ delegates to debate international security, artificial intelligence governance, and space exploration treaties.',
      highlights: ['UNSC & DISEC Committees', 'AI Geopolitics Council', 'Diplomatic Gala Night'],
      stats: { delegates: '600+ Delegates', councils: '8 Specialized Councils', executiveBoard: 'UN Veterans' },
      themeImage: 'linear-gradient(135deg, rgba(138, 43, 226, 0.25) 0%, rgba(20, 10, 35, 0.9) 100%)',
    },
    {
      id: 'technoholix',
      title: 'Technoholix Nights',
      tagline: 'Synchronized Drone Swarms, Lasers & EDM',
      icon: Music,
      accent: '#ff0055',
      prize: 'Open to All Fest Attendees',
      description: 'When the sun sets over Powai Lake, Techfest erupts into an electrifying carnival of aerial drone choreography, laser harp performances, pyrotechnics, and international EDM spectacles.',
      highlights: ['500+ Autonomous Drone Show', 'Interactive Holographic Acts', 'Headline International Artists'],
      stats: { drones: '500 Synchronized Drones', arena: 'Gymkhana Grounds', crowd: '25,000+ Each Night' },
      themeImage: 'linear-gradient(135deg, rgba(255, 0, 85, 0.25) 0%, rgba(30, 5, 15, 0.9) 100%)',
    },
  ];

  const current = arenas[selectedArena];
  const CurrentIcon = current.icon;

  return (
    <section
      id="events"
      style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="tech-badge" style={{ marginBottom: '14px' }}>
          CORE HIGHLIGHTS & PAVILIONS
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          EXPERIENCE THE <span style={{ color: 'var(--neon-cyan)' }}>ARENAS</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.05rem' }}>
          Explore the epic pillars of Techfest IIT Bombay. Click any arena below to dive into its combat rules, technological showcases, and registration parameters.
        </p>
      </div>

      {/* Arena Selector Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '36px',
        }}
      >
        {arenas.map((arena, idx) => {
          const Icon = arena.icon;
          const isSelected = selectedArena === idx;
          return (
            <button
              key={arena.id}
              onClick={() => setSelectedArena(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                background: isSelected ? 'rgba(0, 240, 255, 0.12)' : 'rgba(15, 23, 42, 0.5)',
                border: isSelected ? `1px solid ${arena.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                color: isSelected ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? `0 0 20px ${arena.accent}40` : 'none',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: isSelected ? arena.accent : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#000' : 'var(--text-muted)',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: isSelected ? '#ffffff' : 'var(--text-main)',
                  }}
                >
                  {arena.title.split(' ')[0]} {arena.title.split(' ')[1] || ''}
                </div>
                <div style={{ fontSize: '0.72rem', color: arena.accent, fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>
                  {arena.prize}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Featured Arena Showcase Panel */}
      <div
        className="glass-panel"
        style={{
          padding: '40px',
          borderRadius: '20px',
          background: current.themeImage,
          border: `1px solid ${current.accent}50`,
          boxShadow: `0 20px 60px ${current.accent}20`,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '36px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  padding: '10px',
                  borderRadius: '10px',
                  background: current.accent,
                  color: '#000',
                  display: 'inline-flex',
                }}
              >
                <CurrentIcon size={28} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-rajdhani)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    color: current.accent,
                    textTransform: 'uppercase',
                  }}
                >
                  Pavilion Details & Rulebook
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                    fontWeight: 900,
                    lineHeight: '1.15',
                  }}
                >
                  {current.title}
                </h3>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 600,
                fontSize: '1.25rem',
                color: '#fff',
                marginBottom: '16px',
              }}
            >
              {current.tagline}
            </p>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '28px',
                maxWidth: '900px',
              }}
            >
              {current.description}
            </p>

            {/* Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {current.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <CheckCircle2 size={18} color={current.accent} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Live Stats Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '24px',
              }}
            >
              {Object.entries(current.stats).map(([k, v], i) => (
                <div key={i} style={{ minWidth: '140px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: current.accent,
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-rajdhani)',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      fontWeight: 700,
                      letterSpacing: '1px',
                    }}
                  >
                    {k.replace(/([A-Z])/g, ' $1')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
