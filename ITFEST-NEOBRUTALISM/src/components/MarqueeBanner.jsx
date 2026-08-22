const items = [
  'HACKATHON', '★', 'E-SPORT', '★', 'BADMINTON', '★',
  'IT EXPO', '★', 'SEMINAR NASIONAL', '★', 'TYPING TEST', '★',
  'CODE THE STARS', '★', 'BEYOND THE HORIZONS', '★',
];

function MarqueeRow({ direction, bg, textBg, speed = 35 }) {
  const content = items.map((item, i) => (
    <span key={i} className="mx-4 whitespace-nowrap font-black text-lg uppercase">
      {item === '★' ? (
        <span className={`inline-block w-4 h-4 ${textBg} neo-border mx-2 transform rotate-45`}></span>
      ) : (
        item
      )}
    </span>
  ));

  const animStyle = {
    animation: `marquee-${direction} ${speed}s linear infinite`,
  };

  return (
    <div className={`flex overflow-hidden border-b-4 border-black ${bg} py-4`}>
      <div className="flex shrink-0 min-w-max" style={animStyle}>
        {content}
      </div>
      <div className="flex shrink-0 min-w-max" style={animStyle} aria-hidden="true">
        {content}
      </div>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="relative">
      <MarqueeRow direction="left" bg="bg-neo-yellow" textBg="bg-black" speed={30} />
      <MarqueeRow direction="right" bg="bg-white" textBg="bg-neo-pink" speed={40} />
    </div>
  );
}
