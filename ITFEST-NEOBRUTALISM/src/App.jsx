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
import { DotDivider } from './components/SectionDivider';
import useDarkMode from './hooks/useDarkMode';

function LandingPage() {
  return (
    <>
      <Hero />
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

export default function App() {
  const location = useLocation();
  const [dark] = useDarkMode();

  return (
    <div className={`antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col min-h-screen bg-[#f0f0f0] dark:bg-[#1a1a2e] text-black dark:text-[#e0e0e0] transition-colors duration-300`}>
      <CustomCursor />
      <NoiseOverlay />
      <Header />
      <main className="flex-grow relative">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
