import React, { useState } from 'react';
import { X, Check, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';

export default function ComputeStakingModal({ theme, isOpen, onClose }) {
  const [selectedTier, setSelectedTier] = useState('SOVEREIGN');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedKey, setGeneratedKey] = useState('');
  const isDark = theme === 'dark';

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
        'Single domain allocation',
        '100k mutations/day',
        '99.9% uptime SLA',
        'Discord channel'
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
        'Unlimited domains',
        'Zero-shot stream',
        'Priority GPU tensor queue',
        'Dedicated architect'
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
        'Liquid quantum pod',
        'Custom hardware kernel',
        'Infinite parallel sims',
        'Board-level SLA'
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playSuccess();

    const hex = '0x' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
    setGeneratedKey(hex);
    setIsSubmitted(true);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full max-w-4xl border-4 border-black p-4 sm:p-6 brutal-shadow-magenta my-4 max-h-[92vh] overflow-y-auto space-y-5 ${
        isDark ? 'bg-[#0a0a0c] text-white' : 'bg-white text-black'
      }`}>
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b-4 border-[#ccff00] pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-[#ccff00] text-black font-black flex items-center justify-center border border-black text-lg">
              Ω
            </div>
            <div>
              <div className="font-display font-black text-lg sm:text-xl uppercase tracking-tight">
                COMPUTE STAKING PORTAL
              </div>
              <div className="font-mono text-[10px] text-[#ccff00] bg-black px-1.5 py-0.5 inline-block font-bold">
                RESERVE ALLOCATION [BATCH 04]
              </div>
            </div>
          </div>

          <button
            onClick={handleCloseModal}
            className="p-1.5 bg-[#121318] text-white border-2 border-black hover:bg-[#ff0055] transition-colors font-mono font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 font-mono">
            
            {/* Select Tier */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                [STEP 01] SELECT COMPUTE STAKE TIER:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {TIERS.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        soundEngine.playClick();
                        setSelectedTier(tier.id);
                      }}
                      className={`cursor-pointer p-3.5 border-4 transition-all relative flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-[#121318] text-white border-black brutal-shadow-sm-black' 
                          : (isDark ? 'bg-[#050507] border-zinc-800 text-white' : 'bg-gray-100 border-black text-black')
                      }`}
                    >
                      {tier.badge && (
                        <div className="absolute -top-2.5 right-2 bg-[#ff0055] text-white text-[9px] font-bold px-1.5 py-0.5 border border-black">
                          {tier.badge}
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <div className="font-display font-black text-sm uppercase">{tier.name}</div>
                        <div className="flex items-baseline space-x-1">
                          <span className="font-display font-black text-xl" style={{ color: tier.color }}>{tier.price}</span>
                          <span className="text-[9px] opacity-70">{tier.period}</span>
                        </div>
                        <div className="bg-black text-[#ccff00] p-1 border border-black text-[10px] font-bold">
                          COMPUTE: {tier.flops}
                        </div>

                        <ul className="text-[10px] space-y-1 pt-2 border-t border-black/40 opacity-90">
                          {tier.features.map((f, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <span className="text-[#ccff00] font-bold">&bull;</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3">
                        <div className={`w-full py-1 text-center text-xs font-bold border-2 border-black ${
                          isSelected ? 'bg-[#ccff00] text-black' : 'bg-zinc-800 text-zinc-300'
                        }`}>
                          {isSelected ? '[SELECTED]' : 'SELECT TIER'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recipient details */}
            <div className="space-y-3 pt-1">
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                [STEP 02] STAKEHOLDER INFORMATION:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="cto@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#050507] border-2 border-black p-2 text-xs text-white focus:border-[#ccff00] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold">ORGANIZATION *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sovereign AI Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#050507] border-2 border-black p-2 text-xs text-white focus:border-[#ccff00] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full bg-[#ccff00] text-black font-display font-black text-sm sm:text-base p-3.5 border-4 border-black brutal-shadow-black hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <Flame className="w-5 h-5 fill-black" />
                <span>CONFIRM STAKE ALLOCATION</span>
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation state */
          <div className="space-y-5 font-mono text-center py-3">
            <div className="w-14 h-14 bg-[#ccff00] text-black rounded-full flex items-center justify-center mx-auto border-2 border-black brutal-shadow-sm-black">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-1">
              <div className="font-display font-black text-2xl sm:text-3xl uppercase">
                COMPUTE STAKE RESERVED
              </div>
              <div className="text-xs text-[#ccff00] bg-black px-2 py-0.5 inline-block font-bold">
                CONFIRMATION SENT TO: <span className="underline">{email}</span>
              </div>
            </div>

            {/* Generated Cryptographic Key Box */}
            <div className="bg-[#050507] text-white border-2 border-[#ccff00] p-3.5 text-left space-y-2 brutal-shadow-sm-black">
              <div className="flex justify-between items-center text-[10px] text-zinc-400 uppercase">
                <span>SOVEREIGN ACCESS KEY (RSA-4096)</span>
                <span className="text-[#00f0ff] font-bold">VERIFIED ON-CHAIN</span>
              </div>
              <div className="font-mono text-xs text-[#ccff00] font-bold break-all bg-black p-2.5 border border-black">
                {generatedKey}
              </div>
              <div className="text-[10px] text-zinc-400">
                Store this key securely. Your OMEGA-1 node will bind to this key upon batch activation.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleCloseModal}
                className="bg-[#ccff00] text-black font-display font-black text-xs sm:text-sm px-6 py-3 border-2 border-black brutal-shadow-black hover:bg-white transition-all"
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
