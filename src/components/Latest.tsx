import {
  FaYoutube,
  FaSpotify,
  FaApple,
  FaDownload,
  FaHeadphones,
  FaArrowRight,
} from "react-icons/fa";

const Latest = () => {
  return (
    <section className="px-6 py-16 bg-black text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Últimos Episódios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Episode */}
        <div className="relative md:col-span-2 row-span-2 group">
          <img
            src="https://img.youtube.com/vi/S7vWs2P0Hio/maxresdefault.jpg"
            alt="Episódio 68"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                🎙️ NELSON NHACHUNGUE | TU PRA TU PODCAST | EP68
              </h3>
              <p className="text-sm mb-2">
                O primeiro vencedor do progarama Fama Show...
              </p>
              <p className="text-xs text-gray-300">
                Publicado em 10 de Abril, 2025
              </p>
            </div>
            <div className="flex gap-4 text-yellow-400 text-xl mt-4 z-10">
              <a
                href="https://youtu.be/S7vWs2P0Hio?si=LTZYjL0zVcew9-1Z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify />
              </a>
              <a
                href="https://apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple />
              </a>
              <a href="#" title="Ouvir no App">
                <FaHeadphones />
              </a>
              <a href="#" title="Download">
                <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-6">
        <a
          href="#"
          className="inline-flex items-center bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
        >
          Ver Todos Episódios
          <span className="ml-2">
            <FaArrowRight />
          </span>
        </a>
      </p>

      {/* Other Episodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {[
          {
            title: "DOPPAZ | TU PRA TU PODCAST | EP67",
            desc: "Doppaz saiu da wing",
            date: "3 de Abril, 2025",
            thumb: "https://img.youtube.com/vi/KDuasseTowI/maxresdefault.jpg",
          },
          {
            title: "CHAPEIRO, COBRADOR & MODJERO | TU PRA TU PODCAST | EP66",
            desc: "Dia a Dia de um modjero, motorista e cobrador",
            date: "5 de Abril, 2025",
            thumb: "https://img.youtube.com/vi/uVbdQpKTKAA/maxresdefault.jpg",
          },
        ].map((ep, i) => (
          <div
            key={i}
            className="relative group bg-zinc-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={ep.thumb}
              alt={ep.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="mb-2 font-semibold">{ep.title}</p>
              {/* Static buttons below */}
              <div className="flex gap-4 text-yellow-400 text-lg">
                <a href="https://youtube.com" target="_blank">
                  <FaYoutube />
                </a>
                <a href="https://spotify.com" target="_blank">
                  <FaSpotify />
                </a>
                <a href="https://apple.com" target="_blank">
                  <FaApple />
                </a>
                <a href="#" title="Ouvir no App">
                  <FaHeadphones />
                </a>
                <a href="#" title="Download">
                  <FaDownload />
                </a>
              </div>
            </div>

            {/* Hover overlay content on top half only */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 p-4">
              <p className="text-sm">{ep.desc}</p>
              <p className="text-xs text-gray-300 mt-1">
                Publicado em {ep.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
