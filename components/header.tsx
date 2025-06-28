"use client"

import React, { useState } from "react"
import Link from "next/link"
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

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>0721379761 | 0728777485</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>david.gunescu@izopresto.ro</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Livrare gratuită peste 500 RON</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-orange-600 text-white px-3 py-2 rounded-lg font-bold text-xl">IzoPresto</div>
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

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart className="h-4 w-4" />
                {state.itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-600 text-white">{state.itemCount}</Badge>
                )}
                <span className="hidden sm:inline ml-2">{state.total.toFixed(2)} RON</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden bg-transparent">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="py-4">
                    {/* Search in mobile */}
                    <div className="mb-6">
                      <form onSubmit={handleSearch} className="flex">
                        <Input
                          type="text"
                          placeholder="Căutați produse..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="rounded-r-none"
                        />
                        <Button type="submit" className="rounded-l-none bg-orange-600">
                          <Search className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>

                    {/* Mobile nav links */}
                    <nav className="space-y-2">
                      <Link
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Acasă
                      </Link>

                      <div className="py-2 px-4">
                        <div className="font-medium text-gray-900 mb-2">Materiale de Construcții</div>
                        <div className="space-y-1 ml-4">
                          {categories.map((category) => (
                            <Link
                              key={category.id}
                              href={`/categorie/${category.slug}`}
                              className="block py-1 text-sm text-gray-600 hover:text-orange-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="block py-2 px-4 hover:bg-gray-100 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </nav>
                  </div>
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

              {/* Dropdown for categories */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-orange-600 font-medium p-0 h-auto">
                    Materiale de Construcții
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto">
                  <div className="p-2 grid grid-cols-1 gap-1">
                    {categories.map((category, idx) => (
                      <div key={category.id}>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/categorie/${category.slug}`}
                            className="flex items-center justify-between w-full px-3 py-2 hover:bg-orange-50"
                          >
                            <span className="font-medium">{category.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {category.productCount}
                            </Badge>
                          </Link>
                        </DropdownMenuItem>
                        {idx < categories.length - 1 && <DropdownMenuSeparator />}
                      </div>
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

      <CartDialog open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}
