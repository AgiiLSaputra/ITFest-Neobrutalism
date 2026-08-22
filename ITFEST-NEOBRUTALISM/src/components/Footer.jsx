const LOGO_URL = "/img/LogoITFESTUIR.png";

export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] border-t-8 border-black pt-16 pb-8 text-black">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a className="flex items-center gap-4 mb-6 bg-white p-4 neo-border inline-flex" href="#">
              <img alt="Milad IT Fest Logo" className="h-10 w-auto object-contain bg-black px-2" src={LOGO_URL} />
              <span className="font-black text-2xl tracking-tight uppercase">Milad IT Fest <span className="bg-neo-pink px-2">2026</span></span>
            </a>
            <p className="font-bold text-lg max-w-sm mb-6 bg-white p-4 neo-border">
              Merayakan perjalanan inovasi dan kolaborasi di Teknik Informatika Universitas Islam Riau. Code the Stars, Beyond the Horizons.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-black font-black mb-6 uppercase text-xl tracking-wider bg-neo-green inline-block px-2 neo-border">Navigasi</h4>
            <ul className="space-y-4">
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#beranda">Beranda</a></li>
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#tentang">Tentang</a></li>
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#roadmap">Roadmap</a></li>
              <li><a className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-lg inline-block border-2 border-transparent hover:border-black" href="#acara">Kegiatan</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-black font-black mb-6 uppercase text-xl tracking-wider bg-neo-blue inline-block px-2 neo-border">Kontak</h4>
            <ul className="space-y-2 text-lg font-bold">
              <li className="bg-white px-2 py-1 neo-border border-2">Kampus Universitas Islam Riau</li>
              <li className="bg-white px-2 py-1 neo-border border-2">Jl. Kaharuddin Nasution No.113</li>
              <li className="bg-white px-2 py-1 neo-border border-2">Pekanbaru, Riau</li>
              <li className="pt-4"><a className="bg-black text-white px-4 py-2 neo-border hover:bg-neo-yellow hover:text-black transition-colors block text-center" href="mailto:info@miladitfest.com">info@miladitfest.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-bold">
          <p className="text-sm bg-white px-4 py-2 neo-border">
            © 2026 Teknik Informatika UIR. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
