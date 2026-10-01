import { Link } from "react-router-dom";

const LOGO_URL = "/img/Logo-Milad-ItFest.png";

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
];

const navItems = [
  { label: "Beranda", href: "/#beranda", hover: "hover:bg-neo-yellow" },
  { label: "Tentang", href: "/#tentang", hover: "hover:bg-neo-pink" },
  { label: "Roadmap", href: "/#roadmap", hover: "hover:bg-neo-green" },
  { label: "Pendaftaran", href: "/#pendaftaran", hover: "hover:bg-neo-yellow" },
  { label: "Dokumentasi", href: "/#gallery", hover: "hover:bg-neo-pink" },
  { label: "Kontak", href: "mailto:miladitfestuir@gmail.com", hover: "hover:bg-neo-green" },
];

export default function Footer() {
  return (
    <footer className="bg-neo-blue border-t-8 border-black pt-16 pb-12 text-black relative overflow-hidden transition-colors">
      {/* Gradient bar atas */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neo-yellow via-neo-pink to-neo-green"></div>

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              className="flex items-center gap-4 mb-6 bg-cream p-4 neo-border neo-shadow inline-flex transition-colors"
              to="/"
            >
              <img
                alt="Milad IT Fest Logo"
                className="h-10 w-auto object-contain"
                src={LOGO_URL}
              />
              <span className="font-black text-2xl tracking-tight uppercase">
                Milad IT Fest <span className="bg-neo-pink px-2">2026</span>
              </span>
            </Link>
            <div className="max-w-sm mb-6 bg-cream p-4 neo-border neo-shadow relative transition-colors">
              <span className="absolute -top-4 -left-3 bg-neo-pink px-3 py-1 neo-border font-black text-[11px] uppercase tracking-widest transform -rotate-3 animate-neo-swing">
                Our Story
              </span>
              <p className="font-bold text-base leading-relaxed mb-3 pt-2">
                19 tahun tumbuh, satu panggung buat mahasiswa IT UIR{" "}
                <span className="bg-neo-yellow px-1 border-2 border-black box-decoration-clone">
                  unjuk karya
                </span>{" "}
                dan{" "}
                <span className="bg-neo-pink px-1 border-2 border-black box-decoration-clone">
                  adu skill
                </span>
                . Ini perayaan kita bersama.
              </p>
              <p className="font-black uppercase tracking-wide text-lg leading-snug border-t-4 border-black pt-3">
                Innovation,{" "}
                <span className="bg-neo-green text-black px-2 border-2 border-black box-decoration-clone">
                  Competition
                </span>{" "}
                <span className="bg-black text-white px-2 inline-block -rotate-1">
                  Celebration
                </span>
              </p>
            </div>
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
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`font-bold ${item.hover} px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
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
                  className="bg-neo-pink text-black px-4 py-2 neo-border neo-shadow-sm block text-center font-black underline decoration-2 underline-offset-4 transition-all hover:bg-neo-yellow hover:-translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-none"
                  href="mailto:miladitfestuir@gmail.com"
                >
                  miladitfestuir@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
