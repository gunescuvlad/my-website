import { categories } from "@/lib/data/products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function ToateCategoriile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Toate Categoriile de Materiale</h1>
        <p className="text-xl text-gray-600">
          Explorați gama completă de materiale de construcții organizate pe categorii și subcategorii
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image
                  src={`/placeholder.svg?height=200&width=300&query=${category.name}+materiale+constructii`}
                  alt={category.name}
                  fill
                  className="object-cover rounded-lg"
                />
                <Badge className="absolute top-2 right-2 bg-orange-600">{category.productCount} produse</Badge>
              </div>
              <CardTitle className="flex items-center justify-between">
                <span>{category.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-3">Subcategorii disponibile:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/categorie/${category.slug}?subcategory=${sub.id}`}
                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm text-gray-600 hover:text-orange-600">{sub.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {sub.productCount}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/categorie/${category.slug}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  Vezi toate produsele din {category.name}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="mt-12 bg-orange-50 rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Statistici Generale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{categories.length}</div>
              <div className="text-gray-600">Categorii principale</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {categories.reduce((sum, cat) => sum + cat.subcategories.length, 0)}
              </div>
              <div className="text-gray-600">Subcategorii</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {categories.reduce((sum, cat) => sum + cat.productCount, 0)}+
              </div>
              <div className="text-gray-600">Produse disponibile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
