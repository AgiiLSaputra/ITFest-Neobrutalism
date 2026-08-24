import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const [isCoarse] = useState(() => window.matchMedia('(pointer: coarse)').matches);

  useEffect(() => {
    if (isCoarse) return;

    let clicking = false;
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e) => {
      dot.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px) scale(${clicking ? 0.6 : 1})`;
    };
    const down = () => { clicking = true; };
    const up = () => { clicking = false; };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [isCoarse]);

  if (isCoarse) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[10003] mix-blend-difference hidden md:block"
      style={{ willChange: 'transform', transform: 'translate(-100px, -100px)' }}
    >
      <div className="w-10 h-10 border-4 border-white rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
    </div>
  );
}
