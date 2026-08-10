import React, { useRef, useEffect, useState } from 'react';
import { Sliders, RefreshCw, Activity, Zap } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function NeuralCoreCanvas({ theme }) {
  const canvasRef = useRef(null);
  const [density, setDensity] = useState(60);
  const [entropy, setEntropy] = useState(3.5);
  const [colorScheme, setColorScheme] = useState('lime'); // 'lime', 'magenta', 'cyan', 'mono'
  const [synapticIntegrity, setSynapticIntegrity] = useState(99.4);
  const isDark = theme === 'dark';

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = window.innerWidth < 640 ? 300 : 420;
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
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    // Render step
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background grid lines inside canvas
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 36;
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

      // Palette mapping
      let primaryColor = '#ccff00';
      let lineColor = isDark ? 'rgba(204, 255, 0, ' : 'rgba(0, 0, 0, ';
      if (colorScheme === 'magenta') {
        primaryColor = '#ff0055';
        lineColor = 'rgba(255, 0, 85, ';
      } else if (colorScheme === 'cyan') {
        primaryColor = '#00f0ff';
        lineColor = 'rgba(0, 240, 255, ';
      } else if (colorScheme === 'mono') {
        primaryColor = isDark ? '#ffffff' : '#000000';
        lineColor = isDark ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ';
      }

      // Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 100) {
          p.x -= (dxMouse / distMouse) * 2;
          p.y -= (dyMouse / distMouse) * 2;
        }

        p.pulse += 0.05;
        const currentRadius = p.radius + Math.sin(p.pulse) * 1.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = primaryColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * (isDark ? 0.6 : 0.4);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = alpha > 0.3 ? 1.5 : 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('touchmove', handleTouchMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, entropy, colorScheme, isDark]);

  const triggerOverclock = () => {
    soundEngine.playSuccess();
    setEntropy((prev) => +(prev * 1.8).toFixed(1));
    setSynapticIntegrity(99.99);
    setTimeout(() => {
      setEntropy(3.5);
    }, 3000);
  };

  return (
    <section id="neural-core" className={`py-12 sm:py-16 px-3 sm:px-6 border-b-4 border-black transition-colors ${
      isDark ? 'bg-[#0a0a0c] text-white' : 'bg-[#f4f4f0] text-black'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-4 border-[#ccff00] pb-3">
          <div>
            <div className="font-mono text-xs text-[#ccff00] font-bold tracking-widest uppercase mb-1 bg-black px-1.5 py-0.5 inline-block">
              [SYSTEM MODULE 01]
            </div>
            <h2 className={`font-display font-black text-3xl sm:text-5xl uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              NEURAL CORE <span className="bg-[#ccff00] text-black px-2 py-0.5 border-2 border-black">VISUALIZER</span>
            </h2>
          </div>
          <div className={`font-mono text-xs max-w-md ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
            Interactive render of OMEGA-1's tensor matrix. Drag or touch canvas to interact with vector forces.
          </div>
        </div>

        {/* Main Canvas & Control Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Canvas Box */}
          <div className={`lg:col-span-8 border-4 border-black p-2 brutal-shadow ${
            isDark ? 'bg-[#121318]' : 'bg-white'
          }`}>
            <div className={`border-2 border-black relative overflow-hidden ${
              isDark ? 'bg-[#050507]' : 'bg-[#eef0eb]'
            }`}>
              
              {/* Canvas Header Bar */}
              <div className={`p-2 border-b-2 border-black flex justify-between items-center font-mono text-xs ${
                isDark ? 'bg-[#18181c] text-white' : 'bg-[#e2e4de] text-black'
              }`}>
                <div className="flex items-center space-x-2 font-bold">
                  <Activity className="w-4 h-4 text-[#ccff00]" />
                  <span>SYNAPTIC MATRIX: 2D TENSOR</span>
                </div>
                <div className="flex items-center space-x-3 text-[11px] font-bold">
                  <span>NODES: {density}</span>
                  <span className="text-[#ccff00] bg-black px-1">INT: {synapticIntegrity}%</span>
                </div>
              </div>

              {/* HTML Canvas */}
              <canvas 
                ref={canvasRef} 
                className="w-full cursor-crosshair block touch-none"
              />

              <div className="absolute bottom-2 left-2 bg-black text-[#ccff00] border border-black px-2 py-1 font-mono text-[10px] pointer-events-none">
                TOUCH / HOVER CANVAS TO DISRUPT SYNAPTIC FORCES
              </div>
            </div>
          </div>

          {/* Interactive Controls Column */}
          <div className={`lg:col-span-4 border-4 border-black p-4 sm:p-6 brutal-shadow-magenta space-y-5 ${
            isDark ? 'bg-[#121318] text-white' : 'bg-white text-black'
          }`}>
            <div className="flex items-center justify-between border-b-2 border-black pb-3 font-mono text-sm font-bold">
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#ccff00]" />
                PARAMETER TUNER
              </span>
              <button 
                onClick={() => {
                  soundEngine.playClick();
                  setDensity(60);
                  setEntropy(3.5);
                  setColorScheme('lime');
                }}
                className="text-xs text-[#ccff00] underline font-bold bg-black px-1.5 py-0.5"
              >
                RESET
              </button>
            </div>

            {/* Slider 1: Synapse Density */}
            <div className="space-y-1.5 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span>SYNAPSE DENSITY</span>
                <span className="text-[#ccff00] bg-black px-1">{density} NODES</span>
              </div>
              <input
                type="range"
                min="25"
                max="120"
                value={density}
                onChange={(e) => {
                  soundEngine.playTerminalKey();
                  setDensity(Number(e.target.value));
                }}
                className="w-full accent-[#ccff00] cursor-pointer bg-zinc-900 h-3 border border-black"
              />
            </div>

            {/* Slider 2: Entropy / Speed */}
            <div className="space-y-1.5 font-mono">
              <div className="flex justify-between text-xs font-bold">
                <span>QUANTUM ENTROPY</span>
                <span className="text-[#ff0055] font-bold">{entropy}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="7.0"
                step="0.5"
                value={entropy}
                onChange={(e) => {
                  soundEngine.playTerminalKey();
                  setEntropy(Number(e.target.value));
                }}
                className="w-full accent-[#ff0055] cursor-pointer bg-zinc-900 h-3 border border-black"
              />
            </div>

            {/* Spectrum Selector */}
            <div className="space-y-1.5 font-mono">
              <div className="text-xs font-bold">COLOR SCHEME</div>
              <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('lime');
                  }}
                  className={`p-2 border-2 border-black font-bold transition-all ${
                    colorScheme === 'lime' ? 'bg-[#ccff00] text-black scale-105' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  LIME
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('magenta');
                  }}
                  className={`p-2 border-2 border-black font-bold transition-all ${
                    colorScheme === 'magenta' ? 'bg-[#ff0055] text-white scale-105' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  MAG
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('cyan');
                  }}
                  className={`p-2 border-2 border-black font-bold transition-all ${
                    colorScheme === 'cyan' ? 'bg-[#00f0ff] text-black scale-105' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  CYAN
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setColorScheme('mono');
                  }}
                  className={`p-2 border-2 border-black font-bold transition-all ${
                    colorScheme === 'mono' ? 'bg-black text-white scale-105' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  MONO
                </button>
              </div>
            </div>

            {/* Overclock Action Button */}
            <button
              onClick={triggerOverclock}
              className="w-full bg-[#ccff00] text-black font-display font-black text-xs sm:text-sm p-3 border-2 border-black brutal-shadow-black hover:bg-white transition-all flex items-center justify-center gap-2"
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
