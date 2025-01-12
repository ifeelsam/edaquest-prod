'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
    <section className="mb-16 relative z-10">
      {/* <div className="relative h-[400px] overflow-hidden rounded-lg glass-morphic neon-border"> */}
      {/* <div ref={bannerRef} className="absolute inset-0 parallax"> */}
      {/*   <Image */}
      {/*     src="/placeholder.svg?text=EdaQuest+Banner&width=1200&height=400" */}
      {/*     alt="EdaQuest Banner" */}
      {/*     width={1200} */}
      {/*     height={400} */}
      {/*     className="w-full h-full object-cover pixel-art" */}
      {/*   /> */}
      {/* </div> */}
      {/* </div> */}
      <h1 className="pixel-font text-4xl mt-8 text-center neon-text">
        Where Learning Becomes an Epic Quest
      </h1>
    </section>
  )
}

