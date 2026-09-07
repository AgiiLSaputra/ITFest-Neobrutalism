import { useState, useEffect } from 'react';
import FloatingShapes from './FloatingShapes';

const phrases = ["Stay Curious,", "Code the Stars,", "Beyond the Horizons,", "Write the Future,"];

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(phrases[0].length);
  const [isDeleting, setIsDeleting] = useState(true);
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    let typeSpeed;
    if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      typeSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
      typeSpeed = 500;
    } else {
      typeSpeed = isDeleting ? 100 : 150;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(phrases[phraseIndex].substring(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setCharIndex(0);
        } else {
          setCharIndex(charIndex - 1);
        }
      } else {
        setText(phrases[phraseIndex].substring(0, charIndex + 1));
        if (charIndex + 1 === phrases[phraseIndex].length) {
          setIsDeleting(true);
          setCharIndex(charIndex + 1);
        } else {
          setCharIndex(charIndex + 1);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <>
      <span id="typewriter-text">{text}</span>
      <span className="inline-block w-[10px] h-[1em] bg-black ml-2 cursor-blink"></span>
    </>
  );
}

const COUNTDOWN_TARGET = new Date('2026-12-02T00:00:00');

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 37, hours: 2, minutes: 48, seconds: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = COUNTDOWN_TARGET - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: 'HARI', bg: 'bg-neo-yellow' },
    { value: timeLeft.hours, label: 'JAM', bg: 'bg-neo-blue' },
    { value: timeLeft.minutes, label: 'MENIT', bg: 'bg-neo-pink' },
    { value: timeLeft.seconds, label: 'DETIK', bg: 'bg-neo-green' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {items.map((item) => (
        <div key={item.label} className={`${item.bg} p-3 sm:p-4 neo-border neo-shadow-sm flex flex-col items-center justify-center neo-tilt`}>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black tabular-nums leading-none">{String(item.value).padStart(2, '0')}</div>
          <div className="text-[10px] sm:text-[12px] text-black mt-2 font-black tracking-widest border-t-2 border-black w-full text-center pt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero({ ready = true }) {
  const intro = ready ? 'hero-intro animate-pop-up' : 'hero-intro opacity-0';
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-neo-yellow dark:bg-[#0f3460] border-b-8 border-black dark:border-white animate-neo-strips transition-colors" id="beranda">
      <FloatingShapes />
      {/* Decorative Elements - animated */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neo-blue neo-border neo-shadow rotate-12 hidden lg:block animate-neo-drift"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neo-pink rounded-full neo-border neo-shadow -rotate-12 hidden lg:block animate-neo-drift" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-neo-green neo-border -rotate-6 hidden lg:block animate-bounce-slow"></div>
      <div className="absolute bottom-40 left-32 w-8 h-8 bg-black neo-border rotate-45 hidden lg:block animate-spin-slow"></div>

      <div className="container mx-auto relative z-10 flex flex-col items-center pt-24">
        {/* Headline - SLAM entrance */}
        <div className={`space-y-4 mb-8 bg-white dark:bg-[#16213e] p-4 sm:p-6 neo-border dark:border-white neo-shadow inline-block max-w-full transition-colors ${intro}`}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-black dark:text-white uppercase animate-neo-jitter-soft" id="main-heading">
            MILAD IT FEST <br />
            <span className="bg-black text-white px-4 inline-block mt-2 animate-neo-squish">2026</span>
          </h1>
          <p className="text-xl md:text-3xl text-black dark:text-white font-bold tracking-widest uppercase mt-4 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center border-t-4 border-black dark:border-white pt-4 w-[95%]">
            <TypewriterText />
          </p>
        </div>

        {/* Info Badges - pop in staggered */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          <div className={`flex items-center justify-center gap-2 bg-neo-blue px-4 sm:px-6 py-3 neo-border neo-shadow-sm font-bold text-black uppercase tracking-wider text-sm sm:text-base ${intro}`} style={{ animationDelay: '0.6s' }}>
            <span className="material-symbols-outlined text-xl animate-neo-swing">calendar_today</span>
            2–3 Desember 2026
          </div>
          <div className={`flex items-center justify-center gap-2 bg-neo-green px-4 sm:px-6 py-3 neo-border neo-shadow-sm font-bold text-black uppercase tracking-wider text-sm sm:text-base ${intro}`} style={{ animationDelay: '0.8s' }}>
            <span className="material-symbols-outlined text-xl animate-neo-swing" style={{ animationDelay: '0.3s' }}>location_on</span>
            GOR Volley UIR, Indoor
          </div>
        </div>

        {/* CTA Buttons - slam in */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 w-full">
          <a className={`bg-black text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-black text-lg sm:text-xl neo-border neo-shadow transition-all neo-shadow-hover neo-shadow-active uppercase ${intro}`} style={{ animationDelay: '0.3s' }} href="#daftar">Daftar Sekarang</a>
          <a className={`bg-white dark:bg-[#16213e] text-black dark:text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-black text-lg sm:text-xl neo-border dark:border-white neo-shadow transition-all neo-shadow-hover neo-shadow-active uppercase ${intro}`} style={{ animationDelay: '0.5s' }} href="#acara">Explore Event</a>
        </div>

        {/* Countdown Timer - flip entrance */}
        <div className={`bg-white dark:bg-[#16213e] p-5 sm:p-8 w-full max-w-xl neo-border dark:border-white neo-shadow relative transition-colors ${intro}`} style={{ animationDelay: '0.4s' }}>
          <div className="absolute -top-4 -left-4 bg-neo-pink px-4 py-1 neo-border font-black text-sm uppercase transform -rotate-6 animate-neo-swing">Live Now</div>
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-4 h-4 bg-red-500 neo-border animate-neo-jitter"></span>
            <span className="text-sm font-black tracking-[0.2em] text-black dark:text-white uppercase">Registrasi Dibuka Dalam</span>
          </div>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
