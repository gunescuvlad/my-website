"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Plus, Minus, ShoppingCart, MessageCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/lib/context/cart-context"
import { type Product, products, categories } from "@/lib/data/products"

interface ProductPageProps {
  product: Product
}

export function ProductPage({ product }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { dispatch } = useCart()

  const category = categories.find((cat) => cat.id === product.category)
  const subcategory = category?.subcategories.find((sub) => sub.id === product.subcategory)

  const similarProducts = products
    .filter((p) => p.subcategory === product.subcategory && p.id !== product.id)
    .slice(0, 4)

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
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  const handleWhatsApp = () => {
    const message = `Bună ziua! Sunt interessat de produsul: ${product.name}. Vă rog să îmi oferiți mai multe detalii și o ofertă de preț.`
    const whatsappUrl = `https://wa.me/40721379761?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Verificăm dacă ar trebui să afișăm tabelul
  const showSpecTable =
    product.subcategory === "polistiren-expandat" ||
    product.subcategory === "polistiren-grafitat"

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">
          Acasă
        </Link>
        <span>/</span>
        <Link href={`/categorie/${category?.slug}`} className="hover:text-orange-600">
          {category?.name}
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      {/* Back Button */}
      <Button variant="outline" className="mb-6 bg-transparent" asChild>
        <Link href={`/categorie/${category?.slug}`}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Înapoi la {category?.name}
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-orange-600" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            {product.badge && (
              <Badge className="mb-2 bg-orange-600">
                {product.badge === "bestseller" && "Bestseller"}
                {product.badge === "new" && "Nou"}
                {product.badge === "offer" && "Ofertă"}
              </Badge>
            )}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{subcategory?.name}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-1 mr-4">{renderStars(product.rating)}</div>
            <span className="text-sm text-gray-500">
              {product.rating} din 5 ({product.reviews} recenzii)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            {typeof product.price === "number" ? (
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-gray-900">
                  {product.price.toFixed(2)} RON
                </span>
                <span className="text-lg text-gray-500">/{product.unit}</span>
              </div>
            ) : (
              <div className="text-2xl font-semibold text-orange-600">Preț la cerere</div>
            )}
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <Badge variant="outline" className="text-green-600 border-green-600">
                În stoc
              </Badge>
            ) : (
              <Badge variant="outline" className="text-red-600 border-red-600">
                Epuizat
              </Badge>
            )}
          </div>

          {/* Quantity and Add to Cart */}
          {product.inStock && (
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-medium">Cantitate:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {typeof product.price === "number" && (
                <div className="mb-4">
                  <span className="text-lg font-semibold">
                    Total: {(product.price * quantity).toFixed(2)} RON
                  </span>
                </div>
              )}

              <div className="flex space-x-4">
                <Button onClick={addToCart} className="flex-1 bg-orange-600 hover:bg-orange-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Adaugă în coș
                </Button>
                <Button onClick={handleWhatsApp} variant="outline" className="flex-1 bg-transparent">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="specifications">Specificații Tehnice</TabsTrigger>
          <TabsTrigger value="reviews">Recenzii ({product.reviews})</TabsTrigger>
        </TabsList>

        {/* SPECIFICATIONS */}
        <TabsContent value="specifications">
          <Card>
            <CardHeader>
              <CardTitle>Specificații Tehnice</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Afișăm întâi imaginea-tabel, dacă e cazul */}
              {showSpecTable && (
                <div className="mb-6 text-center">
                  <Image
                    src="/images/spec-table.png"
                    alt="Tabel grosimi polistiren"
                    width={800}
                    height={400}
                    className="mx-auto rounded-lg shadow"
                  />
                </div>
              )}

              {/* Apoi lista de specificații textuale */}
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

        {/* REVIEWS */}
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Recenzii Clienți</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <p>Recenziile vor fi disponibile în curând.</p>
                <p className="text-sm mt-2">
                  Rating actual: {product.rating}/5 bazat pe {product.reviews} recenzii
                </p>
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
            {similarProducts.map((similarProduct) => (
              <Card key={similarProduct.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Link href={`/produs/${similarProduct.id}`}>
                    <Image
                      src={similarProduct.images[0] || "/placeholder.svg"}
                      alt={similarProduct.name}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded-lg mb-3 hover:scale-105 transition-transform cursor-pointer"
                    />
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer">
                      {similarProduct.name}
                    </h3>
                  </Link>
                  {typeof similarProduct.price === "number" ? (
                    <p className="text-lg font-bold text-gray-900">
                      {similarProduct.price.toFixed(2)} RON
                    </p>
                  ) : (
                    <p className="text-orange-600 font-medium">Preț la cerere</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
