const shapes = [
  { type: 'square', size: 'w-6 h-6', bg: 'bg-neo-blue', pos: 'top-[15%] left-[8%]', rotate: 'rotate-45', anim: 'animate-float', delay: '0s' },
  { type: 'circle', size: 'w-8 h-8', bg: 'bg-neo-pink', pos: 'top-[25%] right-[12%]', rotate: '', anim: 'animate-bounce-slow', delay: '1s' },
  { type: 'square', size: 'w-4 h-4', bg: 'bg-neo-green', pos: 'top-[60%] left-[5%]', rotate: 'rotate-12', anim: 'animate-wiggle', delay: '0.5s' },
  { type: 'circle', size: 'w-5 h-5', bg: 'bg-neo-yellow', pos: 'top-[45%] right-[6%]', rotate: '', anim: 'animate-spin-slow', delay: '2s' },
  { type: 'square', size: 'w-3 h-3', bg: 'bg-white', pos: 'top-[70%] left-[15%]', rotate: 'rotate-[30deg]', anim: 'animate-float', delay: '1.5s' },
  { type: 'triangle', size: 'w-0 h-0', bg: '', pos: 'top-[35%] left-[3%]', rotate: 'rotate-12', anim: 'animate-bounce-slow', delay: '0.8s', style: { borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '14px solid #000' } },
  { type: 'square', size: 'w-5 h-5', bg: 'bg-neo-orange', pos: 'top-[80%] right-[10%]', rotate: 'rotate-[-15deg]', anim: 'animate-float', delay: '3s' },
  { type: 'circle', size: 'w-4 h-4', bg: 'bg-black', pos: 'top-[10%] left-[50%]', rotate: '', anim: 'animate-wiggle', delay: '2.5s' },
  { type: 'cross', size: 'w-6 h-6', bg: '', pos: 'top-[55%] right-[4%]', rotate: 'rotate-45', anim: 'animate-spin-slow', delay: '1.2s' },
];

function CrossShape({ className, style }) {
  return (
    <div className={`relative ${className}`} style={style}>
      <div className="absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2"></div>
      <div className="absolute left-1/2 top-0 h-full w-1 bg-black -translate-x-1/2"></div>
    </div>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block" aria-hidden="true">
      {shapes.map((s, i) => {
        const classes = `${s.size} ${s.bg} neo-border ${s.rotate} ${s.anim} ${s.pos} absolute opacity-80`;

        if (s.type === 'cross') {
          return <CrossShape key={i} className={classes} style={{ animationDelay: s.delay }} />;
        }

        return (
          <div
            key={i}
            className={`${classes} ${s.type === 'circle' ? 'rounded-full' : ''}`}
            style={{ animationDelay: s.delay, ...s.style }}
          />
        );
      })}
    </div>
  );
}
