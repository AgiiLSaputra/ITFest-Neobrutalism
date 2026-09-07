import { useEffect, useRef, useState } from 'react';

export default function Loading({ onFinish }) {
  const [percentage, setPercentage] = useState(0);
  const [hex, setHex] = useState('0xA0F2A9');
  const pctRef = useRef(0);
  const timersRef = useRef([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const timers = timersRef.current;
    const add = (fn, ms) => timers.push(setTimeout(fn, ms));

    // Percentage counter: random increments like the reference design.
    // Starts only after the staggered pop-up entrance has fully finished
    // (last delay 0.45s + 0.45s duration ≈ 0.9s).
    const tick = () => {
      pctRef.current = Math.min(100, pctRef.current + Math.floor(Math.random() * 5) + 1);
      setPercentage(pctRef.current);
      if (pctRef.current >= 100) {
        add(onFinish, 800);
        return;
      }
      add(tick, Math.random() * 200 + 50);
    };
    add(tick, 1000);

    // Randomized hex code in the SYS_INIT terminal block (every 2s).
    intervalRef.current = setInterval(() => {
      setHex('0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
    }, 2000);

    return () => {
      timers.forEach(clearTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onFinish]);

  const pop = (delay) => ({ animationDelay: `${delay}s` });

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050b18] flex items-center justify-center font-mono p-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
      <div className="animate-load-pop absolute top-32 left-10 terminal-text opacity-60 float-anim z-0 hidden sm:block" style={{ ...pop(0.45), animationDuration: '5s' }}>
        <div>&lt;SYSTEM_OVERRIDE&gt;</div>
        <div className="text-[#00f2ff]">EXEC: 0x44A2</div>
        <div>STATUS: ACTIVE</div>
      </div>
      <div className="glitch-line"></div>
      <div className="glitch-line" style={{ animationDelay: '-2s', height: '5px', opacity: 0.3, background: '#00f2ff' }}></div>

      {/* Terminal Streams in Corners */}
      <div className="animate-load-pop absolute top-4 left-4 terminal-text z-0 hidden sm:block" style={pop(0.25)}>
        <div>SYS_INIT: OK</div>
        <div>MEM_CHECK: <span className="text-[#00f2ff]">PASS</span></div>
        <div className="blink-anim">{hex}</div>
        <div>LOADING SECTOR 7G...</div>
      </div>
      <div className="animate-load-pop absolute bottom-4 right-4 text-right terminal-text z-0 hidden sm:block" style={pop(0.35)}>
        <div>UPLINK_STATUS: <span className="text-[#ff00ff]">ENCRYPTED</span></div>
        <div>NODE_ID: 994-A</div>
        <div className="blink-anim">AWAITING_INPUT_</div>
      </div>

      <div className="animate-load-pop relative max-w-md w-full z-10" style={pop(0.1)}>
        {/* Floating Geometric Shapes */}
        <div className="absolute -top-20 -right-20 w-12 h-12 bg-[#ff00ff] border-4 border-black float-anim rotate-anim opacity-70 z-0 shadow-[4px_4px_0_0_#000]"></div>
        <div className="absolute top-10 right-10 text-2xl font-bold text-white opacity-30 terminal-text pulse-anim z-0">[ DATA_STREAM_01 ]</div>
        <div className="absolute -bottom-20 -left-20 w-12 h-12 bg-yellow-400 border-4 border-black rounded-full float-anim pulse-anim opacity-70 z-0 shadow-[4px_4px_0_0_#000]" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-6 left-1/2 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full float-anim z-0 shadow-[2px_2px_0_0_#000]" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 -left-32 text-4xl font-black text-[#00f2ff] float-anim rotate-anim z-0" style={{ animationDuration: '6s' }}>+</div>
        <div className="absolute top-1/4 -left-20 w-6 h-6 bg-white border-2 border-black float-anim shadow-[4px_4px_0_0_#000] z-0" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -top-32 left-1/4 text-4xl font-black text-white float-anim pulse-anim z-0" style={{ animationDelay: '0.5s' }}>×</div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#00f2ff] border-4 border-black rounded-full float-anim z-0 opacity-60 shadow-[6px_6px_0_0_#000]" style={{ animationDelay: '-1.5s' }}></div>
        <div className="absolute bottom-20 right-32 text-4xl font-black text-[#ff00ff] float-anim rotate-anim z-0" style={{ animationDelay: '2s', animationDuration: '8s' }}>×</div>

        {/* Background Accent Box */}
        <div className="absolute -top-4 -left-4 w-full h-full bg-[#ff00ff] border-4 border-black z-0 shadow-[8px_8px_0_0_#000]">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgb(0, 0, 0) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
        </div>

        {/* Main Loading Container */}
        <div className="relative bg-white border-4 border-black p-8 neo-shadow z-10">
          <div className="flex justify-between items-start mb-8">
            <div className="bg-[#00f2ff] border-4 border-black px-4 py-2 neo-shadow float-anim" style={{ animationDuration: '2s' }}>
              <h1 className="text-2xl font-black italic tracking-tighter text-black uppercase">Loading...</h1>
            </div>
            <div className="w-12 h-12 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center animate-spin shadow-[2px_2px_0_0_#000]">
              <span className="text-black font-black">/</span>
            </div>
            <div className="absolute -bottom-6 left-1/2 w-4 h-4 bg-yellow-400 border-2 border-black rounded-full float-anim z-0 shadow-[2px_2px_0_0_#000]" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <div className="flex justify-between items-end mb-4">
            <p className="text-black font-bold uppercase tracking-widest text-sm">Initializing System... <span className="blink-anim">_</span></p>
            <div className="text-xl font-black italic text-[#ff00ff]">{percentage}%</div>
          </div>

          {/* Progress Bar Container — width driven by the same state as the
              percentage counter so they always stay in sync */}
          <div className="w-full h-12 bg-[#050b18] border-4 border-black neo-shadow overflow-hidden relative">
            <div className="h-full bg-[#ff00ff] border-r-4 border-black relative" style={{ width: `${percentage}%`, transition: 'width 0.15s linear' }}>
              <div className="absolute top-0 left-0 w-full h-1/3 bg-white opacity-20"></div>
            </div>
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>
          </div>

          <div className="mt-6 flex flex-col space-y-2 text-xs font-bold uppercase">
            <div className="flex items-center space-x-2 text-[#00f2ff] mix-blend-difference">
              <span className="w-2 h-2 bg-[#00f2ff] rounded-full fast-blink"></span>
              <span>CONNECTION: SECURE</span>
            </div>
            <div className="flex items-center space-x-2 text-[#ff00ff] mix-blend-difference">
              <span className="w-2 h-2 bg-[#ff00ff] rounded-full fast-blink" style={{ animationDelay: '0.2s' }}></span>
              <span>CORE: READY</span>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center pt-4 border-t-2 border-black border-dashed">
            <span className="text-xs font-black bg-black text-white px-2 py-1 shadow-[2px_2px_0_0_#ff00ff]">VER: 2026.0.1</span>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-[#00f2ff] border-2 border-black pulse-anim shadow-[2px_2px_0_0_#000]" style={{ animationDelay: '0s' }}></div>
              <div className="w-4 h-4 bg-[#ff00ff] border-2 border-black pulse-anim shadow-[2px_2px_0_0_#000]" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-4 h-4 bg-yellow-400 border-2 border-black pulse-anim shadow-[2px_2px_0_0_#000]" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>

          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-black pointer-events-none"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-black pointer-events-none"></div>
          <div className="absolute -top-6 right-0 text-[10px] font-black text-[#00f2ff] uppercase tracking-widest bg-black px-1">SYSTEM_BOOT_SEQUENCE</div>
          <div className="absolute -bottom-6 left-0 text-[10px] font-black text-[#ff00ff] uppercase tracking-widest bg-black px-1">UIR_INF_2026 // SECURE_LINK</div>
        </div>
      </div>
    </div>
  );
}
