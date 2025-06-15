import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />

      <section className="max-w-6xl mx-auto py-16 px-4 space-y-16">
        <h1 className="text-4xl font-bold text-center mb-12">Fale Connosco</h1>

        {/* Contact + Feedback Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - General / Commercial Enquiries */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Consultas Gerais / Comerciais
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
              />
              <textarea
                placeholder="Mensagem"
                rows={5}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
              />
              <button
                type="button"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded w-full font-semibold"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Right - Viewer Feedback */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Feedback dos Ouvintes
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome (opcional)"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
              />
              <textarea
                placeholder="Deixe seu feedback aqui..."
                rows={6}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
              />
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded w-full font-semibold"
              >
                Enviar Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Apoie o Podcast
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome no Cartão"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
            />
            <input
              type="text"
              placeholder="Número do Cartão"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/AA"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded text-white"
              />
            </div>
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full font-semibold"
            >
              Doar Agora (Demo)
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
