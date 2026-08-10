import React, { useRef, useEffect, useState } from 'react';
import { Sliders, RefreshCw, Cpu, Zap, Activity, Eye } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function NeuralCoreCanvas() {
  const canvasRef = useRef(null);
  const [density, setDensity] = useState(70);
  const [entropy, setEntropy] = useState(3.5);
  const [colorScheme, setColorScheme] = useState('lime'); // 'lime', 'magenta', 'cyan', 'mono'
  const [activeNodesCount, setActiveNodesCount] = useState(70);
  const [synapticIntegrity, setSynapticIntegrity] = useState(99.4);

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle resizing
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = 420;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes definition
    const particles = [];
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * entropy,
        vy: (Math.random() - 0.5) * entropy,
        radius: Math.random() * 3.5 + 1.5,
        pulse: Math.random() * Math.PI * 2,
        active: Math.random() > 0.3
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Render step
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background grid lines inside canvas
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Main color palette mapping
      let primaryColor = '#ccff00';
      let lineColor = 'rgba(204, 255, 0, ';
      if (colorScheme === 'magenta') {
        primaryColor = '#ff0055';
        lineColor = 'rgba(255, 0, 85, ';
      } else if (colorScheme === 'cyan') {
        primaryColor = '#00f0ff';
        lineColor = 'rgba(0, 240, 255, ';
      } else if (colorScheme === 'mono') {
        primaryColor = '#ffffff';
        lineColor = 'rgba(255, 255, 255, ';
      }

      // Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse attraction/repulsion
        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120) {
          p.x -= (dxMouse / distMouse) * 2;
          p.y -= (dyMouse / distMouse) * 2;
        }

        // Draw node pulse
        p.pulse += 0.05;
        const currentRadius = p.radius + Math.sin(p.pulse) * 1.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.fill();

        // Connect nearby nodes with synaptic lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = alpha > 0.4 ? 1.5 : 1;
            ctx.stroke();
          }
        }
      }

      // Mouse crosshair indicator inside canvas
      if (mouseX > 0 && mouseX < canvas.width && mouseY > 0 && mouseY < canvas.height) {
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
        ctx.stroke();

        ctx.font = '10px "JetBrains Mono"';
        ctx.fillStyle = primaryColor;
        ctx.fillText(`M_POS: [${Math.floor(mouseX)}, ${Math.floor(mouseY)}]`, mouseX + 20, mouseY + 4);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, entropy, colorScheme]);

  const triggerOverclock = () => {
    soundEngine.playSuccess();
    setEntropy((prev) => +(prev * 1.8).toFixed(1));
    setSynapticIntegrity(99.99);
    setTimeout(() => {
      setEntropy(3.5);
    }, 3000);
  };

  return (
    <section id="neural-core" className="py-16 px-4 bg-[#0a0a0c] border-b-4 border-white relative">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-[#ccff00] pb-4">
          <div>
            <div className="font-mono text-xs text-[#ccff00] tracking-widest uppercase mb-1">
              [SYSTEM MODULE 01]
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
              NEURAL CORE <span className="bg-[#ccff00] text-black px-2 py-0.5 border-2 border-white">VISUALIZER</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400 max-w-md">
            Interactive real-time render of OMEGA-1's quantum tensor matrix. Manipulate parameters below to observe real-time neural connection re-routing.
          </div>
        </div>

        {/* Main Canvas & Control Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Canvas Box */}
          <div className="lg:col-span-8 bg-[#121318] border-4 border-white p-2 brutal-shadow relative">
            <div className="bg-[#050507] border-2 border-zinc-800 relative overflow-hidden">
              
              {/* Canvas Header Info Bar */}
              <div className="bg-[#18181c] p-2 border-b border-zinc-800 flex justify-between items-center font-mono text-xs">
                <div className="flex items-center space-x-2 text-white">
                  <Activity className="w-4 h-4 text-[#ccff00]" />
                  <span>SYNAPTIC MATRIX: 2D VECTOR MATRIX</span>
                </div>
                <div className="flex items-center space-x-4 text-zinc-400 text-[11px]">
                  <span>NODES: {density}</span>
                  <span>INTEGRITY: {synapticIntegrity}%</span>
                </div>
              </div>

              {/* The HTML Canvas */}
              <canvas 
                ref={canvasRef} 
                className="w-full cursor-crosshair block"
              />

              {/* Overlay Prompt */}
              <div className="absolute bottom-3 left-3 bg-black/80 border border-zinc-700 px-3 py-1.5 font-mono text-[11px] text-zinc-400 pointer-events-none">
                HOVER OVER CANVAS TO INTERACT WITH SYNAPTIC FORCES
              </div>
            </div>
          </div>

          {/* Interactive Controls Column */}
          <div className="lg:col-span-4 bg-[#121318] border-4 border-white p-6 brutal-shadow-magenta space-y-6">
            <div className="flex items-center justify-between border-b-2 border-zinc-700 pb-3 font-mono text-sm font-bold text-white">
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#ccff00]" />
                PARAMETER TUNER
              </span>
              <button 
                onClick={() => {
                  soundEngine.playClick();
                  setDensity(70);
                  setEntropy(3.5);
                  setColorScheme('lime');
                }}
                className="text-xs text-zinc-400 hover:text-[#ccff00] underline"
              >
                RESET
              </button>
            </div>

            {/* Slider 1: Synapse Density */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white">SYNAPSE DENSITY (NODES)</span>
                <span className="text-[#ccff00]">{density}</span>
              </div>
              <input
                type="range"
                min="30"
                max="140"
                value={density}
                onChange={(e) => {
                  soundEngine.playTerminalKey();
                  setDensity(Number(e.target.value));
                }}
                className="w-full accent-[#ccff00] cursor-pointer bg-zinc-900 h-2 border border-zinc-700"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>30 (MICRO)</span>
                <span>140 (PLANETARY)</span>
              </div>
            </div>

            {/* Slider 2: Entropy / Chaos */}
            <div className="space-y-2 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-white">QUANTUM ENTROPY (SPEED)</span>
                <span className="text-[#ff0055]">{entropy}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.5"
                value={entropy}
                onChange={(e) => {
                  soundEngine.playTerminalKey();
                  setEntropy(Number(e.target.value));
                }}
                className="w-full accent-[#ff0055] cursor-pointer bg-zinc-900 h-2 border border-zinc-700"
              />
              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>0.5 (STABLE)</span>
                <span>8.0 (HYPER-CHAOS)</span>
              </div>
            </div>

            {/* Color Spectrum Selector */}
            <div className="space-y-2 font-mono">
              <div className="text-xs font-bold text-white">SPECTRUM WAVELENGTH</div>
              <div className="grid grid-cols-4 gap-2 text-xs font-bold">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('lime');
                  }}
                  className={`p-2 border border-white text-black font-bold transition-all ${
                    colorScheme === 'lime' ? 'bg-[#ccff00] scale-105 border-2' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  LIME
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('magenta');
                  }}
                  className={`p-2 border border-white text-white font-bold transition-all ${
                    colorScheme === 'magenta' ? 'bg-[#ff0055] scale-105 border-2' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  MAG
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('cyan');
                  }}
                  className={`p-2 border border-white text-black font-bold transition-all ${
                    colorScheme === 'cyan' ? 'bg-[#00f0ff] scale-105 border-2' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  CYAN
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('mono');
                  }}
                  className={`p-2 border border-white text-black font-bold transition-all ${
                    colorScheme === 'mono' ? 'bg-white scale-105 border-2' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  MONO
                </button>
              </div>
            </div>

            {/* Overclock Action Button */}
            <button
              onClick={triggerOverclock}
              className="w-full bg-[#ccff00] text-black font-display font-black text-sm p-3 border-2 border-white brutal-shadow hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>OVERCLOCK SYNAPTIC CORES</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
