import ScrollReveal from "./ScrollReveal";

const roadmapItems = [
  {
    dateFormatted: "1 Oktober 2026",
    endDateIso: "2026-10-01T23:59:59+07:00",
    title: "Pembukaan Pendaftaran Seluruh Cabang Lomba",
    description: "Pendaftaran seluruh cabang lomba dibuka secara serentak.",
    color: "bg-neo-blue",
  },
  {
    dateFormatted: "14 – 15 November 2026",
    endDateIso: "2026-11-15T23:59:59+07:00",
    title: "Pelaksanaan Lomba Badminton",
    description: "Bertempat di Gor Badminton, Simpang Tiga.",
    color: "bg-neo-green",
  },
  {
    dateFormatted: "21 – 22 November 2026",
    endDateIso: "2026-11-22T23:59:59+07:00",
    title: "Pelaksanaan Lomba Mobile Legends",
    description: "Bertempat di Selasar Coffee.",
    color: "bg-neo-pink",
  },
  {
    dateFormatted: "21 November 2026",
    endDateIso: "2026-11-21T23:59:59+07:00",
    title: "Final Lomba UI/UX Design",
    description: "Presentasi Finalis Lomba UI/UX Design.",
    color: "bg-neo-blue",
  },
  {
    dateFormatted: "28 – 29 November 2026",
    endDateIso: "2026-11-29T23:59:59+07:00",
    title: "Pelaksanaan Lomba Hackathon",
    description: "On site di Aula Gedung A Fakultas Teknik UIR.",
    color: "bg-neo-yellow",
  },
  {
    dateFormatted: "1 Desember 2026",
    endDateIso: "2026-12-01T23:59:59+07:00",
    title: "Pembukaan Pameran Hari Pertama",
    description: "Pameran dilaksanakan di Indoor Gor Volly UIR.",
    color: "bg-neo-orange",
  },
  {
    dateFormatted: "2 Desember 2026",
    endDateIso: "2026-12-02T23:59:59+07:00",
    title: "Seminar Nasional & Puncak Acara",
    description:
      "Seminar nasional bertema 'Transformasi Digital: AI untuk Kemanusiaan' dan pameran teknologi.",
    color: "bg-neo-yellow",
    highlight: true,
  },
];

function isPastDate(iso) {
  return new Date(iso).getTime() < Date.now();
}

export default function Roadmap() {
  return (
    <section
      className="py-24 relative bg-gray-main border-b-8 border-black overflow-hidden transition-colors pattern-dot-grid"
      id="roadmap"
    >
      <div className="absolute top-4 right-8 bg-neo-pink neo-border neo-shadow-sm px-3 py-1 font-black text-xs uppercase transform rotate-3 animate-wiggle hidden md:block z-20">
        ★ Timeline
      </div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal animation="animate-pop-up">
            <div className="inline-block bg-cream p-6 neo-border neo-shadow mb-6 transform rotate-1">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Roadmap{" "}
                <span className="text-neo-pink animate-neo-jitter">Acara</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="block">
            <ScrollReveal animation="animate-pop-up" delay={0.15}>
              <p className="text-xl font-bold bg-cream inline-block px-4 py-2 neo-border">
                Perjalanan menuju puncak perayaan Milad IT Fest 2026.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 pointer-events-none flex justify-start md:justify-center z-0">
            <div className="w-1 bg-black h-full animate-neo-strips ml-[14px] md:ml-0"></div>
          </div>

          <div className="space-y-12 relative z-10">
            {roadmapItems.map((item, index) => {
              const expired = isPastDate(item.endDateIso);
              const isEven = index % 2 === 0;
              const isLast = index === roadmapItems.length - 1;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${expired ? "grayscale opacity-60" : ""}`}
                >
                  {!isLast && (
                    <div
                      className={`absolute left-4 md:left-1/2 w-0.5 h-full -translate-x-1/2 ${expired ? "z-10 bg-gray-400" : "z-0 bg-black"}`}
                    ></div>
                  )}

                  <div
                    className={`md:w-5/12 hidden md:block ${isEven ? "" : "order-3"}`}
                  ></div>

                  <div
                    className={`absolute left-4 md:left-1/2 w-8 h-8 ${expired ? "bg-gray-400" : item.color} border-4 border-black transform -translate-x-1/2 flex items-center justify-center ${expired ? "" : "z-10"} neo-shadow-sm group-hover:animate-neo-swing transition-all`}
                  >
                    {expired ? (
                      <span className="material-symbols-outlined text-white text-sm">
                        check
                      </span>
                    ) : (
                      <div className="w-3 h-3 bg-black"></div>
                    )}
                  </div>

                  <div
                    className={`md:w-5/12 w-full pl-12 md:pl-0 ${isEven ? "" : "md:text-right order-1"}`}
                  >
                    <ScrollReveal
                      animation="animate-pop-up"
                      delay={index * 0.1}
                    >
                      <div
                        className={`relative p-6 neo-border neo-shadow hover:-translate-y-1 transition-transform neo-tilt overflow-hidden ${expired ? "bg-gray-300" : item.highlight ? "bg-neo-yellow" : "bg-cream"}`}
                      >
                        {expired && (
                          <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-neo-green border-4 border-black flex items-center justify-center rotate-12 z-10">
                            <span className="material-symbols-outlined text-black text-2xl -rotate-12">
                              check
                            </span>
                          </div>
                        )}
                        <div
                          className={`inline-block px-3 py-1 mb-4 neo-border text-xs font-black tracking-wider ${expired ? "bg-gray-400 text-white" : `${item.color} text-black`} ${!expired ? "animate-neo-jitter" : ""}`}
                        >
                          {item.dateFormatted}
                          {expired && " (Selesai)"}
                        </div>
                        <h3
                          className={`text-xl md:text-2xl font-black mb-2 uppercase ${expired ? "text-gray-500" : "text-black"}`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-sm font-bold ${expired ? "text-gray-500" : "text-black"}`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
