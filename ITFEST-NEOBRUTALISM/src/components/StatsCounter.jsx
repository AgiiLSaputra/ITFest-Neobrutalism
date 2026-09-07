import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

function AnimatedNumber({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      setCount(Math.floor(target * progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { number: 6, suffix: '+', label: 'Acara', bg: 'bg-neo-yellow', icon: 'emoji_events' },
  { number: 500, suffix: '+', label: 'Peserta', bg: 'bg-neo-blue', icon: 'groups' },
  { number: 50, suffix: '+', label: 'Tim', bg: 'bg-neo-pink', icon: 'diversity_3' },
  { number: 10, suffix: 'M+', label: 'Total Hadiah', bg: 'bg-neo-green', icon: 'payments' },
];

export default function StatsCounter() {
  return (
    <section className="py-16 bg-black dark:bg-[#0a0a1a] border-y-8 border-black dark:border-white relative overflow-hidden transition-colors">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)',
        }}></div>
      </div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} animation="animate-pop-up" delay={i * 0.12}>
              <div className={`${stat.bg} h-full flex flex-col items-center justify-center p-4 sm:p-6 neo-border neo-shadow-sm text-center transform hover:-translate-y-1 hover:shadow-none transition-all group`}>
                <span className="material-symbols-outlined text-3xl sm:text-4xl mb-2 block group-hover:animate-wiggle">{stat.icon}</span>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-2 whitespace-nowrap">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest text-black border-t-2 border-black pt-2 whitespace-nowrap">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
