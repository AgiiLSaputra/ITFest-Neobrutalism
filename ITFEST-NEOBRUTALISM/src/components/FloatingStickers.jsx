const stickers = [
  { text: '🔥 HOT', bg: 'bg-neo-orange', pos: 'top-12 -right-4 rotate-12', anim: 'animate-wiggle' },
  { text: 'NEW!', bg: 'bg-neo-green', pos: 'top-8 -left-6 -rotate-6', anim: 'animate-bounce-slow' },
  { text: '⚡ 2026', bg: 'bg-neo-yellow', pos: 'bottom-8 -right-8 rotate-6', anim: 'animate-float' },
  { text: '★ LIVE', bg: 'bg-neo-pink', pos: '-bottom-4 -left-4 -rotate-12', anim: 'animate-wiggle' },
];

export default function FloatingStickers() {
  return (
    <>
      {stickers.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.pos} ${s.bg} neo-border neo-shadow-sm px-3 py-1 font-black text-xs uppercase transform z-20 hidden md:block ${s.anim}`}
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          {s.text}
        </div>
      ))}
    </>
  );
}
