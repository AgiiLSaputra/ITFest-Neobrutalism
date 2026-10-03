import { useState, useEffect } from "react";
import FloatingShapes from "./FloatingShapes";

const phrases = ["Stay Curious,", "Creating Solutions,", "Shaping the Future,"];
const longestPhrase = phrases.reduce(
  (a, b) => (b.length > a.length ? b : a),
  phrases[0],
);

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

export default function Hero({ ready = true }) {
  const intro = ready ? "hero-intro animate-pop-up" : "hero-intro opacity-0";
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-neo-yellow border-b-8 border-black animate-neo-strips transition-colors"
      id="beranda"
    >
      <FloatingShapes />
      {/* Decorative Elements - animated */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-neo-blue neo-border neo-shadow rotate-12 hidden lg:block animate-neo-drift"></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-neo-pink rounded-full neo-border neo-shadow -rotate-12 hidden lg:block animate-neo-drift"
        style={{ animationDelay: "3s" }}
      ></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-neo-green neo-border -rotate-6 hidden lg:block animate-bounce-slow"></div>
      <div className="absolute bottom-40 left-32 w-8 h-8 bg-black neo-border rotate-45 hidden lg:block animate-spin-slow"></div>

      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center py-28">
        {/* Headline - SLAM entrance */}
        <div
          className={`space-y-4 mb-8 bg-cream p-7 sm:p-10 lg:p-14 neo-border neo-shadow inline-block max-w-full transition-colors ${intro}`}
        >
          <h1
            className="font-pixel text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none text-black uppercase animate-neo-jitter-soft"
            id="main-heading"
          >
            MILAD IT FEST <br />
            <span className="inline-block mt-2 animate-neo-squish">
              2026
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-black font-bold tracking-widest uppercase mt-4 min-h-[3rem] md:min-h-[4rem] border-t-4 border-black pt-4 w-full grid place-items-center">
            {/* Sizer (invisible): frase terpanjang + lebar kursor, menjaga lebar card tetap fix saat teks typewriter berganti */}
            <span
              className="invisible col-start-1 row-start-1 select-none whitespace-nowrap"
              aria-hidden="true"
            >
              {longestPhrase}
              <span className="inline-block w-[10px] h-[1em] ml-2"></span>
            </span>
            <span className="col-start-1 row-start-1 whitespace-nowrap">
              <TypewriterText />
            </span>
          </p>
        </div>

        {/* CTA Buttons - slam in */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-10 mb-16 w-full">
          <a
            className={`bg-neo-pink text-black w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-black text-lg sm:text-xl neo-border neo-shadow transition-all neo-shadow-hover neo-shadow-active uppercase flex items-center justify-center gap-3 ${intro}`}
            style={{ animationDelay: "0.3s" }}
            href="#pendaftaran"
          >
            <span className="material-symbols-outlined text-[26px]">how_to_reg</span>
            Daftar Sekarang
          </a>
          <a
            className={`bg-cream text-black w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 font-black text-lg sm:text-xl neo-border neo-shadow transition-all neo-shadow-hover neo-shadow-active uppercase ${intro}`}
            style={{ animationDelay: "0.5s" }}
            href="#tentang"
          >
            Explore Event
          </a>
        </div>
      </div>
    </section>
  );
}
