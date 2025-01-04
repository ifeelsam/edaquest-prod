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
          {/* <button onClick={() => login({ loginMethods: ['email', 'wallet'] })} */}
          {/*   className="neon-button px-4 py-2 rounded-xl"> */}
          {/*   Login */}
          {/* </button> */}
          <Profile />
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


function Profile() {
  const { ready, login, authenticated, user } = usePrivy();

  if (ready && !authenticated) {
    return (
      <button onClick={() => login({ loginMethods: ['email', 'wallet'] })}
        className="neon-button px-4 py-2 rounded-xl">
        Login
      </button>
    )
  }
  if (ready && authenticated) {
    const imgUri = `https://api.dicebear.com/9.x/bottts/svg?seed=${user?.wallet?.address}`

    return (
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img src={imgUri} alt="User Avatar" width={40} height={40} className="pixel-art rounded-full neon-border" />
          <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </div>
        <div className="text-sm">
          <p className="font-bold">1000 EDQ</p>
          <p className="text-xs">Wallet Balance</p>
        </div>
      </div>
    )
  }
}
