// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/context/cart-context"
import Link from "next/link"
import WhatsappPrompt from "@/components/WhatsappPrompt"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IzoPresto – Materiale de Construcții de Top în București",
  description:
    "Izopresto furnizează materiale de construcții premium în București: BCA, fier beton, ciment, adezivi și multe altele, cu livrare rapidă.",
  keywords: [
    "materiale construcții",
    "București",
    "BCA",
    "fier beton",
    "ciment",
    "adezivi",
    "livrare rapidă"
  ],
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://izopresto.ro",
    title: "IzoPresto – Materiale de Construcții de Top în București",
    description:
      "Izopresto furnizează materiale de construcții premium în București: BCA, fier beton, ciment, adezivi și multe altele, cu livrare rapidă.",
    siteName: "IzoPresto",
    images: [
      {
        url: "https://izopresto.ro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IzoPresto – materiale construcții București",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IzoprestoRO",
    title: "IzoPresto – Materiale de Construcții de Top în București",
    description:
      "Izopresto furnizează materiale de construcții premium în București: BCA, fier beton, ciment, adezivi și multe altele.",
    images: ["https://izopresto.ro/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', { page_path: window.location.pathname });
          `}
        </Script>

        <CartProvider>
          <Header />
          {children}
          <Footer />

          {/* WhatsApp Floating Button */}
          <Link
            href={`https://wa.me/40721379761?text=${encodeURIComponent(
              "Bună ziua! Aș dori o ofertă personalizată."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              fixed bottom-6 right-6
              bg-green-500 hover:bg-green-600
              p-4 rounded-full shadow-lg
              flex items-center justify-center
              z-50
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.655-2.059-.173-.298-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.074-.148-.672-1.612-.92-2.206-.242-.579-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.095 3.2 5.076 4.487.709.306 1.26.489 1.689.627.71.227 1.355.195 1.866.118.569-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.002.163C5.373.163-.163 5.7-.163 12.33c0 2.109.553 4.192 1.605 6.017L.002 24l5.661-1.45C7.755 23.318 9.821 23.663 12 23.663c6.63 0 12.168-5.536 12.168-12.333C24.168 5.7 18.63.163 12.002.163zm0 22.38c-1.995 0-3.944-.53-5.616-1.532l-.4-.231-3.36.859.9-3.269-.26-.42C2.929 15.555 2.4 13.563 2.4 11.33 2.4 6.129 6.801 1.73 12.002 1.73s9.602 4.399 9.602 9.6c0 5.201-4.401 9.603-9.602 9.603z" />
            </svg>
          </Link>

          {/* WhatsApp Welcome Prompt (first visit) */}
          <WhatsappPrompt />
        </CartProvider>
      </body>
    </html>
  )
}
