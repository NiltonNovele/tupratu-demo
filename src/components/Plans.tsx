import React from "react";

const Plans = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-orange-100 to-white text-black text-center">
      <h2 className="text-4xl font-extrabold mb-6 text-orange-500 tracking-tight">
        Planos de Acesso
      </h2>
      <p className="text-zinc-700 mb-12 text-lg max-w-2xl mx-auto">
        Escolhe o plano que melhor combina contigo. Junta-te à comunidade do Tu
        Pra Tu Podcast e aproveita os benefícios exclusivos!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="border border-zinc-300 rounded-2xl p-8 bg-white shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-zinc-800">
            Plano Grátis
          </h3>
          <ul className="text-left text-zinc-600 space-y-3 mb-6">
            <li>🎧 Ouve os episódios online</li>
            <li>📺 Assiste no YouTube</li>
            <li>🚫 Sem downloads</li>
            <li>🔒 Sem acesso à comunidade</li>
          </ul>
          <span className="text-xl font-bold text-zinc-800">Grátis</span>
        </div>

        {/* Paid Plan */}
        <div className="border border-orange-500 rounded-2xl p-8 bg-white shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">
            Plano TuPraTodos
          </h3>
          <ul className="text-left text-zinc-600 space-y-3 mb-6">
            <li>🎧 Ouve os episódios online</li>
            <li>📺 Assiste no YouTube e outras plataformas</li>
            <li>⬇️ Download dos episódios</li>
            <li>💬 Acesso ao chat ao vivo</li>
            <li>👑 Conteúdo exclusivo</li>
            <li>
              🌍 <strong>Acesso à Comunidade Tu Pra Tu</strong>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-orange-600">€9.99/mês</span>
            <a
              href="/entrar"
              className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition"
            >
              Entrar Já
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
