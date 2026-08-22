import ScrollReveal from './ScrollReveal';

export default function Roadmap() {
  return (
    <section className="py-24 relative bg-white border-b-8 border-black overflow-hidden" id="roadmap">
      <div className="absolute top-4 right-8 bg-neo-pink neo-border neo-shadow-sm px-3 py-1 font-black text-xs uppercase transform rotate-3 animate-wiggle hidden md:block z-20">
        ★ Upcoming
      </div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal animation="animate-neo-stamp">
            <div className="inline-block bg-white p-6 neo-border neo-shadow mb-6 transform rotate-1">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Roadmap <span className="text-neo-pink animate-neo-jitter">Acara</span></h2>
            </div>
          </ScrollReveal>
          <div className="block">
            <ScrollReveal animation="animate-neo-flip" delay={0.15}>
              <p className="text-xl font-bold bg-white inline-block px-4 py-2 neo-border">
                Perjalanan menuju puncak perayaan Milad IT Fest 2026.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 pointer-events-none flex justify-center hidden md:flex z-0">
            <div className="w-1 bg-black h-full animate-neo-strips"></div>
          </div>

          <div className="space-y-20 relative z-10">
            {/* Milestone 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-neo-blue border-4 border-black transform -translate-x-1/2 flex items-center justify-center z-10 neo-shadow-sm group-hover:animate-neo-swing">
                <div className="w-3 h-3 bg-black"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0">
                <ScrollReveal animation="animate-neo-slam" delay={0.1}>
                  <div className="p-6 bg-white neo-border neo-shadow hover:-translate-y-1 transition-transform neo-tilt">
                    <div className="inline-block px-3 py-1 mb-4 bg-neo-blue neo-border text-xs font-black text-black tracking-wider animate-neo-jitter">MINGGU 1-2</div>
                    <h3 className="text-2xl font-black text-black mb-2 uppercase">Finalisasi Konsep &amp; Perencanaan</h3>
                    <p className="text-sm font-bold text-black">Pembentukan panitia, penyusunan anggaran, dan penetapan tema visual.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-neo-pink border-4 border-black transform -translate-x-1/2 flex items-center justify-center z-10 neo-shadow-sm group-hover:animate-neo-swing">
                <div className="w-3 h-3 bg-black"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0 text-left md:text-right">
                <ScrollReveal animation="animate-neo-slam" delay={0.2}>
                  <div className="p-6 bg-white neo-border neo-shadow hover:-translate-y-1 transition-transform neo-tilt">
                    <div className="inline-block px-3 py-1 mb-4 bg-neo-pink neo-border text-xs font-black text-black tracking-wider animate-neo-jitter">MINGGU 3-4</div>
                    <h3 className="text-2xl font-black text-black mb-2 uppercase">Development &amp; Promosi Awal</h3>
                    <p className="text-sm font-bold text-black">Pembuatan aset desain, peluncuran website teaser, dan pencarian sponsor.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-neo-green border-4 border-black transform -translate-x-1/2 flex items-center justify-center z-10 neo-shadow-sm group-hover:animate-neo-swing">
                <div className="w-3 h-3 bg-black"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0">
                <ScrollReveal animation="animate-neo-slam" delay={0.3}>
                  <div className="p-6 bg-white neo-border neo-shadow hover:-translate-y-1 transition-transform neo-tilt">
                    <div className="inline-block px-3 py-1 mb-4 bg-neo-green neo-border text-xs font-black text-black tracking-wider animate-neo-jitter">MINGGU 5</div>
                    <h3 className="text-2xl font-black text-black mb-2 uppercase">Soft Launch &amp; Registrasi</h3>
                    <p className="text-sm font-bold text-black">Pembukaan pendaftaran lomba, publikasi jadwal acara, dan kampanye media sosial.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Milestone 4 - Highlight */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-neo-yellow border-4 border-black transform -translate-x-1/2 flex items-center justify-center z-10 neo-shadow-sm group-hover:animate-neo-swing animate-neo-jitter">
                <div className="w-4 h-4 bg-black"></div>
              </div>
              <div className="md:w-5/12 w-full pl-12 md:pl-0 text-left md:text-right">
                <ScrollReveal animation="animate-neo-slam" delay={0.4}>
                  <div className="p-6 bg-neo-yellow neo-border neo-shadow hover:-translate-y-1 transition-transform neo-tilt">
                    <div className="inline-block px-3 py-1 mb-4 bg-black text-white neo-border text-xs font-black tracking-wider animate-neo-glitch">HARI-H | 2-3 DES 2026</div>
                    <h3 className="text-2xl font-black text-black mb-2 uppercase">Puncak Acara</h3>
                    <p className="text-sm font-black text-black">Pelaksanaan seluruh rangkaian lomba, seminar, dan acara puncak di GOR Volley UIR.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
