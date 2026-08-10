import React, { useState, useEffect } from 'react';
import { Terminal, Play, CheckCircle2, Cpu, Copy, Check } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function TerminalPlayground({ theme }) {
  const [activePreset, setActivePreset] = useState('LOGISTICS');
  const [isExecuting, setIsExecuting] = useState(false);
  const [logs, setLogs] = useState([]);
  const [resultOutput, setResultOutput] = useState(null);
  const [copied, setCopied] = useState(false);
  const isDark = theme === 'dark';

  const PRESETS = {
    LOGISTICS: {
      title: 'OPTIMIZE GLOBAL LOGISTICS',
      prompt: 'Re-route global shipping container fleets around Panama/Suez bottlenecks using real-time wave current vector fields.',
      steps: [
        '[0.01s] Ingesting 480,000 AIS vessel tracking telemetry streams...',
        '[0.04s] Constructing 14-dimensional graph tensor of wave currents...',
        '[0.08s] Calculating zero-friction fuel navigation vectors...',
        '[0.12s] Self-compiling custom routing kernel to GPU cluster...'
      ],
      output: {
        summary: 'GLOBAL LOGISTICS RE-OPTIMIZED WITH 0.00% DELAY',
        metrics: [
          { label: 'FUEL SAVED', val: '4,102,000 BBL' },
          { label: 'DELAY REDUCTION', val: '94.8%' },
          { label: 'AUTONOMOUS VESSELS', val: '14,290 SHIPS' }
        ],
        hexCode: '0x89F4 // SHIP_ROUTING_SUCCESS'
      }
    },
    REWRITE: {
      title: 'DESTRUCT LEGACY SAAS CODE',
      prompt: 'Deconstruct a 1.4M LOC legacy SaaS stack (React + Node + PostgreSQL) into a single 4KB compiled WASM binary.',
      steps: [
        '[0.02s] Decompiling 1.4 million lines of JS/SQL code into IR...',
        '[0.05s] Purging 99.8% of boilerplate npm abstractions...',
        '[0.09s] Synthesizing atomic register operations directly in WASM...',
        '[0.14s] Verifying zero memory leaks & strict type soundness...'
      ],
      output: {
        summary: 'FULL SAAS REPLACED WITH 4.1KB WASM KERNEL',
        metrics: [
          { label: 'CODE REDUCTION', val: '99.97%' },
          { label: 'LATENCY ACCEL', val: '3,400x FASTER' },
          { label: 'SERVER COST BURN', val: '$45k -> $0.12/MO' }
        ],
        hexCode: '0x99A1 // WASM_SINGLE_BINARY_EMITTED'
      }
    },
    SUPERCONDUCTOR: {
      title: 'SYNTHESIZE SUPERCONDUCTOR',
      prompt: 'Formulate room-temperature ambient pressure metallic hydrogen lattice structure resistant to thermal degradation.',
      steps: [
        '[0.03s] Simulating electron-phonon coupling across 10^18 crystal permutations...',
        '[0.07s] Computing density functional theory at 298.15 Kelvin...',
        '[0.11s] Synthesizing molecular assembly instructions for robotic lab...'
      ],
      output: {
        summary: 'ROOM-TEMP SUPERCONDUCTOR LATTICE CONFIRMED',
        metrics: [
          { label: 'CRITICAL TEMP', val: '298.15 K (25°C)' },
          { label: 'REQUIRED PRESSURE', val: '1.01 BAR' },
          { label: 'GRID POWER LOSS', val: '0.0000%' }
        ],
        hexCode: '0x33C8 // METALLIC_HYDROGEN_STABLE'
      }
    }
  };

  const handleRunExecution = (presetKey = activePreset) => {
    soundEngine.playClick();
    setIsExecuting(true);
    setLogs([]);
    setResultOutput(null);

    const data = PRESETS[presetKey];
    let stepIdx = 0;

    const interval = setInterval(() => {
      if (stepIdx < data.steps.length) {
        soundEngine.playTerminalKey();
        setLogs((prev) => [...prev, data.steps[stepIdx]]);
        stepIdx++;
      } else {
        clearInterval(interval);
        soundEngine.playSuccess();
        setResultOutput(data.output);
        setIsExecuting(false);
      }
    }, 550);
  };

  useEffect(() => {
    handleRunExecution('LOGISTICS');
  }, []);

  const copyHex = () => {
    soundEngine.playClick();
    if (resultOutput) {
      navigator.clipboard.writeText(resultOutput.hexCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="terminal" className={`py-12 sm:py-16 px-3 sm:px-6 border-b-4 border-black transition-colors ${
      isDark ? 'bg-[#0a0a0c] text-white' : 'bg-[#f4f4f0] text-black'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-4 border-[#ff0055] pb-3">
          <div>
            <div className="font-mono text-xs text-white bg-[#ff0055] font-bold tracking-widest uppercase mb-1 px-1.5 py-0.5 inline-block">
              [SYSTEM MODULE 02]
            </div>
            <h2 className={`font-display font-black text-3xl sm:text-5xl uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              REASONING ENGINE <span className="bg-[#ff0055] text-white px-2 py-0.5 border-2 border-black">DEMO TERMINAL</span>
            </h2>
          </div>
          <div className={`font-mono text-xs max-w-md ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
            Test OMEGA-1's zero-shot execution stream across real-world multi-modal tasks.
          </div>
        </div>

        {/* Preset Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
          {Object.keys(PRESETS).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActivePreset(key);
                handleRunExecution(key);
              }}
              className={`p-3.5 border-3 border-black text-left font-bold transition-all ${
                activePreset === key 
                  ? 'bg-[#ccff00] text-black brutal-shadow-black' 
                  : (isDark ? 'bg-[#121318] text-white hover:border-[#ccff00]' : 'bg-white text-black hover:bg-zinc-100')
              }`}
            >
              <div className="text-[9px] opacity-70 uppercase mb-0.5">PRESET // 0{Object.keys(PRESETS).indexOf(key) + 1}</div>
              <div className="font-display text-xs sm:text-sm font-black tracking-tight">{PRESETS[key].title}</div>
            </button>
          ))}
        </div>

        {/* Main Terminal Screen */}
        <div className={`border-4 border-black p-3 sm:p-5 brutal-shadow-black space-y-4 font-mono text-xs ${
          isDark ? 'bg-[#050507] text-white' : 'bg-white text-black'
        }`}>
          
          {/* Window Bar */}
          <div className={`p-2.5 border-b-2 border-black flex justify-between items-center ${
            isDark ? 'bg-[#121318] text-zinc-300' : 'bg-[#e2e4de] text-black'
          }`}>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block"></span>
                <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full inline-block"></span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block"></span>
              </div>
              <span className="font-bold text-[11px] truncate">OMEGA_REASONING_SANDBOX</span>
            </div>
            <div className="text-[10px] text-[#ccff00] bg-black px-1.5 py-0.5 font-bold">ZERO-SHOT</div>
          </div>

          {/* Active Prompt */}
          <div className={`p-3 sm:p-4 border border-black space-y-1 ${
            isDark ? 'bg-[#121318]' : 'bg-[#f8f9f6]'
          }`}>
            <div className="text-[10px] opacity-70 uppercase font-bold">&gt; INPUT OBJECTIVE:</div>
            <div className="text-[#ccff00] bg-black px-2 py-1 text-xs sm:text-sm font-bold inline-block max-w-full break-words">
              "{PRESETS[activePreset].prompt}"
            </div>
          </div>

          {/* Execution Log Stream */}
          <div className="bg-[#020203] p-3 sm:p-4 border border-black min-h-[160px] max-h-[260px] overflow-y-auto space-y-2 font-mono text-[11px] text-zinc-300">
            <div className="text-zinc-500">// OMEGA-1 RECURSIVE THOUGHT LOGS:</div>
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-[#00f0ff] font-bold">&gt;&gt;</span>
                <span className="break-words">{log}</span>
              </div>
            ))}

            {isExecuting && (
              <div className="flex items-center space-x-2 text-[#ccff00] animate-pulse py-1">
                <Cpu className="w-4 h-4 animate-spin" />
                <span>SYNTHESIZING ZERO-SHOT REALITY MATRIX...</span>
              </div>
            )}
          </div>

          {/* Output Card */}
          {resultOutput && (
            <div className={`border-2 border-[#ccff00] p-4 sm:p-5 space-y-4 brutal-shadow-sm-black ${
              isDark ? 'bg-[#121318]' : 'bg-[#eef0eb]'
            }`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-black pb-3">
                <div className="flex items-center space-x-2 text-[#ccff00] bg-black px-2 py-1 font-bold font-display text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
                  <span>{resultOutput.summary}</span>
                </div>
                <button
                  onClick={copyHex}
                  className="bg-black text-[#ccff00] border border-black px-2.5 py-1 text-[11px] hover:bg-[#ccff00] hover:text-black transition-colors flex items-center gap-1 font-bold"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'COPIED' : 'COPY RESULT HEX'}</span>
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {resultOutput.metrics.map((m, idx) => (
                  <div key={idx} className="bg-black p-2.5 border border-black text-white">
                    <div className="text-zinc-400 text-[9px] uppercase">{m.label}</div>
                    <div className="text-base sm:text-lg font-black font-display mt-0.5 text-[#ccff00]">{m.val}</div>
                  </div>
                ))}
              </div>

              <div className="bg-black p-2 border border-black text-[10px] text-zinc-300 font-mono flex flex-wrap justify-between gap-1">
                <span>RECEIPT HASH:</span>
                <span className="text-[#00f0ff] font-bold break-all">{resultOutput.hexCode}</span>
              </div>
            </div>
          )}

          {/* Re-run Button */}
          <div className="flex justify-between items-center pt-1">
            <div className="text-[10px] text-zinc-500">
              LATENCY: <span className="font-bold text-[#ccff00] bg-black px-1">0.142 SECONDS</span>
            </div>
            <button
              onClick={() => handleRunExecution(activePreset)}
              disabled={isExecuting}
              className="bg-[#ccff00] text-black font-display font-black text-xs px-3 sm:px-4 py-2 border-2 border-black hover:bg-white transition-all flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>RE-RUN EXECUTION</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
