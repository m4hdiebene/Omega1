import React, { useState } from 'react';
import { Volume2, VolumeX, Cpu, Terminal, Shield, Zap, Flame } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Header({ soundEnabled, setSoundEnabled, scanlinesEnabled, setScanlinesEnabled, onOpenStaking }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSound = () => {
    const newState = soundEngine.toggleSound();
    setSoundEnabled(newState);
    if (newState) soundEngine.playClick();
  };

  const handleNavClick = (id) => {
    soundEngine.playClick();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0c] border-b-4 border-[#ccff00]">
      {/* Top Banner Status Bar */}
      <div className="bg-[#ccff00] text-black font-mono text-xs py-1 px-4 flex justify-between items-center overflow-hidden font-bold">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
          <span>SYSTEM: OMEGA-1 CONVERGENCE AT 99.98%</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <span>LATENCY: 0.0004ms</span>
          <span>ACTIVE SYNAPSE NODES: 8,490,122,091</span>
          <span>COMPUTE AVAILABILITY: LIMITED</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={() => soundEngine.playClick()}
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 bg-[#ccff00] text-black font-black text-2xl flex items-center justify-center border-2 border-white brutal-shadow-sm group-hover:bg-[#ff0055] group-hover:text-white transition-colors">
            Ω
          </div>
          <div>
            <div className="font-display font-black text-2xl tracking-tighter text-white flex items-center gap-2">
              OMEGA-1 <span className="bg-[#ff0055] text-white text-[10px] font-mono px-1.5 py-0.5 border border-white">AGI v4.9</span>
            </div>
            <div className="font-mono text-[10px] text-[#ccff00] tracking-widest uppercase">
              THE LAST SOFTWARE EVER BUILT
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 font-mono text-sm font-bold">
          <button 
            onClick={() => handleNavClick('neural-core')} 
            className="hover:text-[#ccff00] transition-colors py-1 px-2 hover:bg-[#121318] border border-transparent hover:border-[#ccff00]"
          >
            [01] NEURAL CORE
          </button>
          <button 
            onClick={() => handleNavClick('terminal')} 
            className="hover:text-[#ccff00] transition-colors py-1 px-2 hover:bg-[#121318] border border-transparent hover:border-[#ccff00]"
          >
            [02] DEMO TERMINAL
          </button>
          <button 
            onClick={() => handleNavClick('blueprint')} 
            className="hover:text-[#ccff00] transition-colors py-1 px-2 hover:bg-[#121318] border border-transparent hover:border-[#ccff00]"
          >
            [03] ARCHITECTURE
          </button>
          <button 
            onClick={() => handleNavClick('calculator')} 
            className="hover:text-[#ccff00] transition-colors py-1 px-2 hover:bg-[#121318] border border-transparent hover:border-[#ccff00]"
          >
            [04] COMPUTE ROI
          </button>
          <button 
            onClick={() => handleNavClick('manifesto')} 
            className="hover:text-[#ccff00] transition-colors py-1 px-2 hover:bg-[#121318] border border-transparent hover:border-[#ccff00]"
          >
            [05] MANIFESTO
          </button>
        </nav>

        {/* Action Controls & Sound Toggle */}
        <div className="flex items-center space-x-3">
          {/* Sound Effect Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Disable Brutalist Sound FX" : "Enable Sound FX"}
            className={`p-2 border-2 border-white font-mono text-xs flex items-center gap-1 transition-all ${
              soundEnabled ? 'bg-[#18181b] text-[#ccff00] border-[#ccff00]' : 'bg-black text-gray-400 border-gray-700'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#ccff00]" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
            <span className="hidden sm:inline">{soundEnabled ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setScanlinesEnabled(!scanlinesEnabled);
            }}
            title="Toggle CRT Scanline Overlay"
            className={`hidden sm:flex p-2 border-2 border-white font-mono text-xs items-center gap-1 transition-all ${
              scanlinesEnabled ? 'bg-[#ff0055] text-white border-white' : 'bg-black text-gray-400 border-gray-700'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>CRT</span>
          </button>

          {/* Stake / Buy Compute Primary CTA */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenStaking();
            }}
            className="bg-[#ccff00] text-black font-display font-black text-sm px-4 py-2 border-2 border-white brutal-shadow hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            <Flame className="w-4 h-4 fill-black" />
            <span>STAKE COMPUTE</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setMenuOpen(!menuOpen);
            }}
            className="lg:hidden p-2 bg-[#121318] border-2 border-white text-white font-mono"
          >
            {menuOpen ? '[X]' : '[MENU]'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a0c] border-t-2 border-[#ccff00] p-4 space-y-3 font-mono">
          <button onClick={() => handleNavClick('neural-core')} className="block w-full text-left p-2 border border-zinc-800 text-[#ccff00]">
            [01] NEURAL CORE VISUALIZER
          </button>
          <button onClick={() => handleNavClick('terminal')} className="block w-full text-left p-2 border border-zinc-800 text-white">
            [02] REASONING DEMO TERMINAL
          </button>
          <button onClick={() => handleNavClick('blueprint')} className="block w-full text-left p-2 border border-zinc-800 text-white">
            [03] TECHNICAL BLUEPRINT
          </button>
          <button onClick={() => handleNavClick('calculator')} className="block w-full text-left p-2 border border-zinc-800 text-white">
            [04] HUMAN OBSOLESCENCE CALCULATOR
          </button>
          <button onClick={() => handleNavClick('manifesto')} className="block w-full text-left p-2 border border-zinc-800 text-white">
            [05] AGI MANIFESTO
          </button>
        </div>
      )}
    </header>
  );
}
