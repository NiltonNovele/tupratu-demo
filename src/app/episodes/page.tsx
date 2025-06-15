import Header from "@/components/Header";
import Footer from "@/components/Footer";

const episodes = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Episódio ${i + 1}: Conversa com Convidado ${i + 1}`,
  description:
    "Discussões autênticas, vibes reais e momentos únicos com a família Tu Pra Tu.",
  audioUrl: "#", // fake audio link
  downloadUrl: "#", // fake download link
  externalLink: "#", // fake external streaming
}));

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          🎙️ Todos os Episódios
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className="bg-zinc-900 rounded-xl shadow-lg p-5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{ep.title}</h2>
                <p className="text-sm text-zinc-300 mb-4">{ep.description}</p>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded">
                  ▶️ Ouvir Agora
                </button>
                <a
                  href={ep.downloadUrl}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded"
                  download
                >
                  ⬇️ Baixar Episódio
                </a>
                <a
                  href={ep.externalLink}
                  target="_blank"
                  className="text-yellow-400 text-sm text-center underline mt-1"
                >
                  Ouvir noutro lugar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
