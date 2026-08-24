# Milad IT Fest 2026 🎉

Landing page resmi perayaan **Milad IT Fest 2026** yang diselenggarakan oleh **HIMATIF FT UIR**. Dibangun dengan desain bergaya **Neobrutalism**, dilengkapi animasi interaktif, dark mode, dan kursor kustom.

## Tech Stack

- [React 19](https://react.dev) — UI library
- [Vite 8](https://vite.dev) — Build tool & dev server
- [Tailwind CSS 4](https://tailwindcss.com) — Styling
- [React Router 7](https://reactrouter.com) — Client-side routing
- [Oxlint](https://oxc.rs) — Linter

## Fitur

- ⚡ Halaman utama: Hero, Tentang Acara, Statistik, Dokumentasi, Roadmap, Pendaftaran, dan Sponsor
- 📄 Halaman detail event dinamis (`/event/:eventId`)
- 🌗 Dark mode
- 🖱️ Custom cursor & efek noise overlay
- ✨ Loading screen animasi + choreographed reveal saat pertama kali dibuka
- 🔁 Marquee banner, scroll reveal, stats counter, floating shapes/stickers
- ♿ Dukungan `prefers-reduced-motion`

## Struktur Proyek

```
src/
├── components/     # Komponen UI (Hero, Header, Footer, dll)
├── hooks/          # Custom hooks (useDarkMode, dll)
├── assets/         # Aset statis
├── App.jsx         # Routing & layout utama
├── main.jsx        # Entry point
└── index.css       # Style global & tema Tailwind
```

## Menjalankan Proyek

Pastikan sudah menginstall [Node.js](https://nodejs.org).

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview

# Jalankan linter
npm run lint
```
