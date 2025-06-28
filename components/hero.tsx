import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Materiale de Construcții
            <span className="block text-orange-200">de Calitate Superioară</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Peste 20 de ani de experiență în furnizarea materialelor de construcții. Livrare rapidă în București și
            Ilfov.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categorie/metale">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Explorează Catalogul
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              asChild
            >
              <a href="tel:0721379761">
                <Phone className="mr-2 h-5 w-5" />
                Solicită Ofertă
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-orange-200">Produse disponibile</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-orange-200">Suport clienți</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-orange-200">ani experiență</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
