import { Truck, Shield, Headphones, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Truck,
      title: "Livrare Rapidă",
      description: "Livrare în 24-48h în București și Ilfov. Gratuită peste 2000 RON.",
    },
    {
      icon: Shield,
      title: "Calitate Garantată",
      description: "Produse certificate de la producători recunoscuți la nivel internațional.",
    },
    {
      icon: Headphones,
      title: "Suport 24/7",
      description: "Echipa noastră de specialiști vă oferă consultanță tehnică oricând.",
    },
    {
      icon: Clock,
      title: "Stoc Permanent",
      description: "Menținem stocuri mari pentru a asigura disponibilitatea produselor.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">De ce să alegeți IzoPresto?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suntem partenerul dumneavoastră de încredere pentru toate nevoile de materiale de construcții
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
