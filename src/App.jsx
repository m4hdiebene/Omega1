import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarqueeTicker from './components/MarqueeTicker';
import NeuralCoreCanvas from './components/NeuralCoreCanvas';
import TerminalPlayground from './components/TerminalPlayground';
import ArchitectureBlueprint from './components/ArchitectureBlueprint';
import ComputeCalculator from './components/ComputeCalculator';
import ManifestoSection from './components/ManifestoSection';
import Footer from './components/Footer';
import ComputeStakingModal from './components/ComputeStakingModal';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scanlinesEnabled, setScanlinesEnabled] = useState(false);
  const [isStakingModalOpen, setIsStakingModalOpen] = useState(false);

  const scrollToTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0a0a0c] text-white selection:bg-[#ccff00] selection:text-black relative font-mono ${
      scanlinesEnabled ? 'relative' : ''
    }`}>
      {/* CRT Scanline Overlay if enabled */}
      {scanlinesEnabled && (
        <div className="fixed inset-0 z-40 scanline-overlay pointer-events-none" />
      )}

      {/* Header */}
      <Header
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        scanlinesEnabled={scanlinesEnabled}
        setScanlinesEnabled={setScanlinesEnabled}
        onOpenStaking={() => setIsStakingModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenStaking={() => setIsStakingModalOpen(true)}
        onOpenTerminal={scrollToTerminal}
      />

      {/* Continuous Marquee Banner */}
      <MarqueeTicker />

      {/* Module 01: Neural Core Canvas Visualizer */}
      <NeuralCoreCanvas />

      {/* Module 02: Simulated Reasoning Terminal */}
      <TerminalPlayground />

      {/* Module 03: Architectural Blueprint */}
      <ArchitectureBlueprint />

      {/* Module 04: Human Obsolescence & ROI Calculator */}
      <ComputeCalculator
        onOpenStaking={() => setIsStakingModalOpen(true)}
      />

      {/* Module 05: AGI Manifesto & FAQ */}
      <ManifestoSection />

      {/* Footer */}
      <Footer
        onOpenStaking={() => setIsStakingModalOpen(true)}
      />

      {/* Compute Reservation Modal */}
      <ComputeStakingModal
        isOpen={isStakingModalOpen}
        onClose={() => setIsStakingModalOpen(false)}
      />
    </div>
  );
}
