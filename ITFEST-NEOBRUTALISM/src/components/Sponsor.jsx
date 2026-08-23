import ScrollReveal from './ScrollReveal';

const sponsors = [
  { name: 'Sponsor 1', color: 'bg-neo-yellow' },
  { name: 'Sponsor 2', color: 'bg-neo-blue' },
  { name: 'Sponsor 3', color: 'bg-neo-pink' },
  { name: 'Sponsor 4', color: 'bg-neo-green' },
  { name: 'Sponsor 5', color: 'bg-neo-orange' },
];

const mediaPartners = [
  { name: 'Media 1', color: 'bg-white' },
  { name: 'Media 2', color: 'bg-white' },
  { name: 'Media 3', color: 'bg-white' },
];

export default function Sponsor() {
  return (
    <section className="py-20 border-b-8 border-black dark:border-white bg-[#f0f0f0] dark:bg-[#1a1a2e] relative overflow-hidden transition-colors" id="sponsor">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, #000 20px, #000 21px)',
      }}></div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="text-center mb-12">
          <ScrollReveal animation="animate-pop-up">
            <div className="inline-block bg-neo-yellow p-4 neo-border neo-shadow mb-4 transform -rotate-1">
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-widest">Didukung Oleh</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="animate-pop-up" delay={0.15}>
            <p className="text-lg font-bold bg-white dark:bg-[#16213e] inline-block px-4 py-2 neo-border dark:border-white transition-colors">Kolaborasi ini menjadi fondasi acara yang lebih besar.</p>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12">
          {sponsors.map((s, i) => (
            <ScrollReveal key={i} animation="animate-pop-up" delay={i * 0.08}>
              <div className={`w-44 h-20 flex items-center justify-center ${s.color} neo-border dark:border-white neo-shadow-sm text-black font-black text-sm uppercase transition-all duration-200 hover:-translate-y-2 hover:shadow-none hover:rotate-2 group`}>
                <span className="group-hover:scale-110 transition-transform">{s.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mb-8">
          <ScrollReveal animation="animate-pop-up" delay={0.3}>
              <h3 className="text-xl font-black uppercase tracking-widest bg-white dark:bg-[#16213e] inline-block px-4 py-2 neo-border dark:border-white transition-colors">
              Media Partner
            </h3>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {mediaPartners.map((m, i) => (
            <ScrollReveal key={i} animation="animate-pop-up" delay={0.4 + i * 0.1}>
              <div className={`w-36 h-14 flex items-center justify-center ${m.color} neo-border dark:border-white neo-shadow-sm text-black font-bold text-xs uppercase transition-all duration-200 hover:-translate-y-1 hover:shadow-none group`}>
                <span className="group-hover:scale-105 transition-transform">{m.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
