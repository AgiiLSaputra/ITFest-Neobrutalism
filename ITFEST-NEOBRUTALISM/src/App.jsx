import { useEffect, memo } from 'react';
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
import AboutPage from './components/AboutPage';
import CustomCursor from './components/CustomCursor';
import MarqueeBanner from './components/MarqueeBanner';
import ScrollToTop from './components/ScrollToTop';
import NoiseOverlay from './components/NoiseOverlay';


const MemoizedHeader = memo(Header);
const MemoizedHero = memo(Hero);
const MemoizedCustomCursor = memo(CustomCursor);
const MemoizedNoiseOverlay = memo(NoiseOverlay);
const MemoizedFooter = memo(Footer);
const MemoizedScrollToTop = memo(ScrollToTop);

function LandingPage() {
  return (
    <>
      <MemoizedHero />
      <MarqueeBanner />
      <TentangAcara />
      <Roadmap />
      <Pendaftaran />
      <MarqueeBanner />
      <DokumentasiAcara />
      <Sponsor />
    </>
  );
}

const MemoizedLandingPage = memo(LandingPage);

export default function App() {
  const location = useLocation();

  // Handle hash scrolling after route changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="antialiased selection:bg-black selection:text-white flex flex-col min-h-screen bg-gray-main text-black transition-colors duration-300">
      <MemoizedCustomCursor />
      <div className="navbar-drop relative z-[10002]">
        <MemoizedHeader />
      </div>
      <div className="relative z-[10000] bg-gray-main">
        <MemoizedNoiseOverlay />
        <main className="flex-grow relative">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MemoizedLandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/event/:eventId" element={<EventDetail />} />
          </Routes>
        </main>
        <MemoizedFooter />
        <MemoizedScrollToTop />
      </div>
    </div>
  );
}
