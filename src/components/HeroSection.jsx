import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ShieldAlert, Cpu, Terminal, Flame, CheckCircle, Activity } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function HeroSection({ onOpenStaking, onOpenTerminal }) {
  const [flops, setFlops] = useState(148.9);
  const [tokensProcessed, setTokensProcessed] = useState(9482104);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlops((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2));
      setTokensProcessed((prev) => prev + Math.floor(Math.random() * 850 + 120));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0a0a0c] bg-grid-pattern border-b-4 border-white py-16 lg:py-24 px-4 overflow-hidden">
      {/* Decorative Harsh Background Grids & Labels */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest border border-zinc-800 p-1">
        [SYS_REF: AGI_OMEGA_CORE_V4]
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest border border-zinc-800 p-1 hidden sm:block">
        [ENCRYPTION: QUANTUM_RESISTANT_256]
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Main Pitch Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Brutalist Warning Tag */}
          <div className="inline-flex items-center gap-2 bg-[#ff0055] text-white border-2 border-white px-3 py-1 font-mono text-xs font-bold brutal-shadow-sm-black">
            <ShieldAlert className="w-4 h-4 animate-bounce" />
            <span>DISRUPTIVE TECH NOTICE: LEGACY SAAS DEPRECATION IMMINENT</span>
          </div>

          {/* Main Massive Brutalist Headline */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white leading-none uppercase">
            SOFTWARE IS <span className="bg-[#ccff00] text-black px-2 py-1 border-4 border-white brutal-shadow-black inline-block transform -rotate-1">DEAD.</span>
            <br />
            AGI IS HERE.
          </h1>

          {/* Core Sales Thesis */}
          <p className="font-mono text-base sm:text-lg text-zinc-300 border-l-4 border-[#ccff00] pl-4 py-1 leading-relaxed">
            Stop buying 50 different SaaS tools, hiring offshore dev teams, and writing temporary code. <strong className="text-[#ccff00] underline">OMEGA-1</strong> is a self-evolving Artificial General Intelligence kernel that writes, deploys, operates, and scales entire digital empires autonomously.
          </p>

          {/* High-Impact Key Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs font-bold">
            <div className="bg-[#121318] border-2 border-zinc-700 p-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ccff00] text-black font-black flex items-center justify-center border border-white text-sm">
                01
              </div>
              <div>
                <div className="text-white">100% RECURSIVE RE-WRITING</div>
                <div className="text-zinc-500 font-normal">Self-improving code loop every 10ms</div>
              </div>
            </div>

            <div className="bg-[#121318] border-2 border-zinc-700 p-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00f0ff] text-black font-black flex items-center justify-center border border-white text-sm">
                02
              </div>
              <div>
                <div className="text-white">ZERO HUMAN INTERVENTION</div>
                <div className="text-zinc-500 font-normal">Perceives, decides & acts end-to-end</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => {
                soundEngine.playClick();
                onOpenStaking();
              }}
              className="bg-[#ccff00] text-black font-display font-black text-lg px-8 py-4 border-4 border-white brutal-shadow hover:bg-white transition-all flex items-center justify-center gap-3 group"
            >
              <span>CLAIM AGI COMPUTE NODE</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={() => {
                soundEngine.playClick();
                onOpenTerminal();
              }}
              className="bg-[#121318] text-white font-mono font-bold text-sm px-6 py-4 border-2 border-white hover:border-[#ccff00] hover:text-[#ccff00] transition-all flex items-center justify-center gap-2 brutal-shadow-sm-black"
            >
              <Terminal className="w-4 h-4 text-[#ccff00]" />
              <span>TEST REASONING TERMINAL</span>
            </button>
          </div>

          {/* Social Proof & Guarantees */}
          <div className="flex items-center gap-6 font-mono text-xs text-zinc-400 pt-2">
            <div className="flex items-center gap-1.5 text-[#ccff00]">
              <CheckCircle className="w-4 h-4" />
              <span>STAKEHOLDERS: 4,290+ ALLOCATED</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Activity className="w-4 h-4 text-[#00f0ff]" />
              <span>UPTIME: 100.00%</span>
            </div>
          </div>
        </div>

        {/* Brutalist Telemetry / Synthetic Core Box */}
        <div className="lg:col-span-5">
          <div className="bg-[#121318] border-4 border-white p-6 brutal-shadow-magenta relative">
            {/* Header Badge */}
            <div className="flex justify-between items-center border-b-2 border-zinc-700 pb-3 mb-4 font-mono text-xs">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#ccff00] border border-black inline-block animate-pulse"></span>
                <span className="font-bold text-white uppercase">OMEGA-1 // LIVE TELEMETRY</span>
              </div>
              <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 border border-zinc-600">NODE_ID: #891A-X</span>
            </div>

            {/* Simulated Canvas Preview Box */}
            <div className="bg-black border-2 border-zinc-800 p-4 font-mono text-xs space-y-4 mb-4 relative overflow-hidden">
              <div className="flex justify-between text-zinc-400 border-b border-zinc-900 pb-2">
                <span>ACTIVE KERNEL PARAMETERS</span>
                <span className="text-[#ccff00]">SYNTHETIC STATE: ACTIVE</span>
              </div>

              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#18181c] p-3 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">TENSOR THROUGHPUT</div>
                  <div className="text-xl font-bold text-[#ccff00]">{flops} ZETTAFLOPS</div>
                </div>

                <div className="bg-[#18181c] p-3 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">TOKENS PROCESSED</div>
                  <div className="text-xl font-bold text-white">{tokensProcessed.toLocaleString()}</div>
                </div>

                <div className="bg-[#18181c] p-3 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">SELF-CODE MUTATIONS</div>
                  <div className="text-xl font-bold text-[#ff0055]">1,409,211 / HR</div>
                </div>

                <div className="bg-[#18181c] p-3 border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">HUMAN REPLACEMENT RATE</div>
                  <div className="text-xl font-bold text-[#00f0ff]">99.4% VERIFIED</div>
                </div>
              </div>

              {/* Simulated Live System Output Log */}
              <div className="bg-[#050507] p-3 border border-zinc-800 text-[11px] text-green-400 space-y-1 font-mono">
                <div className="text-zinc-500">[08:33:02] &gt; initializing quantum memory graph...</div>
                <div>[08:33:03] &gt; resolving zero-shot physics equation... <span className="text-[#ccff00]">DONE [0.1ms]</span></div>
                <div className="text-[#ff0055]">[08:33:04] &gt; warning: standard human software obsolete.</div>
              </div>
            </div>

            {/* Quick Staking Callout in Box */}
            <div className="bg-[#ccff00] p-4 text-black border-2 border-white flex justify-between items-center">
              <div>
                <div className="font-display font-black text-lg uppercase leading-tight">PRE-ORDER COMPUTE TIER</div>
                <div className="font-mono text-xs">Access batch 04 ends in 12 hours.</div>
              </div>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onOpenStaking();
                }}
                className="bg-black text-white font-mono text-xs font-bold px-3 py-2 border border-white hover:bg-[#ff0055] transition-colors"
              >
                STAKE NOW &rarr;
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
