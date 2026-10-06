import { useState } from 'react';

const HEAD_COLORS = ['bg-neo-yellow', 'bg-neo-blue', 'bg-neo-green', 'bg-neo-pink'];

function AnswerBlocks({ blocks }) {
  return (
    <div className="space-y-2.5">
      {blocks.map((block, index) => {
        if (block.type === 'p') {
          return (
            <p key={index} className="text-sm font-bold leading-relaxed">
              {block.text}
            </p>
          );
        }

        if (block.type === 'ul' || block.type === 'ol') {
          const ListTag = block.type === 'ol' ? 'ol' : 'ul';
          return (
            <ListTag
              key={index}
              className={`space-y-1.5 text-sm font-bold pl-5 marker:text-black ${
                block.type === 'ol' ? 'list-decimal' : 'list-disc'
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="bg-gray-main p-2 neo-border text-xs leading-snug"
                >
                  {item}
                </li>
              ))}
            </ListTag>
          );
        }

        if (block.type === 'kv') {
          return (
            <div key={index} className="space-y-1.5">
              {block.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-main p-2 neo-border">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-neutral-600">
                    {item.label}
                  </span>
                  <span className="text-sm font-black">{item.value}</span>
                </div>
              ))}
            </div>
          );
        }

        if (block.type === 'link') {
          return (
            <a
              key={index}
              href={block.href}
              target={block.external ? '_blank' : undefined}
              rel={block.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 bg-neo-pink px-3 py-2 neo-border neo-shadow-sm text-xs font-black uppercase transition-all hover:translate-x-1 hover:-translate-y-1 active:translate-x-2 active:-translate-y-2"
            >
              <span>{block.label}</span>
              <span className="material-symbols-outlined text-base">
                {block.external ? 'arrow_outward' : 'arrow_forward'}
              </span>
            </a>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function EventFaq({ event, items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="mt-16 bg-cream p-6 md:p-8 neo-border neo-shadow relative transition-colors">
      <h3 className="text-2xl font-black mb-2 uppercase border-b-4 border-black pb-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-[28px] text-neo-blue animate-neo-swing">
          help
        </span>
        FAQ &amp; DETAIL KEGIATAN
      </h3>
      <p className="text-sm sm:text-base font-bold mb-8 uppercase tracking-wide opacity-70">
        Pertanyaan umum seputar {event.title}
      </p>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;

          return (
            <div key={item.id} className="bg-white neo-border neo-shadow-sm">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left font-black uppercase text-sm sm:text-base transition-colors ${
                  isOpen ? `${HEAD_COLORS[index % HEAD_COLORS.length]} text-black` : 'bg-white hover:bg-neo-yellow'
                }`}
              >
                <span className="flex items-start gap-2 min-w-0">
                  <span className="material-symbols-outlined text-xl shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <span className="leading-snug">{item.question}</span>
                </span>
                <span
                  className={`material-symbols-outlined text-xl shrink-0 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div
                  className={`overflow-hidden min-h-0 transition-opacity duration-200 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="p-4 border-t-4 border-black bg-cream">
                    <AnswerBlocks blocks={item.blocks} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
