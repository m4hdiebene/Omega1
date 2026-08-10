import React, { useState } from 'react';
import { X, Check, Flame, Shield, Key, Download, Cpu, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';

export default function ComputeStakingModal({ isOpen, onClose }) {
  const [selectedTier, setSelectedTier] = useState('SOVEREIGN');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedKey, setGeneratedKey] = useState('');

  if (!isOpen) return null;

  const TIERS = [
    {
      id: 'DEV',
      name: 'DEVELOPER NODE',
      price: '$1,490',
      period: '/ MONTH',
      flops: '10 TERAFLOPS',
      color: '#00f0ff',
      features: [
        'Single system domain allocation',
        '100,000 recursive code mutations/day',
        '99.9% uptime SLA',
        'Standard Discord support channel'
      ]
    },
    {
      id: 'SOVEREIGN',
      name: 'SOVEREIGN CLUSTER',
      badge: 'MOST POPULAR',
      price: '$8,900',
      period: '/ MONTH',
      flops: '150 TERAFLOPS',
      color: '#ccff00',
      features: [
        'Unlimited enterprise domain allocation',
        'Continuous zero-shot execution stream',
        'Priority GPU/TPU quantum tensor queue',
        'Dedicated AGI safety architect'
      ]
    },
    {
      id: 'PLANETARY',
      name: 'PLANETARY GRID',
      price: '$49,000',
      period: '/ MONTH',
      flops: '2.5 ZETTAFLOPS',
      color: '#ff0055',
      features: [
        'Dedicated liquid-cooled quantum pod',
        'Custom self-mutating hardware kernel',
        'Infinite parallel simulation instances',
        'Board-level sovereign SLA'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playSuccess();

    // Generate random hex key
    const hex = '0x' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
    setGeneratedKey(hex);
    setIsSubmitted(true);

    // Launch confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ccff00', '#ff0055', '#00f0ff', '#ffffff']
    });
  };

  const handleCloseModal = () => {
    soundEngine.playClick();
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0a0a0c] border-4 border-white p-6 brutal-shadow-magenta my-8 space-y-6">
        
        {/* Modal Top Bar */}
        <div className="flex justify-between items-center border-b-4 border-[#ccff00] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#ccff00] text-black font-black flex items-center justify-center border border-white text-lg">
              Ω
            </div>
            <div>
              <div className="font-display font-black text-xl text-white uppercase tracking-tight">
                COMPUTE STAKING PORTAL
              </div>
              <div className="font-mono text-xs text-[#ccff00]">
                RESERVE OMEGA-1 TENSOR ALLOCATION [BATCH 04]
              </div>
            </div>
          </div>

          <button
            onClick={handleCloseModal}
            className="p-2 bg-[#121318] text-white border-2 border-white hover:bg-[#ff0055] transition-colors font-mono font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 font-mono">
            
            {/* Select Tier Grid */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                [STEP 01] SELECT YOUR COMPUTE STAKE TIER:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TIERS.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        soundEngine.playClick();
                        setSelectedTier(tier.id);
                      }}
                      className={`cursor-pointer p-4 border-4 transition-all relative flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-[#121318] border-white brutal-shadow-sm' 
                          : 'bg-[#050507] border-zinc-800 hover:border-zinc-500'
                      }`}
                    >
                      {tier.badge && (
                        <div className="absolute -top-3 right-2 bg-[#ff0055] text-white text-[9px] font-bold px-2 py-0.5 border border-white">
                          {tier.badge}
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="font-display font-black text-base text-white">{tier.name}</div>
                        <div className="flex items-baseline space-x-1">
                          <span className="font-display font-black text-2xl" style={{ color: tier.color }}>{tier.price}</span>
                          <span className="text-[10px] text-zinc-500">{tier.period}</span>
                        </div>
                        <div className="bg-black p-1.5 border border-zinc-800 text-[10px] text-zinc-300 font-bold">
                          COMPUTE: {tier.flops}
                        </div>

                        <ul className="text-[10px] text-zinc-400 space-y-1 pt-2 border-t border-zinc-800">
                          {tier.features.map((f, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="text-[#ccff00]">&bull;</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <div className={`w-full py-1.5 text-center text-xs font-bold border ${
                          isSelected ? 'bg-[#ccff00] text-black border-white' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                        }`}>
                          {isSelected ? '[SELECTED]' : 'SELECT TIER'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Input Details */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                [STEP 02] STAKEHOLDER RECIPIENT INFORMATION:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-white">WORK EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="cto@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#050507] border-2 border-zinc-700 p-2.5 text-xs text-white focus:border-[#ccff00] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-white">ORGANIZATION / ENTITY *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sovereign AI Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#050507] border-2 border-zinc-700 p-2.5 text-xs text-white focus:border-[#ccff00] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#ccff00] text-black font-display font-black text-base p-4 border-4 border-white brutal-shadow hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <Flame className="w-5 h-5 fill-black" />
                <span>CONFIRM COMPUTE ALLOCATION STAKE</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation State */
          <div className="space-y-6 font-mono text-center py-4">
            <div className="w-16 h-16 bg-[#ccff00] text-black rounded-full flex items-center justify-center mx-auto border-2 border-white brutal-shadow-sm">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <div className="font-display font-black text-3xl text-white uppercase">
                COMPUTE STAKE RESERVED
              </div>
              <div className="text-xs text-[#ccff00]">
                CONFIRMATION SENT TO: <span className="underline">{email}</span>
              </div>
            </div>

            {/* Generated Cryptographic Key Box */}
            <div className="bg-[#050507] border-2 border-[#ccff00] p-4 text-left space-y-2 brutal-shadow-sm">
              <div className="flex justify-between items-center text-[10px] text-zinc-500 uppercase">
                <span>SOVEREIGN ACCESS KEY (RSA-4096)</span>
                <span className="text-[#00f0ff]">STATUS: VERIFIED ON-CHAIN</span>
              </div>
              <div className="font-mono text-xs text-[#ccff00] font-bold break-all bg-black p-3 border border-zinc-800">
                {generatedKey}
              </div>
              <div className="text-[10px] text-zinc-400">
                Store this key securely. Your dedicated OMEGA-1 node will bind to this cryptographic signature upon batch activation.
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleCloseModal}
                className="bg-[#ccff00] text-black font-display font-black text-sm px-6 py-3 border-2 border-white brutal-shadow hover:bg-white transition-all"
              >
                RETURN TO DASHBOARD
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
