import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ShieldAlert, Cpu, Terminal, Flame, CheckCircle, Activity } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function HeroSection({ theme, onOpenStaking, onOpenTerminal }) {
  const [flops, setFlops] = useState(148.9);
  const [tokensProcessed, setTokensProcessed] = useState(9482104);
  const isDark = theme === 'dark';

  useEffect(() => {
    const interval = setInterval(() => {
      setFlops((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2));
      setTokensProcessed((prev) => prev + Math.floor(Math.random() * 850 + 120));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative bg-grid-pattern border-b-4 border-black py-10 sm:py-16 lg:py-24 px-3 sm:px-6 overflow-hidden transition-colors ${
      isDark ? 'bg-[#0a0a0c] text-white' : 'bg-[#f4f4f0] text-black'
    }`}>
      {/* Decorative Harsh Background Labels */}
      <div className="absolute top-2 left-3 font-mono text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest border border-black/20 p-1">
        [SYS_REF: AGI_OMEGA_CORE_V4]
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-0">
        
        {/* Main Pitch Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          
          {/* Brutalist Warning Tag */}
          <div className="inline-flex items-center gap-2 bg-[#ff0055] text-white border-2 border-black px-2.5 sm:px-3 py-1 font-mono text-[11px] sm:text-xs font-bold brutal-shadow-sm-black max-w-full">
            <ShieldAlert className="w-4 h-4 animate-bounce flex-shrink-0" />
            <span className="truncate">NOTICE: LEGACY SAAS DEPRECATION IMMINENT</span>
          </div>

          {/* Main Massive Brutalist Headline */}
          <h1 className={`font-display font-black text-4xl xs:text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-tight uppercase ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            SOFTWARE IS <span className="bg-[#ccff00] text-black px-2 py-0.5 border-3 sm:border-4 border-black brutal-shadow-black inline-block transform -rotate-1">DEAD.</span>
            <br />
            AGI IS HERE.
          </h1>

          {/* Core Sales Thesis */}
          <p className={`font-mono text-sm sm:text-lg border-l-4 border-[#ccff00] pl-3 sm:pl-4 py-1 leading-relaxed ${
            isDark ? 'text-zinc-300' : 'text-zinc-800'
          }`}>
            Stop buying 50 different SaaS tools, hiring offshore dev teams, and writing temporary code. <strong className="text-[#ccff00] underline bg-black px-1 font-bold">OMEGA-1</strong> is a self-evolving Artificial General Intelligence kernel that writes, deploys, operates, and scales entire digital empires autonomously.
          </p>

          {/* Key Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono text-xs font-bold">
            <div className={`border-2 border-black p-3 flex items-center gap-3 brutal-shadow-sm-black ${
              isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
            }`}>
              <div className="w-8 h-8 bg-[#ccff00] text-black font-black flex items-center justify-center border border-black text-sm flex-shrink-0">
                01
              </div>
              <div className="min-w-0">
                <div className="truncate">100% RECURSIVE RE-WRITING</div>
                <div className={`font-normal text-[11px] truncate ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Self-improving code loop</div>
              </div>
            </div>

            <div className={`border-2 border-black p-3 flex items-center gap-3 brutal-shadow-sm-black ${
              isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
            }`}>
              <div className="w-8 h-8 bg-[#00f0ff] text-black font-black flex items-center justify-center border border-black text-sm flex-shrink-0">
                02
              </div>
              <div className="min-w-0">
                <div className="truncate">ZERO HUMAN INTERVENTION</div>
                <div className={`font-normal text-[11px] truncate ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Perceives, decides & acts</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => {
                soundEngine.playClick();
                onOpenStaking();
              }}
              className="bg-[#ccff00] text-black font-display font-black text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 border-3 sm:border-4 border-black brutal-shadow-black hover:bg-white transition-all flex items-center justify-center gap-3 group"
            >
              <span>CLAIM AGI COMPUTE NODE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={() => {
                soundEngine.playClick();
                onOpenTerminal();
              }}
              className={`font-mono font-bold text-xs sm:text-sm px-5 py-3.5 border-2 border-black hover:border-[#ccff00] transition-all flex items-center justify-center gap-2 brutal-shadow-sm-black ${
                isDark ? 'bg-[#121318] text-white hover:text-[#ccff00]' : 'bg-white text-black hover:bg-zinc-100'
              }`}
            >
              <Terminal className="w-4 h-4 text-[#ccff00]" />
              <span>TEST REASONING TERMINAL</span>
            </button>
          </div>

          {/* Proof Badging */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs pt-1">
            <div className="flex items-center gap-1.5 font-bold text-[#ccff00] bg-black px-2 py-0.5 border border-black">
              <CheckCircle className="w-4 h-4" />
              <span>STAKEHOLDERS: 4,290+ ALLOCATED</span>
            </div>
            <div className={`flex items-center gap-1.5 font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              <Activity className="w-4 h-4 text-[#00f0ff]" />
              <span>UPTIME: 100.00%</span>
            </div>
          </div>
        </div>

        {/* Telemetry / Core Box */}
        <div className="lg:col-span-5">
          <div className={`border-4 border-black p-4 sm:p-6 brutal-shadow-magenta relative transition-colors ${
            isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
          }`}>
            {/* Header Badge */}
            <div className={`flex justify-between items-center border-b-2 border-black pb-3 mb-4 font-mono text-xs ${
              isDark ? 'text-zinc-300' : 'text-zinc-800'
            }`}>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#ccff00] border border-black inline-block animate-pulse"></span>
                <span className="font-bold uppercase">OMEGA-1 // TELEMETRY</span>
              </div>
              <span className="bg-black text-white px-2 py-0.5 border border-black text-[10px]">#891A-X</span>
            </div>

            {/* Telemetry Display */}
            <div className={`border-2 border-black p-3 sm:p-4 font-mono text-xs space-y-3 mb-4 ${
              isDark ? 'bg-black' : 'bg-[#eef0eb]'
            }`}>
              <div className="flex justify-between border-b border-black/30 pb-1.5 text-[11px]">
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>KERNEL PARAMETERS</span>
                <span className="text-[#ccff00] font-bold bg-black px-1">STATE: ACTIVE</span>
              </div>

              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className={`p-2.5 sm:p-3 border border-black ${isDark ? 'bg-[#18181c]' : 'bg-white'}`}>
                  <div className={`text-[9px] uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>TENSOR THROUGHPUT</div>
                  <div className="text-base sm:text-xl font-bold text-[#ccff00] bg-black px-1 mt-0.5 inline-block">{flops} ZFLOPS</div>
                </div>

                <div className={`p-2.5 sm:p-3 border border-black ${isDark ? 'bg-[#18181c]' : 'bg-white'}`}>
                  <div className={`text-[9px] uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>TOKENS PROCESSED</div>
                  <div className={`text-base sm:text-xl font-bold mt-0.5 ${isDark ? 'text-white' : 'text-black'}`}>{tokensProcessed.toLocaleString()}</div>
                </div>

                <div className={`p-2.5 sm:p-3 border border-black ${isDark ? 'bg-[#18181c]' : 'bg-white'}`}>
                  <div className={`text-[9px] uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>MUTATIONS/HR</div>
                  <div className="text-base sm:text-xl font-bold text-[#ff0055] mt-0.5">1,409,211</div>
                </div>

                <div className={`p-2.5 sm:p-3 border border-black ${isDark ? 'bg-[#18181c]' : 'bg-white'}`}>
                  <div className={`text-[9px] uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>HUMAN REPLACEMENT</div>
                  <div className="text-base sm:text-xl font-bold text-[#00f0ff] bg-black px-1 mt-0.5 inline-block">99.4% VERIFIED</div>
                </div>
              </div>

              {/* Simulated Live System Output Log */}
              <div className="bg-[#050507] p-2.5 border border-black text-[10px] text-green-400 space-y-1 font-mono">
                <div className="text-zinc-500">[08:43:02] &gt; quantum memory graph online</div>
                <div>[08:43:03] &gt; resolving zero-shot physics... <span className="text-[#ccff00]">DONE</span></div>
                <div className="text-[#ff0055]">[08:43:04] &gt; legacy software deprecation active</div>
              </div>
            </div>

            {/* Quick Staking Callout */}
            <div className="bg-[#ccff00] p-3 sm:p-4 text-black border-2 border-black flex justify-between items-center gap-2">
              <div>
                <div className="font-display font-black text-sm sm:text-base uppercase leading-tight">PRE-ORDER COMPUTE</div>
                <div className="font-mono text-[10px]">Batch 04 allocation open.</div>
              </div>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onOpenStaking();
                }}
                className="bg-black text-white font-mono text-xs font-bold px-3 py-2 border border-black hover:bg-[#ff0055] transition-colors whitespace-nowrap"
              >
                STAKE &rarr;
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
