import { useState } from 'react';

const events = [
  {
    id: 'hackathon',
    category: 'IT COMPETITION',
    categoryBg: 'bg-neo-blue',
    icon: 'code',
    tags: ['SMA/SMK', 'MAHASISWA'],
    title: 'Hackathon',
    description: 'Tantang kemampuan teknismu dalam membangun solusi inovatif dalam waktu terbatas.',
    daftarBg: 'bg-neo-yellow',
    backBg: 'bg-neo-blue',
    backDetail: 'Tim 2-3 orang. Fokus pada pengembangan solusi digital untuk masalah lokal.',
  },
  {
    id: 'esport',
    category: 'E-SPORT ARENA',
    categoryBg: 'bg-neo-pink',
    icon: 'sports_esports',
    tags: ['UMUM'],
    title: 'E-Sport Tournament',
    description: 'Kuasai arena kompetitif Mobile Legends dan buktikan timmu adalah yang terbaik.',
    daftarBg: 'bg-neo-blue',
    backBg: 'bg-neo-pink',
    backDetail: 'Sistem gugur. 5 Pemain + 1 Cadangan. Venue: GOR Volley UIR.',
  },
  {
    id: 'badminton',
    category: 'BADMINTON CUP',
    categoryBg: 'bg-neo-green',
    icon: 'sports_tennis',
    tags: ['MAHASISWA'],
    title: 'Badminton Tournament',
    description: 'Tunjukkan sportivitas dan ketangkasanmu di lapangan hijau dalam kompetisi ganda putra.',
    daftarBg: 'bg-neo-pink',
    backBg: 'bg-neo-green',
    backDetail: 'Kategori Ganda Putra. Lokasi: GOR Badminton UIR.',
  },
  {
    id: 'expo',
    category: 'EXHIBITION',
    categoryBg: 'bg-neo-yellow',
    icon: 'rocket_launch',
    tags: ['UMUM'],
    title: 'IT Expo',
    description: 'Pameran karya inovasi mahasiswa dan startup teknologi. Lihat langsung proyek masa depan.',
    daftarBg: 'bg-neo-blue',
    backBg: 'bg-neo-yellow',
    backDetail: 'Terbuka untuk pameran produk IoT, Web, dan Mobile Apps.',
  },
  {
    id: 'seminar',
    category: 'KNOWLEDGE HUB',
    categoryBg: 'bg-neo-blue',
    icon: 'groups',
    tags: ['PELAJAR', 'UMUM'],
    title: 'Nasional Seminar',
    description: 'Perluas wawasanmu bersama pakar industri teknologi dalam seminar bertema masa depan AI.',
    daftarBg: 'bg-neo-green',
    backBg: 'bg-neo-blue',
    backDetail: 'Pembicara dari Tech Giant. Sertifikat Nasional disediakan.',
  },
  {
    id: 'typing',
    category: 'SKILL CHALLENGE',
    categoryBg: 'bg-neo-pink',
    icon: 'keyboard',
    tags: ['MAHASISWA'],
    title: 'Typing Test',
    description: 'Seberapa cepat jarimu menari di atas keyboard? Buktikan kecepatan dan akurasimu di sini.',
    daftarBg: 'bg-neo-yellow',
    backBg: 'bg-neo-pink',
    backDetail: 'Kompetisi WPM (Words Per Minute) dengan akurasi minimal 95%.',
  },
];

function FlipCard({ event }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative group">
      <div className="flip-container h-[600px] relative">
        <div className={`flip-inner h-full w-full${isFlipped ? ' is-flipped' : ''}`}>
          {/* Front */}
          <div className="flip-front absolute inset-0 bg-white neo-border neo-shadow flex flex-col h-full p-8 transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="flex justify-between items-start mb-8 pb-4 border-b-4 border-black">
              <span className={`px-3 py-1 ${event.categoryBg} neo-border text-sm font-black text-black uppercase tracking-widest`}>{event.category}</span>
              <span className="material-symbols-outlined text-black text-3xl">{event.icon}</span>
            </div>
            <div className="flex gap-2 mb-4">
              {event.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-black text-white text-xs font-black uppercase">{tag}</span>
              ))}
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase">{event.title}</h3>
            <p className="text-lg font-bold mb-8 leading-relaxed">{event.description}</p>
            <div className="mt-auto space-y-4">
              <a className={`flex items-center justify-center gap-2 w-full py-4 ${event.daftarBg} text-black font-black uppercase neo-border neo-shadow-sm neo-shadow-active`} href="#">DAFTAR SEKARANG</a>
              <button className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-black uppercase neo-border neo-shadow-sm neo-shadow-active" onClick={() => setIsFlipped(true)}>LIHAT DETAIL ACARA</button>
            </div>
          </div>
          {/* Back */}
          <div className={`flip-back absolute inset-0 ${event.backBg} neo-border neo-shadow flex flex-col h-full p-8`}>
            <div className="flex justify-between items-start mb-6 pb-4 border-b-4 border-black">
              <span className="px-3 py-1 bg-white neo-border text-sm font-black text-black uppercase tracking-widest">EVENT DETAILS</span>
              <span className="material-symbols-outlined text-black text-3xl">info</span>
            </div>
            <div className="space-y-6 flex-grow bg-white p-6 neo-border">
              <p className="text-sm font-bold">{event.backDetail}</p>
            </div>
            <div className="mt-6">
              <button className="flex items-center justify-center gap-2 w-full py-4 bg-black text-white font-black uppercase neo-border neo-shadow-sm neo-shadow-active" onClick={() => setIsFlipped(false)}>
                <span className="material-symbols-outlined">arrow_back</span> KEMBALI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pendaftaran() {
  return (
    <section className="py-24 relative bg-[#f0f0f0] border-b-8 border-black" id="pendaftaran">
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-neo-pink p-4 neo-border neo-shadow mb-6 transform -rotate-1">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">PENDAFTARAN ACARA</h2>
          </div>
          <p className="text-xl font-bold max-w-2xl mx-auto bg-white p-4 neo-border">
            Pilih cabang kegiatan SwitchFest 2026 yang ingin kamu ikuti. Pelajari informasi selengkapnya atau langsung lakukan pendaftaran!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {events.map((event) => (
            <FlipCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
