import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { sponsors, mediaPartners } from '../data/sponsors';

function SponsorGridCard({ item }) {
  return (
    <div className="group bg-cream p-4 neo-border neo-shadow-sm flex flex-col items-center text-center gap-3 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:neo-shadow hover:shadow-none neo-tilt">
      <div className={`w-20 h-20 sm:w-24 sm:h-24 ${item.color} neo-border flex items-center justify-center transition-transform duration-200 group-hover:rotate-6`}>
        <span className="font-black text-2xl sm:text-3xl text-black">{item.name.split(' ')[1]}</span>
      </div>
      <h4 className="font-black text-sm tracking-tight">{item.name}</h4>
    </div>
  );
}

function TierSection({ label, chipClass, items, delay }) {
  return (
    <ScrollReveal animation="animate-pop-up" delay={delay}>
      <div className="mb-12">
        <div className="flex justify-center mb-6">
          <div className={`inline-flex items-center gap-2 ${chipClass} neo-border px-4 py-1.5 text-xs font-black uppercase tracking-wider neo-shadow-sm transform -rotate-1`}>
            {label}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {items.map((item) => (
            <SponsorGridCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function SponsorPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section className="pt-32 pb-24 px-4 md:px-6 max-w-6xl mx-auto w-full relative">
      <div className="absolute top-24 right-8 w-16 h-16 bg-neo-pink neo-border neo-shadow rotate-12 animate-bounce-slow animate-neo-drift hidden lg:block"></div>
      <div className="absolute top-56 left-4 w-10 h-10 bg-neo-blue rounded-full neo-border neo-shadow-sm -rotate-12 animate-neo-swing hidden lg:block"></div>
      <div className="absolute bottom-40 right-16 w-12 h-12 bg-neo-green neo-border neo-shadow-sm rotate-45 animate-spin-slow hidden lg:block"></div>

      <Link to="/" className="inline-flex items-center gap-2 mb-8 text-black font-black hover:bg-black hover:text-white px-3 py-1 transition-colors neo-border font-mono text-sm uppercase neo-shadow-hover animate-pop-up">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        BACK TO LANDING PAGE
      </Link>

      <ScrollReveal animation="animate-pop-up">
        <div className="inline-block px-4 py-2 bg-neo-blue text-white neo-border font-black uppercase tracking-wider transform -rotate-2 mb-6">
          Partnership Page
        </div>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.1}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-black uppercase mb-4">
          Sponsor &<br />Media Partner
        </h1>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.15}>
        <p className="text-sm font-bold text-neo-blue mb-12">
          Didukung oleh mitra yang percaya pada inovasi teknologi generasi muda
        </p>
      </ScrollReveal>

      <TierSection
        label="Sponsor Resmi"
        chipClass="bg-neo-blue text-white"
        items={sponsors}
        delay={0.2}
      />

      <TierSection
        label="Media Partner"
        chipClass="bg-neo-pink text-black"
        items={mediaPartners}
        delay={0.3}
      />

      <ScrollReveal animation="animate-pop-up" delay={0.4}>
        <div className="bg-neo-yellow neo-border neo-shadow p-8 sm:p-12 text-center neo-tilt">
          <div className="inline-block bg-cream px-3 py-1 neo-border neo-shadow-sm text-xs font-black uppercase tracking-widest mb-6 transform -rotate-1">
            Open Sponsorship
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-widest text-black mb-3">
            Jadi Bagian dari Milad IT Fest 2026
          </h2>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-black/80 max-w-xl mx-auto mb-8">
            Dukung Inovasi Teknologi Generasi Muda — Bergabung Sebagai Sponsor IT Fest 2026 Sekarang.
          </p>
          <a
            href="https://wa.link/mea7wh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neo-green text-black font-black uppercase tracking-wider px-8 py-4 neo-border neo-shadow-sm text-sm sm:text-base transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-none active:translate-x-2 active:-translate-y-2 active:shadow-none"
          >
            Kunjungi Portal
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
