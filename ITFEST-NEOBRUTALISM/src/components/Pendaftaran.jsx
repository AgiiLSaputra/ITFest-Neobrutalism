import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

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
    cardBg: 'bg-white',
    accent: 'bg-neo-blue',
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
    cardBg: 'bg-white',
    accent: 'bg-neo-pink',
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
    cardBg: 'bg-white',
    accent: 'bg-neo-green',
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
    cardBg: 'bg-white',
    accent: 'bg-neo-yellow',
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
    cardBg: 'bg-white',
    accent: 'bg-neo-blue',
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
    cardBg: 'bg-white',
    accent: 'bg-neo-pink',
  },
];

function EventCard({ event, index }) {
  return (
    <ScrollReveal animation="animate-pop-up" delay={index * 0.12} className="relative group h-full">
      <div className={`${event.cardBg} dark:bg-[#16213e] neo-border dark:border-white neo-shadow flex flex-col h-full p-8 transition-all duration-200 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-none neo-tilt group-hover:animate-neo-squish`}>
        <div className="flex justify-between items-start mb-6 pb-4 border-b-4 border-black">
          <span className={`px-3 py-1 ${event.categoryBg} neo-border text-sm font-black text-black uppercase tracking-widest animate-neo-jitter`}>{event.category}</span>
          <span className="material-symbols-outlined text-black text-3xl group-hover:animate-neo-swing">{event.icon}</span>
        </div>
        <div className="flex gap-2 mb-4">
          {event.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-black text-white text-xs font-black uppercase animate-neo-glitch">{tag}</span>
          ))}
        </div>
        <h3 className="text-3xl font-black mb-4 uppercase">{event.title}</h3>
        <p className="text-lg font-bold mb-8 leading-relaxed flex-grow">{event.description}</p>
        <div className="mt-auto space-y-3">
          <a className={`flex items-center justify-center gap-2 w-full py-4 ${event.daftarBg} text-black font-black uppercase neo-border neo-shadow-sm transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-none active:translate-x-2 active:-translate-y-2 active:shadow-none animate-neo-jitter`} href="#">
            DAFTAR SEKARANG
          </a>
          <Link to={`/event/${event.id}`} className="flex items-center justify-center gap-2 w-full py-4 bg-black text-white font-black uppercase neo-border neo-shadow-sm transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-none active:translate-x-2 active:-translate-y-2 active:shadow-none">
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
            LIHAT DETAIL ACARA
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Pendaftaran() {
  return (
    <section className="py-24 relative bg-[#f0f0f0] dark:bg-[#1a1a2e] border-b-8 border-black dark:border-white transition-colors" id="pendaftaran">
      <div className="absolute top-8 left-8 bg-neo-orange neo-border neo-shadow-sm px-3 py-1 font-black text-xs uppercase transform -rotate-6 animate-wiggle hidden lg:block z-20">
        🔥 Terbatas!
      </div>
      <div className="absolute bottom-12 right-8 bg-neo-green neo-border neo-shadow-sm px-3 py-1 font-black text-xs uppercase transform rotate-6 animate-bounce-slow hidden lg:block z-20">
        ★ Buka Pendaftaran
      </div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal animation="animate-pop-up">
            <div className="inline-block bg-neo-pink p-4 neo-border neo-shadow mb-6 transform -rotate-1">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">PENDAFTARAN ACARA</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="animate-pop-up" delay={0.2}>
            <p className="text-xl font-bold max-w-2xl mx-auto bg-white dark:bg-[#16213e] p-4 neo-border dark:border-white transition-colors">
              Pilih cabang kegiatan SwitchFest 2026 yang ingin kamu ikuti. Pelajari informasi selengkapnya atau langsung lakukan pendaftaran!
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
