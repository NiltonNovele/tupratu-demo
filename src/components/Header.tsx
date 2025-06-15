"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  VideoIcon,
  ShoppingCartIcon,
  PodcastIcon,
  BadgeDollarSignIcon,
  MailIcon,
  LogInIcon,
  UserPlusIcon,
  UserCircleIcon,
} from "lucide-react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userProfilePic = "/profile.png";

  return (
    <>
      <header className="bg-black text-white px-6 py-4 shadow-md flex flex-wrap justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Tu Pra Tu Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Tu Pra Tu Podcast</span>
        </div>

        {/* Nav Menu */}
        <nav className="flex space-x-6 items-center mt-4 sm:mt-0">
          <Link
            href="/episodes"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <PodcastIcon className="w-4 h-4" /> Episódios
          </Link>
          <Link
            href="/shop"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <ShoppingCartIcon className="w-4 h-4" /> Loja
          </Link>
          <Link
            href="#planos"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <BadgeDollarSignIcon className="w-4 h-4" /> Planos
          </Link>
          <Link
            href="/livestream"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <VideoIcon className="w-4 h-4" /> Live
          </Link>
          <Link
            href="/contacto"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <MailIcon className="w-4 h-4" /> Contacto
          </Link>
        </nav>

        {/* Auth Section */}
        <div className="mt-4 sm:mt-0 flex items-center space-x-4">
          {isLoggedIn ? (
            <button className="flex items-center space-x-2 hover:opacity-80 transition">
              <Image
                src={userProfilePic}
                alt="User Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
              <UserCircleIcon className="w-5 h-5" />
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
              >
                <LogInIcon className="w-4 h-4" /> Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
              >
                <UserPlusIcon className="w-4 h-4" /> Registo
              </Link>
            </>
          )}
        </div>
      </header>

      {/* 🔥 Scrolling Carousel Text */}
      <div className="bg-yellow-500 text-black py-2 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap font-semibold text-sm sm:text-base tracking-wide">
          <span className="mx-8 inline-block">🔥 EH THAT’S CRAZY 🔥</span>
          <span className="mx-8 inline-block">🔥 MELHOR PODCAST EM MOZ 🔥</span>
          <span className="mx-8 inline-block">🔥 TU PRA TU C/CARDOOO 🔥</span>
          <span className="mx-8 inline-block">🔥 EH THAT’S CRAZY 🔥</span>
          <span className="mx-8 inline-block">🔥 MELHOR PODCAST EM MOZ 🔥</span>
          <span className="mx-8 inline-block">🔥 TU PRA TU C/CARDOOO 🔥</span>
        </div>
      </div>
    </>
  );
}
