import { Truck, Shield, Clock, Award, Users, MapPin } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Livrare Rapidă",
    description: "Livrare în 24-48 ore în toată țara. Transport gratuit pentru comenzi peste 500 RON.",
  },
  {
    icon: Shield,
    title: "Calitate Garantată",
    description: "Toate produsele sunt certificate și testate conform standardelor europene.",
  },
  {
    icon: Clock,
    title: "Suport 24/7",
    description: "Echipa noastră de specialiști este disponibilă pentru consultanță tehnică.",
  },
  {
    icon: Award,
    title: "Experiență 15+ Ani",
    description: "Peste 15 ani de experiență în domeniul materialelor de construcții.",
  },
  {
    icon: Users,
    title: "Clienți Mulțumiți",
    description: "Peste 5000 de clienți mulțumiți și proiecte finalizate cu succes.",
  },
  {
    icon: MapPin,
    title: "Depozite Multiple",
    description: "Depozite în București pentru stoc permanent și livrări rapide.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">De Ce Să Alegi IzoPresto?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem partenerul tău de încredere pentru toate materialele de construcții. Calitate, rapiditate și prețuri
            competitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
