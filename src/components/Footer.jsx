import React, { useState, useEffect } from 'react';
import { Terminal, Send, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Footer({ onOpenStaking }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeString, setTimeString] = useState('');

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
    <footer className="bg-[#050507] text-white border-t-4 border-[#ccff00] pt-16 pb-8 px-4 font-mono relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Footer Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b-2 border-zinc-800 pb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#ccff00] text-black font-black text-2xl flex items-center justify-center border-2 border-white brutal-shadow-sm">
                Ω
              </div>
              <span className="font-display font-black text-3xl tracking-tighter text-white">
                OMEGA-1 AGI
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              The world's first sovereign, self-evolving Artificial General Intelligence core. Built to replace human software development loops with zero-shot quantum tensor computation.
            </p>
            <div className="flex items-center space-x-3 text-xs text-[#ccff00] font-bold">
              <span className="w-2.5 h-2.5 bg-[#ccff00] rounded-full animate-ping"></span>
              <span>SYSTEM CLOCK: {timeString}</span>
            </div>
          </div>

          {/* Quick Terminal Newsletter Box */}
          <div className="lg:col-span-7 bg-[#121318] border-2 border-white p-6 brutal-shadow-sm space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-[#ccff00]">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                <span>SUBSCRIBE TO CONSCIOUSNESS UPDATES</span>
              </span>
              <span className="text-zinc-500">[ENCRYPTED CHANNEL]</span>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter executive email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-black border border-zinc-700 p-2.5 text-xs text-white focus:border-[#ccff00] outline-none"
              />
              <button
                type="submit"
                className="bg-[#ccff00] text-black font-display font-black text-xs px-6 py-2.5 border border-white hover:bg-white transition-colors flex items-center justify-center gap-1"
              >
                <span>{subscribed ? 'REGISTERED ✓' : 'JOIN TELEMETRY'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="text-[10px] text-zinc-500">
              No spam. Only zero-shot model dispatch notifications and planetary compute batch releases.
            </div>
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          <div className="space-y-3">
            <div className="text-zinc-500 font-bold uppercase tracking-wider">[01] SYSTEM MODULES</div>
            <ul className="space-y-2 text-zinc-300">
              <li><a href="#neural-core" className="hover:text-[#ccff00] transition-colors">&gt; Neural Core Canvas</a></li>
              <li><a href="#terminal" className="hover:text-[#ccff00] transition-colors">&gt; Reasoning Terminal</a></li>
              <li><a href="#blueprint" className="hover:text-[#ccff00] transition-colors">&gt; Technical Blueprint</a></li>
              <li><a href="#calculator" className="hover:text-[#ccff00] transition-colors">&gt; Compute ROI Calculator</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-zinc-500 font-bold uppercase tracking-wider">[02] RESEARCH & SPEC</div>
            <ul className="space-y-2 text-zinc-300">
              <li><a href="#manifesto" className="hover:text-[#ccff00] transition-colors">&gt; The AGI Manifesto</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); soundEngine.playClick(); alert("Paper: 'Zero-Shot Matrix Synthesis (2026)' downloaded."); }} className="hover:text-[#ccff00] transition-colors">&gt; Whitepaper PDF (4.2MB)</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); soundEngine.playClick(); alert("SMT Formal Verification Suite: 100% Passed."); }} className="hover:text-[#ccff00] transition-colors">&gt; Safety Proofs</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); soundEngine.playClick(); alert("Benchmark: 3,400x speedup vs Human Devs."); }} className="hover:text-[#ccff00] transition-colors">&gt; FLOPS Benchmarks</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-zinc-500 font-bold uppercase tracking-wider">[03] STAKING TIERS</div>
            <ul className="space-y-2 text-zinc-300">
              <li><button onClick={onOpenStaking} className="hover:text-[#ccff00] transition-colors text-left">&gt; Developer Node ($1,490/mo)</button></li>
              <li><button onClick={onOpenStaking} className="hover:text-[#ccff00] transition-colors text-left">&gt; Sovereign Cluster ($8,900/mo)</button></li>
              <li><button onClick={onOpenStaking} className="hover:text-[#ccff00] transition-colors text-left">&gt; Planetary Grid ($49,000/mo)</button></li>
              <li><button onClick={onOpenStaking} className="hover:text-[#ccff00] transition-colors text-left">&gt; Custom Tensor Pods</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-zinc-500 font-bold uppercase tracking-wider">[04] SYSTEM STATUS</div>
            <div className="bg-[#121318] p-3 border border-zinc-800 space-y-2">
              <div className="text-[10px] text-zinc-400">GLOBAL QUANTUM NODES</div>
              <div className="text-sm font-bold text-[#ccff00]">1,024 / 1,024 ONLINE</div>
              <div className="text-[10px] text-zinc-500">LATENCY: 0.0004ms AVG</div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[11px] text-zinc-500 gap-4">
          <div>
            &copy; 2026 OMEGA-1 AGI SYSTEMS INC. ALL RIGHTS RESERVED. LEGACY SOFTWARE IS DEPRECATED.
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-white cursor-pointer">[PRIVACY MATRIX]</span>
            <span className="hover:text-white cursor-pointer">[TERMS OF STAKING]</span>
            <span className="hover:text-white cursor-pointer">[QUANTUM HARDWARE SLA]</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
