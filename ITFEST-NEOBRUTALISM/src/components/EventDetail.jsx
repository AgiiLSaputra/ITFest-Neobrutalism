import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import EventFaq from "./EventFaq";
import { buildEventFaq } from "../data/eventFaqs";

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
    title: "HACKATHON WEB INNOVATION",
    subtitle: "SMA/SMK & MAHASISWA",
    heroImg: "/img/hackathon.webp",
    description:
      "Kompetisi pengembangan solusi digital berbasis Web Application dengan tema \"Technology for Sustainable Impact\". Peserta identifikasi permasalahan nyata, rancang solusi inovatif, dan implementasikan sesuai subtema SDG di MILAD IT FEST 19.",
    daftarLink: "https://forms.gle/uPtpzmGkGBmW9fQs7",
    daftarBg: "bg-neo-pink",
    guidebookLink:
      "https://docs.google.com/document/d/1QPjSx7ey2PD5qZfO4pi7Hem0E1LhIrlJaZDSQ2X3OTA/edit?tab=t.0#heading=h.irgbtqn1yi2f",
    about: [
      "Tema \"Technology for Sustainable Impact\" dengan subtema SDG: Kesehatan, Pendidikan, Pekerjaan & Ekonomi, serta Kota & Komunitas Berkelanjutan.",
      "Tim 2–4 orang dari SMA/SMK sederajat atau mahasiswa aktif D3/D4/S1 se-Indonesia. Biaya Rp160.000/tim (Batch 1) dan Rp180.000/tim (Batch 2).",
      "Tahapan: proposal → screening → finalis → Hackathon Day luring di Aula Gedung A Fakultas Teknik UIR, dilanjutkan Pitching & Demo.",
    ],
    rules: [
      { icon: "group", text: "Tim terdiri dari 2–4 orang dengan satu ketua tim. Satu peserta hanya boleh tergabung dalam satu tim." },
      {
        icon: "school",
        text: "Terbuka untuk siswa SMA/SMK sederajat dan mahasiswa aktif D3/D4/S1 di seluruh Indonesia.",
      },
      {
        icon: "description",
        text: "Proposal maksimal 10 halaman, format PDF (A4, Times New Roman 12pt, spasi 1.5), batas pengumpulan 19 November 2026.",
      },
      {
        icon: "code",
        text: "Blueprint boleh disiapkan sebelumnya, tetapi pengembangan Web Application hanya dimulai pada Hackathon Day.",
      },
      {
        icon: "upload",
        text: "Wajib menggunakan repository GitHub, mengundang akun panitia, serta commit dan push berkala untuk verifikasi.",
      },
    ],
    prizes: [
      { icon: "workspace_premium", place: "E-Certificate Resmi", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "emoji_events", place: "Trophy / Medali", amount: "Untuk Juara", bg: "bg-cream" },
      { icon: "redeem", place: "Merchandise Event", amount: "", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "10 – 25 Oktober 2026", endDateIso: "2026-10-25T23:59:59+07:00", title: "Pendaftaran Batch 1", description: "Pendaftaran daring melalui formulir resmi panitia." },
      { dateFormatted: "26 Oktober – 19 November 2026", endDateIso: "2026-11-19T23:59:59+07:00", title: "Pendaftaran Batch 2", description: "Pendaftaran daring melalui formulir resmi panitia." },
      { dateFormatted: "19 November 2026", endDateIso: "2026-11-19T23:59:59+07:00", title: "Batas Pengumpulan Proposal", description: "Batas akhir pengumpulan proposal ide solusi sesuai subtema yang dipilih." },
      { dateFormatted: "20 – 27 November 2026", endDateIso: "2026-11-27T23:59:59+07:00", title: "Screening Proposal", description: "Seleksi proposal berdasarkan kriteria yang telah ditentukan." },
      { dateFormatted: "28 November 2026", endDateIso: "2026-11-28T23:59:59+07:00", title: "Pengumuman Finalis", description: "Pengumuman tim yang lolos sebagai finalis." },
      { dateFormatted: "29 November 2026", endDateIso: "2026-11-29T23:59:59+07:00", title: "Technical Meeting", description: "Penjelasan teknis pelaksanaan kompetisi kepada finalis." },
      { dateFormatted: "5 Desember 2026", endDateIso: "2026-12-05T23:59:59+07:00", title: "Hackathon Day", description: "Pengembangan Web Application secara luring di UIR." },
      { dateFormatted: "6 Desember 2026", endDateIso: "2026-12-06T23:59:59+07:00", title: "Pitching & Demo", description: "Presentasi dan demonstrasi produk di hadapan dewan juri." },
      { dateFormatted: "10 Desember 2026", endDateIso: "2026-12-10T23:59:59+07:00", title: "Seminar Nasional & Awarding", description: "Seminar Nasional serta pengumuman dan penghargaan pemenang." },
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
    mascotImg: "/img/MaskotML.png",
    description:
      "Kuasai arena kompetitif Mobile Legends dan buktikan timmu adalah yang terbaik di MILAD IT FEST 19.",
    daftarLink: "https://forms.gle/HazoUVQp7GruBPg37",
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
    mascotImg: "/img/MaskotBadminton.png",
    description:
      "Tunjukkan sportivitas dan ketangkasanmu di lapangan hijau dalam kompetisi ganda putra MILAD IT FEST 19.",
    daftarLink: "https://forms.gle/AdgaC2UcVuUhLQXe9",
    daftarBg: "bg-neo-blue",
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
      "Pameran karya inovasi mahasiswa dan startup teknologi. Lihat langsung proyek masa depan di MILAD IT FEST 19.",
    daftarLink: "#", // TODO: ganti dengan link form pendaftaran IT Expo
    comingSoon: true,
    comingSoonBg: "bg-neo-blue",
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
      "Perluas wawasanmu bersama pakar industri teknologi dalam seminar bertema masa depan AI di MILAD IT FEST 19.",
    daftarLink: "#", // TODO: ganti dengan link form pendaftaran Seminar
    comingSoon: true,
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
      { dateFormatted: "16 Oktober 2026", endDateIso: "2026-10-16T23:59:59+07:00", title: "Pelaksanaan Seminar Nasional & Closing Ceremony", description: "Sesi keynote speech, Q&A interaktif, doorprize, dan penutupan MILAD IT FEST 19." },
    ],
    accentBg: "bg-neo-blue",
    tagBg: "bg-neo-green",
    guestStar: {
      img: "/img/SiluetOrang.png",
      name: "Segera Diumumkan",
      role: "Keynote Speaker",
    },
    agendaInfo: {
      date: "16 Oktober 2026",
      time: "Segera Diumumkan",
      location:
        "Kampus UIR, Jl. Kaharuddin Nasution No.113, Simpang Tiga, Pekanbaru, Riau",
    },
    susunanAcara: [
      {
        title: "Registrasi Peserta",
        description: "Check-in peserta dan verifikasi tiket.",
      },
      {
        title: "Pembukaan",
        description: "Sambutan panitia dan pembukaan MILAD IT FEST 19.",
      },
      {
        title: "Keynote Speech",
        description:
          "Pidato utama bertema \"The Future of AI: Opportunities & Challenges for Indonesia\".",
      },
      {
        title: "Sesi Tanya Jawab",
        description: "Q&A interaktif bersama pembicara.",
      },
      {
        title: "Doorprize",
        description: "Pengundian hadiah untuk peserta yang hadir.",
      },
      {
        title: "Penutupan",
        description: "Closing Ceremony MILAD IT FEST 19.",
      },
    ],
  },
  uiux: {
    category: "SKILL CHALLENGE",
    categoryBg: "bg-neo-pink",
    icon: "design_services",
    title: "UI/UX DESIGN",
    subtitle: "MAHASISWA",
    heroImg: "/img/UIUX.svg",
    mascotImg: "/img/MaskotUIUXDesign.png",
    description:
      "Rancang pengalaman pengguna yang intuitive dan estetis. Buktikan insting desain dan pemecahan masalahmu di MILAD IT FEST 19.",
    daftarLink: "https://forms.gle/AvBs1SFLNo3gt8iv7",
    guidebookLink:
      "https://docs.google.com/document/d/1HLm7LQ_JY-GLt-bcnKBU6nJ4wTheemUDgca4DOmvSjg/edit?tab=t.0",
    about: [
      "Kompetisi desain antarmuka berbasis studi kasus nyata: dari riset, wireframe, sampai high-fidelity prototype.",
      "Penilaian menekankan usability, estetika visual, dan kesesuaian solusi dengan kebutuhan pengguna.",
      "Terbuka untuk mahasiswa aktif UIR.",
    ],
    rules: [
      {
        icon: "design_services",
        text: "Karya berupa wireframe + high-fidelity mockup (Figma, Sketch, atau Adobe XD).",
      },
      { icon: "groups", text: "Dikerjakan secara individu atau tim maksimal 3 orang." },
      {
        icon: "search",
        text: "Sertakan user persona, user flow, dan hasil riset pengguna.",
      },
      { icon: "schedule", text: "Durasi 4 jam saat hari pelaksanaan, presentasi karya maksimal 5 menit." },
    ],
    prizes: [
      { icon: "workspace_premium", place: "E-Certificate Resmi", amount: "Semua Peserta", bg: "bg-neo-yellow" },
      { icon: "emoji_events", place: "Trophy / Medali", amount: "Untuk Juara", bg: "bg-cream" },
      { icon: "redeem", place: "Merchandise Event", amount: "", bg: "bg-cream" },
    ],
    timeline: [
      { dateFormatted: "10 Oktober – 8 November 2026", endDateIso: "2026-11-08T23:59:59+07:00", title: "Pendaftaran Peserta", description: "Pendaftaran dan verifikasi identitas mahasiswa aktif UIR." },
      { dateFormatted: "1 – 14 November 2026", endDateIso: "2026-11-14T23:59:59+07:00", title: "Brief & Workshop", description: "Pembahasan studi kasus dan workshop tools desain bersama mentor." },
      { dateFormatted: "15 November 2026", endDateIso: "2026-11-15T23:59:59+07:00", title: "Babak Penyisihan", description: "Pengumpulan karya desain sesuai brief secara online untuk lolos ke babak final." },
      { dateFormatted: "17 November 2026", endDateIso: "2026-11-17T23:59:59+07:00", title: "Grand Final", description: "Presentasi dan pitch karya di depan dewan juri MILAD IT FEST 19." },
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
          <h1 className="text-6xl font-black uppercase mb-4">
            404
          </h1>
          <p className="text-xl font-bold mb-8">
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
    <>
      {/* Maskot di posisi awal halaman (tidak fixed, ikut halaman saat scroll) */}
      {event.mascotImg && (
        <img
          src={event.mascotImg}
          alt=""
          aria-hidden="true"
           className={eventId === 'uiux'
             ? "absolute top-32 right-10 sm:top-28 sm:right-16 md:top-28 md:right-24 lg:top-28 lg:right-36 h-32 sm:h-44 md:h-60 lg:h-[48vh] w-auto max-w-[42vw] -z-10 opacity-90 pointer-events-none select-none object-contain drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] animate-neo-drift"
             : "absolute top-28 right-2 sm:top-24 sm:right-6 md:top-24 md:right-10 lg:top-24 lg:right-16 h-40 sm:h-56 md:h-72 lg:h-[60vh] w-auto max-w-[45vw] -z-10 opacity-90 pointer-events-none select-none object-contain drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] animate-neo-drift"}
        />
      )}
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
        className="inline-flex items-center gap-2 mb-8 text-black font-black hover:bg-black hover:text-white px-3 py-1 transition-colors neo-border font-mono text-sm uppercase neo-shadow-hover animate-pop-up"
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
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-black tracking-tighter uppercase leading-none">
            {event.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-bold">
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
          <div className="h-full bg-cream p-8 neo-border neo-shadow neo-tilt transition-colors">
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 uppercase border-b-4 border-black pb-4">
              <span className="material-symbols-outlined text-[36px] text-neo-blue animate-neo-swing">
                info
              </span>
              TENTANG ACARA
            </h2>
            <ul className="space-y-4">
              {event.about.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-cream p-4 neo-border neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform group"
                >
                  <span className="material-symbols-outlined text-neo-pink text-2xl mt-1 group-hover:animate-neo-swing">
                    check_circle
                  </span>
                  <p className="font-bold text-lg">
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
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3 uppercase border-b-4 border-black pb-4">
              <span className="material-symbols-outlined text-[36px] animate-neo-jitter">
                rule
              </span>
              RULES &amp; REQUIREMENTS
            </h2>
            <ul className="space-y-4">
              {event.rules.map((rule, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-cream p-4 neo-border neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform group"
                >
                  <span className="material-symbols-outlined text-black text-2xl group-hover:animate-neo-swing">
                    {rule.icon}
                  </span>
                  <p className="font-bold text-lg">
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
          <div className="h-full bg-cream p-8 neo-border neo-shadow text-center transition-colors flex flex-col justify-center">
            <div className="inline-block px-4 py-2 bg-neo-pink neo-border font-black mb-4 uppercase transform rotate-2 text-sm animate-neo-swing">
              Siap untuk ikut?
            </div>
            <p className="font-bold mb-6 bg-neo-yellow px-2 py-1 inline-block neo-border text-sm">
              {event.comingSoon
                ? "Pendaftaran segera dibuka."
                : "Pendaftaran ditutup 14 hari lagi."}
            </p>
            {event.comingSoon ? (
              <div
                className={`flex w-full items-center justify-center gap-3 ${event.comingSoonBg || "bg-neo-green"} text-black font-black py-4 uppercase neo-border neo-shadow-sm text-lg cursor-not-allowed`}
              >
                <span className="material-symbols-outlined text-[28px]">
                  hourglass_top
                </span>
                COMING SOON
              </div>
            ) : (
              <a
                href={event.daftarLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex w-full items-center justify-center gap-3 ${event.daftarBg || "bg-neo-pink"} text-black font-black py-4 uppercase neo-border neo-shadow-sm transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-none active:translate-x-2 active:-translate-y-2 active:shadow-none text-lg`}
              >
                <span className="material-symbols-outlined text-[28px]">
                  how_to_reg
                </span>
                DAFTAR SEKARANG
              </a>
            )}
            {event.guidebookLink && (
              <a
                href={event.guidebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-3 bg-neo-yellow text-black font-black py-4 uppercase neo-border neo-shadow-sm transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-none active:translate-x-2 active:-translate-y-2 active:shadow-none text-lg"
              >
                <span className="material-symbols-outlined text-[28px]">
                  menu_book
                </span>
                DOWNLOAD GUIDEBOOK
              </a>
            )}
          </div>
        </ScrollReveal>

        {/* Fasilitas Peserta (eks Prize Pool) */}
        <ScrollReveal
          animation="animate-pop-up"
          delay={0.2}
          className="md:col-start-3 md:row-start-2"
        >
          <div className="h-full bg-cream p-8 neo-border neo-shadow neo-tilt transition-colors flex flex-col">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 uppercase border-b-4 border-black pb-4">
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

      {/* Speaker + Agenda & Informasi */}
      {event.guestStar && event.agendaInfo && (
        <ScrollReveal animation="animate-pop-up" delay={0.22}>
          <div className="mt-8 bg-cream p-6 md:p-8 neo-border neo-shadow transition-colors flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Profil speaker - posisi tengah sebelah kiri */}
            <div className="flex flex-col items-center justify-center text-center md:w-1/3 shrink-0">
              <img
                src={event.guestStar.img}
                alt={event.guestStar.name}
                loading="lazy"
                decoding="async"
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover object-top neo-border neo-shadow-sm bg-neo-yellow mb-4"
              />
              <span className="inline-block px-3 py-1 bg-neo-pink neo-border text-xs font-black uppercase tracking-widest mb-2">
                {event.guestStar.role}
              </span>
              <h4 className="text-xl sm:text-2xl font-black uppercase">
                {event.guestStar.name}
              </h4>
            </div>
            {/* Agenda & Informasi - sebelah kanan, paling atas */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[28px] text-neo-blue animate-neo-swing">
                  event
                </span>
                AGENDA &amp; INFORMASI
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-cream p-4 neo-border neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-2xl text-neo-pink">
                    calendar_month
                  </span>
                  <div>
                    <span className="block text-xs font-black uppercase opacity-70">
                      Tanggal
                    </span>
                    <span className="block font-black text-lg">
                      {event.agendaInfo.date}
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-cream p-4 neo-border neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-2xl text-neo-blue">
                    schedule
                  </span>
                  <div>
                    <span className="block text-xs font-black uppercase opacity-70">
                      Waktu
                    </span>
                    <span className="block font-black text-lg">
                      {event.agendaInfo.time}
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-cream p-4 neo-border neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-2xl text-neo-orange">
                    location_on
                  </span>
                  <div>
                    <span className="block text-xs font-black uppercase opacity-70">
                      Lokasi
                    </span>
                    <span className="block font-black text-lg">
                      {event.agendaInfo.location}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Susunan Acara Seminar */}
      {event.susunanAcara && (
        <ScrollReveal animation="animate-pop-up" delay={0.24}>
          <div className="mt-8 bg-neo-pink p-6 md:p-8 neo-border neo-shadow transition-colors">
            <h3 className="text-2xl font-black mb-2 uppercase border-b-4 border-black pb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-[28px] text-neo-green animate-neo-swing">
                checklist
              </span>
              SUSUNAN ACARA SEMINAR
            </h3>
            <p className="text-sm sm:text-base font-bold mb-8 uppercase tracking-wide opacity-70">
              Rangkaian sesi {event.title}
            </p>
            <ol className="space-y-4">
              {event.susunanAcara.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-cream p-4 neo-border neo-shadow-sm hover:translate-x-1 hover:-translate-y-1 transition-transform group"
                >
                  <span className="w-9 h-9 shrink-0 rounded-full bg-neo-yellow neo-border neo-shadow-sm flex items-center justify-center font-black text-sm group-hover:animate-neo-swing">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-black uppercase">{item.title}</h4>
                    <p className="font-bold text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      )}

      {/* Timeline - Full Width */}
      <ScrollReveal animation="animate-pop-up" delay={0.25}>
        <div className="mt-8 bg-cream p-6 md:p-8 neo-border neo-shadow relative transition-colors">
          <h3 className="text-2xl font-black mb-2 uppercase border-b-4 border-black pb-4 flex items-center gap-3">
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
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-1 bg-black"></div>
            <div className="md:hidden absolute left-5 top-2 bottom-2 w-1 bg-black"></div>
            <div className="space-y-8 md:space-y-12">
              {event.timeline.map((item, i) => {
                const expired = isPastDate(item.endDateIso);
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className={`relative ${expired ? "grayscale opacity-70" : ""}`}>
                    {/* Badge nomor urut di garis */}
                    <div
                      className={`absolute left-5 md:left-1/2 -translate-x-1/2 top-1 z-10 w-9 h-9 rounded-full neo-border neo-shadow-sm flex items-center justify-center font-black text-sm ${
                        expired ? "bg-black text-white" : "bg-neo-yellow text-black"
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
                      <div className="bg-gray-main p-4 sm:p-5 neo-border neo-shadow-sm transition-transform hover:-translate-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className={`text-sm sm:text-base font-black uppercase ${expired ? "line-through" : ""}`}>
                            {item.title}
                          </h4>
                          <span className={`inline-flex items-center gap-1 shrink-0 text-[10px] sm:text-xs font-mono font-black px-2 py-0.5 neo-border ${expired ? "bg-cream" : "bg-neo-yellow text-black"}`}>
                            <span className="material-symbols-outlined text-sm">
                              {expired ? "schedule" : "calendar_month"}
                            </span>
                            {item.dateFormatted}
                            {expired && " (Selesai)"}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold leading-relaxed">
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

      {/* FAQ detail kegiatan - paling bawah, di atas footer */}
      <ScrollReveal animation="animate-pop-up" delay={0.3}>
        <EventFaq key={eventId} event={event} items={buildEventFaq(event)} />
      </ScrollReveal>
      </section>
    </>
  );
}
