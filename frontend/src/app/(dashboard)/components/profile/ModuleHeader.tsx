'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ModuleHeader() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      if (bannerRef.current) {
        const rect = bannerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        bannerRef.current.style.transform = `translate(${x / 50}px, ${y / 50}px)`
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <header className="mb-8">
      <div className="relative h-40 overflow-hidden rounded-lg neon-border">
        <div ref={bannerRef} className="absolute inset-0 parallax">
          <Image
            src="/placeholder.svg?text=Smart+Contract+Banner&width=1200&height=160"
            alt="Smart Contract Fundamentals"
            width={1200}
            height={160}
            className="w-full h-full object-cover pixel-art"
          />
        </div>
      </div>
      <h1 className={`pixel-font text-3xl mt-4 neon-text typing-effect ${isVisible ? 'w-full' : 'w-0'}`}>
        Smart Contract Fundamentals
      </h1>
    </header>
  )
}

