'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function VisionSection() {
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-vision')
          }
        })
      },
      { threshold: 0.5 }
    )

    if (animationRef.current) {
      observer.observe(animationRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="mb-16 relative z-10">
      <h2 className="pixel-font text-2xl mb-4">Our Vision</h2>
      <div className="flex items-center">
        <div ref={animationRef} className="w-1/2 mr-8">
          <Image
            src="/placeholder.svg?text=Education+Evolution&width=400&height=300"
            alt="Education Evolution"
            width={400}
            height={300}
            className="pixel-art"
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg">
            We envision a future where learning is as engaging as gaming, where achievements are permanently recorded on the blockchain, and where education knows no boundaries.
          </p>
        </div>
      </div>
    </section>
  )
}

