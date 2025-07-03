"use client"

import { useState } from "react"
import type { Category, Product } from "@/lib/data/products"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Grid, List } from "lucide-react"
import Link from "next/link"

interface CategoryPageProps {
  category: Category
  products: Product[]
}

export function CategoryPage({ category, products }: CategoryPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = products
    // 1) Filtrare după text și subcategorie
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSubcategory =
        selectedSubcategory === "all" ||
        product.subcategory === selectedSubcategory
      return matchesSearch && matchesSubcategory
    })
    // 2) Eliminare duplicate pe baza id-ului
    .filter((prod, idx, arr) => arr.findIndex((p) => p.id === prod.id) === idx)
    // 3) Sortare
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          const priceA = typeof a.price === "number" ? a.price : 0
          const priceB = typeof b.price === "number" ? b.price : 0
          return priceA - priceB
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">
          Acasă
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{category.name}</span>
      </nav>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {category.name}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Descoperiți gama noastră completă de{" "}
          {category.name.toLowerCase()} de calitate superioară.
        </p>

        {/* Badges clickabile pentru filtrare rapidă */}
        <div className="flex flex-wrap gap-2">
          <Badge
            key="all"
            className="cursor-pointer"
            variant={selectedSubcategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedSubcategory("all")}
          >
            Toate ({products.length})
          </Badge>
          {category.subcategories.map((sub) => (
            <Badge
              key={sub.id}
              className="cursor-pointer"
              variant={selectedSubcategory === sub.id ? "default" : "outline"}
              onClick={() => setSelectedSubcategory(sub.id)}
            >
              {sub.name} ({sub.productCount})
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900 mb-4">Filtrare</h3>

            {/* Subcategories Filter (radio-uri) */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Subcategorii</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="subcategory"
                    value="all"
                    checked={selectedSubcategory === "all"}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">Toate ({products.length})</span>
                </label>
                {category.subcategories.map((sub) => (
                  <label key={sub.id} className="flex items-center">
                    <input
                      type="radio"
                      name="subcategory"
                      value={sub.id}
                      checked={selectedSubcategory === sub.id}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">
                      {sub.name} ({sub.productCount})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Controls */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Căutați în această categorie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sortează după" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nume A-Z</SelectItem>
                  <SelectItem value="price">Preț crescător</SelectItem>
                </SelectContent>
              </Select>
              {/* View toggle */}
              <div className="flex space-x-2">
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

            <div className="text-sm text-gray-600">
              Se afișează {filteredProducts.length} din {products.length} produse
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nu au fost găsite produse care să corespundă criteriilor de căutare.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSubcategory("all")
                }}
                className="mt-4"
                variant="outline"
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
