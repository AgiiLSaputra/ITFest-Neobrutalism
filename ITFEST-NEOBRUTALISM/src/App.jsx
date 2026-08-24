import { useState, useCallback, useEffect, useRef, memo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TentangAcara from './components/TentangAcara';
import DokumentasiAcara from './components/DokumentasiAcara';
import Roadmap from './components/Roadmap';
import Pendaftaran from './components/Pendaftaran';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import EventDetail from './components/EventDetail';
import CustomCursor from './components/CustomCursor';
import MarqueeBanner from './components/MarqueeBanner';
import ScrollToTop from './components/ScrollToTop';
import StatsCounter from './components/StatsCounter';
import NoiseOverlay from './components/NoiseOverlay';
import Loading from './components/Loading';
import { DotDivider } from './components/SectionDivider';
import useDarkMode from './hooks/useDarkMode';

const MemoizedHeader = memo(Header);
const MemoizedHero = memo(Hero);
const MemoizedCustomCursor = memo(CustomCursor);
const MemoizedNoiseOverlay = memo(NoiseOverlay);
const MemoizedFooter = memo(Footer);
const MemoizedScrollToTop = memo(ScrollToTop);

function LandingPage({ introReady = true }) {
  return (
    <>
      <MemoizedHero ready={introReady} />
      <MarqueeBanner />
      <TentangAcara />
      <StatsCounter />
      <DotDivider color="bg-black" />
      <DokumentasiAcara />
      <Roadmap />
      <Pendaftaran />
      <MarqueeBanner />
      <Sponsor />
    </>
  );
}

const MemoizedLandingPage = memo(LandingPage);

export default function App() {
  const location = useLocation();
  useDarkMode();
  // Choreographed reveal:
  //   'loading' -> loader overlay covers the (already mounted) page
  //   'sliding' -> page slides up from the bottom, covering the loader
  //   'done'    -> loader unmounted on a quiet frame after animationend
  const [phase, setPhase] = useState(() => (window.location.pathname === '/' ? 'loading' : 'done'));
  const pageRef = useRef(null);

  const finishLoading = useCallback(() => setPhase('sliding'), []);

  useEffect(() => {
    if (phase !== 'sliding') return;
    const el = pageRef.current;
    if (!el) return;

    // Only react to the wrapper's OWN slide animation — descendant
    // entrance animations (hero pop-ups, marquees) also bubble
    // animationend up to this element and would end the transition early.
    const onEnd = (e) => {
      if (e.target !== el || e.animationName !== 'pageSlideUp') return;
      setPhase('done');
    };
    el.addEventListener('animationend', onEnd);

    // Safety net in case the animation never fires (e.g. reduced-motion).
    const fallback = setTimeout(() => setPhase('done'), 2400);

    return () => {
      el.removeEventListener('animationend', onEnd);
      clearTimeout(fallback);
    };
  }, [phase]);

  const pageClass =
    phase === 'loading'
      ? 'opacity-0 pointer-events-none'
      : phase === 'sliding'
      ? 'animate-page-slide-up'
      : '';

  return (
    <div className={`antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col min-h-screen bg-[#f0f0f0] dark:bg-[#1a1a2e] text-black dark:text-[#e0e0e0] transition-colors duration-300`}>
      {phase !== 'done' && <Loading onFinish={finishLoading} />}
      <MemoizedCustomCursor />
      {/* Navbar lives OUTSIDE the animated page wrapper so it is always
          pinned to the viewport (a transformed ancestor would hijack
          position:fixed). It drops in once the reveal starts. */}
      {phase !== 'loading' && (
        <div className="navbar-drop relative z-[10002]">
          <MemoizedHeader />
        </div>
      )}
      <div ref={pageRef} className={`relative z-[10000] bg-[#f0f0f0] dark:bg-[#1a1a2e] ${pageClass}`}>
        <MemoizedNoiseOverlay />
        <main className="flex-grow relative">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MemoizedLandingPage introReady={phase !== 'loading'} />} />
            <Route path="/event/:eventId" element={<EventDetail />} />
          </Routes>
        </main>
        <MemoizedFooter />
        <MemoizedScrollToTop />
      </div>
    </div>
  );
}
