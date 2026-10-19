import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Cpu, HelpCircle, RefreshCw } from 'lucide-react';

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    {
      sender: 'sys',
      text: 'TECHFEST v2026.4_CORE // SYSTEM BOOT SUCCESSFUL.\nType "help" for operational commands, or "theme", "robowars", "prizes", "matrix".',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const newEntry = [{ sender: 'user', text: raw }];

    let responseText = '';

    switch (lower) {
      case 'help':
        responseText = `Available Commands:
- "theme"     : Unravel the 2026 festival narrative & philosophy
- "robowars"  : Specs of the 60kg cage combat arena
- "prizes"    : Total cash rewards & breakdown
- "mun"       : Techfest World Model United Nations highlights
- "campus"    : Navigation tips for IIT Bombay (Powai, Mumbai)
- "stats"     : Fest footfall, international reach, historical impact
- "clear"     : Clear terminal buffer`;
        break;

      case 'theme':
        responseText = `[THEME: AN AETHERIAL RENAISSANCE]
A vision where organic humanity fuses symbiotically with autonomous intelligence. 
From micro-satellites orbiting low-earth trajectories to decentralized robotics and clean energy breakthroughs, Techfest 2026 reimagines the frontier of civilization.`;
        break;

      case 'robowars':
        responseText = `[INTERNATIONAL ROBOWARS SPECS]
- Categories: 15kg Featherweight & 60kg Heavyweight.
- Arena: 8m x 8m with 12mm dual-layered Polycarbonate shields.
- Weapon Limit: Pneumatics up to 250 PSI, High-RPM Hardened Steel Spinners (12,000 RPM).
- Status: 120+ International Combatants Confirmed.`;
        break;

      case 'prizes':
        responseText = `[PRIZE POOL MATRIX]
- Total Direct Cash: ₹40,00,000+ INR
- Incubation & GPU Grants: ₹1.2 Cr ($140,000 USD)
- Robowars: ₹12,00,000
- AI & Autonomous Mobility: ₹7,50,000
- Quant Code Conflux: ₹3,50,000
- Hardware Hackathons: ₹4,00,000`;
        break;

      case 'mun':
        responseText = `[TECHFEST WORLD MUN]
Asia’s landmark student diplomacy conclave with 600+ delegates debating Global Artificial General Intelligence treaties, Space Resource Demilitarization, and Cyber Defense frameworks.`;
        break;

      case 'campus':
        responseText = `[IIT BOMBAY ACCESS PROTOCOL]
- Location: Powai, Mumbai - 400076, Maharashtra, India.
- Landmarks: Main Gate, Convocation Hall, SAC Ground, Gymkhana Grounds.
- Fest Pass holders get automated QR turnstile entry and hostel accommodation priority.`;
        break;

      case 'stats':
        responseText = `[OFFICIAL METRICS]
- Footfall: 175,000+
- Colleges: 2,500+ Institutions Worldwide
- International Reach: 75+ Nations
- Outreach: 4.5M+ Digital Impressions
- Recognition: Patronage from UNESCO, UNICEF, Make in India, and CEE.`;
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        responseText = `Unrecognized directive: "${raw}". Type "help" to view executable commands.`;
        break;
    }

    newEntry.push({ sender: 'sys', text: responseText });
    setHistory((prev) => [...prev, ...newEntry]);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <section
      id="terminal"
      style={{
        padding: '100px 24px',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="tech-badge" style={{ marginBottom: '14px' }}>
          LIVE COMMAND CLI
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          MAINFRAME <span style={{ color: 'var(--neon-cyan)' }}>TERMINAL</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Query the live festival database directly using our terminal prompt below.
        </p>
      </div>

      {/* Terminal Window Frame */}
      <div
        style={{
          background: '#04070d',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0, 240, 255, 0.15)',
          overflow: 'hidden',
          fontFamily: '"Fira Code", monospace, "Courier New"',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
            <span style={{ marginLeft: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              bash — techfest@iitb:~ (v2026.4)
            </span>
          </div>

          <button
            onClick={() => handleCommand('clear')}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-dim)',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
            }}
          >
            <RefreshCw size={12} /> Clear
          </button>
        </div>

        {/* Quick Command Pills */}
        <div
          style={{
            background: 'rgba(0, 240, 255, 0.03)',
            padding: '8px 16px',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', alignSelf: 'center' }}>Quick probes:</span>
          {['help', 'theme', 'robowars', 'prizes', 'stats', 'campus'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleCommand(btn)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                color: 'var(--neon-cyan)',
                borderRadius: '4px',
                padding: '2px 8px',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Console Body */}
        <div
          style={{
            padding: '20px',
            minHeight: '260px',
            maxHeight: '380px',
            overflowY: 'auto',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            color: '#a5f3fc',
          }}
        >
          {history.map((msg, index) => (
            <div key={index} style={{ marginBottom: '14px', whiteSpace: 'pre-wrap' }}>
              {msg.sender === 'user' ? (
                <div style={{ color: 'var(--neon-magenta)', display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--neon-cyan)' }}>guest@techfest:~$</span>
                  <span>{msg.text}</span>
                </div>
              ) : (
                <div style={{ color: '#d1d5db', borderLeft: '2px solid rgba(0, 240, 255, 0.4)', paddingLeft: '10px' }}>
                  {msg.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input form */}
        <form
          onSubmit={onSubmit}
          style={{
            borderTop: '1px solid rgba(0, 240, 255, 0.2)',
            display: 'flex',
            background: 'rgba(10, 15, 28, 0.8)',
            padding: '8px 16px',
            alignItems: 'center',
          }}
        >
          <span style={{ color: 'var(--neon-cyan)', marginRight: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>
            guest@techfest:~$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command here (e.g. 'help', 'prizes')..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'inherit',
              fontSize: '0.9rem',
            }}
          />
          <button
            type="submit"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--neon-cyan)',
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};
