"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Plus, Minus, MessageCircle, Phone } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { products, categories } from "@/lib/data"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const category = categories.find((cat) => cat.id === product.categoryId)
  const subcategory = category?.subcategories.find((sub) => sub.id === product.subcategoryId)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    toast({
      title: "Produs adăugat în coș",
      description: `${quantity}x ${product.name} a fost adăugat în coșul de cumpărături.`,
    })
  }

  const handleWhatsApp = () => {
    const message = `Salut! Sunt interesat de produsul: ${product.name}. Cantitate: ${quantity}. Vă rog să îmi trimiteți o ofertă.`
    const whatsappUrl = `https://wa.me/40721379761?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Similar products
  const similarProducts = products
    .filter((p) => p.subcategoryId === product.subcategoryId && p.id !== product.id)
    .slice(0, 4)

  const totalPrice = product.price ? product.price * quantity : 0

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categorii">Categorii</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/categorii/${category?.slug}`}>{category?.name}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div>
          <div className="aspect-square relative mb-4">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
            {product.badge && <Badge className="absolute top-4 left-4 bg-orange-600">{product.badge}</Badge>}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? "border-orange-600" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} recenzii)</span>
              <Badge variant={product.inStock ? "default" : "destructive"}>
                {product.inStock ? "În stoc" : "Epuizat"}
              </Badge>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              {product.price ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-orange-600">{product.price} RON</span>
                  <span className="text-gray-500">/{product.unit}</span>
                </div>
              ) : (
                <div className="text-2xl font-bold text-gray-600">Preț la cerere</div>
              )}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">Cantitate:</label>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-gray-500">{product.unit}</span>
            </div>

            {product.price && (
              <div className="text-xl font-semibold text-gray-900">Total: {totalPrice.toFixed(2)} RON</div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-orange-600 hover:bg-orange-700"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Adaugă în coș
            </Button>

            <Button onClick={handleWhatsApp} variant="outline" className="w-full bg-transparent" size="lg">
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicită ofertă WhatsApp
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent" asChild>
                <a href="tel:0721379761">
                  <Phone className="h-4 w-4 mr-2" />
                  0721379761
                </a>
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" asChild>
                <a href="tel:0728777485">
                  <Phone className="h-4 w-4 mr-2" />
                  0728777485
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="specifications">Specificații</TabsTrigger>
          <TabsTrigger value="description">Descriere Detaliată</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications">
          <Card>
            <CardHeader>
              <CardTitle>Specificații Tehnice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle>Descriere Detaliată</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
              <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Informații importante:</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Produsul este disponibil pentru livrare în toată țara</li>
                  <li>• Transport gratuit pentru comenzi peste 500 RON</li>
                  <li>• Consultanță tehnică gratuită</li>
                  <li>• Garanție conform standardelor producătorului</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Produse Similare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
