import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Camiseta Tu Pra Tu",
    price: "1,000 MZN",
    image: "/merch/tshirt.jpg",
  },
  {
    id: 2,
    name: "Boné Oficial",
    price: "800 MZN",
    image: "/merch/cap.jpg",
  },
  {
    id: 3,
    name: "Caneca do Podcast",
    price: "600 MZN",
    image: "/merch/mug.jpg",
  },
];

const galleryImages = [
  "/gallery/behind1.jpg",
  "/gallery/studio2.jpg",
  "/gallery/event3.jpg",
  "/gallery/team4.jpg",
  "/gallery/fans5.jpg",
  "/gallery/crew6.jpg",
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />

      {/* Loja */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Loja Oficial</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="mb-4 text-yellow-400">{product.price}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded w-full">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">📸 Galeria</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Galeria ${idx + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
