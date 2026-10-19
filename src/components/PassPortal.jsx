import React, { useState } from 'react';
import { X, Sparkles, QrCode, CheckCircle, Download, ShieldCheck, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PassPortal = ({ isOpen, onClose, defaultTrack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    track: defaultTrack || 'General Delegate Access',
  });
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const generatedId = `TF26-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setTicketGenerated(true);

    // Fire cyber celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#ff007f', '#00ffaa', '#ffaa00'],
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handleReset = () => {
    setTicketGenerated(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 6, 12, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '520px',
          width: '100%',
          padding: '36px',
          borderRadius: '20px',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          boxShadow: '0 20px 60px rgba(0, 240, 255, 0.25)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-dim)',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        {!ticketGenerated ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div className="tech-badge" style={{ marginBottom: '10px' }}>
                DIGITAL IDENTITY ACCESS
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                CLAIM YOUR <span style={{ color: 'var(--neon-cyan)' }}>PASS</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '6px' }}>
                Instant QR barcode pass for entry to Techfest exhibitions, Robowars arenas, and guest talks at IIT Bombay.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(10, 15, 28, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(10, 15, 28, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  College / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. IIT Bombay / BITS Pilani"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(10, 15, 28, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Pass Type
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(10, 15, 28, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem',
                  }}
                >
                  <option value="General Delegate Access">General Delegate Access (Expos + Talks)</option>
                  <option value="Robowars Pit & Arena Pass">Robowars Pit & Arena Pass</option>
                  <option value="Competitions Competitor Pass">Competitions Competitor Pass</option>
                  <option value="Technoholix VIP Night Pass">Technoholix VIP Night Pass</option>
                  <option value="International Delegate All-Access">International Delegate All-Access</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-cyber-primary"
                style={{ width: '100%', marginTop: '12px' }}
              >
                Generate Pass Instantly
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 255, 170, 0.15)',
                border: '1px solid var(--neon-emerald)',
                color: 'var(--neon-emerald)',
                marginBottom: '16px',
              }}
            >
              <CheckCircle size={32} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '4px',
              }}
            >
              PASS VERIFIED & ISSUED
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>
              Present this pass at IIT Bombay Main Gate turnstile for campus entry.
            </p>

            {/* Futuristic Pass Badge Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(13, 20, 36, 0.95) 0%, rgba(5, 8, 15, 0.98) 100%)',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'left',
                position: 'relative',
                marginBottom: '24px',
                boxShadow: '0 10px 30px rgba(0, 240, 255, 0.2)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px dashed rgba(255, 255, 255, 0.15)',
                  paddingBottom: '12px',
                  marginBottom: '14px',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-orbitron)', fontSize: '0.9rem', fontWeight: 800, color: 'var(--neon-cyan)' }}>
                    TECHFEST 2026
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-rajdhani)', fontWeight: 600 }}>
                    IIT BOMBAY OFFICIAL PASS
                  </div>
                </div>
                <Ticket size={24} color="var(--neon-magenta)" />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Delegate Name
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{formData.name}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Track Tier</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--neon-amber)' }}>{formData.track}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Security ID</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--neon-cyan)', fontFamily: 'monospace' }}>
                    {ticketId}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(0, 0, 0, 0.4)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  QR Auth Code: <strong style={{ color: '#fff' }}>VALIDATED</strong>
                </div>
                <QrCode size={26} color="var(--neon-cyan)" />
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-cyber-primary"
              style={{ width: '100%', fontSize: '0.9rem' }}
            >
              Done / Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
