import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function TentangAcara() {
  return (
    <section className="py-24 relative bg-gray-main border-b-8 border-black transition-colors pattern-cross-grid" id="tentang">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side */}
          <div className="lg:w-1/2 space-y-8 relative">
            <div className="absolute -top-4 -right-4 bg-neo-green neo-border neo-shadow-sm px-3 py-1 font-black text-xs uppercase transform rotate-12 animate-bounce-slow hidden md:block z-20">
              ★ Milad Teknik Informatika UIR ke-19
            </div>
            <ScrollReveal animation="animate-pop-up">
              <div className="inline-block px-4 py-2 bg-neo-yellow neo-border font-black uppercase tracking-wider transform -rotate-2">
                Informasi Utama
              </div>
            </ScrollReveal>
            <ScrollReveal animation="animate-pop-up" delay={0.15}>
              <h2 className="text-5xl md:text-6xl font-black leading-tight uppercase">
                Tentang Milad <br />
                IT FEST <span className="bg-black text-white px-2 inline-block">2026</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="animate-pop-up" delay={0.3}>
              <div className="p-6 bg-neo-yellow neo-border neo-shadow-sm neo-tilt">
                <p className="text-xl font-bold leading-relaxed mb-4">
                  MILAD IT FEST 2026 adalah perhelatan tahunan terbesar yang diselenggarakan oleh Himpunan Mahasiswa Teknik Informatika (HIMATIF) Universitas Islam Riau.
                </p>
                <p className="text-xl font-bold leading-relaxed">
                  Menggabungkan perayaan ulang tahun ke-19 Program Studi Teknik Informatika UIR dengan ajang Technofest UIR Vol. 2, event ini menghadirkan berbagai kompetisi teknologi, olahraga, pameran inovasi, dan seminar nasional bertaraf tinggi.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="animate-pop-up" delay={0.4}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 neo-border neo-shadow font-black text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                <span>Lihat Selengkapnya</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <ScrollReveal animation="animate-pop-up" delay={0.2}>
              <div className="p-5 sm:p-8 bg-cream neo-border neo-shadow flex gap-4 sm:gap-6 items-start hover:bg-neo-blue transition-colors group cursor-default neo-tilt">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-cream neo-border flex items-center justify-center relative z-10 group-hover:animate-neo-swing transition-colors">
                  <span className="material-symbols-outlined text-black text-3xl sm:text-4xl">school</span>
                </div>
                <div className="space-y-3 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-black text-black uppercase">Akademik</h3>
                  <p className="text-base font-bold leading-relaxed">Kompetisi UI/UX Design, Hackathon Web Innovation, dan Seminar Nasional bertaraf nasional. Uji kemampuanmu dan jadikan karyamu sebagai bukti nyata inovasi.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="animate-pop-up" delay={0.35}>
              <div className="p-5 sm:p-8 bg-cream neo-border neo-shadow flex gap-4 sm:gap-6 items-start hover:bg-neo-pink transition-colors group cursor-default neo-tilt">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-cream neo-border flex items-center justify-center group-hover:animate-neo-swing transition-colors">
                  <span className="material-symbols-outlined text-black text-3xl sm:text-4xl">celebration</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-black uppercase">Festival</h3>
                  <p className="text-base font-bold leading-relaxed">Sinergi teknologi, olahraga, dan seni. Rayakan festival lewat kompetisi E-Sports Mobile Legends, Badminton Championship, Tech Innovation Expo, hingga Closing Ceremony spektakuler.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="animate-pop-up" delay={0.5}>
              <div className="p-5 sm:p-8 bg-cream neo-border neo-shadow flex gap-4 sm:gap-6 items-start hover:bg-neo-green transition-colors group cursor-default neo-tilt">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-cream neo-border flex items-center justify-center group-hover:animate-neo-swing transition-colors">
                  <span className="material-symbols-outlined text-black text-3xl sm:text-4xl">campaign</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-black uppercase">Publikasi</h3>
                  <p className="text-base font-bold leading-relaxed">Membangun jejaring kolaborasi antara akademisi, praktisi industri, dan komunitas teknologi untuk akselerasi talenta digital muda Indonesia.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
