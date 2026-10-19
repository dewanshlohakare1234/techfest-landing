import React, { useState } from 'react';
import { CyberCanvas } from './components/CyberCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Arenas } from './components/Arenas';
import { Competitions } from './components/Competitions';
import { Summit } from './components/Summit';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Schedule } from './components/Schedule';
import { PassPortal } from './components/PassPortal';
import { Footer } from './components/Footer';

export function App() {
  const [isPassPortalOpen, setIsPassPortalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('');

  const handleRegisterCompetition = (comp) => {
    setSelectedTrack(`${comp.name} Track`);
    setIsPassPortalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#07090e' }}>
      {/* Dynamic 2D constellation canvas (No 3D / WebGL asset dependencies, pure 60fps canvas) */}
      <CyberCanvas />

      {/* Subtle CRT scanline overlay */}
      <div className="scanline-overlay" />

      {/* Cyberpunk grid backdrop */}
      <div
        className="cyber-grid"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Fixed Header */}
      <Navbar onOpenPortal={() => { setSelectedTrack('General Delegate Access'); setIsPassPortalOpen(true); }} />

      {/* Main Page Flow */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero
          onExplore={() => {
            document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenPortal={() => {
            setSelectedTrack('General Delegate Access');
            setIsPassPortalOpen(true);
          }}
        />

        <Arenas
          onSelectArena={(arena) => {
            setSelectedTrack(`${arena.title} Pass`);
            setIsPassPortalOpen(true);
          }}
        />

        <Competitions onRegister={handleRegisterCompetition} />

        <Summit />

        <InteractiveTerminal />

        <Schedule />
      </main>

      {/* Pass Generator Modal */}
      <PassPortal
        isOpen={isPassPortalOpen}
        onClose={() => setIsPassPortalOpen(false)}
        defaultTrack={selectedTrack}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
