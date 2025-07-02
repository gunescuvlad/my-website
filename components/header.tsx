"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Menu, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useCart } from "@/lib/context/cart-context"
import { categories } from "@/lib/data/products"
import { CartDialog } from "./cart-dialog"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const { state } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
  }

  // Navigare imediată la checkout după închiderea coșului
  const handleCheckout = () => {
    setCartOpen(false)
    router.push("/checkout")
  }

  // Închide coșul automat la schimbarea paginii
  useEffect(() => {
    setCartOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>0721379761 | 0728777485</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>office@izopresto.ro</span>
            </div>
          </div>
          <div className="hidden md:block">Livrare gratuită peste 2000 RON</div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo IzoPresto"
                width={75}
                height={15}
                priority
                className="block"
              />
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="flex w-full">
                <Input
                  type="text"
                  placeholder="Căutați produse..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none"
                />
                <Button type="submit" className="rounded-l-none bg-orange-600 hover:bg-orange-700">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart button */}
              <Button
                variant="ghost"
                onClick={() => setCartOpen(true)}
                className="relative"
                aria-label="Deschide coșul de cumpărături"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 rounded-full"
                  >
                    {state.itemCount}
                  </Badge>
                )}
              </Button>

              {/* Cart Dialog */}
              <CartDialog open={cartOpen} onOpenChange={setCartOpen} onCheckout={handleCheckout} />

              {/* Mobile menu sheet */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden bg-transparent">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  {/* ... conținut sheet ... */}
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block border-t">
            <div className="flex space-x-8 py-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                Acasă
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-orange-600 font-medium p-0 h-auto">
                    Materiale de Construcții
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto">
                  <div className="p-2 grid grid-cols-1 gap-1">
                    {categories.map((cat, idx) => (
                      <React.Fragment key={cat.id}>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/categorie/${cat.slug}`}
                            className="flex items-center justify-between w-full px-3 py-2 hover:bg-orange-50"
                          >
                            <span className="font-medium">{cat.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {cat.productCount}
                            </Badge>
                          </Link>
                        </DropdownMenuItem>
                        {idx < categories.length - 1 && <DropdownMenuSeparator />}
                      </React.Fragment>
                    ))}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/toate-categoriile" className="w-full px-3 py-2 font-medium text-orange-600">
                      Vezi toate categoriile →
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium">
                Contact
              </Link>
              <Link href="/despre" className="text-gray-700 hover:text-orange-600 font-medium">
                Despre Noi
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
