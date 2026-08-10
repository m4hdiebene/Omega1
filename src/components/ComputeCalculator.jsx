import React, { useState } from 'react';
import { Calculator, DollarSign, ShieldCheck, Flame } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ComputeCalculator({ theme, onOpenStaking }) {
  const [teamSize, setTeamSize] = useState(25);
  const [avgSalary, setAvgSalary] = useState(130000);
  const [targetVelocity, setTargetVelocity] = useState(100);
  const isDark = theme === 'dark';

  // Calculations
  const legacyAnnualBurn = teamSize * avgSalary;
  const omegaComputeCost = Math.round(legacyAnnualBurn * 0.035);
  const netSavings = legacyAnnualBurn - omegaComputeCost;
  const savingsPercent = ((netSavings / legacyAnnualBurn) * 100).toFixed(1);
  const timeToDeliverYear = (365 / targetVelocity).toFixed(1);

  return (
    <section id="calculator" className={`py-12 sm:py-16 px-3 sm:px-6 border-b-4 border-black transition-colors ${
      isDark ? 'bg-[#0a0a0c] text-white' : 'bg-[#f4f4f0] text-black'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-4 border-[#ccff00] pb-3">
          <div>
            <div className="font-mono text-xs text-black bg-[#ccff00] font-bold tracking-widest uppercase mb-1 px-1.5 py-0.5 inline-block">
              [SYSTEM MODULE 04]
            </div>
            <h2 className={`font-display font-black text-3xl sm:text-5xl uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              HUMAN OBSOLESCENCE <span className="bg-[#ccff00] text-black px-2 py-0.5 border-2 border-black">& COMPUTE ROI</span>
            </h2>
          </div>
          <div className={`font-mono text-xs max-w-md ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
            Calculate your organization's cost reduction when migrating legacy engineering burn to dedicated AGI compute nodes.
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Controls Panel */}
          <div className={`lg:col-span-6 border-4 border-black p-4 sm:p-6 brutal-shadow space-y-5 ${
            isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
          }`}>
            <div className="flex items-center space-x-2 border-b-2 border-black pb-3 font-mono text-xs sm:text-sm font-bold">
              <Calculator className="w-5 h-5 text-[#ccff00]" />
              <span>INPUT WORKFORCE PARAMETERS</span>
            </div>

            {/* Slider 1: Team Size */}
            <div className="space-y-1.5 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span>HEADCOUNT (EMPLOYEES)</span>
                <span className="text-[#ccff00] bg-black px-1.5 py-0.5">{teamSize} EMPLOYEES</span>
              </div>
              <input
                type="range"
                min="2"
                max="200"
                value={teamSize}
                onChange={(e) => {
                  soundEngine.playTerminalKey();
                  setTeamSize(Number(e.target.value));
                }}
                className="w-full accent-[#ccff00] cursor-pointer bg-zinc-900 h-3 border border-black"
              />
            </div>

            {/* Slider 2: Average Compensation */}
            <div className="space-y-1.5 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span>AVG COST / ENGINEER / YR</span>
                <span className="text-[#00f0ff] bg-black px-1.5 py-0.5">${avgSalary.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="60000"
                max="250000"
                step="5000"
                value={avgSalary}
                onChange={(e) => {
                  soundEngine.playTerminalKey();
                  setAvgSalary(Number(e.target.value));
                }}
                className="w-full accent-[#00f0ff] cursor-pointer bg-zinc-900 h-3 border border-black"
              />
            </div>

            {/* Slider 3: Target Velocity Factor */}
            <div className="space-y-1.5 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span>AGI ACCELERATION MULTIPLIER</span>
                <span className="text-[#ff0055] font-bold">{targetVelocity}x SPEED</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={targetVelocity}
                onChange={(e) => {
                  soundEngine.playTerminalKey();
                  setTargetVelocity(Number(e.target.value));
                }}
                className="w-full accent-[#ff0055] cursor-pointer bg-zinc-900 h-3 border border-black"
              />
            </div>

            <div className={`p-3 border border-black font-mono text-xs space-y-1 ${
              isDark ? 'bg-[#050507] text-zinc-400' : 'bg-[#eef0eb] text-zinc-800'
            }`}>
              <div className="font-bold text-xs flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                GUARANTEED SLA:
              </div>
              <div>OMEGA-1 operates continuously without sleep, HR compliance, server downtimes, or context switching loss.</div>
            </div>

          </div>

          {/* ROI Results Display Card */}
          <div className={`lg:col-span-6 border-4 border-black p-4 sm:p-6 brutal-shadow-magenta space-y-5 ${
            isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
          }`}>
            <div className="flex justify-between items-center border-b-2 border-black pb-3 font-mono">
              <span className="text-xs font-bold uppercase">FINANCIAL AUDIT RESULTS</span>
              <span className="bg-[#ccff00] text-black px-2 py-0.5 text-xs font-bold border border-black">AGI VS LEGACY</span>
            </div>

            {/* Net Savings Display */}
            <div className="bg-black text-white p-4 sm:p-5 border-2 border-black text-center space-y-1">
              <div className="font-mono text-[10px] text-zinc-400 uppercase">NET ANNUAL COST SAVINGS</div>
              <div className="font-display font-black text-3xl sm:text-5xl text-[#ccff00] leading-tight">
                ${netSavings.toLocaleString()}
              </div>
              <div className="font-mono text-xs text-zinc-300 font-bold">
                REDUCES ANNUAL OVERHEAD BY <span className="text-[#ff0055] underline">{savingsPercent}%</span>
              </div>
            </div>

            {/* Detailed Grid comparison */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-black p-3 border border-black text-white">
                <div className="text-zinc-400 text-[9px] uppercase">LEGACY HUMAN BURN</div>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                  ${legacyAnnualBurn.toLocaleString()}
                </div>
              </div>

              <div className="bg-black p-3 border border-black text-white">
                <div className="text-zinc-400 text-[9px] uppercase">OMEGA-1 COMPUTE COST</div>
                <div className="text-base sm:text-lg font-bold text-[#00f0ff] mt-0.5">
                  ${omegaComputeCost.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Roadmap Metric */}
            <div className={`p-3.5 border border-black font-mono text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 ${
              isDark ? 'bg-[#18181c]' : 'bg-[#e2e4de]'
            }`}>
              <div>
                <div className="text-[10px] opacity-70">1-YEAR ROADMAP DELIVERED IN:</div>
                <div className="font-display font-black text-xl sm:text-2xl">{timeToDeliverYear} DAYS</div>
              </div>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onOpenStaking();
                }}
                className="w-full sm:w-auto bg-[#ccff00] text-black font-display font-black text-xs px-4 py-2.5 border border-black hover:bg-white transition-colors flex items-center justify-center gap-1"
              >
                <Flame className="w-4 h-4 fill-black" />
                <span>LOCK IN ROI TIER</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
