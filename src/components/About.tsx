import React from "react";

const About = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-zinc-900 rounded-none shadow-2xl w-full">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Sobre o Podcast
      </h2>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-zinc-800 text-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <img
            src="/vibe.jpg"
            alt="Podcast Vibe"
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">A Vibe do Tu Pra Tu 🎙️</h3>
          <p className="leading-relaxed text-base">
            O <strong>Tu Pra Tu Podcast</strong> é um espaço único que ressoa
            com a juventude moçambicana, dentro e fora do país. Apresentado por{" "}
            <strong>Cardo</strong>, também conhecido como{" "}
            <em>Youngg Ricardo</em>, o podcast promove conversas autênticas,
            descontraídas e cheias de conteúdo relevante.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-yellow-300 to-orange-400 text-black p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <img
            src="/cardo.jpg"
            alt="Cardo - Host"
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">Quem é o Host? 🎧</h3>
          <p className="leading-relaxed text-base">
            Cardo é um artista e criativo nato, envolvido na cena cultural
            moçambicana, com um olhar afiado para temas que mexem com a
            realidade dos jovens. Sua abordagem leve e direta cria um ambiente
            confortável que faz os convidados se abrirem de verdade.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-800 text-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <img
            src="/guests.jpg"
            alt="Guests"
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">E os Convidados? 👥</h3>
          <p className="leading-relaxed text-base">
            Os convidados são escolhidos com base no impacto que causam na
            comunidade — músicos, empreendedores, criadores de conteúdo ou
            ativistas. Cada episódio é uma chance de mergulhar em histórias
            reais.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-br from-purple-300 to-pink-400 text-black p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <img
            src="/curiosidade.jpg"
            alt="Curiosidade"
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">Curiosidade 🔥</h3>
          <p className="leading-relaxed text-base">
            O nome "Tu Pra Tu" reflete exatamente o espírito do podcast — uma
            conversa direta, sem rodeios, como se fosse entre amigos num chill
            spot. É um reflexo vivo da criatividade e ousadia moçambicana.
          </p>
        </div>
      </div>

      {/* Roadmap */}
      <div className="mt-24 w-full">
        <h3 className="text-3xl font-bold text-center text-white mb-14">
          Roadmap do Podcast 🚀
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div className="space-y-16 relative border-l-4 border-yellow-400 pl-6">
            {/* Step 1 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              <img
                src="/inicio.jpg"
                alt="Início"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🌱 Início da Ideia
                </h4>
                <p className="text-white text-base leading-relaxed">
                  Tudo começou com a vontade de criar um espaço onde os jovens
                  moçambicanos pudessem se expressar sem filtro, com verdade e
                  originalidade.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              <img
                src="/episodio1.jpg"
                alt="Primeiro Episódio"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🎤 Primeiro Episódio
                </h4>
                <p className="text-white text-base leading-relaxed">
                  O episódio piloto trouxe à tona a vibe do projeto — leve,
                  direta, e conectada à cultura urbana e à juventude.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              <img
                src="/proposito.jpg"
                alt="Propósito"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">
                  💡 Propósito
                </h4>
                <p className="text-white text-base leading-relaxed">
                  Mais do que entretenimento, o Tu Pra Tu é sobre dar voz a quem
                  faz a diferença e documentar a cultura jovem com orgulho.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-16 relative border-l-4 border-yellow-400 pl-6">
            {/* Step 4 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              <img
                src="/impacto.jpg"
                alt="Impacto Cultural"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🌍 Impacto Cultural
                </h4>
                <p className="text-white text-base leading-relaxed">
                  O podcast começou a influenciar movimentos, aproximar artistas
                  e até gerar debates importantes sobre temas que tocam o
                  coração da juventude.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex gap-6 items-start">
              <div className="absolute -left-[30px] top-1 w-6 h-6 bg-yellow-400 border-4 border-white rounded-full shadow-md"></div>
              <img
                src="/futuro.jpg"
                alt="O Futuro"
                className="w-32 h-32 rounded-xl object-cover shadow-md"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">
                  🔥 O Futuro
                </h4>
                <p className="text-white text-base leading-relaxed">
                  A missão continua: expandir, representar e inspirar. Em breve,
                  lives, eventos presenciais e colabs com grandes nomes da cena!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
