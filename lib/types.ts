export interface Category {
  id: string
  name: string
  slug: string
  description: string
  productCount: number
  subcategories: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  slug: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number | null
  unit: string
  categoryId: string
  subcategoryId: string
  images: string[]
  inStock: boolean
  rating: number
  reviews: number
  badge?: string
  specifications: Record<string, string>
}

export interface CartItem extends Product {
  quantity: number
}
