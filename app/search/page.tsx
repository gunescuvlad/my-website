// app/search/page.tsx
import Link from "next/link"
import { products } from "@/lib/data/products"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

interface SearchPageProps {
  searchParams: { q?: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const q = searchParams.q?.toLowerCase() || ""
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Căutare pentru: <span className="text-orange-600">"{q}"</span>
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p>Nu am găsit produse care să corespundă căutării tale.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/">Înapoi la prima pagină</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
