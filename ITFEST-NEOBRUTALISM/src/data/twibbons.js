// ============================================
// DATA TWIBBON PER LOMBA
// ============================================
// `frame` = path PNG bingkai di folder /public/img.
//
// SAAT INI baru bingkai Hackathon yang tersedia
// (`/img/TWIBBON HACKATHON.png`, 1080 x 1440, lubang foto transparan).
// Lomba lain sementara memakai bingkai Hackathon dengan `ready: false`
// → tampil label "BINGKAI MENYUSUL". Kalau file PNG bingkai baru sudah ada:
//   1. taruh filenya di /public/img/
//   2. ganti nilai `frame` di bawah
//   3. ubah `ready` jadi `true`
//
// `caption` = teks siap posting yang bisa disalin user lewat tombol SALIN.
export const twibbons = [
  {
    id: 'hackathon',
    label: 'Hackathon',
    title: 'TWIBBON HACKATHON',
    frame: '/img/TWIBBON HACKATHON.png',
    ready: true,
    accent: 'bg-neo-yellow',
    ink: 'text-black',
    about:
      'Kompetisi pengembangan solusi digital berbasis Web Application bertema "Technology for Sustainable Impact". Pasang twibbon ini untuk mendukung tim favoritmu!',
    caption:
      '💻 **READY TO CODE THE FUTURE!**\n\nThink. Build. Innovate. ⚡\n\nHalo! Saya **[Nama Peserta]** dari **[Nama Tim/Asal Instansi]**, siap menjadi bagian dari **Hackathon Web Innovation MILAD IT FEST**!\n\nSaatnya mengubah ide menjadi inovasi, menghadapi tantangan melalui teknologi, dan membangun solusi digital yang bermanfaat. Setiap ide punya potensi, setiap baris kode punya arti!\n\nBersama semangat kreativitas dan kolaborasi, mari buktikan bahwa teknologi dapat menciptakan perubahan.\n\n**“Innovation & Technology: Creating Solutions, Shaping the Future”**\n\nLet\'s build something impactful!\n\n@miladtiur @technofestuir @himatifuir_\n\n#MiladITFest19 #MiladTIUIR #TechnoFestUIR #InnovationAnd Technology #TeknikInformatikaUIR',
  },
  {
    id: 'uiux',
    label: 'UI/UX Design',
    title: 'TWIBBON UI/UX DESIGN',
    frame: '/img/TWIBBON UIUX.png',
    ready: true,
    // Posisi placeholder "Belum ada foto" (persen dari lebar/tinggi stage) → pas di tengah lubang bingkai
    phX: -3.2,
    phY: 12.9,
    accent: 'bg-neo-pink',
    ink: 'text-black',
    about:
      'Lomba desain antarmuka untuk mahasiswa. Tunjukan ide terbaikmu lewat desain yang fungsional dan estetis.',
    caption:
      '🎨 **READY TO DESIGN THE FUTURE!**\n\nIdeas into interfaces, creativity into solutions. 🚀\n\nHalo! Saya **[Nama Peserta]** dari **[Nama Tim/Asal Instansi]**, siap menjadi bagian dari **UI/UX Competition MILAD IT FEST**!\n\nSaatnya menuangkan kreativitas, merancang pengalaman digital yang bermakna, dan menghadirkan solusi melalui desain. Bukan sekadar tampilan, tetapi bagaimana sebuah desain dapat memberikan pengalaman terbaik bagi penggunanya.\n\nDengan semangat inovasi dan kolaborasi, mari ciptakan karya yang berdampak!\n\n**“Innovation & Technology: Creating Solutions, Shaping the Future”**\n\nLet\'s design something meaningful!\n\n@miladtiur @technofestuir @himatifuir_\n\n#MiladITFest19 #MiladTIUIR #TechnoFestUIR #InnovationAnd Technology #TeknikInformatikaUIR',
  },
  {
    id: 'panitia',
    label: 'Panitia',
    title: 'TWIBBON PANITIA',
    frame: '/img/TWIBBON_PANITIA.png',
    ready: true,
    // Posisi placeholder "Belum ada foto" → pusat lubang bingkai (48.9% W, 51.3% H)
    phX: -1.1,
    phY: 1.3,
    accent: 'bg-neo-blue',
    ink: 'text-white',
    about:
      'Twibbon untuk segenap panitia MILAD IT FEST 19 — HIMATIF UIR. Pasang fotomu sebagai tanda ikut mensukseskan rangkaian acara.',
    caption:
      '🤝 Aku bagian dari PANITIA MILAD IT FEST 19!\n\nBersama HIMATIF UIR merayakan Technofest UIR Vol. 2 & Milad Teknik Informatika UIR ke-19\n9-10 Desember 2026, Universitas Islam Riau\n\nAyo sukseskan acaranya! 👇\nhttps://forms.gle/uPtpzmGkGBmW9fQs7\n\n#TechnofestUIR #Panitia #HIMATIFUIR #UIR',
  },
];

export const defaultTwibbonId = 'hackathon';
