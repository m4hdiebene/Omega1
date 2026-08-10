import React, { useState } from 'react';
import { Calculator, DollarSign, Zap, TrendingUp, ShieldCheck, Flame } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ComputeCalculator({ onOpenStaking }) {
  const [teamSize, setTeamSize] = useState(25);
  const [avgSalary, setAvgSalary] = useState(130000);
  const [targetVelocity, setTargetVelocity] = useState(100);

  // Calculations
  const legacyAnnualBurn = teamSize * avgSalary;
  // OMEGA-1 compute replacement cost scale: roughly 3.5% of legacy burn
  const omegaComputeCost = Math.round(legacyAnnualBurn * 0.035);
  const netSavings = legacyAnnualBurn - omegaComputeCost;
  const savingsPercent = ((netSavings / legacyAnnualBurn) * 100).toFixed(1);
  const timeToDeliverYear = (365 / targetVelocity).toFixed(1);

  return (
    <section id="calculator" className="py-16 px-4 bg-[#0a0a0c] border-b-4 border-white relative">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-[#ccff00] pb-4">
          <div>
            <div className="font-mono text-xs text-[#ccff00] tracking-widest uppercase mb-1">
              [SYSTEM MODULE 04]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              HUMAN OBSOLESCENCE <span className="bg-[#ccff00] text-black px-2 py-0.5 border-2 border-white">& COMPUTE ROI</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400 max-w-md">
            Calculate your organization's cost reduction when migrating legacy engineering, product design, and SaaS licenses to dedicated OMEGA-1 AGI compute nodes.
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-[#121318] border-4 border-white p-6 brutal-shadow space-y-6">
            <div className="flex items-center space-x-2 border-b-2 border-zinc-700 pb-3 font-mono text-sm font-bold text-white">
              <Calculator className="w-5 h-5 text-[#ccff00]" />
              <span>INPUT WORKFORCE PARAMETERS</span>
            </div>

            {/* Slider 1: Team Size */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white">ENGINEERING & PRODUCT HEADCOUNT</span>
                <span className="text-[#ccff00] text-sm">{teamSize} EMPLOYEES</span>
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
                className="w-full accent-[#ccff00] cursor-pointer bg-zinc-900 h-2 border border-zinc-700"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>2 (BOUTIQUE)</span>
                <span>200 (ENTERPRISE)</span>
              </div>
            </div>

            {/* Slider 2: Average Compensation */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white">AVG FULL-STACK COST / YEAR</span>
                <span className="text-[#00f0ff] text-sm">${avgSalary.toLocaleString()} / YR</span>
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
                className="w-full accent-[#00f0ff] cursor-pointer bg-zinc-900 h-2 border border-zinc-700"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>$60,000 (JUNIOR)</span>
                <span>$250,000 (PRINCIPAL)</span>
              </div>
            </div>

            {/* Slider 3: Target Velocity Factor */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white">AGI DEVELOPMENT ACCELERATION</span>
                <span className="text-[#ff0055] text-sm">{targetVelocity}x SPEED</span>
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
                className="w-full accent-[#ff0055] cursor-pointer bg-zinc-900 h-2 border border-zinc-700"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>10x SPEED</span>
                <span>500x SPEED</span>
              </div>
            </div>

            {/* Explanatory Callout */}
            <div className="bg-[#050507] p-4 border border-zinc-800 font-mono text-xs text-zinc-400 space-y-1">
              <div className="text-white font-bold text-xs flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                GUARANTEED SLA:
              </div>
              <div>OMEGA-1 operates continuously without sleep, HR compliance, server downtimes, or context switching loss.</div>
            </div>

          </div>

          {/* ROI Results Display Card */}
          <div className="lg:col-span-6 bg-[#121318] border-4 border-white p-6 brutal-shadow-magenta space-y-6">
            <div className="flex justify-between items-center border-b-2 border-zinc-700 pb-3 font-mono">
              <span className="text-xs font-bold text-white uppercase">FINANCIAL AUDIT RESULTS</span>
              <span className="bg-[#ccff00] text-black px-2 py-0.5 text-xs font-bold">AGI VS LEGACY COST</span>
            </div>

            {/* Main Net Savings Display */}
            <div className="bg-black p-5 border-2 border-white text-center space-y-1">
              <div className="font-mono text-xs text-zinc-400 uppercase">NET ANNUAL COST SAVINGS</div>
              <div className="font-display font-black text-4xl sm:text-6xl text-[#ccff00]">
                ${netSavings.toLocaleString()}
              </div>
              <div className="font-mono text-xs text-zinc-300 font-bold">
                REDUCES ANNUAL OVERHEAD BY <span className="text-[#ff0055] underline">{savingsPercent}%</span>
              </div>
            </div>

            {/* Detailed Grid comparison */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              <div className="bg-[#050507] p-4 border border-zinc-800">
                <div className="text-zinc-500 text-[10px] uppercase">LEGACY HUMAN BURN</div>
                <div className="text-xl font-bold text-white mt-1">
                  ${legacyAnnualBurn.toLocaleString()}
                </div>
                <div className="text-[10px] text-zinc-500 mt-1">Salaries + SaaS tools + overhead</div>
              </div>

              <div className="bg-[#050507] p-4 border border-zinc-800">
                <div className="text-zinc-500 text-[10px] uppercase">OMEGA-1 COMPUTE COST</div>
                <div className="text-xl font-bold text-[#00f0ff] mt-1">
                  ${omegaComputeCost.toLocaleString()}
                </div>
                <div className="text-[10px] text-zinc-500 mt-1">Dedicated tensor node stake</div>
              </div>
            </div>

            {/* Roadmap Delivery Speed Metric */}
            <div className="bg-[#18181c] p-4 border border-zinc-700 font-mono text-xs flex justify-between items-center">
              <div>
                <div className="text-zinc-400">1-YEAR ROADMAP DELIVERED IN:</div>
                <div className="font-display font-black text-2xl text-white">{timeToDeliverYear} DAYS</div>
              </div>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onOpenStaking();
                }}
                className="bg-[#ccff00] text-black font-display font-black text-xs px-4 py-3 border border-white hover:bg-white transition-colors flex items-center gap-1"
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
