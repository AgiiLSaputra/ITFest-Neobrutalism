import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block"
      style={{
        transform: `translate(${pos.x - 20}px, ${pos.y - 20}px) scale(${clicking ? 0.6 : 1})`,
        transition: 'transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div className="w-10 h-10 border-4 border-white rounded-full flex items-center justify-center">
        <div
          className="w-2 h-2 bg-white rounded-full"
          style={{ transform: `scale(${clicking ? 2 : 1})`, transition: 'transform 0.15s ease' }}
        />
      </div>
    </div>
  );
}
