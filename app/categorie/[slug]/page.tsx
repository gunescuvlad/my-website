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

// Must be async so Next.js can "await" params before use
export default async function Category({ params }: CategoryPageProps) {
  // dummy await to satisfy Next.js sync-dynamic-apis requirement
  await Promise.resolve()

  const category = categories.find((cat) => cat.slug === params.slug)
  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(params.slug)
  return <CategoryPage category={category} products={products} />
}
