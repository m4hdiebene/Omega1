import React, { useState } from 'react';
import { CornerDownRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ArchitectureBlueprint({ theme }) {
  const [selectedNode, setSelectedNode] = useState(0);
  const isDark = theme === 'dark';

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
        '100% formal verification guarantee prevents software hallucinations & crashes.'
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
      color: isDark ? '#ffffff' : '#000000',
      tagline: 'Direct hardware, web API, cloud infrastructure, and robotics actuation dispatch system.',
      details: [
        'Dispatches API requests, controls physical robotics, or deploys cloud servers directly.',
        'Bypasses human OS bottlenecks with native kernel-level hardware hooks.',
        'Cryptographically signed audit logs generated for every physical action taken.'
      ],
      specs: {
        'DISPATCH TARGETS': 'UNLIMITED (API / KERNEL)',
        'SAFETY LAYER': 'QUANTUM HARDWARE LOCK',
        'AUDIT LOG': 'IMMUTABLE BLOCKCHAIN'
      }
    }
  ];

  return (
    <section id="blueprint" className={`py-12 sm:py-16 px-3 sm:px-6 border-b-4 border-black transition-colors ${
      isDark ? 'bg-[#0a0a0c] text-white' : 'bg-[#f4f4f0] text-black'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-4 border-[#00f0ff] pb-3">
          <div>
            <div className="font-mono text-xs text-black bg-[#00f0ff] font-bold tracking-widest uppercase mb-1 px-1.5 py-0.5 inline-block">
              [SYSTEM MODULE 03]
            </div>
            <h2 className={`font-display font-black text-3xl sm:text-5xl uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              TECHNICAL <span className="bg-[#00f0ff] text-black px-2 py-0.5 border-2 border-black">BLUEPRINT</span>
            </h2>
          </div>
          <div className={`font-mono text-xs max-w-md ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
            Click any architecture node below to inspect hardware specifications and telemetry.
          </div>
        </div>

        {/* Node Flow Diagram + Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Node List Diagram */}
          <div className="lg:col-span-6 space-y-3">
            {NODES.map((node, index) => {
              const isSelected = selectedNode === index;
              return (
                <div
                  key={node.id}
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedNode(index);
                  }}
                  className={`cursor-pointer p-4 border-3 sm:border-4 transition-all relative ${
                    isSelected 
                      ? 'bg-[#121318] text-white border-black brutal-shadow-cyan translate-x-1 sm:translate-x-2' 
                      : (isDark ? 'bg-[#050507] border-zinc-800 text-white hover:border-zinc-500' : 'bg-white border-black text-black hover:bg-zinc-100')
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5 font-mono">
                    <div className="flex items-center space-x-2">
                      <span 
                        className="w-7 h-7 flex items-center justify-center font-black border border-black text-black text-xs"
                        style={{ backgroundColor: node.color }}
                      >
                        {node.id}
                      </span>
                      <span className="text-[11px] font-bold tracking-wider uppercase">{node.badge}</span>
                    </div>
                    <span className="text-[9px] opacity-60 uppercase">[TIER_0{index + 1}]</span>
                  </div>

                  <h3 className="font-display font-black text-base sm:text-lg uppercase tracking-tight mb-1">
                    {node.title}
                  </h3>
                  <p className="font-mono text-xs opacity-80 line-clamp-2">
                    {node.tagline}
                  </p>

                  {isSelected && (
                    <div className="mt-2 flex items-center gap-1 text-[#00f0ff] font-mono text-[11px] font-bold">
                      <CornerDownRight className="w-3.5 h-3.5" />
                      <span>INSPECTING HARDWARE TELEMETRY...</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Node Telemetry Card */}
          <div className="lg:col-span-6">
            <div className={`border-4 border-black p-5 sm:p-6 brutal-shadow-black space-y-5 lg:sticky lg:top-24 ${
              isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
            }`}>
              
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-black pb-3 font-mono">
                <div>
                  <div className="text-[10px] opacity-60 uppercase font-bold">[NODE INSPECTION]</div>
                  <h3 
                    className="font-display font-black text-xl sm:text-2xl uppercase mt-0.5"
                    style={{ color: NODES[selectedNode].color === '#ffffff' && !isDark ? '#000000' : NODES[selectedNode].color }}
                  >
                    {NODES[selectedNode].title}
                  </h3>
                </div>
                <span className="bg-black text-white px-2.5 py-1 text-xs border border-black font-bold">
                  {NODES[selectedNode].badge}
                </span>
              </div>

              {/* Tagline */}
              <p className={`font-mono text-xs sm:text-sm p-3 border-l-4 border-black ${
                isDark ? 'bg-[#050507] text-zinc-300' : 'bg-[#eef0eb] text-zinc-800'
              }`}>
                {NODES[selectedNode].tagline}
              </p>

              {/* Functional Highlights */}
              <div className="space-y-2 font-mono text-xs">
                <div className="font-bold text-[10px] opacity-70 uppercase">&gt; FUNCTIONAL MECHANICS:</div>
                {NODES[selectedNode].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-2 bg-black text-white p-2 border border-black text-[11px]">
                    <span className="text-[#ccff00] font-bold">&bull;</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Specs Grid */}
              <div className="space-y-2 font-mono">
                <div className="font-bold text-[10px] opacity-70 uppercase">&gt; HARDWARE SPECIFICATIONS:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {Object.entries(NODES[selectedNode].specs).map(([key, val]) => (
                    <div key={key} className="bg-black p-2.5 border border-black text-white">
                      <div className="text-[9px] text-zinc-400 uppercase">{key}</div>
                      <div className="text-xs font-bold text-[#ccff00] mt-0.5">{val}</div>
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
