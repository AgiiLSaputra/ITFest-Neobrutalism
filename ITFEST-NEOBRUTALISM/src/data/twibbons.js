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
      '🚀 Aku siap berkontribusi di HACKATHON MILAD IT FEST 19!\n\nTema: "Technology for Sustainable Impact"\nSMA/SMK & Mahasiswa | Tim 2-4 orang\n1-2 Desember 2026, Universitas Islam Riau\n\nAyo daftar dan raih hadiahnya! 👇\nhttps://forms.gle/uPtpzmGkGBmW9fQs7\n\n#MiladITFest19 #TechnofestUIR #Hackathon #HIMATIFUIR #UIR',
  },
  {
    id: 'uiux',
    label: 'UI/UX Design',
    title: 'TWIBBON UI/UX DESIGN',
    frame: '/img/TWIBBON HACKATHON.png',
    ready: false,
    accent: 'bg-neo-pink',
    ink: 'text-black',
    about:
      'Lomba desain antarmuka untuk mahasiswa. Tunjukan ide terbaikmu lewat desain yang fungsional dan estetis. (Bingkai khusus UI/UX sedang disiapkan.)',
    caption:
      '🎨 Aku ikut ajang UI/UX DESIGN di MILAD IT FEST 19!\n\nBuktikan bahwa desain yang baik bisa mengubah pengalaman pengguna.\n1-2 Desember 2026, Universitas Islam Riau\n\nIkut juga, yuk! 👇\nhttps://forms.gle/uPtpzmGkGBmW9fQs7\n\n#MiladITFest19 #TechnofestUIR #UIUXDesign #HIMATIFUIR #UIR',
  },
  {
    id: 'esport',
    label: 'Mobile Legends',
    title: 'TWIBBON MOBILE LEGENDS',
    frame: '/img/TWIBBON HACKATHON.png',
    ready: false,
    accent: 'bg-neo-blue',
    ink: 'text-white',
    about:
      'Turnamen E-Sports Mobile Legends: Bang Bang. Dukung squad kesayanganmu dengan memasang twibbon ini. (Bingkai khusus E-Sports sedang disiapkan.)',
    caption:
      '🎮 Squad, berkumpul! Aku mendukung tim favoritku di MOBILE LEGENDS MILAD IT FEST 19!\n\nE-Sports Tournament | 1-2 Desember 2026\nUniversitas Islam Riau\n\nGG WP, let\'s go! 👇\nhttps://forms.gle/uPtpzmGkGBmW9fQs7\n\n#MiladITFest19 #TechnofestUIR #MobileLegends #ESports #HIMATIFUIR',
  },
];

export const defaultTwibbonId = 'hackathon';
