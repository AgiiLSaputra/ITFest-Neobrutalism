const LOGO_URL = "/img/LogoITFESTUIR.png";

const InstagramIcon = () => (
  <svg
    className="w-5 h-5 group-hover:animate-wiggle"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialLinks = [
  { isInstagram: true, label: "Instagram @miladituir", handle: "@miladituir", href: "https://www.instagram.com/miladituir" },
  { isInstagram: true, label: "Instagram @technofestuir", handle: "@technofestuir", href: "https://www.instagram.com/technofestuir" },
  { icon: "tag", label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-neo-blue dark:bg-[#1a1a2e] border-t-8 border-black dark:border-white pt-16 pb-12 text-black dark:text-[#e0e0e0] relative overflow-hidden transition-colors">
      {/* Dekoratif floating shapes */}
      <div className="absolute top-6 left-8 w-16 h-16 bg-neo-yellow border-4 border-black neo-shadow-sm float-anim rotate-anim opacity-80 z-0 hidden md:block" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-20 right-12 w-10 h-10 bg-neo-pink border-4 border-black rounded-full float-anim opacity-70 z-0 hidden md:block" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-16 left-[15%] w-8 h-8 bg-neo-green border-4 border-black rotate-45 float-anim z-0 hidden lg:block" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-1/2 right-[8%] w-12 h-12 bg-neo-yellow border-4 border-black rounded-full float-anim pulse-anim opacity-60 z-0 hidden lg:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-8 right-[25%] text-4xl font-black text-neo-yellow opacity-40 float-anim z-0 hidden md:block" style={{ animationDelay: '1s' }}>×</div>
      <div className="absolute top-1/3 left-[5%] text-3xl font-black text-neo-pink opacity-30 float-anim z-0 hidden md:block" style={{ animationDelay: '2.5s' }}>+</div>

      {/* Gradient bar atas */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neo-yellow via-neo-pink to-neo-green"></div>

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a
              className="flex items-center gap-4 mb-6 bg-cream p-4 neo-border neo-shadow inline-flex transition-colors"
              href="#"
            >
              <img
                alt="Milad IT Fest Logo"
                className="h-10 w-auto object-contain bg-black px-2"
                src={LOGO_URL}
              />
              <span className="font-black text-2xl tracking-tight uppercase">
                Milad IT Fest <span className="bg-neo-pink px-2">2026</span>
              </span>
            </a>
            <p className="font-bold text-lg max-w-sm mb-6 bg-cream p-4 neo-border neo-shadow transition-colors">
              Merayakan perjalanan inovasi dan kolaborasi di Teknik Informatika
              Universitas Islam Riau. Code the Stars, Beyond the Horizons.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 bg-neo-yellow neo-border neo-shadow-sm flex items-center justify-center hover:bg-neo-pink hover:shadow-none hover:-translate-y-1 transition-all group"
                  aria-label={s.label}
                  title={s.handle || s.label}
                >
                  {s.isInstagram ? (
                    <InstagramIcon />
                  ) : (
                    <span className="material-symbols-outlined text-xl group-hover:animate-wiggle">
                      {s.icon}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-black font-black mb-6 uppercase text-xl tracking-wider bg-neo-yellow inline-block px-3 py-1 neo-border">
              Navigasi
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-bold hover:bg-neo-yellow px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black"
                  href="#beranda"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  className="font-bold hover:bg-neo-pink px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black"
                  href="#tentang"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  className="font-bold hover:bg-neo-green px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black"
                  href="#roadmap"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-black font-black mb-6 uppercase text-xl tracking-wider bg-neo-green inline-block px-3 py-1 neo-border">
              Kontak
            </h4>
            <ul className="space-y-2 text-lg font-bold">
              <li className="bg-cream px-3 py-2 neo-border neo-shadow-sm border-2 transition-colors">
                Kampus Universitas Islam Riau
              </li>
              <li className="bg-cream px-3 py-2 neo-border neo-shadow-sm border-2 transition-colors">
                Jl. Kaharuddin Nasution No.113
              </li>
              <li className="bg-cream px-3 py-2 neo-border neo-shadow-sm border-2 transition-colors">
                Pekanbaru, Riau
              </li>
              <li className="pt-4">
                <a
                  className="bg-neo-pink text-black px-4 py-2 neo-border hover:bg-neo-yellow transition-colors block text-center"
                  href="mailto:miladitfestuir@gmail.com"
                >
                  miladitfestuir@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-bold">
          <p className="text-sm bg-cream px-4 py-2 neo-border neo-shadow-sm transition-colors">
            © 2026 Teknik Informatika UIR. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 bg-neo-green neo-border animate-pulse-ring"></span>
            <span className="bg-cream px-3 py-1 neo-border neo-shadow-sm font-black text-xs uppercase tracking-widest transition-colors">
              Made with ❤ by IF'26
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
