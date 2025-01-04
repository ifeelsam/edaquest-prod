"use client"
import { usePrivy } from '@privy-io/react-auth'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { login } = usePrivy()
  return (
    <header className="glass-morphic fixed w-full z-50 px-4 py-2">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/diamond.png" alt="EdaQuest Logo" width={40} height={40} className="pixel-art" />
          <span className="ml-2 text-3xl font-bold neon-glow">EdaQuest</span>
        </Link>
        <div className="hidden sm:flex space-x-4">
          <Link href="#" className="neon-button px-4 py-2 rounded-xl">Courses</Link>
          <Link href="#" className="neon-button px-4 py-2 rounded-xl">About</Link>
          <button onClick={() => login({ loginMethods: ['email', 'wallet'] })}
            className="neon-button px-4 py-2 rounded-xl">
            Login
          </button>
        </div>
        <button
          className="sm:hidden neon-button px-2 py-1 rounded-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </nav>
      {isMenuOpen && (
        <div className="sm:hidden mt-2 p-4 glass-morphic rounded-xl">
          <Link href="#" className="block neon-button px-4 py-2 rounded-xl mb-2">Courses</Link>
          <Link href="#" className="block neon-button px-4 py-2 rounded-xl mb-2">About</Link>
          <button onClick={() => login({ loginMethods: ["email", "wallet"] })} className="block neon-button px-4 py-2 rounded-xl">Login</button>
        </div>
      )}
    </header>
  )
}

