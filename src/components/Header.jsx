import React, { useState } from 'react';
import { Volume2, VolumeX, Zap, Flame, Sun, Moon, Menu, X } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Header({ soundEnabled, setSoundEnabled, scanlinesEnabled, setScanlinesEnabled, theme, setTheme, onOpenStaking }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSound = () => {
    const newState = soundEngine.toggleSound();
    setSoundEnabled(newState);
    if (newState) soundEngine.playClick();
  };

  const toggleTheme = () => {
    soundEngine.playClick();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const handleNavClick = (id) => {
    soundEngine.playClick();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 border-b-4 border-[#ccff00] transition-colors ${
      isDark ? 'bg-[#0a0a0c] text-white' : 'bg-[#f4f4f0] text-black'
    }`}>
      {/* Top Banner Status Bar */}
      <div className="bg-[#ccff00] text-black font-mono text-[11px] sm:text-xs py-1 px-3 sm:px-4 flex justify-between items-center overflow-hidden font-bold">
        <div className="flex items-center space-x-2 truncate">
          <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-ping flex-shrink-0"></span>
          <span className="truncate">SYSTEM: OMEGA-1 CONVERGENCE AT 99.98%</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
          <span>LATENCY: 0.0004ms</span>
          <span>SYNAPSE NODES: 8.49B</span>
          <span>COMPUTE: LIMITED</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={() => soundEngine.playClick()}
          className="flex items-center space-x-2 sm:space-x-3 group min-w-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ccff00] text-black font-black text-xl sm:text-2xl flex items-center justify-center border-2 border-black brutal-shadow-sm group-hover:bg-[#ff0055] group-hover:text-white transition-colors flex-shrink-0">
            Ω
          </div>
          <div className="truncate">
            <div className={`font-display font-black text-xl sm:text-2xl tracking-tighter flex items-center gap-1.5 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              <span>OMEGA-1</span>
              <span className="bg-[#ff0055] text-white text-[9px] sm:text-[10px] font-mono px-1 py-0.5 border border-black">v4.9</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] text-[#ccff00] font-bold tracking-widest uppercase truncate hidden xs:block">
              THE LAST SOFTWARE
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-mono text-xs font-bold">
          <button 
            onClick={() => handleNavClick('neural-core')} 
            className={`transition-colors py-1 px-2 border border-transparent hover:border-[#ccff00] ${
              isDark ? 'hover:text-[#ccff00] hover:bg-[#121318]' : 'hover:text-black hover:bg-white'
            }`}
          >
            [01] CORE
          </button>
          <button 
            onClick={() => handleNavClick('terminal')} 
            className={`transition-colors py-1 px-2 border border-transparent hover:border-[#ccff00] ${
              isDark ? 'hover:text-[#ccff00] hover:bg-[#121318]' : 'hover:text-black hover:bg-white'
            }`}
          >
            [02] TERMINAL
          </button>
          <button 
            onClick={() => handleNavClick('blueprint')} 
            className={`transition-colors py-1 px-2 border border-transparent hover:border-[#ccff00] ${
              isDark ? 'hover:text-[#ccff00] hover:bg-[#121318]' : 'hover:text-black hover:bg-white'
            }`}
          >
            [03] BLUEPRINT
          </button>
          <button 
            onClick={() => handleNavClick('calculator')} 
            className={`transition-colors py-1 px-2 border border-transparent hover:border-[#ccff00] ${
              isDark ? 'hover:text-[#ccff00] hover:bg-[#121318]' : 'hover:text-black hover:bg-white'
            }`}
          >
            [04] ROI
          </button>
          <button 
            onClick={() => handleNavClick('manifesto')} 
            className={`transition-colors py-1 px-2 border border-transparent hover:border-[#ccff00] ${
              isDark ? 'hover:text-[#ccff00] hover:bg-[#121318]' : 'hover:text-black hover:bg-white'
            }`}
          >
            [05] MANIFESTO
          </button>
        </nav>

        {/* Action Controls & Toggles */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`p-1.5 sm:p-2 border-2 border-black font-mono text-xs flex items-center gap-1 transition-all ${
              isDark 
                ? 'bg-[#18181c] text-[#ccff00] hover:bg-zinc-800' 
                : 'bg-white text-black hover:bg-yellow-100 brutal-shadow-sm-black'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4 text-[#ccff00]" /> : <Moon className="w-4 h-4 text-black" />}
            <span className="hidden md:inline font-bold">{isDark ? 'LIGHT' : 'DARK'}</span>
          </button>

          {/* Sound Effect Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Disable Brutalist Sound FX" : "Enable Sound FX"}
            className={`p-1.5 sm:p-2 border-2 border-black font-mono text-xs flex items-center gap-1 transition-all ${
              soundEnabled 
                ? 'bg-[#18181c] text-[#ccff00]' 
                : (isDark ? 'bg-black text-gray-400' : 'bg-gray-200 text-gray-600')
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#ccff00]" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden xl:inline">{soundEnabled ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setScanlinesEnabled(!scanlinesEnabled);
            }}
            title="Toggle CRT Scanline Overlay"
            className={`hidden sm:flex p-1.5 sm:p-2 border-2 border-black font-mono text-xs items-center gap-1 transition-all ${
              scanlinesEnabled ? 'bg-[#ff0055] text-white' : (isDark ? 'bg-black text-gray-400' : 'bg-gray-200 text-gray-600')
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
            className="bg-[#ccff00] text-black font-display font-black text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-black brutal-shadow-black hover:bg-white hover:text-black transition-all flex items-center gap-1.5"
          >
            <Flame className="w-4 h-4 fill-black" />
            <span className="whitespace-nowrap">STAKE</span>
          </button>

          {/* Mobile Drawer Trigger Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setMenuOpen(!menuOpen);
            }}
            className={`lg:hidden p-1.5 border-2 border-black font-mono font-bold text-xs ${
              isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
            }`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className={`lg:hidden border-t-2 border-[#ccff00] p-4 space-y-2.5 font-mono text-xs font-bold transition-colors ${
          isDark ? 'bg-[#0a0a0c] text-white' : 'bg-white text-black'
        }`}>
          <div className="flex justify-between items-center pb-2 border-b border-zinc-700 text-[10px] text-zinc-400">
            <span>NAVIGATION MATRIX</span>
            <button onClick={toggleTheme} className="text-[#ccff00] underline">
              SWITCH TO {isDark ? 'LIGHT MODE' : 'DARK MODE'}
            </button>
          </div>
          <button onClick={() => handleNavClick('neural-core')} className={`block w-full text-left p-3 border-2 border-black ${isDark ? 'bg-[#121318] text-[#ccff00]' : 'bg-[#f4f4f0] text-black'}`}>
            [01] NEURAL CORE VISUALIZER
          </button>
          <button onClick={() => handleNavClick('terminal')} className={`block w-full text-left p-3 border-2 border-black ${isDark ? 'bg-[#121318] text-white' : 'bg-[#f4f4f0] text-black'}`}>
            [02] REASONING DEMO TERMINAL
          </button>
          <button onClick={() => handleNavClick('blueprint')} className={`block w-full text-left p-3 border-2 border-black ${isDark ? 'bg-[#121318] text-white' : 'bg-[#f4f4f0] text-black'}`}>
            [03] TECHNICAL BLUEPRINT
          </button>
          <button onClick={() => handleNavClick('calculator')} className={`block w-full text-left p-3 border-2 border-black ${isDark ? 'bg-[#121318] text-white' : 'bg-[#f4f4f0] text-black'}`}>
            [04] HUMAN OBSOLESCENCE CALCULATOR
          </button>
          <button onClick={() => handleNavClick('manifesto')} className={`block w-full text-left p-3 border-2 border-black ${isDark ? 'bg-[#121318] text-white' : 'bg-[#f4f4f0] text-black'}`}>
            [05] AGI MANIFESTO
          </button>
        </div>
      )}
    </header>
  );
}
