import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const eventsData = {
  hackathon: {
    category: "IT COMPETITION",
    categoryBg: "bg-neo-blue",
    icon: "code",
    title: "HACKATHON 2026",
    subtitle: "SMA/SMK & MAHASISWA",
    heroImg: "/img/Foto.webp",
    description:
      "Milad IT Fest Hackathon 2026 adalah marathon coding intensif 48 jam yang dirancang untuk mendorong batas inovasi. Peserta akan membentuk tim dan menyelesaikan masalah nyata menggunakan teknologi terkini.",
    daftarLink: "#", // TODO: ganti dengan link form pendaftaran Hackathon
    about: [
      "Kompetisi ini terbuka untuk pelajar SMA/SMK dan mahasiswa aktif dari seluruh Indonesia.",
      "Peserta akan diberikan tantangan berupa problem statement yang diambil dari isu-isu nyata di masyarakat.",
      "Teknologi yang digunakan bebas: web, mobile, AI/ML, IoT, atau kombinasi.",
    ],
    rules: [
      { icon: "group", text: "Tim 2-4 orang. Semua anggota harus terdaftar." },
      {
        icon: "school",
        text: "Eligibilitas: Pelajar SMA/SMK dan Mahasiswa Aktif.",
      },
      {
        icon: "edit_note",
        text: "Kode harus ditulis selama hackathon berlangsung.",
      },
      {
        icon: "upload",
        text: "Submit project via portal resmi sebelum deadline + demo video.",
      },
    ],
    prizes: [
      { place: "1st Place", amount: "Rp 10.000.000", bg: "bg-neo-yellow" },
      { place: "2nd Place", amount: "Rp 7.500.000", bg: "bg-white" },
      { place: "3rd Place", amount: "Rp 5.000.000", bg: "bg-white" },
    ],
    timeline: [
      {
        date: "10 OCT 2026",
        label: "Registration Opens",
        color: "bg-neo-blue",
        active: true,
      },
      { date: "01 NOV 2026", label: "Technical Meeting", color: "bg-white" },
      {
        date: "15-17 NOV 2026",
        label: "Hackathon Days",
        color: "bg-neo-pink",
        highlight: true,
      },
      { date: "20 NOV 2026", label: "Winner Announcement", color: "bg-white" },
    ],
    accentBg: "bg-neo-blue",
    tagBg: "bg-neo-pink",
  },
  esport: {
    category: "E-SPORT ARENA",
    categoryBg: "bg-neo-pink",
    icon: "sports_esports",
    title: "E-SPORT TOURNAMENT",
    subtitle: "UMUM",
    heroImg: "/img/Foto.webp",
    description:
      "Kuasai arena kompetitif Mobile Legends dan buktikan timmu adalah yang terbaik di Milad IT Fest 2026.",
    daftarLink: "#",
    about: [
      "Turnamen Mobile Legends: Bang Bang dengan sistem gugur.",
      "Terbuka untuk umum, jangan lewatkan kesempatan menjadi juara!",
      "Venue: GOR Volley UIR, Pekanbaru.",
    ],
    rules: [
      {
        icon: "group",
        text: "Tim 5 Pemain + 1 Cadangan. Semua harus terdaftar.",
      },
      {
        icon: "sports_esports",
        text: "Format: Single Elimination, Best of 3.",
      },
      { icon: "settings", text: "Settings turnamen akan diatur oleh panitia." },
      { icon: "emoji_events", text: "Fair play adalah prioritas utama." },
    ],
    prizes: [
      { place: "1st Place", amount: "Rp 5.000.000", bg: "bg-neo-yellow" },
      { place: "2nd Place", amount: "Rp 3.000.000", bg: "bg-white" },
      { place: "3rd Place", amount: "Rp 1.500.000", bg: "bg-white" },
    ],
    timeline: [
      {
        date: "10 OCT 2026",
        label: "Registration Opens",
        color: "bg-neo-blue",
        active: true,
      },
      { date: "10 NOV 2026", label: "Qualification Round", color: "bg-white" },
      {
        date: "15-16 NOV 2026",
        label: "Main Event",
        color: "bg-neo-pink",
        highlight: true,
      },
      {
        date: "17 NOV 2026",
        label: "Grand Final",
        color: "bg-neo-pink",
        highlight: true,
      },
    ],
    accentBg: "bg-neo-pink",
    tagBg: "bg-neo-blue",
  },
  badminton: {
    category: "BADMINTON CUP",
    categoryBg: "bg-neo-green",
    icon: "sports_tennis",
    title: "BADMINTON TOURNAMENT",
    subtitle: "MAHASISWA",
    heroImg: "/img/Foto.webp",
    description:
      "Tunjukkan sportivitas dan ketangkasanmu di lapangan hijau dalam kompetisi ganda putra Milad IT Fest 2026.",
    daftarLink: "#",
    about: [
      "Kompetisi badminton ganda putra khusus mahasiswa aktif UIR.",
      "Sistem gugur dengan babak penyisihan dan knockout.",
      "Venue: GOR Badminton UIR, Pekanbaru.",
    ],
    rules: [
      { icon: "group", text: "Format Ganda Putra. Daftar bersama partner." },
      { icon: "school", text: "Eligibilitas: Mahasiswa aktif UIR." },
      {
        icon: "emoji_events",
        text: "Sikap sportivitas wajib dijaga sepanjang pertandingan.",
      },
      { icon: "schedule", text: "Jadwal pertandingan akan diumumkan H-3." },
    ],
    prizes: [
      { place: "1st Place", amount: "Rp 3.000.000", bg: "bg-neo-yellow" },
      { place: "2nd Place", amount: "Rp 2.000.000", bg: "bg-white" },
      { place: "3rd Place", amount: "Rp 1.000.000", bg: "bg-white" },
    ],
    timeline: [
      {
        date: "10 OCT 2026",
        label: "Registration Opens",
        color: "bg-neo-green",
        active: true,
      },
      { date: "01 NOV 2026", label: "Technical Meeting", color: "bg-white" },
      { date: "15 NOV 2026", label: "Penyisihan", color: "bg-white" },
      {
        date: "17 NOV 2026",
        label: "Semi-Final & Final",
        color: "bg-neo-pink",
        highlight: true,
      },
    ],
    accentBg: "bg-neo-green",
    tagBg: "bg-neo-yellow",
  },
  expo: {
    category: "EXHIBITION",
    categoryBg: "bg-neo-yellow",
    icon: "rocket_launch",
    title: "IT EXPO",
    subtitle: "UMUM",
    heroImg: "/img/Foto.webp",
    description:
      "Pameran karya inovasi mahasiswa dan startup teknologi. Lihat langsung proyek masa depan di Milad IT Fest 2026.",
    daftarLink: "#", // TODO: ganti dengan link form pendaftaran IT Expo
    about: [
      "Pameran produk IoT, Web, dan Mobile Apps dari mahasiswa dan startup.",
      "Terbuka untuk umum, gratis tanpa tiket masuk.",
      "Kesempatan networking dengan pelaku industri teknologi.",
    ],
    rules: [
      {
        icon: "dashboard",
        text: "Booth disediakan oleh panitia. Ukuran 3x3 meter.",
      },
      {
        icon: "power",
        text: "Peserta harus membawa peralatan sendiri (laptop, dsb).",
      },
      { icon: "groups", text: "Tim minimal 2 orang per booth." },
      {
        icon: "thumb_up",
        text: "Dilarang membawa produk yang melanggar hukum.",
      },
    ],
    prizes: [
      { place: "Best Exhibit", amount: "Rp 2.000.000", bg: "bg-neo-yellow" },
      { place: "Most Innovative", amount: "Rp 1.500.000", bg: "bg-white" },
      { place: "People's Choice", amount: "Rp 1.000.000", bg: "bg-white" },
    ],
    timeline: [
      {
        date: "10 OCT 2026",
        label: "Registration Opens",
        color: "bg-neo-yellow",
        active: true,
      },
      { date: "01 NOV 2026", label: "Submission Proposal", color: "bg-white" },
      {
        date: "15-17 NOV 2026",
        label: "Exhibition Day",
        color: "bg-neo-pink",
        highlight: true,
      },
      {
        date: "17 NOV 2026",
        label: "Awarding Ceremony",
        color: "bg-neo-pink",
        highlight: true,
      },
    ],
    accentBg: "bg-neo-yellow",
    tagBg: "bg-neo-blue",
  },
  seminar: {
    category: "KNOWLEDGE HUB",
    categoryBg: "bg-neo-blue",
    icon: "groups",
    title: "NASIONAL SEMINAR",
    subtitle: "PELAJAR & UMUM",
    heroImg: "/img/Foto.webp",
    description:
      "Perluas wawasanmu bersama pakar industri teknologi dalam seminar bertema masa depan AI di Milad IT Fest 2026.",
    daftarLink: "#", // TODO: ganti dengan link form pendaftaran Seminar
    about: [
      "Seminar nasional dengan pembicara dari tech giant nasional dan internasional.",
      'Tema: "The Future of AI: Opportunities & Challenges for Indonesia".',
      "Sertifikat nasional disediakan untuk seluruh peserta.",
    ],
    rules: [
      {
        icon: "badge",
        text: "E-Sertifikat akan dikirim via email setelah acara.",
      },
      {
        icon: "event",
        text: "Kehadiran tepat waktu wajib. Pintu ditutup 15 menit sebelum acara.",
      },
      {
        icon: "quiz",
        text: "Q&A session di akhir seminar. Siapkan pertanyaan!",
      },
      { icon: "wifi", text: "Akses Wi-Fi gratis tersedia di venue." },
    ],
    prizes: [
      { place: "Best Question", amount: "Rp 500.000", bg: "bg-neo-yellow" },
      { place: "Sertifikat", amount: "Semua Peserta", bg: "bg-white" },
      { place: "Doorprize", amount: "Menarik Lainnya", bg: "bg-white" },
    ],
    timeline: [
      {
        date: "10 OCT 2026",
        label: "Registration Opens",
        color: "bg-neo-blue",
        active: true,
      },
      { date: "01 NOV 2026", label: "Speaker Announcement", color: "bg-white" },
      {
        date: "16 NOV 2026",
        label: "Seminar Day",
        color: "bg-neo-pink",
        highlight: true,
      },
      { date: "16 NOV 2026", label: "Networking Session", color: "bg-white" },
    ],
    accentBg: "bg-neo-blue",
    tagBg: "bg-neo-green",
  },
  typing: {
    category: "SKILL CHALLENGE",
    categoryBg: "bg-neo-pink",
    icon: "keyboard",
    title: "TYPING TEST",
    subtitle: "MAHASISWA",
    heroImg: "/img/Foto.webp",
    description:
      "Seberapa cepat jarimu menari di atas keyboard? Buktikan kecepatan dan akurasimu di Milad IT Fest 2026.",
    daftarLink: "#", // TODO: ganti dengan link form pendaftaran Typing Test
    about: [
      "Kompetisi ketikan (typing) dengan metrik WPM (Words Per Minute).",
      "Akurasi minimal 95% untuk lolos kualifikasi.",
      "Terbuka untuk mahasiswa aktif UIR.",
    ],
    rules: [
      { icon: "speed", text: "WPM (Words Per Minute) adalah metrik utama." },
      {
        icon: "check_circle",
        text: "Akurasi minimal 95% untuk lolos babak kualifikasi.",
      },
      { icon: "timer", text: "Durasi: 5 menit per sesi ketikan." },
      {
        icon: "devices",
        text: "Keyboard disediakan panitia (mechanical keyboard).",
      },
    ],
    prizes: [
      { place: "1st Place", amount: "Rp 1.500.000", bg: "bg-neo-yellow" },
      { place: "2nd Place", amount: "Rp 1.000.000", bg: "bg-white" },
      { place: "3rd Place", amount: "Rp 500.000", bg: "bg-white" },
    ],
    timeline: [
      {
        date: "10 OCT 2026",
        label: "Registration Opens",
        color: "bg-neo-pink",
        active: true,
      },
      { date: "01 NOV 2026", label: "Practice Session", color: "bg-white" },
      { date: "15 NOV 2026", label: "Qualification Round", color: "bg-white" },
      {
        date: "17 NOV 2026",
        label: "Grand Final",
        color: "bg-neo-pink",
        highlight: true,
      },
    ],
    accentBg: "bg-neo-pink",
    tagBg: "bg-neo-yellow",
  },
};

