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
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
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
    <section className="py-16 bg-black border-y-8 border-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)',
        }}></div>
      </div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} animation="animate-neo-slam" delay={i * 0.12}>
              <div className={`${stat.bg} p-6 neo-border neo-shadow-sm text-center transform hover:-translate-y-1 hover:shadow-none transition-all group`}>
                <span className="material-symbols-outlined text-4xl mb-2 block group-hover:animate-wiggle">{stat.icon}</span>
                <div className="text-4xl md:text-5xl font-black text-black mb-2">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-black uppercase tracking-widest text-black border-t-2 border-black pt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
