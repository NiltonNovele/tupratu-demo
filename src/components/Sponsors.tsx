import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "Vodacom Mz.", logo: "/logos/parceiro1.png" },
    { name: "888 Bets", logo: "/logos/parceiro2.png" },
    { name: "SynctechX", logo: "/logos/parceiro3.png" },
    { name: "O'Driscoll's", logo: "/logos/parceiro4.png" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-3 text-yellow-400 tracking-tight">
          Apoiadores & Parceiros
        </h2>
        <p className="text-zinc-400 text-base mb-12 max-w-xl mx-auto">
          Estas marcas tornam o podcast possível. Apoia quem nos apoia!
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-44 h-44 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center border border-yellow-500 shadow-xl hover:scale-105 hover:border-orange-400 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 relative mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <p className="text-sm text-white font-semibold tracking-wide">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
