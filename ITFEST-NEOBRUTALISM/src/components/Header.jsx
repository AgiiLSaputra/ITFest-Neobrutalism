import { useState } from 'react';

const LOGO_URL = "/img/LogoITFESTUIR.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between bg-white neo-border neo-shadow-sm">
        {/* Logo */}
        <a className="flex items-center group" href="#">
          <img alt="Milad IT Fest 2026 Logo" className="h-10 w-auto object-contain bg-black px-2" src={LOGO_URL} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-bold">
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#beranda">Beranda</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#acara">Acara</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#proyeksi">Proyeksi</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#kemitraan">Kemitraan</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#sponsor">Sponsor</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a className="bg-neo-yellow text-black px-6 py-2 font-black text-sm neo-border neo-shadow transition-all neo-shadow-hover neo-shadow-active" href="#daftar">
            DAFTAR SEKARANG
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button aria-label="Toggle Menu" className="md:hidden text-black p-2 border-4 border-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white neo-border neo-shadow-sm mt-2 transition-all duration-300 ${menuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
        <nav className="flex flex-col gap-4 font-bold">
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#beranda" onClick={() => setMenuOpen(false)}>Beranda</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#acara" onClick={() => setMenuOpen(false)}>Acara</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#proyeksi" onClick={() => setMenuOpen(false)}>Proyeksi</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#kemitraan" onClick={() => setMenuOpen(false)}>Kemitraan</a>
          <a className="text-sm font-black hover:bg-black hover:text-white px-2 py-1 transition-colors border-2 border-transparent hover:border-black" href="#sponsor" onClick={() => setMenuOpen(false)}>Sponsor</a>
          <a className="bg-neo-yellow text-black px-6 py-2 font-black text-sm neo-border neo-shadow text-center" href="#daftar" onClick={() => setMenuOpen(false)}>DAFTAR SEKARANG</a>
        </nav>
      </div>
    </header>
  );
}
