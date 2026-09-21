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

    </section>
  );
}
