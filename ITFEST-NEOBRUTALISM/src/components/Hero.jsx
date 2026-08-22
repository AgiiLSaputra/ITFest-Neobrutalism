import { useState, useEffect } from 'react';

const MASCOT_URL = "/img/MASKOT-NOBG.png";

const phrases = ["Stay Curious,", "Code the Stars,", "Beyond the Horizons,", "Write the Future,"];

function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(phrases[0].length);
  const [isDeleting, setIsDeleting] = useState(true);
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }
    }

    let typeSpeed;
    let nextIsDeleting = isDeleting;
    let nextPhraseIndex = phraseIndex;
    let nextCharIndex = charIndex;

    if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      typeSpeed = 2000;
      nextIsDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      typeSpeed = 500;
      nextIsDeleting = false;
      nextPhraseIndex = (phraseIndex + 1) % phrases.length;
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

function CountdownTimer() {
  const targetDate = new Date('2026-12-02T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 37, hours: 2, minutes: 48, seconds: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
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
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.label} className={`${item.bg} p-4 neo-border neo-shadow-sm flex flex-col items-center justify-center`}>
          <div className="text-5xl font-black text-black">{String(item.value).padStart(2, '0')}</div>
          <div className="text-[12px] text-black mt-2 font-black tracking-widest border-t-2 border-black w-full text-center pt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-neo-yellow border-b-8 border-black" id="beranda">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neo-blue neo-border neo-shadow rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-neo-pink rounded-full neo-border neo-shadow -rotate-12 hidden lg:block"></div>

      <div className="container mx-auto relative z-10 flex flex-col items-center pt-24">
        {/* Mascot */}
        <div className="relative z-20 mb-2" id="mascot-walk-container">
          <div className="relative w-96 h-96 md:w-[480px] md:h-[480px] animate-float">
            <img alt="Milad IT Fest Mascot" className="w-full h-full object-contain filter drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-transform duration-500 animate-mascot-float" src={MASCOT_URL} />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4 mb-8 bg-white p-6 neo-border neo-shadow inline-block max-w-max">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-black uppercase" id="main-heading">
            MILAD IT FEST <br />
            <span className="bg-black text-white px-4 inline-block mt-2">2026</span>
          </h1>
          <p className="text-xl md:text-3xl text-black font-bold tracking-widest uppercase mt-4 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center border-t-4 border-black pt-4 w-[95%]">
            <TypewriterText />
          </p>
        </div>

        {/* Info Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-neo-blue px-6 py-3 neo-border neo-shadow-sm font-bold text-black uppercase tracking-wider">
            <span className="material-symbols-outlined text-xl">calendar_today</span>
            2–3 Desember 2026
          </div>
          <div className="flex items-center gap-2 bg-neo-green px-6 py-3 neo-border neo-shadow-sm font-bold text-black uppercase tracking-wider">
            <span className="material-symbols-outlined text-xl">location_on</span>
            GOR Volley UIR, Indoor
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a className="bg-black text-white px-10 py-5 font-black text-xl neo-border neo-shadow transition-all neo-shadow-hover neo-shadow-active uppercase" href="#daftar">Daftar Sekarang</a>
          <a className="bg-white text-black px-10 py-5 font-black text-xl neo-border neo-shadow transition-all neo-shadow-hover neo-shadow-active uppercase" href="#acara">Explore Event</a>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white p-8 w-full max-w-xl neo-border neo-shadow relative">
          <div className="absolute -top-4 -left-4 bg-neo-pink px-4 py-1 neo-border font-black text-sm uppercase transform -rotate-6">Live Now</div>
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-4 h-4 bg-red-500 neo-border"></span>
            <span className="text-sm font-black tracking-[0.2em] text-black uppercase">Registrasi Dibuka Dalam</span>
          </div>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
