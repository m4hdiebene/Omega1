import React from 'react';
import { Flame, Zap, ShieldAlert, Cpu } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    "REPLACE 10,000 SAAS APPS WITH 1 KERNEL",
    "100% RECURSIVE AUTONOMY",
    "ZERO LATENCY REALITY SOLVER",
    "NO HUMAN RETRAINING REQUIRED",
    "CONTINUOUS SYNTHETIC CONSCIOUSNESS",
    "QUANTUM-TENSOR ARCHITECTURE",
    "THE END OF LEGACY CODING"
  ];

  return (
    <div className="bg-[#ccff00] text-black border-y-4 border-white py-3 overflow-hidden font-display font-black text-xl uppercase tracking-wider relative select-none">
      <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6">
            <span className="hover:text-[#ff0055] transition-colors cursor-pointer">{item}</span>
            <div className="w-3 h-3 bg-black transform rotate-45 border border-white"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
