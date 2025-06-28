import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { categories } from "@/lib/data/products"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-orange-600 text-white px-3 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
              IzoPresto
            </div>
            <p className="text-gray-300 mb-4">
              Furnizor de încredere pentru materiale de construcții de peste 20 de ani. Calitate garantată și servicii
              profesionale.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-600" />
                <span>0721 379 761 | 0728 777 485</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-600" />
                <span>david.gunescu@izopresto.ro</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-gray-300 hover:text-orange-600 transition-colors">
                  Finalizare Comandă
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorii</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/categorie/${category.slug}`}
                    className="text-gray-300 hover:text-orange-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informații Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">Sediu</span>
                </div>
                <p className="text-gray-300 ml-6">Str. Dr Constantin Severeanu nr. 9</p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">Depozite</span>
                </div>
                <div className="text-gray-300 ml-6 space-y-1">
                  <p>Sos Alexandriei nr. 86-88 bis</p>
                  <p>Calea Ferentari 159</p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span className="font-medium">Program</span>
                </div>
                <div className="text-gray-300 ml-6 space-y-1">
                  <p>L-V: 08:00 - 18:00</p>
                  <p>S: 08:00 - 14:00</p>
                  <p>D: Închis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 IzoPresto. Toate drepturile rezervate.</p>
          <p className="mt-2">Materiale de construcții de calitate | Livrare rapidă în București și Ilfov</p>
        </div>
      </div>
    </footer>
  )
}
