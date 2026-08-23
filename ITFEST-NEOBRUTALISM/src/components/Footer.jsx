const LOGO_URL = "/img/LogoITFESTUIR.png";

const socialLinks = [
  { icon: 'camera_alt', label: 'Instagram' },
  { icon: 'smart_display', label: 'YouTube' },
  { icon: 'tag', label: 'TikTok' },
];

export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] dark:bg-[#1a1a2e] border-t-8 border-black dark:border-white pt-16 pb-8 text-black dark:text-[#e0e0e0] relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neo-yellow via-neo-pink to-neo-blue"></div>
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a className="flex items-center gap-4 mb-6 bg-white dark:bg-[#16213e] p-4 neo-border dark:border-white inline-flex transition-colors" href="#">
              <img alt="Milad IT Fest Logo" className="h-10 w-auto object-contain bg-black px-2" src={LOGO_URL} />
              <span className="font-black text-2xl tracking-tight uppercase">Milad IT Fest <span className="bg-neo-pink px-2">2026</span></span>
            </a>
            <p className="font-bold text-lg max-w-sm mb-6 bg-white dark:bg-[#16213e] p-4 neo-border dark:border-white transition-colors">
              Merayakan perjalanan inovasi dan kolaborasi di Teknik Informatika Universitas Islam Riau. Code the Stars, Beyond the Horizons.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href="#" className="w-12 h-12 bg-white neo-border neo-shadow-sm flex items-center justify-center hover:bg-neo-yellow hover:shadow-none hover:-translate-y-1 transition-all group" aria-label={s.label}>
                  <span className="material-symbols-outlined text-xl group-hover:animate-wiggle">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-black font-black mb-6 uppercase text-xl tracking-wider bg-neo-green inline-block px-2 neo-border">Navigasi</h4>
            <ul className="space-y-4">
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#beranda">Beranda</a></li>
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#tentang">Tentang</a></li>
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#roadmap">Roadmap</a></li>
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#acara">Kegiatan</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-black font-black mb-6 uppercase text-xl tracking-wider bg-neo-blue inline-block px-2 neo-border">Kontak</h4>
            <ul className="space-y-2 text-lg font-bold">
              <li className="bg-white dark:bg-[#16213e] px-2 py-1 neo-border dark:border-white border-2 transition-colors">Kampus Universitas Islam Riau</li>
              <li className="bg-white dark:bg-[#16213e] px-2 py-1 neo-border dark:border-white border-2 transition-colors">Jl. Kaharuddin Nasution No.113</li>
              <li className="bg-white dark:bg-[#16213e] px-2 py-1 neo-border dark:border-white border-2 transition-colors">Pekanbaru, Riau</li>
              <li className="pt-4"><a className="bg-black text-white px-4 py-2 neo-border hover:bg-neo-yellow hover:text-black transition-colors block text-center" href="mailto:info@miladitfest.com">info@miladitfest.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-bold">
          <p className="text-sm bg-white dark:bg-[#16213e] px-4 py-2 neo-border dark:border-white transition-colors">
            © 2026 Teknik Informatika UIR. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 bg-neo-green neo-border animate-pulse-ring"></span>
            <span className="bg-white dark:bg-[#16213e] px-3 py-1 neo-border dark:border-white font-black text-xs uppercase tracking-widest transition-colors">Made with ❤ by IF'26</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
