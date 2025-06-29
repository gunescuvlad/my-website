import  Hero  from "@/components/hero"
import { Features } from "@/components/features"
import { CategoriesGrid } from "@/components/categories-grid"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"


export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <CategoriesGrid />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
