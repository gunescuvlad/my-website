"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { products } from "@/lib/data"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .slice(0, 8)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Caută produse</DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Caută materiale de construcții..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>

        {searchTerm && (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produse/${product.slug}`}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-1">{product.name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      {product.price ? (
                        <span className="text-orange-600 font-semibold text-sm">{product.price} RON</span>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          Preț la cerere
                        </Badge>
                      )}
                      <Badge variant={product.inStock ? "default" : "destructive"} className="text-xs">
                        {product.inStock ? "În stoc" : "Epuizat"}
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">Nu am găsit produse pentru "{searchTerm}"</div>
            )}
          </div>
        )}

        {!searchTerm && <div className="text-center py-8 text-gray-500">Începe să scrii pentru a căuta produse</div>}
      </DialogContent>
    </Dialog>
  )
}
