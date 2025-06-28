import { notFound } from "next/navigation"
import { categories, getProductsByCategory } from "@/lib/data/products"
import { CategoryPage } from "@/components/category-page"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default function Category({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(params.slug)

  return <CategoryPage category={category} products={products} />
}
