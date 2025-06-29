// components/HeroCarousel.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides: string[] = [
  "/images/banner.png",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000) // schimbă slide-ul la fiecare 5 secunde

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Overlay cu text și butoane */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Materiale de Construcții
        </h1>
        <p className="mt-2 text-white/90">
          Peste 20 de ani de experiență în furnizarea materialelor de
          construcții. Livrare rapidă în București și Ilfov.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-white text-orange-600 px-4 py-2 rounded">
            Explorează Catalogul →
          </button>
          <button className="border border-white text-white px-4 py-2 rounded">
            Solicită Ofertă
          </button>
        </div>
      </div>
    </div>
  )
}
