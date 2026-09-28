export const CHATBOT_PROFILE = {
  name: 'MIFA',
  title: 'ASISTEN MILAD IT FEST',
  subtitle: 'ASISTEN RESMI MILAD IT FEST UIR 2026',
  status: 'ONLINE',
  greeting: {
    intro: 'Halo Sobat IT! Aku MIFA, asisten resmi Milad IT Fest 2026 dari Teknik Informatika Universitas Islam Riau.',
    outro: 'Klik salah satu topik pertanyaan di bawah untuk melihat jawaban resminya secara instan!',
  },
  footerNote: 'Mode Interaktif Pertanyaan Terarah',
  contact: {
    whatsapp: 'https://wa.me/6281374591558',
    whatsappLabel: 'Hubungi Panitia WhatsApp',
  },
};

export const chatFaqs = [
  {
    id: 'tentang',
    icon: 'lightbulb',
    label: 'Apa itu Milad IT Fest?',
    badge: 'TENTANG ACARA',
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
    icon: 'event',
    label: 'Kapan dan di mana acaranya?',
    badge: 'WAKTU & VENUE',
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
          '1 September 2026 — Pembukaan pendaftaran perdana (Seminar Nasional & IT Expo), disusul cabang lomba lainnya sejak Oktober 2026',
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
    icon: 'emoji_events',
    label: 'Apa saja cabang lombanya?',
    badge: 'KOMPETISI',
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
    icon: 'edit_document',
    label: 'Bagaimana cara mendaftar?',
    badge: 'PENDAFTARAN',
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
    id: 'deadline',
    icon: 'schedule',
    label: 'Sampai kapan pendaftaran ditutup?',
    badge: 'DEADLINE PENDAFTARAN',
    blocks: [
      { type: 'p', text: 'Tenggat pendaftaran tiap cabang berbeda-beda:' },
      {
        type: 'ul',
        items: [
          'Seminar Nasional (tiket): 1 September – 10 Oktober 2026',
          'IT Expo (booth): 15 September – 5 Oktober 2026',
          'Hackathon: Gelombang 1 10–25 Oktober, Gelombang 2 26 Oktober – 8 November 2026',
          'E-Sport Mobile Legends: Gelombang 1 1–25 Oktober, Gelombang 2 26 Oktober – 16 November 2026 (kuota 32 tim)',
          'Badminton: 1 Oktober – 8 November 2026',
          'Typing Test: 10 Oktober – 8 November 2026',
        ],
      },
      {
        type: 'p',
        text: 'Gelombang 1 (Early Bird) kuotanya terbatas — daftar sebelum kehabisan!',
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
    icon: 'group',
    label: 'Siapa saja yang boleh ikut?',
    badge: 'PESERTA',
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
    icon: 'handshake',
    label: 'Mau jadi sponsor / hubungi panitia?',
    badge: 'KERJASAMA',
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
  {
    id: 'hadiah',
    icon: 'workspace_premium',
    label: 'Apa saja hadiah & fasilitasnya?',
    badge: 'HADIAH & FASILITAS',
    blocks: [
      {
        type: 'p',
        text: 'Setiap cabang lomba Milad IT Fest 2026 berkesempatan mendapatkan hadiah jutaan rupiah.',
      },
      {
        type: 'ul',
        items: [
          'E-Certificate resmi untuk semua peserta',
          'Trophy / Medali untuk para juara',
          'Merchandise event',
          'Seminar Nasional: E-Sertifikat Nasional + Snack Box + Doorprize',
          'IT Expo: predikat Best Exhibit (Karya Favorit)',
        ],
      },
      {
        type: 'p',
        text: 'Fasilitas lengkap tiap cabang bisa dilihat di halaman detail masing-masing acara.',
      },
      {
        type: 'link',
        label: 'Lihat Detail Acara',
        href: '/#pendaftaran',
      },
    ],
  },
  {
    id: 'biaya',
    icon: 'payments',
    label: 'Apakah ada biaya / tiket masuk?',
    badge: 'BIAYA & TIKET',
    blocks: [
      {
        type: 'ul',
        items: [
          'IT Expo: GRATIS, terbuka untuk umum tanpa tiket masuk',
          'Seminar Nasional: berbayar, tersedia tiket presale & tiket reguler',
          'Cabang lomba lainnya: cek form pendaftaran resmi tiap cabang',
          'Wi-Fi gratis tersedia di venue Seminar Nasional',
        ],
      },
      {
        type: 'p',
        text: 'Info biaya resmi tiap cabang diumumkan lewat kanal Instagram panitia.',
      },
      {
        type: 'link',
        label: 'Instagram @miladituir',
        href: 'https://www.instagram.com/miladituir',
        external: true,
      },
    ],
  },
  {
    id: 'ketentuan',
    icon: 'rule',
    label: 'Apa ketentuan penting tiap lomba?',
    badge: 'KETENTUAN LOMBA',
    blocks: [
      {
        type: 'ul',
        items: [
          'Hackathon: tim 2–4 orang, kode ditulis saat event berlangsung, submit project + demo video',
          'E-Sport Mobile Legends: tim 5 pemain + 1 cadangan, Single Elimination Best of 3',
          'Badminton: ganda putra khusus mahasiswa aktif UIR, jadwal diumumkan H-3',
          'IT Expo: booth 3x3 meter disediakan panitia, tim minimal 2 orang, bawa peralatan sendiri',
          'Typing Test: metrik WPM, akurasi minimal 95%, durasi 5 menit per sesi',
          'Seminar Nasional: pintu ditutup 15 menit sebelum acara dimulai',
        ],
      },
      {
        type: 'link',
        label: 'Lihat Semua Lomba',
        href: '/#pendaftaran',
      },
    ],
  },
  {
    id: 'kontak',
    icon: 'support_agent',
    label: 'Bagaimana cara hubungi panitia?',
    badge: 'KONTAK PANITIA',
    blocks: [
      {
        type: 'p',
        text: 'Tim panitia siap membantu lewat kanal resmi berikut:',
      },
      {
        type: 'kv',
        items: [
          { label: 'Email Humas', value: 'miladitfestuir@gmail.com' },
          { label: 'Instagram', value: '@miladituir & @technofestuir' },
          { label: 'Instagram HIMATIF', value: '@himatifuir_' },
        ],
      },
      {
        type: 'link',
        label: 'Chat Panitia via WhatsApp',
        href: 'https://wa.me/6281374591558',
        external: true,
      },
    ],
  },
  {
    id: 'gallery',
    icon: 'photo_library',
    label: 'Di mana lihat dokumentasi acara?',
    badge: 'DOKUMENTASI',
    blocks: [
      {
        type: 'p',
        text: 'Kilas balik keseruan momen Milad IT Fest tersedia di galeri resmi — 14 foto dokumentasi acara sebelumnya.',
      },
      {
        type: 'link',
        label: 'Buka Galeri Dokumentasi',
        href: '/#gallery',
      },
    ],
  },
];
