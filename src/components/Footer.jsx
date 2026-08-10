import React, { useState, useEffect } from 'react';
import { Terminal, Send } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Footer({ theme, onOpenStaking }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeString, setTimeString] = useState('');
  const isDark = theme === 'dark';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toISOString().split('T')[1].slice(0, 8) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    soundEngine.playSuccess();
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className={`border-t-4 border-[#ccff00] pt-12 pb-6 px-3 sm:px-6 font-mono transition-colors ${
      isDark ? 'bg-[#050507] text-white' : 'bg-[#eef0eb] text-black'
    }`}>
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Footer Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-b-2 border-black/30 pb-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#ccff00] text-black font-black text-2xl flex items-center justify-center border-2 border-black brutal-shadow-sm-black">
                Ω
              </div>
              <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter">
                OMEGA-1 AGI
              </span>
            </div>
            <p className={`text-xs max-w-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
              The world's first sovereign, self-evolving Artificial General Intelligence core. Built to replace human software development loops with zero-shot quantum tensor computation.
            </p>
            <div className="flex items-center space-x-2 text-xs font-bold text-[#ccff00] bg-black px-2 py-1 inline-block border border-black">
              <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping"></span>
              <span>SYSTEM CLOCK: {timeString}</span>
            </div>
          </div>

          {/* Quick Terminal Newsletter Box */}
          <div className={`lg:col-span-7 border-2 border-black p-4 sm:p-5 brutal-shadow-sm-black space-y-2.5 ${
            isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
          }`}>
            <div className="flex justify-between items-center text-xs font-bold text-[#ccff00] bg-black px-2 py-1 border border-black">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>SUBSCRIBE TO CONSCIOUSNESS UPDATES</span>
              </span>
              <span className="text-[10px] hidden sm:inline">[ENCRYPTED CHANNEL]</span>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter executive email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-black border border-black p-2.5 text-xs text-white focus:border-[#ccff00] outline-none"
              />
              <button
                type="submit"
                className="bg-[#ccff00] text-black font-display font-black text-xs px-5 py-2.5 border border-black hover:bg-white transition-colors flex items-center justify-center gap-1"
              >
                <span>{subscribed ? 'REGISTERED ✓' : 'JOIN TELEMETRY'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          
          <div className="space-y-2">
            <div className="font-bold uppercase tracking-wider opacity-60">[01] MODULES</div>
            <ul className="space-y-1.5 font-bold">
              <li><a href="#neural-core" className="hover:text-[#ccff00] transition-colors">&gt; Neural Core</a></li>
              <li><a href="#terminal" className="hover:text-[#ccff00] transition-colors">&gt; Reasoning Terminal</a></li>
              <li><a href="#blueprint" className="hover:text-[#ccff00] transition-colors">&gt; Technical Blueprint</a></li>
              <li><a href="#calculator" className="hover:text-[#ccff00] transition-colors">&gt; Compute ROI Calculator</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold uppercase tracking-wider opacity-60">[02] RESEARCH</div>
            <ul className="space-y-1.5 font-bold">
              <li><a href="#manifesto" className="hover:text-[#ccff00] transition-colors">&gt; The AGI Manifesto</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); soundEngine.playClick(); alert("Paper: 'Zero-Shot Matrix Synthesis (2026)' downloaded."); }} className="hover:text-[#ccff00] transition-colors">&gt; Whitepaper PDF</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); soundEngine.playClick(); alert("Safety Suite: 100% Passed."); }} className="hover:text-[#ccff00] transition-colors">&gt; Safety Proofs</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold uppercase tracking-wider opacity-60">[03] STAKING</div>
            <ul className="space-y-1.5 font-bold">
              <li><button onClick={onOpenStaking} className="hover:text-[#ccff00] transition-colors text-left">&gt; Dev Node ($1,490/mo)</button></li>
              <li><button onClick={onOpenStaking} className="hover:text-[#ccff00] transition-colors text-left">&gt; Sovereign ($8,900/mo)</button></li>
              <li><button onClick={onOpenStaking} className="hover:text-[#ccff00] transition-colors text-left">&gt; Planetary ($49,000/mo)</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-bold uppercase tracking-wider opacity-60">[04] SYSTEM STATUS</div>
            <div className="bg-black text-white p-3 border border-black space-y-1">
              <div className="text-[9px] text-zinc-400">QUANTUM NODES</div>
              <div className="text-xs font-bold text-[#ccff00]">1,024 / 1,024 ONLINE</div>
              <div className="text-[9px] text-zinc-500">LATENCY: 0.0004ms</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-black/20 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-70 gap-3">
          <div>
            &copy; 2026 OMEGA-1 AGI SYSTEMS INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-3 font-bold">
            <span className="hover:underline cursor-pointer">[PRIVACY MATRIX]</span>
            <span className="hover:underline cursor-pointer">[TERMS OF STAKING]</span>
            <span className="hover:underline cursor-pointer">[SLA]</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
