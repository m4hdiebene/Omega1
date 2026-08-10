import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, CornerDownLeft, Sparkles, CheckCircle2, Cpu, Copy, Check } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function TerminalPlayground() {
  const [activePreset, setActivePreset] = useState('LOGISTICS');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [logs, setLogs] = useState([]);
  const [resultOutput, setResultOutput] = useState(null);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef(null);

  const PRESETS = {
    LOGISTICS: {
      title: 'OPTIMIZE GLOBAL LOGISTICS',
      prompt: 'Re-route global container shipping around Suez/Panama canal bottlenecks using live sea current vectors & satellite SAR images.',
      steps: [
        '[0.01s] Ingesting 480,000 AIS vessel tracking streams...',
        '[0.04s] Constructing 14-dimensional graph tensor of global wave currents...',
        '[0.08s] Calculating zero-friction fuel navigation vectors...',
        '[0.12s] Self-compiling custom routing kernel to GPU cluster...'
      ],
      output: {
        summary: 'GLOBAL LOGISTICS RE-OPTIMIZED WITH 0.00% DELAY',
        metrics: [
          { label: 'FUEL SAVED', val: '4,102,000 BARRELS' },
          { label: 'DELIVERY DELAY REDUCTION', val: '94.8%' },
          { label: 'AUTONOMOUS VESSEL DISPATCH', val: '14,290 SHIPS' }
        ],
        hexCode: '0x89F4 // SHIP_ROUTING_BINARY_SUCCESS'
      }
    },
    REWRITE: {
      title: 'DESTRUCT LEGACY SAAS CODE',
      prompt: 'Deconstruct a legacy enterprise SaaS stack (React + Node + PostgreSQL + Redis) into a single self-hosting 4KB WASM binary.',
      steps: [
        '[0.02s] Decompiling 1.4 million lines of JS/SQL code into semantic intermediate representation...',
        '[0.05s] Purging 99.8% of boilerplate npm abstractions...',
        '[0.09s] Synthesizing atomic register operations directly in rust-wasm IR...',
        '[0.14s] Verifying zero memory leaks & strict type soundness...'
      ],
      output: {
        summary: 'FULL SAAS REPLACED WITH SINGLE 4.1KB WASM KERNEL',
        metrics: [
          { label: 'CODE REDUCTION', val: '99.97%' },
          { label: 'LATENCY IMPROVEMENT', val: '3,400x FASTER' },
          { label: 'SERVER COST REDUCTION', val: '$45,000/MO -> $0.12/MO' }
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
        '[0.11s] Synthesizing molecular assembly instructions for robotic chemical lab...'
      ],
      output: {
        summary: 'ROOM-TEMP SUPERCONDUCTOR LATTICE CONFIRMED',
        metrics: [
          { label: 'CRITICAL TEMP', val: '298.15 K (25°C)' },
          { label: 'REQUIRED PRESSURE', val: '1.01 BAR (AMBIENT)' },
          { label: 'GRID POWER LOSS', val: '0.0000%' }
        ],
        hexCode: '0x33C8 // METALLIC_HYDROGEN_SYNTHESIS_STABLE'
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
    }, 600);
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
    <section id="terminal" className="py-16 px-4 bg-[#0a0a0c] border-b-4 border-white relative">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-[#ff0055] pb-4">
          <div>
            <div className="font-mono text-xs text-[#ff0055] tracking-widest uppercase mb-1">
              [SYSTEM MODULE 02]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              REASONING ENGINE <span className="bg-[#ff0055] text-white px-2 py-0.5 border-2 border-white">DEMO TERMINAL</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400 max-w-md">
            Test OMEGA-1's zero-shot execution loop. Pick a complex multi-modal scenario below to watch the AGI deconstruct, reason, and emit output binaries in milliseconds.
          </div>
        </div>

        {/* Preset Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {Object.keys(PRESETS).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActivePreset(key);
                handleRunExecution(key);
              }}
              className={`p-4 border-2 border-white text-left font-bold transition-all ${
                activePreset === key 
                  ? 'bg-[#ccff00] text-black brutal-shadow' 
                  : 'bg-[#121318] text-white hover:border-[#ccff00]'
              }`}
            >
              <div className="text-[10px] text-zinc-600 uppercase mb-1">PRESET scenario // 0{Object.keys(PRESETS).indexOf(key) + 1}</div>
              <div className="font-display text-sm font-black tracking-tight">{PRESETS[key].title}</div>
            </button>
          ))}
        </div>

        {/* Main Terminal Screen */}
        <div className="bg-[#050507] border-4 border-white p-4 brutal-shadow-white space-y-4 font-mono text-xs">
          
          {/* Terminal Window Header Bar */}
          <div className="bg-[#121318] p-3 border-b-2 border-zinc-800 flex justify-between items-center text-zinc-400">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
              </div>
              <span className="text-white font-bold">OMEGA_REASONING_SANDBOX_V4.9</span>
            </div>
            <div className="text-[11px] text-[#ccff00]">MODE: ZERO-SHOT REALITY EXECUTION</div>
          </div>

          {/* Active Prompt Box */}
          <div className="bg-[#121318] p-4 border border-zinc-800 space-y-2">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider">&gt; INPUT PROMPT OBJECTIVE:</div>
            <div className="text-[#ccff00] text-sm font-bold font-mono">
              "{PRESETS[activePreset].prompt}"
            </div>
          </div>

          {/* Execution Log Stream */}
          <div className="bg-[#020203] p-4 border border-zinc-800 min-h-[180px] space-y-2 font-mono text-xs">
            <div className="text-zinc-500">// OMEGA-1 RECURSIVE THOUGHT STREAM:</div>
            {logs.map((log, idx) => (
              <div key={idx} className="text-zinc-300 flex items-start space-x-2">
                <span className="text-[#00f0ff] font-bold">&gt;&gt;</span>
                <span>{log}</span>
              </div>
            ))}

            {isExecuting && (
              <div className="flex items-center space-x-2 text-[#ccff00] animate-pulse py-2">
                <Cpu className="w-4 h-4 animate-spin" />
                <span>SYNTHESIZING ZERO-SHOT SOLUTION MATRIX...</span>
              </div>
            )}
          </div>

          {/* Final Generated Output Card */}
          {resultOutput && (
            <div className="bg-[#121318] border-2 border-[#ccff00] p-6 space-y-4 brutal-shadow-sm">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <div className="flex items-center space-x-2 text-[#ccff00] font-bold font-display text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#ccff00]" />
                  <span>{resultOutput.summary}</span>
                </div>
                <button
                  onClick={copyHex}
                  className="bg-black text-[#ccff00] border border-[#ccff00] px-3 py-1 text-xs hover:bg-[#ccff00] hover:text-black transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'COPIED' : 'COPY RESULT HEX'}</span>
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resultOutput.metrics.map((m, idx) => (
                  <div key={idx} className="bg-black p-3 border border-zinc-800">
                    <div className="text-zinc-500 text-[10px] uppercase">{m.label}</div>
                    <div className="text-xl font-black text-white font-display mt-1">{m.val}</div>
                  </div>
                ))}
              </div>

              <div className="bg-black p-2 border border-zinc-800 text-[11px] text-zinc-400 font-mono flex justify-between">
                <span>SYSTEM RECEIPT HASIFIED:</span>
                <span className="text-[#00f0ff]">{resultOutput.hexCode}</span>
              </div>
            </div>
          )}

          {/* Re-run Execution Bar */}
          <div className="flex justify-between items-center pt-2">
            <div className="text-zinc-500 text-[11px]">
              EXECUTION DURATION: <span className="text-white">0.142 SECONDS</span>
            </div>
            <button
              onClick={() => handleRunExecution(activePreset)}
              disabled={isExecuting}
              className="bg-[#ccff00] text-black font-display font-black text-xs px-4 py-2 border-2 border-white hover:bg-white transition-all flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>RE-RUN SYNTHETIC EXECUTION</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
