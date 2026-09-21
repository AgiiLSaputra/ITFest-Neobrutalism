import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const missionPoints = [
  "Mengasah keterampilan teknis dan soft skill mahasiswa serta pelajar di bidang IT.",
  "Mendorong terciptanya produk inovasi digital karya anak bangsa.",
  "Membangun jejaring kolaborasi antara akademisi, praktisi industri, dan komunitas teknologi.",
  "Mempererat silaturahmi civitas akademika Teknik Informatika UIR.",
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section className="pt-32 pb-24 px-4 md:px-6 max-w-6xl mx-auto w-full relative">
      <div className="absolute top-24 right-8 w-16 h-16 bg-neo-yellow neo-border neo-shadow rotate-12 animate-bounce-slow animate-neo-drift hidden lg:block"></div>
      <div className="absolute top-48 left-4 w-10 h-10 bg-neo-pink rounded-full neo-border neo-shadow-sm -rotate-12 animate-neo-swing hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-neo-blue neo-border neo-shadow-sm rotate-45 animate-spin-slow hidden lg:block"></div>

      <Link to="/" className="inline-flex items-center gap-2 mb-8 text-black font-black hover:bg-black hover:text-white px-3 py-1 transition-colors neo-border font-mono text-sm uppercase neo-shadow-hover animate-pop-up">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        BACK TO LANDING PAGE
      </Link>

      <ScrollReveal animation="animate-pop-up">
        <div className="inline-block px-4 py-2 bg-neo-yellow neo-border font-black uppercase tracking-wider transform -rotate-2 mb-6">
          Official Event Page
        </div>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.1}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-black uppercase mb-4">
          Tentang Kami
        </h1>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.15}>
        <p className="text-sm font-bold text-neo-blue mb-12">
          Technofest UIR Vol. 2 & Milad Teknik Informatika UIR ke-19
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal animation="animate-pop-up" delay={0.2}>
            <div className="bg-cream p-6 sm:p-8 neo-border neo-shadow neo-tilt transition-colors">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-3 uppercase border-b-4 border-black pb-4">
                <span className="material-symbols-outlined text-[36px] text-neo-blue animate-neo-swing">school</span>
                Sejarah & Latar Belakang
              </h2>
              <div className="space-y-4 text-base font-bold leading-relaxed">
                <p>
                  Program Studi Teknik Informatika Universitas Islam Riau (UIR) didirikan untuk melahirkan insan akademis yang unggul, profesional, dan mampu bersaing di industri teknologi global.
                </p>
                <p>
                  Dalam rangka merayakan usia ke-19 tahun, Himpunan Mahasiswa Teknik Informatika (HIMATIF) menyelenggarakan <strong>MILAD IT FEST 2026</strong> yang berkolaborasi dengan <strong>Technofest UIR Vol. 2</strong>.
                </p>
                <p>
                  Event ini dirancang sebagai ajang unjuk kebolehan talenta muda Indonesia di bidang E-Sports, Olahraga, Desain Antarmuka, Pemrograman (Hackathon), serta ajang pertukaran wawasan melalui Seminar Nasional.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="animate-pop-up" delay={0.35}>
            <div className="bg-cream p-6 sm:p-8 neo-border neo-shadow neo-tilt transition-colors">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-3 uppercase border-b-4 border-black pb-4">
                <span className="material-symbols-outlined text-[36px] text-neo-green animate-neo-swing">emoji_events</span>
                Visi & Tujuan Strategis
              </h2>
              <p className="text-base font-bold leading-relaxed italic border-l-4 border-neo-yellow pl-4 mb-6">
                "Menjadi wadah akselerasi talenta digital muda Indonesia untuk berinovasi, berkompetisi secara sehat, dan menciptakan solusi teknologi berdampak tinggi bagi masa depan."
              </p>
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-neo-blue">
                  Misi Penyelenggaraan:
                </span>
                {missionPoints.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-cream p-3 neo-border neo-shadow-sm">
                    <span className="material-symbols-outlined text-neo-green text-xl mt-0.5 shrink-0">check_circle</span>
                    <span className="text-sm font-bold">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal animation="animate-pop-up" delay={0.3}>
            <div className="bg-neo-pink p-6 neo-border neo-shadow neo-tilt">
              <h3 className="text-lg font-black mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">groups</span>
                Penyelenggara Event
              </h3>
              <div className="space-y-3 text-sm font-bold">
                <div className="bg-cream p-3 neo-border">
                  <span className="text-xs text-gray-500 uppercase">Penyelenggara</span>
                  <p className="font-black">HIMATIF UIR</p>
                </div>
                <div className="bg-cream p-3 neo-border">
                  <span className="text-xs text-gray-500 uppercase">Instansi</span>
                  <p className="font-black">Program Studi Teknik Informatika, Fakultas Teknik, Universitas Islam Riau</p>
                </div>
                <div className="bg-cream p-3 neo-border">
                  <span className="text-xs text-gray-500 uppercase">Email Humas</span>
                  <p className="font-black">miladitfestuir@gmail.com</p>
                </div>
                <div className="bg-cream p-3 neo-border">
                  <span className="text-xs text-gray-500 uppercase">Instagram</span>
                  <p className="font-black">@himatifuir_</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="animate-pop-up" delay={0.45}>
            <div className="bg-neo-green p-6 neo-border neo-shadow neo-tilt">
              <h3 className="text-lg font-black mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">location_on</span>
                Waktu & Lokasi
              </h3>
              <div className="space-y-3 text-sm font-bold">
                <div className="bg-cream p-3 neo-border flex items-center gap-2">
                  <span className="material-symbols-outlined text-neo-blue text-base">calendar_today</span>
                  <span>1 – 2 Desember 2026</span>
                </div>
                <div className="bg-cream p-3 neo-border flex items-start gap-2">
                  <span className="material-symbols-outlined text-neo-pink text-base">pin_drop</span>
                  <span>Jl. Kaharuddin Nasution No.113, Simpang Tiga, Marpoyan Damai, Pekanbaru, Riau 28284</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
