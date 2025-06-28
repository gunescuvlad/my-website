import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IzoPresto - Materiale de Construcții | București",
  description:
    "Furnizor de materiale de construcții de calitate în București. Peste 500 de produse disponibile cu livrare rapidă. Metale, BCA, ciment, adezivi și multe altele.",
  keywords: "materiale constructii, bucuresti, bca, fier beton, ciment, adezivi, gips carton, livrare rapida",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
