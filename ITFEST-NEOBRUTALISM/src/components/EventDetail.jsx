import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

// Helper: cek apakah tanggal timeline sudah lewat (sama seperti lib/date.ts di Milad_IT_Fest)
const isPastDate = (iso) => {
  if (!iso) return false;
  return Date.now() > new Date(iso).getTime();
};

const eventsData = {
  hackathon: {
    category: "IT COMPETITION",
    categoryBg: "bg-neo-blue",
    icon: "code",
    title: "HACKATHON 2026",
    subtitle: "SMA/SMK & MAHASISWA",
    heroImg: "/img/hackathon.webp",
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
      { icon: "workspace_premium", place: "E-Certificate Resmi", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "emoji_events", place: "Trophy / Medali", amount: "Untuk Juara", bg: "bg-cream" },
      { icon: "redeem", place: "Merchandise Event", amount: "", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "10 – 25 Oktober 2026", endDateIso: "2026-10-25T23:59:59+07:00", title: "Pendaftaran Gelombang 1 (Early Bird)", description: "Pendaftaran dibuka dengan kuota tim terbatas." },
      { dateFormatted: "26 Oktober – 8 November 2026", endDateIso: "2026-11-08T23:59:59+07:00", title: "Pendaftaran Gelombang 2", description: "Pendaftaran reguler hingga seluruh kuota tim terpenuhi." },
      { dateFormatted: "14 November 2026", endDateIso: "2026-11-14T23:59:59+07:00", title: "Technical Meeting (Online)", description: "Penjelasan problem statement dan teknis pelaksanaan 48 jam." },
      { dateFormatted: "15 – 17 November 2026", endDateIso: "2026-11-17T23:59:59+07:00", title: "Hackathon Days & Winner Announcement", description: "Marathon coding 48 jam, demo produk, dan pengumuman pemenang." },
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
    heroImg: "/img/ESport.webp",
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
      { icon: "workspace_premium", place: "E-Certificate Resmi", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "emoji_events", place: "Trophy / Medali", amount: "Untuk Juara", bg: "bg-cream" },
      { icon: "redeem", place: "Merchandise Event", amount: "", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "1 – 25 Oktober 2026", endDateIso: "2026-10-25T23:59:59+07:00", title: "Pendaftaran Gelombang 1 (Early Bird)", description: "Pendaftaran dibuka dengan kuota terbatas 16 tim." },
      { dateFormatted: "26 Oktober – 16 November 2026", endDateIso: "2026-11-16T23:59:59+07:00", title: "Pendaftaran Gelombang 2", description: "Pendaftaran reguler hingga kuota 32 tim terpenuhi." },
      { dateFormatted: "18 November 2026", endDateIso: "2026-11-18T23:59:59+07:00", title: "Technical Meeting (Online)", description: "Pengundian bracket dan pembacaan rulebook pertandingan." },
      { dateFormatted: "21 – 22 November 2026", endDateIso: "2026-11-22T23:59:59+07:00", title: "Main Event & Grand Final", description: "Pertandingan babak knockout dan babak puncaknya di Stage Utama." },
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
    heroImg: "/img/Badminton.webp",
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
      { icon: "workspace_premium", place: "E-Certificate Resmi", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "emoji_events", place: "Medali Juara", amount: "Untuk Juara", bg: "bg-cream" },
      { icon: "redeem", place: "Merchandise Event", amount: "", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "1 Oktober – 8 November 2026", endDateIso: "2026-11-08T23:59:59+07:00", title: "Masa Pendaftaran Registrasi", description: "Pendaftaran peserta dan verifikasi berkas identitas." },
      { dateFormatted: "10 November 2026", endDateIso: "2026-11-10T23:59:59+07:00", title: "Technical Meeting", description: "Penjelasan peraturan pertandingan dan drawing lawan." },
      { dateFormatted: "14 – 15 November 2026", endDateIso: "2026-11-15T23:59:59+07:00", title: "Pertandingan Babak Penyisihan - Final", description: "Pelaksanaan pertandingan di Lapangan Indoor GSG UIR." },
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
    heroImg: "/img/ITEXPO.webp",
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
      { icon: "workspace_premium", place: "E-Certificate Resmi", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "thumb_up", place: "Best Exhibit", amount: "Karya Favorit", bg: "bg-cream" },
      { icon: "redeem", place: "Merchandise Event", amount: "", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "15 September – 5 Oktober 2026", endDateIso: "2026-10-05T23:59:59+07:00", title: "Pendaftaran Stand / Booth Karya", description: "Pendaftaran tim/karya mahasiswa yang ingin membuka booth expo." },
      { dateFormatted: "13 – 16 Oktober 2026", endDateIso: "2026-10-16T23:59:59+07:00", title: "Pelaksanaan Tech Innovation Expo", description: "Pameran berlangsung selama 4 hari penuh di Atrium Gedung Serbaguna UIR." },
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
      { icon: "workspace_premium", place: "E-Certificate Nasional", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "restaurant", place: "Snack Box", amount: "Semua Peserta", bg: "bg-cream" },
      { icon: "redeem", place: "Doorprize", amount: "Menarik Lainnya", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "1 September – 10 Oktober 2026", endDateIso: "2026-10-10T23:59:59+07:00", title: "Masa Registrasi Peserta", description: "Pembelian tiket presale & tiket reguler seminar nasional." },
      { dateFormatted: "16 Oktober 2026", endDateIso: "2026-10-16T23:59:59+07:00", title: "Pelaksanaan Seminar Nasional & Closing Ceremony", description: "Sesi keynote speech, Q&A interaktif, doorprize, dan penutupan Milad IT Fest 2026." },
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
    heroImg: "/img/TypingTest.webp",
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
      { icon: "workspace_premium", place: "E-Certificate Resmi", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "emoji_events", place: "Trophy / Medali", amount: "Untuk Juara", bg: "bg-cream" },
      { icon: "redeem", place: "Merchandise Event", amount: "", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "10 Oktober – 8 November 2026", endDateIso: "2026-11-08T23:59:59+07:00", title: "Pendaftaran Peserta", description: "Pendaftaran dan verifikasi identitas mahasiswa aktif UIR." },
      { dateFormatted: "1 – 14 November 2026", endDateIso: "2026-11-14T23:59:59+07:00", title: "Practice Session", description: "Sesi latihan bebas menggunakan platform typing yang sama dengan lomba." },
      { dateFormatted: "15 November 2026", endDateIso: "2026-11-15T23:59:59+07:00", title: "Qualification Round", description: "Babak kualifikasi online dengan akurasi minimal 95% untuk lolos." },
      { dateFormatted: "17 November 2026", endDateIso: "2026-11-17T23:59:59+07:00", title: "Grand Final", description: "Babak final di venue menggunakan mechanical keyboard panitia." },
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

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto py-2 mb-8 animate-pop-up">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div
            className={`px-4 py-1 border-2 border-black font-black text-sm uppercase ${event.tagBg} text-black neo-shadow-sm transform -rotate-1`}
          >
            {event.subtitle}
          </div>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
            {event.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-bold">
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
          <div className="h-full bg-cream dark:bg-[#16213e] p-8 neo-border dark:border-white neo-shadow neo-tilt transition-colors">
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
                  className="flex items-start gap-4 bg-cream dark:bg-[#0f3460] p-4 neo-border dark:border-white neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform group"
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
                  className="flex items-start gap-4 bg-cream dark:bg-[#0f3460] p-4 neo-border dark:border-white neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform group"
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
          <div className="h-full bg-cream dark:bg-[#16213e] p-8 neo-border dark:border-white neo-shadow text-center transition-colors flex flex-col justify-center">
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

        {/* Fasilitas Peserta (eks Prize Pool) */}
        <ScrollReveal
          animation="animate-pop-up"
          delay={0.2}
          className="md:col-start-3 md:row-start-2"
        >
          <div className="h-full bg-cream dark:bg-[#16213e] p-8 neo-border dark:border-white neo-shadow neo-tilt transition-colors flex flex-col">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 uppercase border-b-4 border-black dark:border-white pb-4">
              <span className="material-symbols-outlined text-[28px] text-neo-orange animate-neo-swing">
                emoji_events
              </span>
              FASILITAS PESERTA
            </h3>
            <div className="space-y-4 flex-1 flex flex-col justify-evenly">
              {event.prizes.map((prize, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 ${prize.bg} p-4 neo-border neo-shadow-sm ${i === 0 ? "transform -rotate-1 animate-neo-squish" : ""} hover:translate-x-1 hover:-translate-y-1 transition-transform`}
                >
                  <span className="material-symbols-outlined text-2xl flex-shrink-0">
                    {prize.icon}
                  </span>
                  <div>
                    <span className="block text-lg font-black uppercase leading-tight">
                      {prize.place}
                    </span>
                    {prize.amount && (
                      <span className="block text-xs font-bold opacity-70">
                        {prize.amount}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Timeline - Full Width */}
      <ScrollReveal animation="animate-pop-up" delay={0.25}>
        <div className="mt-8 bg-cream dark:bg-[#16213e] p-6 md:p-8 neo-border dark:border-white neo-shadow relative transition-colors">
          <h3 className="text-2xl font-black mb-2 uppercase border-b-4 border-black dark:border-white pb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-[28px] text-neo-pink animate-neo-swing">
              timeline
            </span>
            SCHEDULE &amp; AGENDA
          </h3>
          <p className="text-sm sm:text-base font-bold mb-8 uppercase tracking-wide opacity-70">
            Timeline Kegiatan {event.title}
          </p>
          {/* Timeline vertikal zig-zag: mobile garis di kiri, desktop garis di tengah.
              Item yang tanggalnya sudah lewat otomatis abu-abu + tanda "(Selesai)". */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-1 bg-black dark:bg-white"></div>
            <div className="md:hidden absolute left-5 top-2 bottom-2 w-1 bg-black dark:bg-white"></div>
            <div className="space-y-8 md:space-y-12">
              {event.timeline.map((item, i) => {
                const expired = isPastDate(item.endDateIso);
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className={`relative ${expired ? "grayscale opacity-70" : ""}`}>
                    {/* Badge nomor urut di garis */}
                    <div
                      className={`absolute left-5 md:left-1/2 -translate-x-1/2 top-1 z-10 w-9 h-9 rounded-full neo-border dark:border-white neo-shadow-sm flex items-center justify-center font-black text-sm ${
                        expired ? "bg-black dark:bg-white text-white dark:text-black" : "bg-neo-yellow text-black"
                      }`}
                    >
                      {expired ? (
                        <span className="material-symbols-outlined text-base">
                          check_circle
                        </span>
                      ) : (
                        i + 1
                      )}
                    </div>
                    {/* Card bergantian kiri/kanan di desktop */}
                    <div className={`w-full pl-14 md:pl-0 md:w-[calc(50%-3rem)] ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
                      <div className="bg-gray-main p-4 sm:p-5 neo-border dark:border-white neo-shadow-sm transition-transform hover:-translate-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className={`text-sm sm:text-base font-black uppercase ${expired ? "line-through dark:text-[#e0e0e0]" : "dark:text-white"}`}>
                            {item.title}
                          </h4>
                          <span className={`inline-flex items-center gap-1 shrink-0 text-[10px] sm:text-xs font-mono font-black px-2 py-0.5 neo-border dark:border-white ${expired ? "bg-cream dark:text-white" : "bg-neo-yellow text-black"}`}>
                            <span className="material-symbols-outlined text-sm">
                              {expired ? "schedule" : "calendar_month"}
                            </span>
                            {item.dateFormatted}
                            {expired && " (Selesai)"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold leading-relaxed dark:text-[#e0e0e0]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
