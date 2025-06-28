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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Link href={`/produs/${product.id}`}>
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform cursor-pointer"
            />
          </Link>
          {product.badge && (
            <Badge className="absolute top-2 left-2 bg-orange-600">
              {product.badge === "bestseller" && "Bestseller"}
              {product.badge === "new" && "Nou"}
              {product.badge === "offer" && "Ofertă"}
            </Badge>
          )}
          {!product.inStock && <Badge className="absolute top-2 right-2 bg-red-600">Epuizat</Badge>}
        </div>

        <Link href={`/produs/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1">{renderStars(product.rating)}</div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews} recenzii)</span>
        </div>

        <div className="mb-4">
          {typeof product.price === "number" ? (
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">{product.price.toFixed(2)} RON</span>
              <span className="text-sm text-gray-500">/{product.unit}</span>
            </div>
          ) : (
            <div className="text-lg font-semibold text-orange-600">Preț la cerere</div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {product.inStock ? (
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Cantitate:</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <Button onClick={addToCart} className="w-full bg-orange-600 hover:bg-orange-700">
              <ShoppingCart className="h-4 w-4 mr-2" />
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
