import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';

export const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const scheduleDays = [
    {
      day: 1,
      title: 'Day 1: Genesis & Awakening',
      date: 'December 18, 2026',
      events: [
        {
          time: '09:30 AM - 11:00 AM',
          title: 'Grand Inauguration & Keynote Address',
          venue: 'Convocation Hall, IITB',
          type: 'Summit',
          color: '#00f0ff',
        },
        {
          time: '11:30 AM - 04:00 PM',
          title: 'Robowars 15kg Featherweight Qualifiers',
          venue: 'Gymkhana Battle Arena',
          type: 'Robowars',
          color: '#ff007f',
        },
        {
          time: '01:00 PM - 05:00 PM',
          title: 'Tech Expo & Humanoid Exhibits Open',
          venue: 'Old SAC Ground & Hall 1',
          type: 'Exhibition',
          color: '#00ffaa',
        },
        {
          time: '06:30 PM - 08:30 PM',
          title: 'Technoholix: 500-Drone Swarm & Laser Symphony',
          venue: 'Main Gymkhana Grounds',
          type: 'Night Event',
          color: '#ffaa00',
        },
      ],
    },
    {
      day: 2,
      title: 'Day 2: Apex Carnage & Code Conflux',
      date: 'December 19, 2026',
      events: [
        {
          time: '10:00 AM - 02:00 PM',
          title: 'Autonomous Mobility Arena Round 1',
          venue: 'Department of Aerospace Corridor',
          type: 'Competition',
          color: '#ffaa00',
        },
        {
          time: '11:00 AM - 05:00 PM',
          title: 'Robowars 60kg Heavyweight Elimination Bouts',
          venue: 'Gymkhana Battle Arena',
          type: 'Robowars',
          color: '#ff007f',
        },
        {
          time: '02:00 PM - 04:30 PM',
          title: 'Turing Lecture: World Models in General Intelligence',
          venue: 'PC Saxena Auditorium',
          type: 'Summit',
          color: '#00f0ff',
        },
        {
          time: '07:00 PM - 09:30 PM',
          title: 'Technoholix: Cyberpunk Fire & EDM Fusion',
          venue: 'Open Air Theatre (OAT)',
          type: 'Night Event',
          color: '#8a2be2',
        },
      ],
    },
    {
      day: 3,
      title: 'Day 3: The Grand Finale & Crowning',
      date: 'December 20, 2026',
      events: [
        {
          time: '10:30 AM - 01:30 PM',
          title: 'Quantitative Code Conflux Final Showdown',
          venue: 'Computer Center (CC), IITB',
          type: 'Competition',
          color: '#00ffaa',
        },
        {
          time: '02:30 PM - 06:00 PM',
          title: 'Robowars Grand Championship Finals',
          venue: 'Gymkhana Battle Arena',
          type: 'Robowars',
          color: '#ff007f',
        },
        {
          time: '06:30 PM - 07:45 PM',
          title: 'Valedictory Ceremony & ₹40+ Lakhs Award Distribution',
          venue: 'Convocation Hall',
          type: 'Ceremony',
          color: '#00f0ff',
        },
        {
          time: '08:15 PM - 10:30 PM',
          title: 'Grand Finale EDM Concert & Closing Drone Spectacle',
          venue: 'Gymkhana Arena Grounds',
          type: 'Night Event',
          color: '#ff0055',
        },
      ],
    },
  ];

  const current = scheduleDays.find((d) => d.day === selectedDay);

  return (
    <section
      id="schedule"
      style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div className="tech-badge" style={{ marginBottom: '14px' }}>
          3 POWER-PACKED DAYS
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
          }}
        >
          FESTIVAL <span style={{ color: 'var(--neon-cyan)' }}>TIMELINE</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0' }}>
          Mark your calendar for non-stop technological marvels, intense combat bouts, and world-class performances.
        </p>

        {/* Day buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '28px' }}>
          {scheduleDays.map((d) => (
            <button
              key={d.day}
              onClick={() => setSelectedDay(d.day)}
              style={{
                background: selectedDay === d.day ? 'var(--neon-cyan)' : 'rgba(15, 23, 42, 0.6)',
                color: selectedDay === d.day ? '#000' : 'var(--text-muted)',
                border: selectedDay === d.day ? '1px solid var(--neon-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '12px 28px',
                borderRadius: '8px',
                fontFamily: 'var(--font-orbitron)',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedDay === d.day ? '0 0 20px rgba(0, 240, 255, 0.4)' : 'none',
              }}
            >
              DAY 0{d.day}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline List */}
      <div
        className="glass-panel"
        style={{
          padding: '36px',
          borderRadius: '16px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontSize: '1.25rem',
            fontWeight: 800,
            marginBottom: '24px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '16px',
          }}
        >
          <span>{current.title}</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-rajdhani)' }}>
            {current.date}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {current.events.map((evt, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(140px, 200px) 1fr',
                gap: '20px',
                padding: '18px',
                background: 'rgba(10, 15, 28, 0.55)',
                borderRadius: '12px',
                borderLeft: `4px solid ${evt.color}`,
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--neon-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Clock size={15} />
                  {evt.time}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-rajdhani)',
                    fontSize: '0.85rem',
                    color: 'var(--text-dim)',
                    marginTop: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <MapPin size={14} />
                  {evt.venue}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '6px',
                  }}
                >
                  {evt.title}
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-rajdhani)',
                    fontWeight: 700,
                    color: evt.color,
                    background: `${evt.color}15`,
                    border: `1px solid ${evt.color}40`,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    display: 'inline-block',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {evt.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
