import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { twibbons, defaultTwibbonId } from '../data/twibbons';

const ZOOM_MIN = 0.2;
const ZOOM_MAX = 3;

// Format gambar yang dikenali (dipakai untuk validasi + filter dialog pilih file).
const KNOWN_EXTS = [
  'jpg', 'jpeg', 'jpe', 'jfif', 'png', 'webp', 'gif', 'bmp', 'dib', 'avif', 'svg', 'ico',
  'heic', 'heif', 'tif', 'tiff',
];
// Format yang datang dari kamera/HP & wajib dinormalkan orientasi EXIF-nya.
const ORIENTED_EXTS = ['jpg', 'jpeg', 'jpe', 'jfif', 'heic', 'heif'];
const HEIC_EXTS = ['heic', 'heif'];
const SUPPORTED_MSG =
  'Format yang didukung: JPG, JPEG, PNG, WebP, GIF, BMP, AVIF, SVG, ICO, HEIC/HEIF (otomatis dikonversi).';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export default function TwibbonPage() {
  const [activeId, setActiveId] = useState(defaultTwibbonId);
  const active = twibbons.find((t) => t.id === activeId) ?? twibbons[0];

  const [frameImg, setFrameImg] = useState(null); // HTMLImageElement bingkai
  const [frameDims, setFrameDims] = useState({ w: 0, h: 0 });
  const [photo, setPhoto] = useState(null); // { el, url, w, h }
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [pos, setPos] = useState(null); // posisi tengah foto dalam px bingkai
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState(null); // { type: 'ok' | 'err', text }

  const stageRef = useRef(null);
  const fileRef = useRef(null);
  const dragRef = useRef(null);
  const objUrlRef = useRef(null);
  const copiedTimer = useRef(null);

  /* ---------------------------------------------
     Muat bingkai twibbon (ganti saat ganti lomba)
  --------------------------------------------- */
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.decoding = 'async';
    img.src = active.frame;
    img.onload = () => {
      if (cancelled) return;
      setFrameImg(img);
      setFrameDims({ w: img.naturalWidth, h: img.naturalHeight });
      setPos(null);
    };
    img.onerror = () => {
      if (cancelled) return;
      setFrameImg(null);
      setFrameDims({ w: 0, h: 0 });
      setNotice({ type: 'err', text: `Bingkai "${active.frame}" tidak ditemukan.` });
    };
    return () => {
      cancelled = true;
    };
  }, [active.frame]);

  useEffect(() => () => {
    if (objUrlRef.current) URL.revokeObjectURL(objUrlRef.current);
    if (copiedTimer.current) clearTimeout(copiedTimer.current);
  }, []);

  /* ---------------------------------------------
     Turunan
  --------------------------------------------- */
  const hasFrame = frameDims.w > 0;
  // "cover": foto mengisi seluruh bingkai saat zoom 100%
  const fit = photo && hasFrame ? Math.max(frameDims.w / photo.w, frameDims.h / photo.h) : 1;
  const dispW = photo ? photo.w * fit * zoom : 0;
  const dispH = photo ? photo.h * fit * zoom : 0;
  const center = pos ?? (hasFrame ? { x: frameDims.w / 2, y: frameDims.h / 2 } : { x: 0, y: 0 });

  // Posisi & ukuran foto memakai PERSEN dari bingkai, bukan piksel layar,
  // jadi foto langsung tampil benar walau preview belum pernah terukur
  // (elemen preview bisa baru mounted belakangan karena animasi ScrollReveal).
  const photoStyle =
    photo && hasFrame
      ? {
          left: `${(center.x / frameDims.w) * 100}%`,
          top: `${(center.y / frameDims.h) * 100}%`,
          width: `${(dispW / frameDims.w) * 100}%`,
          height: `${(dispH / frameDims.h) * 100}%`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }
      : undefined;

  // px bingkai per px layar — dihitung saat dibutuhkan (saat drag, elemen sudah pasti ada)
  const getRatio = () => {
    const w = stageRef.current?.getBoundingClientRect().width || 0;
    return w > 0 && frameDims.w > 0 ? frameDims.w / w : 1;
  };

  /* ---------------------------------------------
     Aksi foto
  --------------------------------------------- */
  const resetTransform = () => {
    setZoom(1);
    setRotation(0);
    setPos(null);
  };

  const tryDecode = (url) =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = url;
    });

  const bitmapToBlob = async (bmp, type) => {
    const canvas = document.createElement('canvas');
    canvas.width = bmp.width;
    canvas.height = bmp.height;
    canvas.getContext('2d').drawImage(bmp, 0, 0);
    bmp.close?.();
    return new Promise((resolve) => canvas.toBlob(resolve, type, 0.92));
  };

  // Decode satu blob menjadi { url, img }.
  // `normalize` = terapkan orientasi EXIF dulu lewat createImageBitmap, supaya
  // foto dari HP (sering ber-EXIF) tampil di preview SAMA PERSIS dengan hasil download.
  const decodeBlob = async (source, { normalize = false, type = 'image/png' } = {}) => {
    let blob = source;
    if (normalize && typeof createImageBitmap === 'function') {
      try {
        const bmp = await createImageBitmap(source, { imageOrientation: 'from-image' });
        const out = await bitmapToBlob(bmp, type);
        if (out) blob = out;
      } catch {
        /* browser lama / format aneh → pakai blob apa adanya */
      }
    }
    const url = URL.createObjectURL(blob);
    const img = await tryDecode(url);
    if (!img) {
      URL.revokeObjectURL(url);
      return null;
    }
    return { url, img };
  };

  const loadFile = async (file) => {
    if (!file) return;
    try {
      const ext = (file.name.split('.').pop() || '').toLowerCase();
      if (!file.type.startsWith('image/') && !KNOWN_EXTS.includes(ext)) {
        setNotice({ type: 'err', text: `File .${ext || '?'} bukan gambar. ${SUPPORTED_MSG}` });
        return;
      }

      setNotice({ type: 'ok', text: 'Membuka foto...' });

      const oriented = ORIENTED_EXTS.includes(ext);
      let result = await decodeBlob(file, {
        normalize: oriented,
        type: ['jpg', 'jpeg', 'jpe', 'jfif'].includes(ext) ? 'image/jpeg' : 'image/png',
      });

      // HEIC/HEIF (foto iPhone) tidak bisa dibaca banyak browser → konversi dulu.
      if (!result && HEIC_EXTS.includes(ext)) {
        setNotice({ type: 'ok', text: 'Mengonversi HEIC, tunggu sebentar...' });
        try {
          const mod = await import('heic2any');
          const heic2any = mod.default ?? mod;
          const out = await heic2any({ blob: file, toType: 'image/png' });
          const png = Array.isArray(out) ? out[0] : out;
          result = await decodeBlob(png, { normalize: true, type: 'image/jpeg' });
        } catch {
          result = null;
        }
      }

      if (!result) {
        const hint = ['tif', 'tiff'].includes(ext)
          ? ' TIFF belum bisa dibaca browser — buka di aplikasi foto lalu simpan ulang sebagai JPG atau PNG.'
          : ` ${SUPPORTED_MSG}`;
        setNotice({ type: 'err', text: `Gambar gagal dibaca oleh browser.${hint}` });
        return;
      }

      if (objUrlRef.current) URL.revokeObjectURL(objUrlRef.current);
      objUrlRef.current = result.url;
      setPhoto({
        el: result.img,
        url: result.url,
        w: result.img.naturalWidth,
        h: result.img.naturalHeight,
      });
      resetTransform();
      setNotice({ type: 'ok', text: 'Foto siap! Geser, zoom, dan rotate sesuai selera.' });
    } catch {
      setNotice({ type: 'err', text: `Gagal memproses foto. ${SUPPORTED_MSG}` });
    }
  };

  const removePhoto = () => {
    if (objUrlRef.current) URL.revokeObjectURL(objUrlRef.current);
    objUrlRef.current = null;
    setPhoto(null);
    resetTransform();
    setNotice(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  /* Drag foto (pointer/mouse & sentuh) */
  const onPointerDown = (e) => {
    if (!photo) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: center.x, oy: center.y };
  };

  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d || !hasFrame) return;
    const r = getRatio();
    // Batas geser: foto wajib masih menutupi minimal 20% sisi bingkai,
    // jadi foto tidak pernah bisa hilang sepenuhnya dari frame.
    const minX = 0.2 * frameDims.w - dispW / 2;
    const maxX = 0.8 * frameDims.w + dispW / 2;
    const minY = 0.2 * frameDims.h - dispH / 2;
    const maxY = 0.8 * frameDims.h + dispH / 2;
    setPos({
      x: clamp(d.ox + (e.clientX - d.sx) * r, minX, maxX),
      y: clamp(d.oy + (e.clientY - d.sy) * r, minY, maxY),
    });
  };

  const onPointerUp = (e) => {
    dragRef.current = null;
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {
      /* pointer sudah lepas — aman diabaikan */
    }
  };

  /* ---------------------------------------------
     Download: foto dulu, bingkai di atasnya
  --------------------------------------------- */
  const handleDownload = async () => {
    if (!photo || !frameImg) return;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = frameDims.w;
      canvas.height = frameDims.h;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingQuality = 'high';

      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(photo.el, -dispW / 2, -dispH / 2, dispW, dispH);
      ctx.restore();

      ctx.drawImage(frameImg, 0, 0, frameDims.w, frameDims.h);

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('toBlob gagal');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `twibbon-${active.id}-milad-itfest19.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      setNotice({ type: 'ok', text: 'Twibbon berhasil diunduh! Cek folder download-mu.' });
    } catch {
      setNotice({ type: 'err', text: 'Gagal membuat gambar. Coba lagi ya.' });
    }
  };

  /* ---------------------------------------------
     Caption
  --------------------------------------------- */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.caption);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = active.caption;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    if (copiedTimer.current) clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(active.caption)}`;

  const ctrlBtn =
    'px-3 py-2 neo-border bg-cream font-black text-xs uppercase flex items-center gap-1 justify-center transition-all hover:translate-x-1 hover:translate-y-1 hover:neo-shadow-sm active:translate-x-2 active:translate-y-2 active:shadow-none disabled:opacity-40 disabled:pointer-events-none';

  return (
    <section className="pt-32 pb-24 px-4 md:px-6 max-w-6xl mx-auto w-full relative">
      <div className="absolute top-24 right-8 w-16 h-16 bg-neo-pink neo-border neo-shadow rotate-12 animate-bounce-slow hidden lg:block"></div>
      <div className="absolute top-64 left-2 w-10 h-10 bg-neo-blue rounded-full neo-border neo-shadow-sm -rotate-12 animate-neo-swing hidden lg:block"></div>

      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-8 text-black font-black hover:bg-black hover:text-white px-3 py-1 transition-colors neo-border font-mono text-sm uppercase neo-shadow-hover animate-pop-up"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        BACK TO LANDING PAGE
      </Link>

      <ScrollReveal animation="animate-pop-up">
        <div className="inline-block px-4 py-2 bg-neo-pink neo-border font-black uppercase tracking-wider transform -rotate-2 mb-6">
          Twibbon
        </div>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.1}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-black uppercase mb-4">
          Twibbon Lomba
        </h1>
      </ScrollReveal>

      <ScrollReveal animation="animate-pop-up" delay={0.15}>
        <p className="text-sm font-bold text-neo-blue mb-10 max-w-2xl">
          Pasang fotomu di bingkai twibbon MILAD IT FEST 19, atur zoom & rotasi, lalu download
          hasilnya untuk dibagikan ke media sosialmu.
        </p>
      </ScrollReveal>

      {/* ============ PILIH TWIBBON ============ */}
      <ScrollReveal animation="animate-pop-up" delay={0.2}>
        <div className="bg-cream p-4 sm:p-6 neo-border neo-shadow neo-tilt mb-8">
          <h2 className="text-lg sm:text-xl font-black uppercase border-b-4 border-black pb-3 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-neo-blue">imagesmode</span>
            Pilih Twibbon Lomba
          </h2>
          <div className="flex flex-wrap gap-3">
            {twibbons.map((t) => {
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveId(t.id);
                    resetTransform();
                    setNotice(null);
                  }}
                  className={`px-4 py-2 neo-border font-black text-sm uppercase transition-all ${
                    isActive
                      ? 'bg-black text-white neo-shadow-sm -translate-x-0.5 -translate-y-0.5'
                      : `${t.accent} ${t.ink} hover:-translate-x-0.5 hover:-translate-y-0.5 hover:neo-shadow-sm`
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ============ PREVIEW ============ */}
        <div className="lg:col-span-7">
          <ScrollReveal animation="animate-pop-up" delay={0.25}>
            <div className="bg-cream p-4 sm:p-5 neo-border neo-shadow">
              <div className="flex items-center border-b-4 border-black pb-3 mb-4 gap-3">
                <h2 className="text-lg font-black uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-neo-pink">crop_free</span>
                  Preview
                </h2>
              </div>

              <div
                ref={stageRef}
                className="relative w-full overflow-hidden bg-white pattern-checker neo-border select-none touch-none"
                style={{ aspectRatio: frameDims.w ? `${frameDims.w} / ${frameDims.h}` : '3 / 4' }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  loadFile(e.dataTransfer.files?.[0]);
                }}
              >
                {photo && hasFrame && (
                  <img
                    src={photo.url}
                    alt="Foto kamu"
                    draggable={false}
                    style={photoStyle}
                    className="absolute max-w-none cursor-grab active:cursor-grabbing z-10"
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                  />
                )}

                {frameImg && (
                  <img
                    src={active.frame}
                    alt={`Bingkai ${active.title}`}
                    draggable={false}
                    className="absolute inset-0 w-full h-full pointer-events-none z-20"
                  />
                )}

                {!photo && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <span className="material-symbols-outlined text-5xl text-black">add_a_photo</span>
                    <p className="font-black text-sm uppercase">
                      Belum ada foto
                      <br />
                      Pilih foto atau seret file ke sini
                    </p>
                    <button
                      className="bg-neo-yellow px-4 py-2 neo-border neo-shadow-sm font-black text-sm uppercase transition-all hover:translate-x-1 hover:translate-y-1 hover:neo-shadow active:translate-x-2 active:translate-y-2 active:shadow-none"
                      onClick={() => fileRef.current?.click()}
                    >
                      Pilih Foto
                    </button>
                  </div>
                )}
              </div>

              <p className="text-xs font-bold mt-3 leading-relaxed">
                💡 Tahan &amp; geser fotomu untuk memposisikan, seret file gambar ke area preview
                untuk mengganti foto.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ============ KONTROL + INFO ============ */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal animation="animate-pop-up" delay={0.3}>
            <div className={`${active.accent} ${active.ink} p-5 neo-border neo-shadow neo-tilt`}>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg font-black uppercase">{active.title}</h2>
                {!active.ready && (
                  <span className="text-[10px] font-black uppercase bg-cream px-2 py-1 border-2 border-black">
                    BINGKAI MENYUSUL
                  </span>
                )}
              </div>
              <p className="text-sm font-bold mt-3 leading-relaxed">{active.about}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="animate-pop-up" delay={0.35}>
            <div className="bg-cream p-5 neo-border neo-shadow">
              <h2 className="text-lg font-black uppercase border-b-4 border-black pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-neo-green">tune</span>
                Atur Foto
              </h2>

              <input
                ref={fileRef}
                type="file"
                accept="image/*,.jpg,.jpeg,.jpe,.jfif,.png,.webp,.gif,.bmp,.dib,.avif,.svg,.ico,.heic,.heif,.tif,.tiff"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  e.target.value = ''; // supaya file yang sama bisa dipilih lagi
                  loadFile(f);
                }}
              />

              <div className="space-y-5">
                {/* ZOOM */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="tw-zoom" className="text-xs font-black uppercase flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">zoom_in</span>
                      Zoom
                    </label>
                    <span className="text-xs font-black bg-black text-white px-2 py-0.5">
                      {Math.round(zoom * 100)}%
                    </span>
                  </div>
                  <input
                    id="tw-zoom"
                    type="range"
                    min={ZOOM_MIN}
                    max={ZOOM_MAX}
                    step={0.01}
                    value={zoom}
                    disabled={!photo}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="neo-range"
                  />
                </div>

                {/* ROTATE */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="tw-rot" className="text-xs font-black uppercase flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">rotate_right</span>
                      Rotate
                    </label>
                    <span className="text-xs font-black bg-black text-white px-2 py-0.5">{rotation}°</span>
                  </div>
                  <input
                    id="tw-rot"
                    type="range"
                    min={-180}
                    max={180}
                    step={1}
                    value={rotation}
                    disabled={!photo}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="neo-range"
                  />
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    <button className={ctrlBtn} disabled={!photo} onClick={() => setRotation((r) => clamp(r - 90, -180, 180))}>
                      <span className="material-symbols-outlined text-base">rotate_left</span> 90°
                    </button>
                    <button className={ctrlBtn} disabled={!photo} onClick={() => setRotation((r) => clamp(r + 90, -180, 180))}>
                      <span className="material-symbols-outlined text-base">rotate_right</span> 90°
                    </button>
                    <button className={ctrlBtn} disabled={!photo} onClick={() => setRotation(0)}>
                      0°
                    </button>
                    <button className={ctrlBtn} disabled={!photo} onClick={resetTransform}>
                      Reset
                    </button>
                  </div>
                </div>

                {/* FOTO */}
                <div className="grid grid-cols-2 gap-2">
                  <button className={ctrlBtn} onClick={() => fileRef.current?.click()}>
                    <span className="material-symbols-outlined text-base">
                      {photo ? 'photo_camera' : 'upload'}
                    </span>
                    {photo ? 'Ganti Foto' : 'Pilih Foto'}
                  </button>
                  <button className={ctrlBtn} disabled={!photo} onClick={removePhoto}>
                    <span className="material-symbols-outlined text-base">delete</span>
                    Hapus Foto
                  </button>
                </div>

                {notice && (
                  <p
                    className={`text-xs font-black p-2 border-2 border-black ${
                      notice.type === 'ok' ? 'bg-neo-yellow' : 'bg-neo-pink'
                    }`}
                  >
                    {notice.text}
                  </p>
                )}

                <button
                  className="w-full bg-neo-yellow px-6 py-3 neo-border neo-shadow font-black uppercase flex items-center justify-center gap-2 transition-all hover:translate-x-1 hover:translate-y-1 hover:neo-shadow active:translate-x-2 active:translate-y-2 active:shadow-none disabled:opacity-40 disabled:pointer-events-none"
                  disabled={!photo || !frameImg}
                  onClick={handleDownload}
                >
                  <span className="material-symbols-outlined text-xl">download</span>
                  Download Twibbon
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="animate-pop-up" delay={0.4}>
            <div className="bg-neo-pink p-5 neo-border neo-shadow">
              <h2 className="text-lg font-black uppercase border-b-4 border-black pb-3 mb-4">
                Deskripsi
              </h2>
              <pre className="bg-cream p-4 neo-border text-sm font-bold whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto neo-scrollbar">
                {active.caption}
              </pre>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <button
                  className="bg-neo-yellow px-4 py-2 neo-border neo-shadow-sm font-black text-sm uppercase transition-all hover:translate-x-1 hover:translate-y-1 hover:neo-shadow active:translate-x-2 active:translate-y-2 active:shadow-none flex items-center justify-center gap-2"
                  onClick={handleCopy}
                >
                  <span className="material-symbols-outlined text-lg">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  {copied ? 'Tersalin!' : 'Salin Deskripsi'}
                </button>
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cream px-4 py-2 neo-border neo-shadow-sm font-black text-sm uppercase transition-all hover:translate-x-1 hover:translate-y-1 hover:neo-shadow active:translate-x-2 active:translate-y-2 active:shadow-none flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">share</span>
                  Bagikan ke X
                </a>
              </div>
              <p className="text-xs font-bold mt-3">
                Tag juga akun resmi kami: <strong>@himatifuir_</strong> · #MiladITFest19
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
