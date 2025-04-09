"use client";
// import { navigate } from '@/lib/action'
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "./store/useUser";

const loginOptions: Array<
  | "wallet"
  | "email"
  | "sms"
  | "google"
  | "twitter"
  | "discord"
  | "github"
  | "linkedin"
  | "spotify"
  | "instagram"
  | "tiktok"
  | "apple"
  | "farcaster"
  | "telegram"
> = ["email", "google"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { login } = usePrivy();
  function handlelogin() {
    login({ loginMethods: loginOptions });
  }
  return (
    <header className="glass-morphic fixed w-full z-50 mb-2 h-auto lg:h-16 flex flex-col lg:flex-row items-center justify-between p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/diamond.png"
            alt="EdaQuest Logo"
            width={40}
            height={40}
            className="pixel-art"
          />
          <span className="ml-2 text-3xl font-bold neon-glow">EdaQuest</span>
        </Link>
        <Afterlogin />
        <button
          className="sm:hidden neon-button px-2 py-1 rounded-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </nav>
      {isMenuOpen && (
        <div className="sm:hidden mt-2 p-4 right-36 text-center glass-morphic rounded-xl">
          <Link
            href="/contact"
            className="block neon-button px-4 py-2 rounded-xl mb-2"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="block neon-button px-4 py-2 rounded-xl mb-2"
          >
            About
          </Link>
          <button
            onClick={() => handlelogin()}
            className="block neon-button px-6 py-2 rounded-xl"
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
}

function Afterlogin() {
  const { ready, login, authenticated, user } = usePrivy();
  const { UserProgress } = useUser();

  if (ready && !authenticated) {
    return (
      <div className="hidden sm:flex space-x-4">
        <Link href="/contact" className="neon-button px-4 py-2 rounded-xl">
          Contact
        </Link>
        <Link href="/about" className="neon-button px-4 py-2 rounded-xl">
          About
        </Link>
        <Link href="/plans" className="neon-button px-4 py-2 rounded-xl">
          Pricing
        </Link>
        <button
          onClick={() => login({ loginMethods: loginOptions })}
          className="neon-button px-4 py-2 rounded-xl"
        >
          Login
        </button>
      </div>
    );
  }

  if (ready && authenticated) {
    const imgUri = `https://api.dicebear.com/9.x/bottts/svg?seed=${user?.id}`;

    return (
      <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-4">
        <div className="text-center">
          <p className="text-sm">Level</p>
          <p className="text-xl font-bold neon-glow">{UserProgress?.level}</p>
        </div>
        <div className="text-center">
          <p className="text-sm">EDU</p>
          <p className="text-xl font-bold">
            1,000 <span className="text-accent">⧫</span>
          </p>
        </div>
        <div className="relative">
          <Image
            src={imgUri}
            alt="User Avatar"
            width={40}
            height={40}
            className="pixel-art rounded-full neon-border"
          />
          <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    );
  }
}
