import { useEffect, useRef, useState } from 'react';
import { CHATBOT_PROFILE, chatFaqs } from '../data/chatbotFaqs';

let messageCounter = 0;
const nextId = () => `msg-${++messageCounter}`;

const createGreeting = () => ({ id: nextId(), from: 'bot', kind: 'greeting' });

const MASCOT_URL = '/img/MaskotMilad.png';

function BotAvatar({ size = 'w-10 h-10' }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`${size} shrink-0 bg-neo-yellow neo-border overflow-hidden flex items-center justify-center`}
    >
      {imgError ? (
        <span className="material-symbols-outlined text-xl">smart_toy</span>
      ) : (
        <img
          src={MASCOT_URL}
          alt="Maskot Milad IT Fest"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

function AnswerBlocks({ blocks, onNavigate }) {
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
              className={`space-y-1.5 text-sm font-bold ${
                block.type === 'ol' ? 'list-decimal pl-5 marker:text-black' : 'space-y-1.5'
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`bg-gray-main p-2 neo-border text-xs leading-snug ${
                    block.type === 'ul' ? 'flex items-start gap-2' : ''
                  }`}
                >
                  {block.type === 'ul' && <span className="font-black">▸</span>}
                  <span>{item}</span>
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
              onClick={block.external ? undefined : onNavigate}
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

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [createGreeting()]);
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const botSay = (payload) => {
    clearTimeout(timerRef.current);
    setTyping(true);
    timerRef.current = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), from: 'bot', ...payload }]);
    }, 600);
  };

  const askFaq = (faq) => {
    setMessages((prev) => [...prev, { id: nextId(), from: 'user', text: faq.label }]);
    botSay({ kind: 'faq', faq });
  };

  const handleInternalLink = () => setOpen(false);

  const resetChat = () => {
    clearTimeout(timerRef.current);
    setTyping(false);
    setMessages([createGreeting()]);
  };

  return (
    <>
      {/* Floating toggle */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Tutup chat MIFA' : 'Buka chat MIFA'}
        aria-expanded={open}
        className="fixed bottom-6 left-4 sm:bottom-8 sm:left-8 z-[10004] w-14 h-14 bg-neo-yellow neo-border neo-shadow flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-[0px_0px_0px_0px_#000]"
      >
        <span className="material-symbols-outlined text-3xl">{open ? 'close' : 'chat'}</span>
        {!open && (
          <span className="absolute -top-3 -right-4 bg-neo-pink neo-border px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider animate-neo-jitter-soft">
            Chat
          </span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat MIFA"
          className="fixed bottom-24 left-4 sm:left-8 z-[10004] w-[calc(100vw-2rem)] sm:w-[400px] lg:w-[420px] max-h-[80vh] bg-cream neo-border neo-shadow flex flex-col overflow-hidden animate-pop-up"
        >
          {/* Header */}
          <div className="bg-black text-white px-4 py-3 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <BotAvatar />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-neo-green border-2 border-black rounded-full" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-black uppercase text-sm tracking-wide truncate">
                    {CHATBOT_PROFILE.name} <span className="text-neo-pink">//</span> {CHATBOT_PROFILE.title}
                  </span>
                  <span className="bg-neo-green text-black text-[10px] font-black uppercase px-1.5 py-0.5 neo-border">
                    {CHATBOT_PROFILE.status}
                  </span>
                </div>
                <p className="text-[11px] font-bold text-neutral-400 truncate">{CHATBOT_PROFILE.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={resetChat}
              className="shrink-0 bg-white text-black hover:bg-neo-yellow text-[11px] font-black uppercase px-2.5 py-1.5 border-2 border-black flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
              Reset
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            role="log"
            aria-live="polite"
            className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 bg-gray-main"
          >
            {messages.map((message) => {
              if (message.from === 'user') {
                return (
                  <div key={message.id} className="flex justify-end">
                    <div className="max-w-[85%]">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <span className="text-[10px] font-black uppercase text-neutral-600">Kamu</span>
                      </div>
                      <div className="bg-neo-pink text-black p-3 neo-border neo-shadow-sm text-sm font-black">
                        {message.text}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={message.id} className="flex items-start gap-2.5">
                  <BotAvatar size="w-8 h-8" />
                  <div className="flex flex-col gap-1.5 min-w-0 max-w-[85%]">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black uppercase">{CHATBOT_PROFILE.name}</span>
                      <span className="text-[10px] font-bold text-neutral-500">• Baru saja</span>
                    </div>
                    <div className="bg-white p-3 neo-border neo-shadow-sm">
                      {message.kind === 'greeting' && (
                        <div className="space-y-2">
                          <p className="text-sm font-black leading-relaxed">
                            👋 {CHATBOT_PROFILE.greeting.intro}
                          </p>
                          <p className="text-sm font-bold text-neutral-700 leading-relaxed">
                            {CHATBOT_PROFILE.greeting.outro}
                          </p>
                        </div>
                      )}

                      {message.kind === 'faq' && (
                        <div>
                          <span className="inline-block bg-neo-yellow text-black text-[10px] font-black uppercase tracking-wider px-2 py-0.5 neo-border mb-2">
                            {message.faq.badge}
                          </span>
                          <p className="text-sm font-black uppercase mb-2 border-b-2 border-black pb-1.5">
                            {message.faq.label}
                          </p>
                          <AnswerBlocks blocks={message.faq.blocks} onNavigate={handleInternalLink} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {typing && (
              <div className="flex items-center gap-2.5">
                <BotAvatar size="w-8 h-8" />
                <div className="bg-white px-3 py-2 neo-border neo-shadow-sm flex gap-1.5">
                  <span className="w-2 h-2 bg-black rounded-full animate-bounce-slow" />
                  <span className="w-2 h-2 bg-black rounded-full animate-bounce-slow [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-black rounded-full animate-bounce-slow [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>

          {/* Preset questions */}
          <div className="border-t-4 border-black bg-cream p-3.5 shrink-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wide">
                <span className="material-symbols-outlined text-neo-pink text-base">help</span>
                Pilih Pertanyaan:
              </div>
              <div className="hidden sm:block text-[10px] font-bold text-neutral-600">KLIK TOMBOL UNTUK JAWABAN</div>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-[176px] overflow-y-auto pr-0.5">
              {chatFaqs.map((faq, index) => (
                <button
                  key={faq.id}
                  type="button"
                  onClick={() => askFaq(faq)}
                  className={`text-left text-[11px] font-black p-2 neo-border neo-shadow-sm leading-tight flex items-start gap-1.5 transition-all hover:translate-x-1 hover:-translate-y-1 active:translate-x-2 active:-translate-y-2 ${
                    ['bg-neo-yellow', 'bg-neo-blue', 'bg-neo-green', 'bg-neo-pink'][index % 4]
                  }`}
                >
                  <span>{faq.icon}</span>
                  <span className="leading-tight">{faq.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-3 pt-2 border-t-2 border-dashed border-neutral-400 flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold text-neutral-600">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-neo-green rounded-full" />
                {CHATBOT_PROFILE.footerNote}
              </span>
              <a
                href={CHATBOT_PROFILE.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-black font-black hover:underline"
              >
                {CHATBOT_PROFILE.contact.whatsappLabel}
                <span className="material-symbols-outlined text-xs">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
