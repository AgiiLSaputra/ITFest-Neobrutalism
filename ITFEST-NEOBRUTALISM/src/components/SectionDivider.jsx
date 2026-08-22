export function ZigzagDivider({ from = 'bg-white', to = 'bg-[#f0f0f0]' }) {
  return (
    <div className={`relative h-8 ${from} overflow-hidden`} aria-hidden="true">
      <svg className="absolute bottom-0 w-full h-8" viewBox="0 0 1200 40" preserveAspectRatio="none">
        <path d="M0,40 L0,20 L30,0 L60,20 L90,0 L120,20 L150,0 L180,20 L210,0 L240,20 L270,0 L300,20 L330,0 L360,20 L390,0 L420,20 L450,0 L480,20 L510,0 L540,20 L570,0 L600,20 L630,0 L660,20 L690,0 L720,20 L750,0 L780,20 L810,0 L840,20 L870,0 L900,20 L930,0 L960,20 L990,0 L1020,20 L1050,0 L1080,20 L1110,0 L1140,20 L1170,0 L1200,20 L1200,40 Z"
          fill="currentColor" className={`${to} text-[#f0f0f0]`} />
      </svg>
    </div>
  );
}

export function WaveDivider({ color = '#000', fill }) {
  return (
    <div className="relative h-12 overflow-hidden" aria-hidden="true">
      <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill={fill || color} />
      </svg>
    </div>
  );
}

export function DotDivider({ color = 'bg-black' }) {
  return (
    <div className="flex items-center justify-center gap-3 py-6" aria-hidden="true">
      <div className={`w-3 h-3 ${color} neo-border rotate-45`}></div>
      <div className={`w-2 h-2 ${color} rounded-full`}></div>
      <div className={`w-3 h-3 ${color} neo-border rotate-45`}></div>
      <div className={`w-2 h-2 ${color} rounded-full`}></div>
      <div className={`w-3 h-3 ${color} neo-border rotate-45`}></div>
    </div>
  );
}
