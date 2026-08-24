import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShow(window.scrollY > 400);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-neo-pink text-black neo-border neo-shadow font-black text-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-[0px_0px_0px_0px_#000] ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-3xl">arrow_upward</span>
    </button>
  );
}
