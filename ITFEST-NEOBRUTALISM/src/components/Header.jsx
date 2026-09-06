import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toggleDarkMode } from '../hooks/useDarkMode';

const LOGO_URL = "/img/LogoITFESTUIR.png";

const eventLinks = [
  { id: 'hackathon', label: 'Hackathon' },
  { id: 'esport', label: 'Mobile Legends' },
  { id: 'badminton', label: 'Badminton' },
  { id: 'expo', label: 'Expo' },
  { id: 'seminar', label: 'Seminar Nasional' },
  { id: 'typing', label: 'Typing Test' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  const goToEvent = (eventId) => {
    navigate(`/event/${eventId}`);
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navBtn = "text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black";

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between bg-white dark:bg-[#16213e] neo-border neo-shadow-sm transition-colors">
        <Link to="/" className="flex items-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img alt="Milad IT Fest 2026 Logo" className="h-10 w-auto object-contain bg-black px-2" src={LOGO_URL} />
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-bold">
          <button className={`${navBtn} dark:hover:bg-white dark:hover:text-black`} onClick={() => scrollTo('beranda')}>Home</button>
          <button className={`${navBtn} dark:hover:bg-white dark:hover:text-black`} onClick={() => scrollTo('tentang')}>About Us</button>
          <button className={`${navBtn} dark:hover:bg-white dark:hover:text-black`} onClick={() => scrollTo('roadmap')}>Proyeksi</button>

          <div className="relative" ref={dropdownRef}>
            <button className={`${navBtn} flex items-center gap-1 dark:hover:bg-white dark:hover:text-black`} onClick={() => setDropdownOpen(!dropdownOpen)}>
              Acara
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#16213e] neo-border neo-shadow-sm py-2 min-w-[220px] animate-dropdown-pop">
                {eventLinks.map((ev) => (
                  <button key={ev.id} className="w-full text-left px-4 py-2 text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2" onClick={() => goToEvent(ev.id)}>
                    <span className="w-2 h-2 bg-neo-pink neo-border flex-shrink-0"></span>
                    {ev.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className={`${navBtn} dark:hover:bg-white dark:hover:text-black`} onClick={() => scrollTo('pendaftaran')}>Daftar Acara</button>
          <button className={`${navBtn} dark:hover:bg-white dark:hover:text-black`} onClick={() => scrollTo('sponsor')}>Sponsor</button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center neo-border neo-shadow-sm bg-white dark:bg-[#0f3460] transition-colors hover:scale-110"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-xl theme-icon"></span>
          </button>
          <button className="bg-neo-yellow text-black px-6 py-2 font-black text-sm neo-border neo-shadow transition-all neo-shadow-hover neo-shadow-active animate-neo-jitter" onClick={() => scrollTo('pendaftaran')}>
            DAFTAR SEKARANG
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 flex items-center justify-center neo-border neo-shadow-sm bg-white dark:bg-[#0f3460] transition-colors"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-lg theme-icon"></span>
          </button>
          <button aria-label="Toggle Menu" className="text-black dark:text-white p-2 border-4 border-black dark:border-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-white dark:bg-[#16213e] neo-border neo-shadow-sm mt-2 transition-all duration-300 ${menuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
        <nav className="flex flex-col gap-4 font-bold">
          <button className="text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white text-left" onClick={() => { scrollTo('beranda'); setMenuOpen(false); }}>Home</button>
          <button className="text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white text-left" onClick={() => { scrollTo('tentang'); setMenuOpen(false); }}>About Us</button>
          <button className="text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white text-left" onClick={() => { scrollTo('roadmap'); setMenuOpen(false); }}>Proyeksi</button>

          <div>
            <button className="text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white text-left flex items-center gap-1 w-full" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
              Acara
              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            {mobileDropdownOpen && (
              <div className="pl-4 pt-2 flex flex-col gap-2 animate-dropdown-pop">
                {eventLinks.map((ev) => (
                  <button key={ev.id} className="text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-2 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white text-left flex items-center gap-2" onClick={() => goToEvent(ev.id)}>
                    <span className="w-2 h-2 bg-neo-pink neo-border flex-shrink-0"></span>
                    {ev.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white text-left" onClick={() => { scrollTo('pendaftaran'); setMenuOpen(false); }}>Daftar Acara</button>
          <button className="text-sm font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-white text-left" onClick={() => { scrollTo('sponsor'); setMenuOpen(false); }}>Sponsor</button>
          <button className="bg-neo-yellow text-black px-6 py-2 font-black text-sm neo-border neo-shadow text-center" onClick={() => { scrollTo('pendaftaran'); setMenuOpen(false); }}>DAFTAR SEKARANG</button>
        </nav>
      </div>
    </header>
  );
}
