import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Shield, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Materiale de Construcții
            <span className="block text-orange-200">de Calitate Superioară</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Furnizor de încredere pentru toate nevoile tale de construcție. Livrare rapidă în toată țara.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              <Link href="/categorii" className="flex items-center">
                Vezi Catalogul
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Solicită Ofertă
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 mb-4 text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Livrare Rapidă</h3>
              <p className="text-orange-200">În 24-48 ore în toată țara</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4 text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Calitate Garantată</h3>
              <p className="text-orange-200">Produse certificate și testate</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 mb-4 text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Suport 24/7</h3>
              <p className="text-orange-200">Consultanță tehnică specializată</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
