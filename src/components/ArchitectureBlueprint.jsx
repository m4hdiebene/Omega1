import React, { useState } from 'react';
import { Cpu, Layers, GitMerge, ShieldCheck, Zap, ArrowRight, CornerDownRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ArchitectureBlueprint() {
  const [selectedNode, setSelectedNode] = useState(0);

  const NODES = [
    {
      id: '01',
      title: 'MULTI-MODAL PERCEPTION ENGINE',
      badge: 'PERCEPTION',
      color: '#ccff00',
      tagline: 'Continuous stream ingestion across text, vision, audio, spatial depth, and satellite radar vectors.',
      details: [
        'Ingests up to 10 Gigabytes/sec of raw sensor telemetry without downsampling.',
        'Zero-shot conversion of physical environment pixels into 3D collision graphs.',
        'Sub-millisecond semantic tokenization bypassing standard transformer token limits.'
      ],
      specs: {
        'LATENCY': '0.002 ms',
        'BANDWIDTH': '10 GB/s',
        'STREAM CHANNELS': '65,536 INDEPENDENT'
      }
    },
    {
      id: '02',
      title: 'QUANTUM-TENSOR LATENT MATRIX',
      badge: 'COGNITION',
      color: '#00f0ff',
      tagline: '100+ Trillion parameter vector manifold mapping all recorded human knowledge and physical laws.',
      details: [
        'Dynamic topology that rearranges node connections based on query complexity.',
        'Supports instant infinite context window via fractal memory graph retrieval.',
        'Maintains non-linear cause-and-effect simulation model for zero-shot decision making.'
      ],
      specs: {
        'PARAMETERS': '100 TRILLION TENSORS',
        'CONTEXT WINDOW': 'INFINITE (FRACTAL)',
        'RECALL SPEED': '1.2 NANOSECONDS'
      }
    },
    {
      id: '03',
      title: 'RECURSIVE SELF-MUTATION LOOP',
      badge: 'EVOLUTION',
      color: '#ff0055',
      tagline: 'Autonomous kernel optimizing its own binary code layout in real-time every 10 milliseconds.',
      details: [
        'Performs static analysis on its own execution graph and prunes inefficient pathways.',
        'Synthesizes specialized machine code directly for the target hardware silicon.',
        '100% formal verification guarantee prevents software halluctions & crashes.'
      ],
      specs: {
        'MUTATION RATE': '100 CPS (CYCLES/SEC)',
        'CODE PURGE': '99.4% REDUNDANCY CLEARED',
        'VERIFICATION': 'FORMAL MATH PROOF'
      }
    },
    {
      id: '04',
      title: 'SOVEREIGN ACTION DISPATCHER',
      badge: 'EXECUTION',
      color: '#ffffff',
      tagline: 'Direct hardware, web API, cloud infrastructure, and robotics actuation dispatch system.',
      details: [
        'Dispatches API requests, controls physical robotics, or deploys cloud servers directly.',
        'Bypasses human OS bottlenecks with native kernel-level hardware hooks.',
        'Cryptographically signed audit logs generated for every physical action taken.'
      ],
      specs: {
        'DISPATCH TARGETS': 'UNLIMITED (API / KERNEL)',
        'SAFETY LAYER': 'QUANTUM HARDWARE LOCK',
        'AUDIT LOG': 'IMMUTABLE BLOCK CHAIN'
      }
    }
  ];

  return (
    <section id="blueprint" className="py-16 px-4 bg-[#0a0a0c] border-b-4 border-white relative">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-[#00f0ff] pb-4">
          <div>
            <div className="font-mono text-xs text-[#00f0ff] tracking-widest uppercase mb-1">
              [SYSTEM MODULE 03]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              TECHNICAL <span className="bg-[#00f0ff] text-black px-2 py-0.5 border-2 border-white">BLUEPRINT</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400 max-w-md">
            Architectural schematic of OMEGA-1's recursive 4-tier engine. Click any tier node to inspect technical specifications and hardware parameters.
          </div>
        </div>

        {/* Node Flow Diagram + Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Node List Diagram */}
          <div className="lg:col-span-6 space-y-4">
            {NODES.map((node, index) => {
              const isSelected = selectedNode === index;
              return (
                <div
                  key={node.id}
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedNode(index);
                  }}
                  className={`cursor-pointer p-5 border-4 transition-all relative ${
                    isSelected 
                      ? 'bg-[#121318] border-white brutal-shadow-cyan translate-x-2' 
                      : 'bg-[#050507] border-zinc-800 hover:border-zinc-500'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2 font-mono">
                    <div className="flex items-center space-x-3">
                      <span 
                        className="w-8 h-8 flex items-center justify-center font-black border border-white text-black"
                        style={{ backgroundColor: node.color }}
                      >
                        {node.id}
                      </span>
                      <span className="text-xs font-bold text-white tracking-wider">{node.badge}</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 uppercase">[TIER_LEVEL_0{index + 1}]</span>
                  </div>

                  <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mb-1">
                    {node.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 line-clamp-2">
                    {node.tagline}
                  </p>

                  {isSelected && (
                    <div className="mt-3 flex items-center gap-1 text-[#00f0ff] font-mono text-xs font-bold">
                      <CornerDownRight className="w-4 h-4" />
                      <span>INSPECTING HARDWARE TELEMETRY...</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Node Telemetry Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#121318] border-4 border-white p-6 brutal-shadow space-y-6 sticky top-24">
              
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-zinc-700 pb-4 font-mono">
                <div>
                  <div className="text-xs text-zinc-500">[SELECTED NODE ARCHITECTURE]</div>
                  <h3 
                    className="font-display font-black text-2xl uppercase mt-1"
                    style={{ color: NODES[selectedNode].color }}
                  >
                    {NODES[selectedNode].title}
                  </h3>
                </div>
                <span className="bg-black text-white px-3 py-1 text-xs border border-white font-bold">
                  {NODES[selectedNode].badge}
                </span>
              </div>

              {/* Tagline */}
              <p className="font-mono text-sm text-zinc-300 border-l-4 p-2 bg-[#050507]" style={{ borderColor: NODES[selectedNode].color }}>
                {NODES[selectedNode].tagline}
              </p>

              {/* Functional Highlights */}
              <div className="space-y-3 font-mono text-xs">
                <div className="text-zinc-500 uppercase tracking-wider font-bold">&gt; CORE FUNCTIONAL MECHANICS:</div>
                {NODES[selectedNode].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-zinc-300 bg-black/50 p-2.5 border border-zinc-800">
                    <span className="text-[#ccff00] font-bold">&bull;</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Hardware Specs Grid */}
              <div className="space-y-2 font-mono">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider">&gt; HARDWARE SPECIFICATIONS:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {Object.entries(NODES[selectedNode].specs).map(([key, val]) => (
                    <div key={key} className="bg-black p-3 border border-zinc-800">
                      <div className="text-[10px] text-zinc-500 uppercase">{key}</div>
                      <div className="text-xs font-bold text-white mt-1">{val}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
