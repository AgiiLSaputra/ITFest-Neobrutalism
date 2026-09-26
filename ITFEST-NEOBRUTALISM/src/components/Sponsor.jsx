import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const sponsors = [
  { id: 1, name: 'Sponsor 1', color: 'bg-neo-yellow' },
  { id: 2, name: 'Sponsor 2', color: 'bg-neo-blue' },
  { id: 3, name: 'Sponsor 3', color: 'bg-neo-pink' },
  { id: 4, name: 'Sponsor 4', color: 'bg-neo-green' },
  { id: 5, name: 'Sponsor 5', color: 'bg-neo-orange' },
];

const mediaPartners = [
  { id: 1, name: 'Media 1', color: 'bg-cream' },
  { id: 2, name: 'Media 2', color: 'bg-cream' },
  { id: 3, name: 'Media 3', color: 'bg-cream' },
];

const marqueeSponsors = Array(6).fill(sponsors).flat();
const marqueeMedia = Array(8).fill(mediaPartners).flat();

function SponsorCard({ item, isHovered, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={
        'cursor-pointer flex flex-col items-center justify-center text-center p-3 neo-border transition-all duration-300 shrink-0 '
        + (isHovered
          ? item.color + ' opacity-100 scale-110 z-20 neo-shadow rotate-2'
          : 'bg-cream opacity-60 hover:opacity-100 hover:scale-110 hover:neo-shadow-sm')
      }
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-2 transition-all duration-300">
        <div className={
          'w-14 h-14 sm:w-16 sm:h-16 neo-border flex items-center justify-center transition-all duration-300 '
          + (isHovered ? item.color : 'bg-gray-300')
        }>
          <span className="font-black text-lg sm:text-xl text-black">{item.name.split(' ')[1]}</span>
        </div>
      </div>
      <h4 className={
        'font-extrabold text-xs sm:text-sm tracking-tight mb-1 whitespace-nowrap transition-colors '
        + (isHovered ? 'text-black' : 'text-gray-700')
      }>
        {item.name}
      </h4>
    </div>
  );
}

export default function Sponsor() {
  const [hoveredItemKey, setHoveredItemKey] = useState(null);

  return (
    <section className="py-20 bg-gray-main relative overflow-hidden transition-colors pattern-dashed-grid" id="sponsor">

      <div className="text-center mb-12">
        <ScrollReveal animation="animate-pop-up">
          <div className="inline-block bg-neo-yellow p-4 neo-border neo-shadow mb-4 transform -rotate-1">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-widest">Didukung Oleh</h2>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal animation="animate-pop-up" delay={0.2}>
        <div className="mb-10">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 bg-neo-blue text-white neo-border px-4 py-1.5 text-xs font-black uppercase tracking-wider">
              Sponsor Resmi
            </div>
          </div>
          <div className="relative overflow-hidden w-full group py-4">
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-gray-main to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-gray-main to-transparent z-10 pointer-events-none" />
            <div className="flex w-max animate-sponsor-left">
              {marqueeSponsors.map((sponsor, index) => {
                const itemKey = 's-' + sponsor.id + '-' + index;
                return (
                  <div key={itemKey} className="px-4">
                    <SponsorCard
                      item={sponsor}
                      isHovered={hoveredItemKey === itemKey}
                      onEnter={() => setHoveredItemKey(itemKey)}
                      onLeave={() => setHoveredItemKey(null)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.35}>
        <div className="mb-4">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 bg-neo-pink text-black neo-border px-4 py-1.5 text-xs font-black uppercase tracking-wider">
              Media Partner
            </div>
          </div>
          <div className="relative overflow-hidden w-full group py-4">
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-gray-main to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-gray-main to-transparent z-10 pointer-events-none" />
            <div className="flex w-max animate-sponsor-right">
              {marqueeMedia.map((media, index) => {
                const itemKey = 'm-' + media.id + '-' + index;
                return (
                  <div key={itemKey} className="px-4">
                    <SponsorCard
                      item={media}
                      isHovered={hoveredItemKey === itemKey}
                      onEnter={() => setHoveredItemKey(itemKey)}
                      onLeave={() => setHoveredItemKey(null)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.5}>
        <div className="flex justify-center mt-12 px-4">
          <div className="w-full max-w-2xl bg-cream neo-border neo-shadow p-6 sm:p-10 text-center transform -rotate-1 transition-colors">
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-widest text-black mb-3">
              Open Sponsorship
            </h3>

            <p className="text-sm sm:text-base font-medium leading-relaxed text-black/80 max-w-xl mx-auto mb-6">
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
        </div>
      </ScrollReveal>

    </section>
  );
}
