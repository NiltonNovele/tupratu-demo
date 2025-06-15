"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${mode === "register" ? "Registering" : "Logging in"}:`, form);
    // TODO: send data to backend or API
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Tu Pra Tu Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-4">
          {mode === "register" ? "Criar Conta" : "Iniciar Sessão"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === "register" && (
            <div>
              <label className="block mb-1 text-sm">Nome</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Palavra-passe</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all text-black py-2 rounded-xl font-bold"
          >
            {mode === "register" ? "Registar" : "Entrar"}
          </button>
        </form>

        {/* Links */}
        <div className="text-sm text-center text-zinc-400 mt-6 space-y-2">
          {mode === "login" && (
            <p>
              <a
                href="/forgot-password"
                className="text-yellow-400 hover:underline"
              >
                Esqueceste a tua palavra-passe?
              </a>
            </p>
          )}
          <p>
            {mode === "register"
              ? "Já tens uma conta?"
              : "Ainda não tens uma conta?"}{" "}
            <button
              className="text-yellow-400 hover:underline"
              onClick={() =>
                setMode(mode === "register" ? "login" : "register")
              }
            >
              {mode === "register" ? "Iniciar sessão" : "Registar"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
