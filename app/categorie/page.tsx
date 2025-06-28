// app/categorie/page.tsx
import React from "react"
import Link from "next/link"
import { categories } from "@/lib/data/products"

export default function AllCategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Catalog Categorii</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categorie/${cat.slug}`}
            className="block p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{cat.name}</h2>
            <p className="text-sm text-gray-500">{cat.productCount} produse</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
