"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from './store/useUser'
import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";
import { ExternalLink, LogOut, User } from "lucide-react";

export default function TopBar() {
  const { UserDetails, UserProgress } = useUser();
  const { logout } = usePrivy();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log('User:', UserDetails)
  const imgUri = `https://api.dicebear.com/9.x/bottts/svg?seed=${UserDetails?.id}`
  return (
    <header className="glass-morphic mb-2 h-auto lg:h-16 flex flex-col lg:flex-row items-center justify-between p-4">
      <Link href="/" className="flex items-center mb-4 lg:mb-0">
        <Image
          src="/diamond.png"
          alt="EdaQuest Logo"
          width={40}
          height={40}
          className="pixel-art"
        />
        <span className="ml-2 text-3xl font-bold neon-glow">EdaQuest</span>
      </Link>
      <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-4">
        <div className="text-center">
          <p className="text-sm">Level</p>
          <p className="text-xl font-bold neon-glow">{UserProgress?.level}</p>
        </div>
        {/* <div className="w-48 hidden sm:block"> */}
        {/* <p className="text-sm">XP: 23,450/25,000</p> */}
        {/* <div className="w-full bg-gray-700 rounded-full h-2"> */}
        {/*   <div className="bg-accent w-11/12 h-full rounded-full"></div> */}
        {/* </div> */}
        {/* </div> */}
        <div className="text-center">
          <p className="text-sm">EDU</p>
          <p className="text-xl font-bold">
            1,000 <span className="text-accent">⧫</span>
          </p>
        </div>
        <div className="relative">
          {isDropdownOpen && (
            <div className="fixed top-16 right-4 w-56 bg-[#2d0a4e] neon-border rounded-xl shadow-lg py-2 z-10">
              {/* <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gray-800 transform rotate-45"></div> */}
              <div
                className="px-4 py-2 border-b border-gray-700"
                onClick={() =>
                  navigator.clipboard.writeText(UserProgress?.userAddress || "")
                }
              >
                <p className="text-md font-semibold">
                  {UserDetails?.google?.name || "User"}
                </p>
                <p className="text-xs text-gray-400">
                  {UserProgress?.userAddress.slice(0, 8)}...
                  {UserProgress?.userAddress.slice(-4)}
                </p>
              </div>
              <Link
                href={"/profile"}
                className="w-full flex items-center gap-2 px-4 py-2  text-white hover:bg-[#7027b4b6]"
              >
                {/* className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors" */}

                <User />
                <span>Profile</span>
              </Link>
              <Link
              href={`https://edu-chain-testnet.blockscout.com/address/${UserProgress?.userAddress}`}

                className="w-full flex items-center gap-2 px-4 py-2  text-white hover:bg-[#7027b4b6]"
              >
                <ExternalLink />
                <span>View on Explorer</span>
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsDropdownOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-md text-red-400 hover:bg-[#7027b4b6]"
              >
                <LogOut />
                <span>Logout</span>
              </button>
            </div>
          )}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="focus:outline-none"
          >
            <Image
              src={imgUri}
              alt="User Avatar"
              width={40}
              height={40}
              className="pixel-art rounded-full neon-border cursor-pointer"
            />
            <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

