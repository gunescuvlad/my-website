import { notFound } from "next/navigation"
import { getProductById, allProducts } from "@/lib/data/products"
import { ProductPage } from "@/components/product-page"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

export default function Product({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return <ProductPage product={product} />
}
