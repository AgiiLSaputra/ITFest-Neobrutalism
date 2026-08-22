import ScrollReveal from './ScrollReveal';

const GALERI_FOTO = "/img/Foto.jpeg";

const topRowImages = [
  { src: GALERI_FOTO, rotation: "-rotate-2" },
  { src: GALERI_FOTO, rotation: "rotate-3" },
  { src: GALERI_FOTO, rotation: "-rotate-1" },
  { src: GALERI_FOTO, rotation: "rotate-2" },
  { src: GALERI_FOTO, rotation: "-rotate-3" },
  { src: GALERI_FOTO, rotation: "rotate-1" },
  { src: GALERI_FOTO, rotation: "-rotate-2" },
  { src: GALERI_FOTO, rotation: "-rotate-2" },
];

const bottomRowImages = [
  { src: GALERI_FOTO, rotation: "rotate-2" },
  { src: GALERI_FOTO, rotation: "-rotate-2" },
  { src: GALERI_FOTO, rotation: "rotate-1" },
  { src: GALERI_FOTO, rotation: "-rotate-3" },
  { src: GALERI_FOTO, rotation: "rotate-2" },
  { src: GALERI_FOTO, rotation: "-rotate-1" },
  { src: GALERI_FOTO, rotation: "rotate-3" },
  { src: GALERI_FOTO, rotation: "rotate-2" },
];

const ImageCard = ({ src, rotation }) => (
  <div className={`flex-shrink-0 w-72 h-72 neo-border neo-shadow-sm overflow-hidden transform ${rotation} hover:rotate-0 transition-transform`}>
    <img alt="Gallery Image" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src={src} />
  </div>
);

const ImageRow = ({ images, scrollDirection }) => (
  <div className="flex overflow-hidden group border-y-4 border-black bg-white py-6">
    <div className={`flex animate-scroll-${scrollDirection} gap-8 px-4`}>
      {images.map((img, i) => (
        <ImageCard key={`first-${i}`} src={img.src} rotation={img.rotation} />
      ))}
    </div>
    <div aria-hidden="true" className={`flex animate-scroll-${scrollDirection} gap-8 px-4`}>
      {images.map((img, i) => (
        <ImageCard key={`second-${i}`} src={img.src} rotation={img.rotation} />
      ))}
    </div>
  </div>
);

const DokumentasiAcara = () => {
  return (
    <section className="py-24 relative bg-neo-blue border-b-8 border-black overflow-hidden" id="gallery">
      <div className="container mx-auto px-6 max-w-screen-xl text-center mb-12">
        <ScrollReveal animation="animate-neo-stamp">
          <div className="inline-block bg-white p-6 neo-border neo-shadow mb-6 transform rotate-1">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Dokumentasi <span className="text-neo-pink">Acara</span></h2>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="animate-neo-flip" delay={0.2}>
          <p className="text-xl font-bold bg-white inline-block px-4 py-2 neo-border">Kilas balik keseruan dan inovasi di perhelatan Milad IT Fest sebelumnya.</p>
        </ScrollReveal>
      </div>
      <div className="space-y-12">
        <ImageRow images={topRowImages} scrollDirection="left" />
        <div className="flex overflow-hidden group border-b-4 border-black bg-white py-6">
          <div className="flex animate-scroll-right gap-8 px-4">
            {bottomRowImages.map((img, i) => (
              <ImageCard key={`b-first-${i}`} src={img.src} rotation={img.rotation} />
            ))}
          </div>
          <div aria-hidden="true" className="flex animate-scroll-right gap-8 px-4">
            {bottomRowImages.map((img, i) => (
              <ImageCard key={`b-second-${i}`} src={img.src} rotation={img.rotation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DokumentasiAcara;
