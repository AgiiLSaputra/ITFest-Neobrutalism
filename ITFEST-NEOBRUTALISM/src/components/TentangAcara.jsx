export default function TentangAcara() {
  return (
    <section className="py-24 relative bg-white border-b-8 border-black" id="tentang">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-neo-pink neo-border font-black uppercase tracking-wider transform -rotate-2">
              Tentang Acara
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight uppercase">
              Perayaan Anniversary <br />
              <span className="bg-black text-white px-2 inline-block">Teknik Informatika UIR</span>
            </h2>
            <div className="p-6 bg-neo-yellow neo-border neo-shadow-sm">
              <p className="text-xl font-bold leading-relaxed mb-4">
                Milad IT Fest adalah perayaan tahunan yang menandai hari jadi Program Studi Teknik Informatika Universitas Islam Riau. Acara ini merupakan wujud syukur dan momentum refleksi atas perjalanan panjang serta pencapaian yang telah diraih.
              </p>
              <p className="text-xl font-bold leading-relaxed">
                Mengusung tema <span className="bg-white px-1">"Code the Stars, Beyond the Horizons"</span>, tahun ini kami mengajak seluruh elemen mahasiswa dan civitas akademika untuk melampaui batas inovasi, menggabungkan semangat kebersamaan dengan eksplorasi teknologi masa depan.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="p-8 bg-white neo-border neo-shadow flex gap-6 items-start hover:bg-neo-blue transition-colors group cursor-default">
              <div className="flex-shrink-0 w-16 h-16 bg-white neo-border flex items-center justify-center relative z-10">
                <span className="material-symbols-outlined text-black text-4xl">school</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-black text-black uppercase">Akademik</h3>
                <p className="text-base font-bold leading-relaxed">Ajang kompetisi teknologi tingkat nasional. Uji kemampuanmu dalam bidang Web Programming, UI/UX Design, atau Infografis, dan jadikan karyamu sebagai bukti nyata inovasi.</p>
              </div>
            </div>

            <div className="p-8 bg-white neo-border neo-shadow flex gap-6 items-start hover:bg-neo-pink transition-colors group cursor-default">
              <div className="flex-shrink-0 w-16 h-16 bg-white neo-border flex items-center justify-center">
                <span className="material-symbols-outlined text-black text-4xl">celebration</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-black text-black uppercase">Festival</h3>
                <p className="text-base font-bold leading-relaxed">Sinergi teknologi, olahraga, dan seni. Rayakan festival lewat kompetisi E-Sport, Futsal Cup, Talkshow interaktif, hingga Konser musik spektakuler.</p>
              </div>
            </div>

            <div className="p-8 bg-white neo-border neo-shadow flex gap-6 items-start hover:bg-neo-green transition-colors group cursor-default">
              <div className="flex-shrink-0 w-16 h-16 bg-white neo-border flex items-center justify-center">
                <span className="material-symbols-outlined text-black text-4xl">campaign</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-black text-black uppercase">Publikasi</h3>
                <p className="text-base font-bold leading-relaxed">Membuka kolaborasi yang menghubungkan ide inovatif para pelajar dan mahasiswa dengan praktisi industri, akademisi, serta masyarakat luas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