export default function EventDetail() {
  const { eventId } = useParams();
  const event = eventsData[eventId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [eventId]);

  if (!event) {
    return (
      <section className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-black uppercase mb-4 dark:text-white">
            404
          </h1>
          <p className="text-xl font-bold mb-8 dark:text-[#e0e0e0]">
            Event tidak ditemukan.
          </p>
          <Link
            to="/"
            className="bg-neo-yellow text-black px-8 py-4 font-black neo-border neo-shadow uppercase inline-block"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 px-4 md:px-6 max-w-6xl mx-auto w-full relative">
      {/* Floating Decorations */}
      <div className="absolute top-24 right-8 w-16 h-16 bg-neo-yellow neo-border neo-shadow rotate-12 animate-bounce-slow animate-neo-drift hidden lg:block"></div>
      <div className="absolute top-48 left-4 w-10 h-10 bg-neo-pink rounded-full neo-border neo-shadow-sm -rotate-12 animate-neo-swing hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-neo-blue neo-border neo-shadow-sm rotate-45 animate-spin-slow hidden lg:block"></div>
      <div className="absolute top-60 right-24 w-6 h-6 bg-neo-green neo-border rotate-45 hidden lg:block animate-bounce-slow"></div>
      <div className="absolute bottom-48 left-12 w-8 h-8 bg-black neo-border -rotate-12 hidden lg:block animate-neo-jitter"></div>

      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-8 text-black dark:text-white font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-3 py-1 transition-colors neo-border dark:border-white font-mono text-sm uppercase neo-shadow-hover animate-pop-up"
      >
        <span className="material-symbols-outlined text-[18px]">
          arrow_back
        </span>
        BACK TO LANDING PAGE
      </Link>

      {/* Hero Banner */}
      <div className="relative overflow-hidden neo-border neo-shadow bg-black mb-12 animate-pop-up">
        <img
          alt={event.title}
          className="w-full h-[300px] md:h-[500px] object-cover scale-110 brightness-75 contrast-110 transition-transform duration-300 hover:scale-125"
          src={event.heroImg}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <div
            className={`inline-block px-4 py-1 mb-6 border-2 border-black font-black text-sm uppercase ${event.tagBg} text-black neo-shadow-sm transform -rotate-1 animate-pop-up`}
          >
            {event.subtitle}
          </div>
          <h1
            className="text-4xl md:text-7xl lg:text-8xl text-white mb-6 uppercase font-black drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] leading-none animate-pop-up"
            style={{ animationDelay: "0.2s" }}
          >
            {event.title}
          </h1>
          <p className="text-neo-yellow max-w-3xl font-bold bg-black inline-block px-6 py-3 neo-border neo-shadow-sm text-sm md:text-lg animate-pop-up">
            {event.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* About Section */}
        <ScrollReveal
          animation="animate-pop-up"
          className="md:col-span-2 md:col-start-1 md:row-start-1"
        >
          <div className="h-full bg-white dark:bg-[#16213e] p-8 neo-border dark:border-white neo-shadow neo-tilt transition-colors">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 uppercase border-b-4 border-black dark:border-white pb-4">
              <span className="material-symbols-outlined text-[36px] text-neo-blue animate-neo-swing">
                info
              </span>
              TENTANG ACARA
            </h2>
            <ul className="space-y-4">
              {event.about.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-[#f0f0f0] dark:bg-[#0f3460] p-4 neo-border dark:border-white neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform group"
                >
                  <span className="material-symbols-outlined text-neo-pink text-2xl mt-1 group-hover:animate-neo-swing">
                    check_circle
                  </span>
                  <p className="font-bold text-lg dark:text-[#e0e0e0]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Rules Section */}
        <ScrollReveal
          animation="animate-pop-up"
          delay={0.15}
          className="md:col-span-2 md:col-start-1 md:row-start-2"
        >
          <div
            className={`h-full ${event.accentBg} p-8 neo-border neo-shadow neo-tilt`}
          >
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 uppercase border-b-4 border-black dark:border-white pb-4">
              <span className="material-symbols-outlined text-[36px] animate-neo-jitter">
                rule
              </span>
              RULES &amp; REQUIREMENTS
            </h2>
            <ul className="space-y-4">
              {event.rules.map((rule, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-white dark:bg-[#0f3460] p-4 neo-border dark:border-white neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform group"
                >
                  <span className="material-symbols-outlined text-black dark:text-white text-2xl group-hover:animate-neo-swing">
                    {rule.icon}
                  </span>
                  <p className="font-bold text-lg dark:text-[#e0e0e0]">
                    {rule.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Register Box */}
        <ScrollReveal
          animation="animate-pop-up"
          delay={0.1}
          className="md:col-start-3 md:row-start-1"
        >
          <div className="h-full bg-white dark:bg-[#16213e] p-8 neo-border dark:border-white neo-shadow text-center transition-colors flex flex-col justify-center">
            <div className="inline-block px-4 py-2 bg-neo-pink neo-border dark:border-white font-black mb-4 uppercase transform rotate-2 text-sm animate-neo-swing">
              Siap untuk ikut?
            </div>
            <p className="font-bold mb-6 bg-neo-yellow px-2 py-1 inline-block neo-border dark:border-white text-sm dark:text-black">
              Pendaftaran ditutup 14 hari lagi.
            </p>
            <a
              href={event.daftarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-neo-blue text-black font-black py-4 uppercase neo-border neo-shadow-sm transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-none active:translate-x-2 active:-translate-y-2 active:shadow-none text-lg"
            >
              DAFTAR SEKARANG
            </a>
          </div>
        </ScrollReveal>

        {/* Prize Pool */}
        <ScrollReveal
          animation="animate-pop-up"
          delay={0.2}
          className="md:col-start-3 md:row-start-2"
        >
          <div className="h-full bg-white dark:bg-[#16213e] p-8 neo-border dark:border-white neo-shadow neo-tilt transition-colors flex flex-col">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 uppercase border-b-4 border-black dark:border-white pb-4">
              <span className="material-symbols-outlined text-[28px] text-neo-orange animate-neo-swing">
                emoji_events
              </span>
              PRIZE POOL
            </h3>
            <div className="space-y-4 flex-1 flex flex-col justify-evenly">
              {event.prizes.map((prize, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center ${prize.bg} p-4 neo-border neo-shadow-sm ${i === 0 ? "transform -rotate-1 animate-neo-squish" : ""} hover:translate-x-1 hover:-translate-y-1 transition-transform`}
                >
                  <span className="text-lg font-black uppercase">
                    {prize.place}
                  </span>
                  <span className="text-lg font-black">{prize.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Timeline - Full Width */}
      <ScrollReveal animation="animate-pop-up" delay={0.25}>
        <div className="mt-8 bg-white dark:bg-[#16213e] p-6 md:p-8 neo-border dark:border-white neo-shadow relative transition-colors">
          <h3 className="text-2xl font-black mb-8 uppercase border-b-4 border-black dark:border-white pb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-[28px] text-neo-pink animate-neo-swing">
              timeline
            </span>
            TIMELINE ACARA
          </h3>
          <div className="relative">
            <div className="hidden md:block absolute left-8 right-8 top-6 h-1 bg-black"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {event.timeline.map((item, i) => (
                <div key={i} className="group">
                  <div
                    className={`w-12 h-12 ${item.color} neo-border mx-auto flex-shrink-0 flex items-center justify-center mb-4 z-10 neo-shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                  >
                    {item.active && (
                      <div className="w-3 h-3 bg-black animate-neo-jitter"></div>
                    )}
                    {item.highlight && (
                      <span className="material-symbols-outlined text-xl animate-neo-swing">
                        star
                      </span>
                    )}
                  </div>
                  <div className="bg-[#f0f0f0] dark:bg-[#0f3460] p-4 neo-border dark:border-white text-center hover:-translate-y-1 transition-transform neo-shadow-sm h-full flex flex-col justify-center">
                    <div
                      className={`text-xs mb-2 font-black uppercase tracking-widest self-start inline-block px-2 ${item.highlight ? "bg-neo-pink text-white animate-neo-jitter" : item.active ? "bg-neo-yellow animate-neo-jitter" : ""}`}
                    >
                      {item.date}
                    </div>
                    <div className="font-black text-sm uppercase dark:text-white">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Decorative Strip */}
      <div className="mt-16 flex justify-center gap-4">
        <div className="w-8 h-8 bg-neo-yellow neo-border rotate-12 animate-bounce-slow animate-neo-jitter"></div>
        <div className="w-8 h-8 bg-neo-pink rounded-full neo-border animate-wiggle"></div>
        <div className="w-8 h-8 bg-neo-blue neo-border -rotate-12 animate-spin-slow"></div>
        <div className="w-8 h-8 bg-neo-green neo-border rotate-45 animate-bounce-slow"></div>
        <div className="w-8 h-8 bg-neo-orange rounded-full neo-border animate-wiggle"></div>
        <div className="w-8 h-8 bg-black neo-border rotate-[30deg] animate-neo-swing"></div>
      </div>
    </section>
  );
}
