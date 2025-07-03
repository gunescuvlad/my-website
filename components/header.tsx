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
import { categories, products, type Product } from "@/lib/data/products"
import { CartDialog } from "./cart-dialog"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { state } = useCart()

  // on typing in the search input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value
    setSearchQuery(q)
    if (q.trim().length >= 2) {
      const lower = q.toLowerCase()
      const matches = products
        .filter(p => p.name.toLowerCase().includes(lower))
        .slice(0, 5)
      setSuggestions(matches)
    } else {
      setSuggestions([])
    }
  }

  // submit full search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim())
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
  }

  // redirect to checkout after closing cart
  const handleCheckout = () => {
    setCartOpen(false)
    router.push("/checkout")
  }

  // close cart on navigation
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

            {/* Search Bar + Autocomplete */}
            <div className="relative flex flex-1 w-full max-w-2xl mx-2 md:mx-8">
              <form onSubmit={handleSearch} className="flex w-full">
                <Input
                  type="text"
                  placeholder="Căutați produse..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="rounded-r-none flex-1"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-orange-600 hover:bg-orange-700"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              {suggestions.length > 0 && (
                <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 mt-1 rounded shadow max-h-60 overflow-y-auto z-10">
                  {suggestions.map(prod => (
                    <li key={prod.id}>
                      <Link
                        href={`/produs/${prod.id}`}
                        onClick={() => setSuggestions([])}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {prod.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
              <CartDialog
                open={cartOpen}
                onOpenChange={setCartOpen}
                onCheckout={handleCheckout}
              />

              {/* Mobile menu sheet */}
              <Sheet
                open={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
              >
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="md:hidden bg-transparent"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-4">
                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-orange-600"
                    >
                      Acasă
                    </Link>

                    {/* Materiale de Construcții submenu */}
                    <details className="group border rounded p-2">
                      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium hover:text-orange-600">
                        Materiale de Construcții
                        <ChevronDown className="ml-1 h-4 w-4 transform group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="mt-2 pl-4 flex flex-col space-y-1 max-h-60 overflow-y-auto">
                        {categories.map(cat => (
                          <Link
                            key={cat.id}
                            href={`/categorie/${cat.slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base hover:text-orange-600"
                          >
                            {cat.name} ({cat.productCount})
                          </Link>
                        ))}
                      </div>
                    </details>

                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-orange-600"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/despre"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-orange-600"
                    >
                      Despre Noi
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block border-t">
            <div className="flex space-x-8 py-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Acasă
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-orange-600 font-medium p-0 h-auto"
                  >
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
                        {idx < categories.length - 1 && (
                          <DropdownMenuSeparator />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href="/toate-categoriile"
                      className="w-full px-3 py-2 font-medium text-orange-600"
                    >
                      Vezi toate categoriile →
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Contact
              </Link>
              <Link
                href="/despre"
                className="text-gray-700 hover:text-orange-600 font-medium"
              >
                Despre Noi
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
