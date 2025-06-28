import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Categorii de Produse</h1>
        <p className="text-xl text-gray-600">
          Explorează gama completă de materiale de construcții organizate pe categorii
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image
                  src={`/placeholder.svg?height=200&width=300&query=${category.name}`}
                  alt={category.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <CardTitle className="flex items-center justify-between">
                <span>{category.name}</span>
                <Badge variant="secondary">{category.productCount}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{category.description}</p>

              <div className="space-y-2 mb-4">
                <h4 className="font-semibold text-sm text-gray-700">Subcategorii:</h4>
                <div className="flex flex-wrap gap-1">
                  {category.subcategories.map((sub) => (
                    <Badge key={sub.id} variant="outline" className="text-xs">
                      {sub.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <Link
                href={`/categorii/${category.slug}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Vezi Produsele
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
