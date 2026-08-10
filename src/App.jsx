import React, { useState, useEffect } from 'react';
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
  const [theme, setTheme] = useState('dark');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scanlinesEnabled, setScanlinesEnabled] = useState(false);
  const [isStakingModalOpen, setIsStakingModalOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const scrollToTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative font-mono transition-colors ${
      isDark ? 'bg-[#0a0a0c] text-white' : 'bg-[#f4f4f0] text-black'
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
        theme={theme}
        setTheme={setTheme}
        onOpenStaking={() => setIsStakingModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        theme={theme}
        onOpenStaking={() => setIsStakingModalOpen(true)}
        onOpenTerminal={scrollToTerminal}
      />

      {/* Continuous Marquee Banner */}
      <MarqueeTicker />

      {/* Module 01: Neural Core Canvas Visualizer */}
      <NeuralCoreCanvas theme={theme} />

      {/* Module 02: Simulated Reasoning Terminal */}
      <TerminalPlayground theme={theme} />

      {/* Module 03: Architectural Blueprint */}
      <ArchitectureBlueprint theme={theme} />

      {/* Module 04: Human Obsolescence & ROI Calculator */}
      <ComputeCalculator
        theme={theme}
        onOpenStaking={() => setIsStakingModalOpen(true)}
      />

      {/* Module 05: AGI Manifesto & FAQ */}
      <ManifestoSection theme={theme} />

      {/* Footer */}
      <Footer
        theme={theme}
        onOpenStaking={() => setIsStakingModalOpen(true)}
      />

      {/* Compute Reservation Modal */}
      <ComputeStakingModal
        theme={theme}
        isOpen={isStakingModalOpen}
        onClose={() => setIsStakingModalOpen(false)}
      />
    </div>
  );
}
