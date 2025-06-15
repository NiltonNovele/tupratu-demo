import {
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaApple,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section
      className="bg-black py-12 px-4 text-center text-lg text-white"
      id="contacto"
    >
      {/* Subscription Section */}
      <div className="mb-10 max-w-xl mx-auto">
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Inscreva-se para nossa newsletter"
            className="bg-transparent border-b-2 border-white text-white p-3 w-full sm:w-80 focus:outline-none"
          />
          <button className="bg-orange-500 py-3 px-6 rounded-full text-white hover:bg-orange-600 transition w-full sm:w-auto">
            Inscrever-se
          </button>
        </form>
      </div>

      {/* Copyright */}
      <p className="mb-8 text-sm text-zinc-400 px-2">
        &copy; {new Date().getFullYear()} Tu Pra Tu Podcast | SynctechX. Todos
        os direitos reservados.
      </p>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-6 text-2xl mb-8">
        <a href="#" className="hover:text-yellow-400">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-yellow-400">
          <FaYoutube />
        </a>
        <a href="#" className="hover:text-yellow-400">
          <FaTiktok />
        </a>
        <a href="#" className="hover:text-yellow-400">
          <FaSpotify />
        </a>
        <a href="#" className="hover:text-yellow-400">
          <FaApple />
        </a>
        <a href="#" className="hover:text-yellow-400">
          <FaFacebook />
        </a>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 text-sm sm:text-base text-zinc-400">
        <p>
          Email:{" "}
          <a
            href="mailto:contato@tupratu.com"
            className="hover:text-yellow-400"
          >
            contato@tupratu.com
          </a>
        </p>
        <p>
          Telefone:{" "}
          <a href="tel:+1234567890" className="hover:text-yellow-400">
            +123 456 7890
          </a>
        </p>
      </div>
    </section>
  );
}
