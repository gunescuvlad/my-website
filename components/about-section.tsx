import { Award, Users, Truck, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Despre IzoPresto</h2>
            <p className="text-lg text-gray-600 mb-6">
              Cu peste 20 de ani de experiență în domeniul materialelor de construcții, IzoPresto s-a impus ca unul
              dintre liderii pieței din România. Oferim produse de calitate superioară de la cei mai reputați
              producători europeni.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Misiunea noastră este să furnizăm materialele de construcții potrivite pentru fiecare proiect, de la
              renovări mici la construcții industriale complexe, cu servicii de consultanță tehnică specializată.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Produse certificate</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Clienți mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-3">
                  <Truck className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24-48h</div>
                <div className="text-sm text-gray-600">Timp de livrare</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">Ani experiență</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-orange-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Avantajele noastre</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Stocuri permanente în 2 depozite din București</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Consultanță tehnică specializată gratuită</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Livrare rapidă cu echipe proprii</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prețuri competitive și oferte personalizate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Suport tehnic 24/7 pentru proiecte complexe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
