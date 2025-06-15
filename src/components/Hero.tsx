import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner.png"
        alt="Tu Pra Tu Banner"
        fill
        className="object-cover brightness-[0.4]"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          <span className="text-yellow-400"></span>{" "}
          <span className="text-orange-500"></span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-yellow-300"></h2>
        <p className="text-lg md:text-xl text-zinc-300 mt-2"></p>
      </div>
    </section>
  );
};

export default Hero;
