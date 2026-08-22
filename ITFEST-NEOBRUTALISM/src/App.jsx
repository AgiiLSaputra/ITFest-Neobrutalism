import Header from './components/Header';
import Hero from './components/Hero';
import TentangAcara from './components/TentangAcara';
import DokumentasiAcara from './components/DokumentasiAcara';
import Roadmap from './components/Roadmap';
import Pendaftaran from './components/Pendaftaran';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="antialiased selection:bg-black selection:text-white flex flex-col min-h-screen bg-[#f0f0f0] text-black">
      <Header />
      <main className="flex-grow relative">
        <Hero />
        <TentangAcara />
        <DokumentasiAcara />
        <Roadmap />
        <Pendaftaran />
        <Sponsor />
      </main>
      <Footer />
    </div>
  );
}
