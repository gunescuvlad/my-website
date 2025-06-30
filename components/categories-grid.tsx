import { categories } from "@/lib/data/products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const PLACEHOLDER = "/placeholder.svg"

export function CategoriesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorii de Produse</h2>
          <p className="text-xl text-gray-600">Explorați gama noastră completă de materiale de construcții</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            // Alege imaginea: dacă există category.image, folosește-o; altfel placeholder
            const imgSrc = category.image ?? PLACEHOLDER

            return (
              <Link key={category.id} href={`/categorie/${category.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative w-full h-48">
                      <Image
                        src={imgSrc}
                        alt={category.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <Badge className="absolute top-2 right-2 bg-orange-600">
                        {category.productCount} produse
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <Badge key={sub.id} variant="outline" className="text-xs">
                            {sub.name}
                          </Badge>
                        ))}
                        {category.subcategories.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.subcategories.length - 3} mai multe
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
