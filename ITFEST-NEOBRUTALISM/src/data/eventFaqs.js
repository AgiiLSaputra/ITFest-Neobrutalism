const GENERAL_FAQ = [
  {
    id: 'daftar',
    icon: 'edit_document',
    question: 'Bagaimana cara mendaftar?',
    blocks: [
      {
        type: 'ol',
        items: [
          'Klik tombol DAFTAR SEKARANG di halaman detail kegiatan ini.',
          'Isi form pendaftaran resmi dan pastikan data diri sudah benar.',
          'Pantau timeline di atas untuk jadwal Technical Meeting & pelaksanaan.',
          'Ikuti Instagram panitia untuk info kuota, pengumuman, dan pemenang.',
        ],
      },
      {
        type: 'p',
        text: 'Pendaftaran seluruh cabang MILAD IT FEST 19 dibuka serentak sejak Oktober 2026.',
      },
      {
        type: 'link',
        label: 'Ke Section Pendaftaran',
        href: '/#pendaftaran',
      },
    ],
  },
  {
    id: 'kontak',
    icon: 'support_agent',
    question: 'Masih ada pertanyaan lain?',
    blocks: [
      {
        type: 'p',
        text: 'Tim panitia MILAD IT FEST 19 siap membantu lewat kanal resmi berikut:',
      },
      {
        type: 'kv',
        items: [
          { label: 'WhatsApp Panitia', value: '0813-7459-1558' },
          { label: 'Email Humas', value: 'miladitfestuir@gmail.com' },
          { label: 'Instagram', value: '@miladituir & @technofestuir' },
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
];

const withoutEmptyLists = (blocks) =>
  blocks.filter((block) => !block.items || block.items.length > 0);

export const buildEventFaq = (event) => {
  const eligibilityRules = event.rules
    .filter((rule) => /eligibilitas|tim |tim$|individu|ganda|peserta/i.test(rule.text))
    .map((rule) => rule.text);

  return [
    {
      id: 'tentang',
      icon: 'info',
      question: `Apa itu ${event.title}?`,
      blocks: withoutEmptyLists([
        { type: 'p', text: event.description },
        { type: 'ul', items: event.about },
      ]),
    },
    {
      id: 'peserta',
      icon: 'group',
      question: 'Siapa saja yang boleh ikut?',
      blocks: withoutEmptyLists([
        {
          type: 'kv',
          items: [{ label: 'Kelas Peserta', value: event.subtitle }],
        },
        {
          type: 'p',
          text: 'Rincian syarat wajib tiap peserta ada di bagian Rules & Requirements di halaman ini.',
        },
        { type: 'ul', items: eligibilityRules },
      ]),
    },
    {
      id: 'jadwal',
      icon: 'event',
      question: 'Kapan saja jadwal pelaksanaannya?',
      blocks: withoutEmptyLists([
        {
          type: 'ol',
          items: event.timeline.map(
            (item) => `${item.dateFormatted} — ${item.title}. ${item.description}`
          ),
        },
        {
          type: 'p',
          text: 'Tanggal yang sudah dilewati otomatis ditandai "(Selesai)" pada bagian timeline.',
        },
      ]),
    },
    ...GENERAL_FAQ,
    {
      id: 'ketentuan',
      icon: 'rule',
      question: 'Apa saja ketentuan utamanya?',
      blocks: withoutEmptyLists([
        { type: 'ul', items: event.rules.map((rule) => rule.text) },
      ]),
    },
    {
      id: 'fasilitas',
      icon: 'workspace_premium',
      question: 'Apa saja fasilitas & hadiahnya?',
      blocks: withoutEmptyLists([
        {
          type: 'ul',
          items: event.prizes.map((prize) =>
            prize.amount ? `${prize.place} — ${prize.amount}` : prize.place
          ),
        },
        {
          type: 'p',
          text: 'Seluruh peserta resmi berhak atas e-certificate MILAD IT FEST 19.',
        },
      ]),
    },
  ];
};

export default buildEventFaq;
