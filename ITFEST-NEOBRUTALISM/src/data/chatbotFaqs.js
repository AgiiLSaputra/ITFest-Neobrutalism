export const CHATBOT_PROFILE = {
  name: 'MIFA',
  title: 'ASISTEN MILAD IT FEST',
  subtitle: 'ASISTEN RESMI MILAD IT FEST UIR 2026',
  status: 'ONLINE',
  greeting: {
    intro: 'Halo Sobat IT! Aku MIFA, asisten resmi Milad IT Fest 2026 dari Teknik Informatika Universitas Islam Riau.',
    outro: 'Klik salah satu topik pertanyaan di bawah untuk jawaban cepat, atau ketik pertanyaanmu sendiri. Aku siap bantu!',
  },
  fallback:
    'Hmm, pertanyaan itu belum aku kuasai. Coba klik salah satu topik di bawah, atau langsung hubungi panitia lewat WhatsApp ya!',
  footerNote: 'Mode Interaktif Pertanyaan Terarah • Bebas Ketik Manual',
  contact: {
    whatsapp: 'https://wa.link/mea7wh',
    whatsappLabel: 'Hubungi Panitia WhatsApp',
  },
};

export const chatFaqs = [
  {
    id: 'tentang',
    icon: '💡',
    label: 'Apa itu Milad IT Fest?',
    badge: 'TENTANG ACARA',
    keywords: ['tentang', 'apa itu', 'milad', 'it fest', 'technofest', 'event', 'acara', 'keterangan'],
    blocks: [
      {
        type: 'p',
        text: 'MILAD IT FEST 2026 adalah perayaan tahunan terbesar yang diselenggarakan oleh Himpunan Mahasiswa Teknik Informatika (HIMATIF) Universitas Islam Riau.',
      },
      {
        type: 'p',
        text: 'Acara ini memperingati ulang tahun ke-19 Program Studi Teknik Informatika UIR dan digabung dengan Technofest UIR Vol. 2, menghadirkan kompetisi teknologi, pameran inovasi, e-sport, dan seminar nasional bertaraf tinggi.',
      },
      {
        type: 'ul',
        items: [
          'Kompetisi teknologi berskala nasional',
          'Pameran karya & inovasi (IT Expo)',
          'Turnamen e-sport',
          'Seminar nasional bertema masa depan AI',
        ],
      },
    ],
  },
  {
    id: 'jadwal',
    icon: '📅',
    label: 'Kapan dan di mana acaranya?',
    badge: 'WAKTU & VENUE',
    keywords: ['jadwal', 'kapan', 'dimana', 'di mana', 'tanggal', 'lokasi', 'tempat', 'venue', 'waktu', 'desember'],
    blocks: [
      {
        type: 'kv',
        items: [
          { label: 'Tanggal Puncak Acara', value: '1 – 2 Desember 2026' },
          { label: 'Lokasi Utama', value: 'Kampus UIR, Jl. Kaharuddin Nasution No.113, Simpang Tiga, Pekanbaru, Riau' },
        ],
      },
      { type: 'p', text: 'Rangkaian acara:' },
      {
        type: 'ul',
        items: [
          '1 Oktober 2026 — Pembukaan pendaftaran seluruh cabang lomba',
          '14 – 15 November 2026 — Badminton (Gor Badminton, Simpang Tiga)',
          '21 November 2026 — Final Lomba UI/UX Design',
          '21 – 22 November 2026 — Mobile Legends (Selasar Coffee)',
          '28 – 29 November 2026 — Hackathon (Aula Gedung A, Fakultas Teknik UIR)',
          '1 Desember 2026 — Pembukaan pameran (Indoor Gor Volly UIR)',
          '2 Desember 2026 — Seminar Nasional & Puncak Acara',
        ],
      },
    ],
  },
  {
    id: 'cabang',
    icon: '🏆',
    label: 'Apa saja cabang lombanya?',
    badge: 'KOMPETISI',
    keywords: ['cabang', 'lomba', 'kompetisi', 'event', 'perlombaan', 'daftar acara', 'ada apa'],
    blocks: [
      { type: 'p', text: 'Enam cabang kegiatan yang bisa kamu ikuti:' },
      {
        type: 'ul',
        items: [
          'Hackathon — SMA/SMK & Mahasiswa',
          'E-Sport Tournament (Mobile Legends) — Umum',
          'Badminton Tournament Ganda Putra — Mahasiswa',
          'IT Expo — Umum',
          'Nasional Seminar — Pelajar & Umum',
          'Typing Test — Mahasiswa',
        ],
      },
      { type: 'p', text: 'Buka section Pendaftaran untuk detail hadiah, ketentuan, dan timeline tiap cabang.' },
    ],
  },
  {
    id: 'daftar',
    icon: '📝',
    label: 'Bagaimana cara mendaftar?',
    badge: 'PENDAFTARAN',
    keywords: ['daftar', 'mendaftar', 'pendaftaran', 'registrasi', 'join', 'ikut', 'form', 'gimana cara'],
    blocks: [
      {
        type: 'ol',
        items: [
          'Pilih cabang kegiatan di section Pendaftaran pada halaman utama.',
          'Klik tombol DAFTAR SEKARANG dan isi form pendaftaran.',
          'Klik LIHAT DETAIL ACARA untuk melihat timeline, kuota, dan ketentuan tiap cabang.',
          'Pendaftaran seluruh cabang dibuka serentak sejak 1 Oktober 2026.',
        ],
      },
      {
        type: 'link',
        label: 'Ke Section Pendaftaran',
        href: '/#pendaftaran',
      },
    ],
  },
  {
    id: 'peserta',
    icon: '👥',
    label: 'Siapa saja yang boleh ikut?',
    badge: 'PESERTA',
    keywords: ['peserta', 'siapa', 'boleh ikut', 'pelajar', 'mahasiswa', 'umum', 'sma', 'smk', 'eligibilitas'],
    blocks: [
      { type: 'p', text: 'Setiap cabang punya kelas pesertanya sendiri:' },
      {
        type: 'ul',
        items: [
          'Hackathon — SMA/SMK & Mahasiswa',
          'E-Sport Tournament — Umum',
          'Badminton — Mahasiswa',
          'IT Expo — Umum (umum/pelajar/mahasiswa untuk pengunjung)',
          'Nasional Seminar — Pelajar & Umum',
          'Typing Test — Mahasiswa',
        ],
      },
      { type: 'p', text: 'Cek label kelas peserta pada tiap kartu acara sebelum mendaftar.' },
    ],
  },
  {
    id: 'sponsor',
    icon: '🤝',
    label: 'Mau jadi sponsor / hubungi panitia?',
    badge: 'KERJASAMA',
    keywords: ['sponsor', 'sponsorship', 'kerjasama', 'partner', 'kontak', 'panitia', 'hubungi', 'wa', 'whatsapp', 'email'],
    blocks: [
      {
        type: 'p',
        text: 'Dukung inovasi teknologi generasi muda — bergabung sebagai sponsor Milad IT Fest 2026. Cek card Open Sponsorship di section Sponsor untuk peluang kerjasama.',
      },
      {
        type: 'ul',
        items: [
          'Instagram: @miladituir',
          'Instagram: @technofestuir',
          'Email Humas: miladitfestuir@gmail.com',
        ],
      },
      {
        type: 'link',
        label: 'Hubungi Panitia via WhatsApp',
        href: 'https://wa.link/mea7wh',
        external: true,
      },
    ],
  },
];
