"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

type HeroProps = {}

const slides = [
  "/images/banner.png",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
]

export default function Hero(props: HeroProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Slides background */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Materiale de Construcții
          <span className="block text-orange-200">de Calitate Superioară</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-orange-100">
          Peste 20 de ani de experiență în furnizarea materialelor de construcții. Livrare rapidă în București și Ilfov.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/categorie">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Explorează Catalogul
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            asChild
          >
            <a href="tel:0721379761">
              <Phone className="mr-2 h-5 w-5" />
              Solicită Ofertă
            </a>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-orange-200">Produse disponibile</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-orange-200">Suport clienți</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className="text-orange-200">ani experiență</div>
          </div>
        </div>
      </div>
    </section>
  )
}
