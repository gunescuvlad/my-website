"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Search, Grid, List } from "lucide-react"
import { categories, products } from "@/lib/data"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categoryProducts = products.filter((product) => product.categoryId === category.id)

  const filteredProducts = categoryProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategoryId === selectedSubcategory
      return matchesSearch && matchesSubcategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return (a.price || 0) - (b.price || 0)
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

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
            <BreadcrumbPage>{category.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{category.description}</p>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {filteredProducts.length} produse găsite
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="font-semibold text-lg mb-4">Filtrare</h3>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Caută în categorie</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Caută produse..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Subcategories */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Subcategorii</label>
              <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Toate subcategoriile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toate subcategoriile</SelectItem>
                  {category.subcategories.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id}>
                      {sub.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subcategory List */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Subcategorii disponibile:</h4>
              <div className="space-y-2">
                {category.subcategories.map((sub) => {
                  const subProducts = categoryProducts.filter((p) => p.subcategoryId === sub.id)
                  return (
                    <div key={sub.id} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{sub.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {subProducts.length}
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sortează după" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nume</SelectItem>
                  <SelectItem value="price">Preț</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Nu am găsit produse pentru criteriile selectate</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSubcategory("all")
                }}
              >
                Resetează filtrele
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
