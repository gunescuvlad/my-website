"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/lib/context/cart-context"
import type { Product } from "@/lib/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { product, quantity },
    })
    setQuantity(1)
  }

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        {/* Imagine produs cu dimensiune controlată și obiect-fit */}
        <div className="relative mb-4 w-full h-56 flex items-center justify-center overflow-hidden rounded-lg group-hover:scale-105 transition-transform">
          <Link href={`/produs/${product.id}`}> 
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain object-center cursor-pointer"
            />
          </Link>
          {product.badge && (
            <Badge className="absolute top-2 left-2 bg-orange-600">
              {product.badge === "bestseller" && "Bestseller"}
              {product.badge === "new" && "Nou"}
              {product.badge === "offer" && "Ofertă"}
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="absolute top-2 right-2 bg-red-600">Epuizat</Badge>
          )}
        </div>

        <Link href={`/produs/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>

       

        {/* Preț la cerere + WhatsApp */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-orange-600">Preț la cerere</span>
            <a
              href={`https://wa.me/40721379761?text=${encodeURIComponent(
                `Bună ziua! Aș dori o ofertă pentru produsul ${product.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.655-2.059-.173-.298-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.074-.148-.672-1.612-.92-2.206-.242-.579-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.095 3.2 5.076 4.487.709.306 1.26.489 1.689.627.71.227 1.355.195 1.866.118.569-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.002.163C5.373.163-.163 5.7-.163 12.33c0 2.109.553 4.192 1.605 6.017L.002 24l5.661-1.45C7.755 23.318 9.821 23.663 12 23.663c6.63 0 12.168-5.536 12.168-12.333C24.168 5.7 18.63.163 12.002.163zm0 22.38c-1.995 0-3.944-.53-5.616-1.532l-.4-.231-3.36.859.9-3.269-.26-.42C2.929 15.555 2.4 13.563 2.4 11.33 2.4 6.129 6.801 1.73 12.002 1.73s9.602 4.399 9.602 9.6c0 5.201-4.401 9.603-9.602 9.603z"/>
              </svg>
            </a>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {product.inStock ? (
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Cantitate:</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-3 w-3"/>
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-3 w-3"/>
                </Button>
              </div>
            </div>
            <Button onClick={addToCart} className="w-full bg-orange-600 hover:bg-orange-700">
              <ShoppingCart className="h-4 w-4 mr-2"/>
              Adaugă în coș
            </Button>
          </div>
        ) : (
          <Button disabled className="w-full">
            Produsul nu este disponibil
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
