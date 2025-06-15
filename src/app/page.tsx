import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import Latest from "@/components/Latest";
import Plans from "@/components/Plans";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-yellow-400 to-orange-500 text-black">
      <Header />
      <Hero />
      <About />
      <Latest />
      {/* Ver Loja */}
      <section className="px-6 py-16 text-center bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">Vê a nossa Loja</h2>
        <p className="mb-6 text-lg">
          Compra os teus produtos oficiais do Tu Pra Tu e faz parte da familia!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {/* Product Card 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Produto 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Camiseta Tu Pra Tu</h3>
            <p className="text-lg text-gray-600 mb-4">MZN250.00</p>
            <a
              href="/shop"
              className="bg-orange-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
            >
              Comprar
            </a>
          </div>

          {/* Product Card 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Produto 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Caneca Tu Pra Tu</h3>
            <p className="text-lg text-gray-600 mb-4">MZN150.00</p>
            <a
              href="/shop"
              className="bg-orange-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
            >
              Comprar
            </a>
          </div>

          {/* Product Card 3 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <img
              src="https://via.placeholder.com/300"
              alt="Produto 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Boné Tu Pra Tu</h3>
            <p className="text-lg text-gray-600 mb-4">MZN200.00</p>
            <a
              href="/shop"
              className="bg-orange-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
            >
              Comprar
            </a>
          </div>
        </div>

        <a
          href="/shop"
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-zinc-800 transition"
        >
          Ver Loja 🛍️
        </a>
      </section>
      <Plans />
      <Sponsors />
      <Footer />
    </main>
  );
}
