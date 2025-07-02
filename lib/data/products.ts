
export interface Product {
  id: string
  name: string
  category: string
  subcategory: string
  price: number | "request"
  unit: string
  description: string
  specifications: Record<string, string>
  images: string[]
  inStock: boolean
  rating: number
  reviews: number
  badge?: "bestseller" | "new" | "offer"
}

export interface Category {
  id: string
  name: string
  slug: string
  image?: string 
  subcategories: Subcategory[]
  productCount: number
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "metale",
    name: "METALE",
    slug: "metale",
    image: "/images/metalec.jpg",
    productCount: 15,
    subcategories: [
      { id: "fier-beton", name: "Fier beton", slug: "fier-beton", productCount: 10 },
      { id: "fier-beton-fasonat", name: "Fier beton fasonat", slug: "fier-beton-fasonat", productCount: 5 },
    ],
  },

  // —————————————
  // Materiale Hidroizolatii
  {
    id: "hidroizolatii",
    name: "MATERIALE HIDROIZOLATII",
    slug: "hidroizolatii",
    image:"/images/materialehidroizolatiic.jpg",
    productCount:  23,
      
    subcategories: [
      { id: "decobit",       name: "DECOBIT – Carton Bituminat", slug: "decobit",       productCount: 2 },
      { id: "gama-profesional", name: "Gama Profesional",        slug: "gama-profesional", productCount: 4 },
      { id: "gama-standard",   name: "Gama Standard",          slug: "gama-standard",   productCount: 1 },
      { id: "gama-festa",      name: "Gama Festa",             slug: "gama-festa",      productCount: 11 },
      { id: "amorse-masticuri", name: "Amorse și masticuri",    slug: "amorse-masticuri", productCount: 3 },
      { id: "membrana-cramponata", name: "Membrană Cramponată", slug: "membrana-cramponata", productCount: 3 },
    ],
  },

  // Adaugă acest obiect în array-ul `categories`, înainte de export:
{
  id: "polistiren",
  name: "POLISTIREN",
  slug: "polistiren",
  image: "/images/polistirenc.jpg",
  productCount:  15,
  subcategories: [
    {
      id: "polistiren-expandat",
      name: "Polistiren Expandat",
      slug: "polistiren-expandat",
      productCount: 8,
    },
    {
      id: "polistiren-extrudat",
      name: "Polistiren Extrudat",
      slug: "polistiren-extrudat",
      productCount: 4,
    },
    {
      id: "polistiren-grafitat",
      name: "Polistiren Grafitat",
      slug: "polistiren-grafitat",
      productCount: 1,
    },
    {
      id: "polistiren-special",
      name: "Polistiren Special",
      slug: "polistiren-special",
      productCount: 2,
    },
  ],
},


  {
    id: "zidarie",
    name: "ZIDĂRIE",
    slug: "zidarie",
    productCount: 29,
    image: "/images/zidariec.jpg",
    subcategories: [
      { id: "bca", name: "BCA", slug: "bca", productCount: 15 },
      { id: "caramida", name: "Cărămizi", slug: "caramida", productCount: 14 },
    ],
  },
  {
    id: "lianti",
    name: "LIANȚI",
    slug: "lianti",
    productCount: 65,
    image: "/images/liantic.jpg",
    subcategories: [
      { id: "amorse", name: "Amorse", slug: "amorse", productCount: 13 },
      { id: "ciment", name: "Ciment", slug: "ciment", productCount: 3 },
      { id: "gleturi", name: "Gleturi", slug: "gleturi", productCount: 20 },
      { id: "mortare", name: "Mortare", slug: "mortare", productCount: 19 },
    ],
  },
 
  {
    id: "adezivi",
    name: "ADEZIVI",
    slug: "adezivi",
    productCount: 33,
    image: "/images/adezivic.jpg",
    subcategories: [
      { id: "adezivi-gips-carton", name: "Adezivi gips carton", slug: "adezivi-gips-carton", productCount: 1 },
      {
        id: "adezivi-gresie-faianta",
        name: "Adezivi gresie si faianta",
        slug: "adezivi-gresie-faianta",
        productCount: 16,
      },
      { id: "adezivi-polistiren", name: "Adezivi polistiren", slug: "adezivi-polistiren", productCount: 8 },
      { id: "adezivi-vata-minerala", name: "Adezivi vata minerala", slug: "adezivi-vata-minerala", productCount: 5 },
      { id: "adezivi-zidarie", name: "Adezivi zidarie", slug: "adezivi-zidarie", productCount: 3 },
    ],
  },
  {
    id: "gips-carton",
    name: "GIPS CARTON",
    slug: "gips-carton",
    productCount: 85,
    image: "/images/gipscartonc.webp",
    subcategories: [
      { id: "accesorii-gips-carton", name: "Accesorii gips carton", slug: "accesorii-gips-carton", productCount: 13 },
      { id: "placi-gips-carton", name: "Plăci gips carton", slug: "placi-gips-carton", productCount: 18 },
      { id: "profile-gips-carton", name: "Profile gips carton", slug: "profile-gips-carton", productCount: 54 },
    ],
  },
  {
    id: "tego",
    name: "TEGO",
    slug: "tego",
    productCount: 3,
    image: "/images/tegoc.webp",
    subcategories: [{ id: "panouri-tego", name: "Panouri TEGO", slug: "panouri-tego", productCount: 3 }],
  },
  {
    id: "tencuieli-decorative",
    name: "TENCUIELI DECORATIVE",
    slug: "tencuieli-decorative",
    productCount: 6,
    image: "/images/tencuialac.png",
    subcategories: [
      { id: "tencuieli-decorative", name: "Tencuieli decorative", slug: "tencuieli-decorative", productCount: 6 },
    ],
  },
  {
    id: "produse-sika",
    name: "PRODUSE SIKA",
    slug: "produse-sika",
    productCount: 18,
    image: "/images/produsesikac.png",
    subcategories: [
      { id: "materiale-finisare", name: "Materiale finisare", slug: "materiale-finisare", productCount: 9 },
      { id: "sigilari-lipiri", name: "Sigilări și lipiri", slug: "sigilari-lipiri", productCount: 9 },
    ],
  },
  {
   id: "Accesorii-termosistem",  // alege un id nefolosit
   name: "ACCESORII TERMOSISTEM",
    slug: "accesorii-termosistem",
    productCount: 11,
    image: "/images/accesoriic.jpg",
    subcategories: [], 
 },
]

// METALE - Fier beton (toate produsele)
const fierBetonProducts: Product[] = [
  {
    id: "otel-beton-ob37-6-colac",
    name: "Otel beton OB37 Ф6, colac",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton OB37 cu diametrul de 6mm, în colac, pentru armarea structurilor de beton.",
    specifications: {
      Diametru: "6mm",
      Tip: "OB37",
      Forma: "Colac",
      Clasa: "OB37",
      Utilizare: "Armarea betonului",
    },
    images: ["/images/otel-beton-colac.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 23,
    badge: "bestseller",
  },
  {
    id: "otel-beton-ob37-8-colac",
    name: "Otel beton OB37 Ф8, colac",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton OB37 cu diametrul de 8mm, în colac.",
    specifications: {
      Diametru: "8mm",
      Tip: "OB37",
      Forma: "Colac",
    },
    images: ["/images/otel-beton-colac.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 18,
  },
  {
    id: "otel-beton-bst500c-8-bara",
    name: "Otel beton BST500C Ф8, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 8mm, în bara.",
    specifications: {
      Diametru: "8mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.7,
    reviews: 31,
  },
  {
    id: "otel-beton-bst500c-10-bara",
    name: "Otel beton BST500C Ф10, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 10mm, în bara.",
    specifications: {
      Diametru: "10mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.5,
    reviews: 27,
  },
  {
    id: "otel-beton-bst500c-12-bara",
    name: "Otel beton BST500C Ф12, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 12mm, în bara.",
    specifications: {
      Diametru: "12mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.6,
    reviews: 22,
  },
  {
    id: "otel-beton-bst500c-14-bara",
    name: "Otel beton BST500C Ф14, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 14mm, în bara.",
    specifications: {
      Diametru: "14mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.4,
    reviews: 19,
  },
  {
    id: "otel-beton-bst500c-16-bara",
    name: "Otel beton BST500C Ф16, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 16mm, în bara.",
    specifications: {
      Diametru: "16mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.7,
    reviews: 25,
  },
  {
    id: "otel-beton-bst500c-18-bara",
    name: "Otel beton BST500C Ф18, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 18mm, în bara.",
    specifications: {
      Diametru: "18mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.5,
    reviews: 16,
  },
  {
    id: "otel-beton-bst500c-20-bara",
    name: "Otel beton BST500C Ф20, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 20mm, în bara.",
    specifications: {
      Diametru: "20mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.6,
    reviews: 21,
  },
  {
    id: "otel-beton-bst500c-22-bara",
    name: "Otel beton BST500C Ф22, bara",
    category: "metale",
    subcategory: "fier-beton",
    price: "request",
    unit: "kg",
    description: "Oțel beton BST500C cu diametrul de 22mm, în bara.",
    specifications: {
      Diametru: "22mm",
      Tip: "BST500C",
      Forma: "Bara",
    },
    images: ["/images/otel-beton-bara.jpg"],
    inStock: true,
    rating: 4.4,
    reviews: 14,
  },
  
]

// METALE - Fier beton fasonat (toate produsele)
const fierBetonFasonatProducts: Product[] = [
  {
    id: "otel-beton-fasonat-bst500c-8",
    name: "Otel beton fasonat BST500C Ф8",
    category: "metale",
    subcategory: "fier-beton-fasonat",
    price: "request",
    unit: "kg",
    description: "Oțel beton fasonat BST500C cu diametrul de 8mm, prelucrat conform specificațiilor tehnice.",
    specifications: {
      Diametru: "8mm",
      Tip: "BST500C",
      Forma: "Fasonat",
      Prelucrare: "La comandă",
    },
    images: ["/images/otel-beton-fasonat.jpg"],
    inStock: true,
    rating: 4.8,
    reviews: 12,
  },
  {
    id: "otel-beton-fasonat-bst500c-10",
    name: "Otel beton fasonat BST500C Ф10",
    category: "metale",
    subcategory: "fier-beton-fasonat",
    price: "request",
    unit: "kg",
    description: "Oțel beton fasonat BST500C cu diametrul de 10mm.",
    specifications: {
      Diametru: "10mm",
      Tip: "BST500C",
      Forma: "Fasonat",
    },
    images: ["/images/otel-beton-fasonat.jpg"],
    inStock: true,
    rating: 4.7,
    reviews: 9,
  },
  {
    id: "otel-beton-fasonat-bst500c-12",
    name: "Otel beton fasonat BST500C Ф12",
    category: "metale",
    subcategory: "fier-beton-fasonat",
    price: "request",
    unit: "kg",
    description: "Oțel beton fasonat BST500C cu diametrul de 12mm.",
    specifications: {
      Diametru: "12mm",
      Tip: "BST500C",
      Forma: "Fasonat",
    },
    images: ["/images/otel-beton-fasonat.jpg"],
    inStock: true,
    rating: 4.6,
    reviews: 15,
  },
  {
    id: "otel-beton-fasonat-bst500c-14",
    name: "Otel beton fasonat BST500C Ф14",
    category: "metale",
    subcategory: "fier-beton-fasonat",
    price: "request",
    unit: "kg",
    description: "Oțel beton fasonat BST500C cu diametrul de 14mm.",
    specifications: {
      Diametru: "14mm",
      Tip: "BST500C",
      Forma: "Fasonat",
    },
    images: ["/images/otel-beton-fasonat.jpg"],
    inStock: true,
    rating: 4.5,
    reviews: 11,
  },
  {
    id: "otel-beton-fasonat-bst500c-16",
    name: "Otel beton fasonat BST500C Ф16",
    category: "metale",
    subcategory: "fier-beton-fasonat",
    price: "request",
    unit: "kg",
    description: "Oțel beton fasonat BST500C cu diametrul de 16mm.",
    specifications: {
      Diametru: "16mm",
      Tip: "BST500C",
      Forma: "Fasonat",
    },
    images: ["/images/otel-beton-fasonat.jpg"],
    inStock: true,
    rating: 4.7,
    reviews: 8,
  },
]

// ZIDĂRIE - BCA (toate produsele)
const bcaProducts: Product[] = [
  {
    id: "bca-ytong-599x50x199",
    name: "BCA Ytong 599x50x199mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 599x50x199mm.",
    specifications: {
      Dimensiuni: "599x50x199mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
      "Conductivitate termică": "0.10 W/mK",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 34,
    badge: "bestseller",
  },
  {
    id: "bca-ytong-599x100x199",
    name: "BCA Ytong 599x100x199mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 599x100x199mm.",
    specifications: {
      Dimensiuni: "599x100x199mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 42,
  },
  {
    id: "bca-ytong-599x150x199",
    name: "BCA Ytong 599x150x199mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 599x150x199mm.",
    specifications: {
      Dimensiuni: "599x150x199mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 28,
  },
  {
    id: "bca-ytong-599x200x199",
    name: "BCA Ytong 599x200x199mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 599x200x199mm.",
    specifications: {
      Dimensiuni: "599x200x199mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.8,
    reviews: 56,
  },
  {
    id: "bca-ytong-600x250x200",
    name: "BCA Ytong 600x250x200mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 600x250x200mm.",
    specifications: {
      Dimensiuni: "600x250x200mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 31,
  },
  {
    id: "bca-ytong-599x300x199",
    name: "BCA Ytong 599x300x199mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 599x300x199mm.",
    specifications: {
      Dimensiuni: "599x300x199mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 45,
  },
  {
    id: "bca-ytong-600x300x250",
    name: "BCA Ytong 600x300x250mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 600x300x250mm.",
    specifications: {
      Dimensiuni: "600x300x250mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 22,
  },

{
    id: "bca-ytong-600x200x250",
    name: "BCA Ytong 600x200x250mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 600x200x250mm.",
    specifications: {
      Dimensiuni: "600x200x250mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 22,
  },

  {
    id: "bca-ytong-600x150x250",
    name: "BCA Ytong 600x150x250mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 600x150x250mm.",
    specifications: {
      Dimensiuni: "600x150x250mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 22,
  },

  {
    id: "bca-ytong-599x75x199",
    name: "BCA Ytong 599x75x199mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular autoclavizat Ytong, dimensiuni 599x75x199mm.",
    specifications: {
      Dimensiuni: "599x75x199mm",
      Marca: "Ytong",
      Densitate: "400 kg/m³",
    },
    images: ["/images/bca.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 22,
  },

  {
    id: "bca-izopor-elpreco-650x125x200",
    name: "BCA Izopor Elpreco 650x125x200mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular Izopor Elpreco, dimensiuni 650x125x200mm.",
    specifications: {
      Dimensiuni: "650x125x200mm",
      Marca: "Izopor Elpreco",
      Densitate: "450 kg/m³",
    },
    images: ["/images/elpreco.webp"],
    inStock: true,
    rating: 4.4,
    reviews: 18,
  },
  {
    id: "bca-izopor-elpreco-650x150x200",
    name: "BCA Izopor Elpreco 650x150x200mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular Izopor Elpreco, dimensiuni 650x150x200mm.",
    specifications: {
      Dimensiuni: "650x150x200mm",
      Marca: "Izopor Elpreco",
    },
    images: ["/images/elpreco.webp"],
    inStock: true,
    rating: 4.3,
    reviews: 15,
  },
  {
    id: "bca-izopor-elpreco-650x100x200",
    name: "BCA Izopor Elpreco 650x100x200mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular Izopor Elpreco, dimensiuni 650x100x200mm.",
    specifications: {
      Dimensiuni: "650x100x200mm",
      Marca: "Izopor Elpreco",
    },
    images: ["/images/elpreco.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 27,
  },
  {
    id: "bca-izopor-elpreco-650x250x200",
    name: "BCA Izopor Elpreco 650x250x200mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular Izopor Elpreco, dimensiuni 650x250x200mm.",
    specifications: {
      Dimensiuni: "650x250x200mm",
      Marca: "Izopor Elpreco",
    },
    images: ["/images/elpreco.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 33,
  },
  {
    id: "bca-izopor-elpreco-650x300x200",
    name: "BCA Izopor Elpreco 650x300x200mm",
    category: "zidarie",
    subcategory: "bca",
    price: "request",
    unit: "buc",
    description: "Bloc din beton celular Izopor Elpreco, dimensiuni 650x300x200mm.",
    specifications: {
      Dimensiuni: "650x300x200mm",
      Marca: "Izopor Elpreco",
    },
    images: ["/images/elpreco.webp"],
    inStock: true,
    rating: 4.4,
    reviews: 19,
  },
  
]

// ————————— DECOBIT —————————
const decobitProducts: Product[] = [
  {
    id: "carton-bituminos-10m",
    name: "Carton bituminos 10 m",
    category: "hidroizolatii",
    subcategory: "decobit",
    price:  "request",    // or a number
    unit: "rola",
    description: "Carton bituminos de 10 metri pentru hidroizolații.",
    specifications: {},
    images: ["/images/carton-bituminos.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "carton-bituminos-20m",
    name: "Carton bituminos 20 m",
    category: "hidroizolatii",
    subcategory: "decobit",
    price:  "request",
    unit: "rola",
    description: "Carton bituminos de 20 metri pentru hidroizolații.",
    specifications: {},
    images: ["/images/carton-bituminos.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
]

// ————————— Gama Profesional —————————
const gamaProfesionalProducts: Product[] = [
  { id: "arco-forato-v-0-85",          name: "ARCO Forato V 0.85",         category: "hidroizolatii", subcategory: "gama-profesional", price: "request", unit: "mp", description:"", specifications:{}, images:["/images/Forato.jpg"], inStock:true, rating:0, reviews:0 },
  { id: "arco-thermo-ad-v-2mm",       name: "Arco Thermo AD V 2mm",       category: "hidroizolatii", subcategory: "gama-profesional", price: "request", unit: "mp", description:"", specifications:{}, images:["/images/thermo.jpg"], inStock:true, rating:0, reviews:0 },
  { id: "arco-antiroot-plasto-p-3mm", name: "ARCO Antiroot Plasto P 3mm", category: "hidroizolatii", subcategory: "gama-profesional", price: "request", unit: "mp", description:"", specifications:{}, images:["/images/Plasto.jpg"], inStock:true, rating:0, reviews:0 },
  { id: "arcotherm-dx2",             name: "Arcotherm DX2",             category: "hidroizolatii", subcategory: "gama-profesional", price: "request", unit: "mp", description:"", specifications:{}, images:["/images/therm.jpg"], inStock:true, rating:0, reviews:0 },
]

// ————————— Gama Standard —————————
const gamaStandardProducts: Product[] = [
  { id: "novatec-pa-4-5", name: "Novatec PA 4.5", category: "hidroizolatii", subcategory: "gama-standard", price: "request", unit: "mp", description:"", specifications:{}, images:["/images/novatec.jpg"], inStock:true, rating:0, reviews:0 },
]

// ————————— Gama Festa —————————
const gamaFestaProducts: Product[] = [
"V3","P3","V4","VA4","PA3.5","VA3.5","P4","PA4","VA4.5","PA4.5"
].map((code) => ({
  id: `festa-plus-${code.replace(/\./g,"-")}`,
  name: `Festa Plus ${code}`,
  category: "hidroizolatii",
  subcategory: "gama-festa",
  price: "request",
  unit: "mp",
  description: "",
  specifications: {},
  images: ["/images/plus.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
}));

// ————————— Amorse și Masticuri —————————
const amorseMasticuriProducts: Product[] = [
  { id: "elastobit-20kg",       name: "Elastobit (20kg)",       category: "hidroizolatii", subcategory: "amorse-masticuri", price: "request", unit:"buc", description:"", specifications:{}, images:["/images/elastobit.jpg"], inStock:true, rating:0, reviews:0 },
  { id: "superbit-25kg",        name: "Superbit (25kg)",        category: "hidroizolatii", subcategory: "amorse-masticuri", price: "request", unit:"buc", description:"", specifications:{}, images:["/images/superbit.jpg"], inStock:true, rating:0, reviews:0 },
  { id: "izobituprimer-20l",    name: "Amorsa Bituminoasă IzoBituprimer 20L (Solvent)", category: "hidroizolatii", subcategory: "amorse-masticuri", price:"request", unit:"buc", description:"", specifications:{}, images:["/images/izobit.jpg"], inStock:true, rating:0, reviews:0 },
]

// ————————— Membrană Cramponată —————————
const membranaCramponataProducts: Product[] = [
  { id: "membrana-cramponata-1x20m",   name: "Membrană cramponată 1 x 20 m",   category:"hidroizolatii", subcategory:"membrana-cramponata", price:"request", unit:"rola", description:"", specifications:{}, images:["/images/membrana.webp"], inStock:true, rating:0, reviews:0 },
  { id: "membrana-cramponata-1-5x20m", name: "Membrană cramponată 1.5 x 20 m", category:"hidroizolatii", subcategory:"membrana-cramponata", price:"request", unit:"rola", description:"", specifications:{}, images:["/images/membrana.webp"], inStock:true, rating:0, reviews:0 },
  { id: "membrana-cramponata-2x20m",   name: "Membrană cramponată 2 x 20 m",   category:"hidroizolatii", subcategory:"membrana-cramponata", price:"request", unit:"rola", description:"", specifications:{}, images:["/images/membrana.webp"], inStock:true, rating:0, reviews:0 },
]


// ZIDĂRIE - Cărămizi (toate produsele)
const caramidaProducts: Product[] = [
  {
    id: "caramida-porotherm-30-sth",
    name: "Caramida Porotherm 30 STh, 250x300x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Cărămidă Porotherm 30 STh cu sistem de îmbinare pe orizontală.",
    specifications: {
      Dimensiuni: "250x300x238mm",
      Tip: "STh",
      Marca: "Porotherm",
      Grosime: "30cm",
    },
    images: ["/images/caramida1.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 56,
    badge: "bestseller",
  },
  {
    id: "caramida-porotherm-38-robust",
    name: "Caramida Porotherm 38 Robust, 250x380x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Cărămidă Porotherm 38 Robust pentru pereți portanți.",
    specifications: {
      Dimensiuni: "250x380x238mm",
      Tip: "Robust",
      Marca: "Porotherm",
      Grosime: "38cm",
    },
    images: ["/images/caramida2.webp"],
    inStock: true,
    rating: 4.8,
    reviews: 43,
  },
  {
    id: "caramida-kebe-300x240x250",
    name: "Caramida Kebe 300x240x250mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Cărămidă Kebe pentru construcții rezidențiale.",
    specifications: {
      Dimensiuni: "300x240x250mm",
      Marca: "Kebe",
    },
    images: ["/images/caramida3.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 32,
  },
  {
    id: "caramida-porotherm-25-30-Eco",
    name: "Caramida Porotherm 25/30 Eco, 250x300x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Cărămidă Porotherm 25/30 Eco cu proprietăți acustice îmbunătățite.",
    specifications: {
      Dimensiuni: "250x300x238mm",
      Tip: "Eco",
      Marca: "Porotherm",
    },
    images: ["/images/caramida4.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 29,
  },
  {
    id: "caramida-porotherm-20-NF",
    name: "Caramida Porotherm 20 N+F, 500x200x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Caramida Porotherm 20 N+F este un bloc ceramic cu nut si feder destinat executiei peretilor nestructurali de compartimentare din zidarie cu protectie impotriva penetrarii apei.",
    specifications: {
      Dimensiuni: "500x200x238mm",
      Tip: "N+F",
      Marca: "Porotherm",
    },
    images: ["/images/caramida5.webp"],
    inStock: true,
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "caramida-porotherm-25-NF",
    name: "Caramida Porotherm 25 N+F, 375x250x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Caramida Porotherm 25 N+F este un bloc ceramic cu nut si feder care este destinat executiei peretilor nestructurali de inchidere si de compartimentare din zidarie cu protectie impotriva penetrarii apei.",
    specifications: {
      Dimensiuni: "375x250x238mm",
      Tip: "N+F",
      Marca: "Porotherm",
    },
    images: ["/images/caramida6.webp"],
    inStock: true,
    rating: 4.8,
    reviews: 54,
  },
  {
    id: "caramida-porotherm-15-NF",
    name: "Caramida Porotherm 15 N+F, 500x150x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Caramida Porotherm 15 N+F este un bloc ceramic cu nut si feder destinat executiei peretilor nestructurali de compartimentare din zidarie cu protectie impotriva penetrarii apei. Porotherm 15 N+F ofera cel mai bun randament in executie a zidariei cu un necesar de 8 buc/mp de perete si fara mortar in rostul vertical.",
    specifications: {
      Dimensiuni: "500x150x238mm",
      Tip: "N+F",
      Marca: "Porotherm",
    },
    images: ["/images/caramida7.webp"],
    inStock: true,
    rating: 4.4,
    reviews: 23,
  },
  {
    id: "caramida-kebe",
    name: "Caramida Kebe , 120x240x380mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Caramida Kebe 120x240x380mm.Produsul se afla in stoc!",
    specifications: {
      Dimensiuni: "120x240x380mm",
      Tip: "Kebe",
      Marca: "Porotherm",
    },
    images: ["/images/caramida8.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 31,
  },
  {
    id: "caramida-porotherm-30-robust",
    name: "Caramida Porotherm 30 Robust, 250x300x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Caramida Porotherm 30 Robust este un bloc ceramic cu locas de mortar destinat executiei peretilor structurali sau nestructurali din zidarie – cu protectie impotriva penetrarii apei.",
    specifications: {
      Dimensiuni: "250x300x238mm",
      Tip: "Robust",
      Marca: "Porotherm",
    },
    images: ["/images/caramida9.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 38,
  },
  {
    id: "caramida-kebe-200x240x380",
    name: "Caramida Kebe 200x240x380mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Cărămidă Kebe. Stoc Disponibil!",
    specifications: {
      Dimensiuni: "200x240x380mm",
      Marca: "Kebe",
    },
    images: ["/images/caramida10.webp"],
    inStock: true,
    rating: 4.3,
    reviews: 45,
  },
  {
    id: "caramida-kebe-250x240x380",
    name: "Caramida Kebe 250x240x380mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Caramida Kebe. Stoc Disponibil!",
    specifications: {
      Dimensiuni: "250x240x380mm",
      Marca: "Kebe",
    },
    images: ["/images/caramida11.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 52,
  },
  {
    id: "caramida-porotherm-38-sth",
    name: "Caramida Porotherm 38 STh 250x380x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Porotherm 38 STh beneficiaza de o configuratie speciala a peretilor ceramici ce asigura un traseu elaborat al fluxului de caldura – conferind produsului o performanta termica foarte buna.",
    specifications: {
      Dimensiuni: "250x380x238mm",
      Tip: "STh",
      Marca: "Porotherm",

    },
    images: ["/images/caramida12.webp"],
    inStock: true,
    rating: 4.8,
    reviews: 61,
  },
  {
    id: "caramida-porotherm-115-nf",
    name: "Caramida Porotherm 11,5 N+F, 500x115x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Porotherm 11.5 N+F ofera cel mai bun randament in executie a zidariei cu un necesar de 8 buc/mp de perete si fara mortar in rostul vertical.",
    specifications: {
      Dimensiuni: "500x115x238mm",
      Tip: "N+F",
      Marca: "Porotherm",
    },
    images: ["/images/caramida13.webp"],
    inStock: true,
    rating: 4.4,
    reviews: 34,
  },

  {
    id: "caramida-porotherm-25-robust",
    name: "Caramida Porotherm 25 Robust, 375x250x238mm",
    category: "zidarie",
    subcategory: "caramida",
    price: "request",
    unit: "buc",
    description: "Caramida Porotherm 25 Robust este un bloc ceramic cu locas de mortar destinat executiei peretilor structurali sau nestructurali – din zidarie cu protectie impotriva penetrarii apei.",
    specifications: {
      Dimensiuni: "375x250x238mm",
      Tip: "Robust",
      Marca: "Porotherm",
    },
    images: ["/images/caramida14.webp"],
    inStock: true,
    rating: 4.4,
    reviews: 34,
  },
]

// LIANȚI - Amorse (toate produsele)
const amorseProducts: Product[] = [
  {
    id: "amorsa-ceresit-ct17-10l",
    name: "Amorsa perete interior/exterior Ceresit CT 17 10L",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsă concentrată pentru pereți interiori și exteriori Ceresit CT 17.",
    specifications: {
      Volum: "10L",
      Marca: "Ceresit",
      Tip: "CT 17",
      Aplicare: "Interior/Exterior",
      Randament: "50-100 ml/m²",
    },
    images: ["/images/ct17.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 124,
    badge: "bestseller",
  },
  {
    id: "amorsa-innenweiss-10l",
    name: "Amorsa perete interior/exterior Innenweiss 10L",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsă pentru pereți interiori și exteriori Innenweiss, 10 litri.",
    specifications: {
      Volum: "10L",
      Tip: "Interior/Exterior",
      Marca: "Innenweiss",
    },
    images: ["/images/amorsa2.webp"],
    inStock: true,
    rating: 4.4,
    reviews: 28,
  },
  {
    id: "amorsa-adeplast-betoncontact-22kg",
    name: "Amorsa pentru betoane si mortare Adeplast Betoncontact 22kg",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "sac",
    description: "Amorsă pentru betoane și mortare Adeplast Betoncontact, 22kg.",
    specifications: {
      Greutate: "22kg",
      Tip: "Beton Contact",
      Marca: "Adeplast",
    },
    images: ["/images/amorsa3.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 35,
  },
  {
    id: "amorsa-oskar-4l",
    name: "Amorsa perete interior/exterior Oskar Zero Mucegai 4L",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsa perete rezistenta la mucegai.",
    specifications: {
      Volum: "4L",
      Marca: "Oskar",
    },
    images: ["/images/amorsa4.webp"],
    inStock: true,
    rating: 4.8,
    reviews: 67,
  },
  {
    id: "amorsa-apla-10kg",
    name: "Amorsa bituminoasa Apla Hydrostop 10kg",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsa bituminoasa pe baza de apa, compus bituminos ”la rece” pe baza de bitum emulsionat in apa, copolimeri sintetici, stabilizatori minerali, aditivi specifici etc.",
    specifications: {
      Volum: "10kg",
      Marca: "Apla Hydrostop",
    },
    images: ["/images/amorsa5.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 43,
  },
  {
    id: "amorsa-ceresit-10kg",
    name: "Amorsa penetranta pentru sape si betoane Ceresit R 777 10kg",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsa penetranta Ceresit R 777 pentru suporturi absorbante cum ar fi: betoane si sape. Aceasta amorsa reduce porozitatea, fiind recomandata pentru pretratarea suprafetelor absorbante si pentru incalzirea in pardoseala, unde nu se depaseste temperatura de 50°C.",
    specifications: {
      Volum: "10kg",
      Marca: "Ceresit",
    },
    images: ["/images/amorsa6.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 52,
  },
  {
    id: "amorsa-apla-18kg",
    name: "Amorsa bituminoasa Apla Hydrostop 18kg",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsa bituminoasa pe baza de apa, compus bituminos ”la rece” pe baza de bitum emulsionat in apa, copolimeri sintetici, stabilizatori minerali, aditivi specifici etc. AplaHydroStop asigura o aderenta buna pe orice suport mineral uscat, realizeaza o pelicula hidroizolanta rezistenta, atat pe suporturi orizontale cat si verticale.",
    specifications: {
      Volum: "10kg",
      Marca: "Apla Hydrostop",
    },
    images: ["/images/amorsa7.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 38,
  },
  {
    id: "amorsa-ceresit-ct-19-contact-24kg",
    name: "Amorsa perete Ceresit CT 19 Beton Contact 24kg",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Grund de contact Ceresit CT 19 utilizat pentru amorsarea suprafetelor minerale, de interior si exterior. Betonul de contact de la Ceresit CT 19 este recomandat pentru pregatirea suportului inainte de aplicarea sapelor, tencuielilor, etc.",
    specifications: {
      Volum: "24kg",
      Marca: "Ceresit",
      Tip: "CT 19 Beton Contact",
    },
    images: ["/images/amorsa8.webp"],
    inStock: true,
    rating: 4.9,
    reviews: 71,
  },
  {
    id: "amorsa-ceresit-ct-19-contact-75kg",
    name: "Amorsa perete Ceresit CT 19 Beton Contact 7,5kg",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Grund de contact Ceresit CT 19 utilizat pentru amorsarea suprafetelor minerale, de interior si exterior. Betonul de contact de la Ceresit CT 19 este recomandat pentru pregatirea suportului inainte de aplicarea sapelor, tencuielilor, etc.",
    specifications: {
      Volum: "7,5kg",
      Marca: "Ceresit",
      Tip: "CT 19 Beton Contact",
    },
    images: ["/images/amorsa8.webp"],
    inStock: true,
    rating: 4.4,
    reviews: 29,
  },
  {
    id: "amorsa-danke-10l",
    name: "Amorsa perete interior/exterior Danke 10L",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsa pentru pereti de interior si exterior, grund de amorsare pentru pereti pe baza acrilica.",
    specifications: {
      Volum: "10L",
      Marca: "Danke",
    },
    images: ["/images/amorsa10.webp"],
    inStock: true,
    rating: 4.3,
    reviews: 22,
  },
  {
    id: "amorsa-ceresit-16",
    name: "Amorsa perete interior/exterior Ceresit CT 16",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Vopsea alba grund pentru sistemul de termoizolatie, amorsarea suprafetelor inainte de aplicarea tencuielilor decorative, aceasta este recomandata pentru imbunatatirea aderentei tencuielilor.",
    specifications: {
      Volum: "16L",
      Marca: "Ceresit",
    },
    images: ["/images/amorsa11.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 45,
  },
 {
    id: "amorsa-ceresit-ct17-2l",
    name: "Amorsa perete interior/exterior Ceresit CT 17 2L",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Amorsă concentrată pentru pereți interiori și exteriori Ceresit CT 17.",
    specifications: {
      Volum: "2L",
      Marca: "Ceresit",
      Tip: "CT 17",
      Aplicare: "Interior/Exterior",
    },
    images: ["/images/ct17.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 124,
    badge: "bestseller",
  },
  {
    id: "amorsa-ceresit-ct7-5l",
    name: "Amorsa perete interior/exterior Ceresit CT 7 5L",
    category: "lianti",
    subcategory: "amorse",
    price: "request",
    unit: "buc",
    description: "Grund universal pentru amorsarea suprafetelor absorbante inainte de: montarea placilor ceramice, a placilor termoizolante sau a acoperirilor cu glet, vopsea lavabila.",
    specifications: {
      Volum: "5L",
      Marca: "Ceresit",
      Tip: "CT 7",
      Aplicare: "Interior/Exterior",
    },
    images: ["/images/amorsa12.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 124,
    badge: "bestseller",
  },
]

// LIANȚI - Ciment (toate produsele)
const cimentProducts: Product[] = [
  {
    id: "beton-predozat-baumit-25kg",
    name: "Beton predozat universal Baumit Beton 25kg",
    category: "lianti",
    subcategory: "ciment",
    price: "request",
    unit: "sac",
    description: "Beton predozat universal Baumit, 25kg.",
    specifications: {
      Greutate: "25kg",
      Tip: "Universal",
      Marca: "Baumit",
    },
    images: ["/images/ciment1.webp"],
    inStock: true,
    rating: 4.5,
    reviews: 67,
  },
  {
    id: "ciment-romcim-durabil-40kg",
    name: "Ciment Romcim Durabil 40kg",
    category: "lianti",
    subcategory: "ciment",
    price: "request",
    unit: "sac",
    description: "Ciment Romcim Durabil, 40kg.",
    specifications: {
      Greutate: "40kg",
      Tip: "Durabil",
      Marca: "Romcim",
    },
    images: ["/images/ciment2.webp"],
    inStock: true,
    rating: 4.7,
    reviews: 89,
    badge: "bestseller",
  },
  {
    id: "ciment-romcim-ultra-40kg",
    name: "Ciment Romcim Ultra 40kg",
    category: "lianti",
    subcategory: "ciment",
    price: "request",
    unit: "sac",
    description: "Ciment Romcim Ultra, 40kg.",
    specifications: {
      Greutate: "40kg",
      Tip: "Ultra",
      Marca: "Romcim",
    },
    images: ["/images/ciment3.webp"],
    inStock: true,
    rating: 4.6,
    reviews: 72,
  },
]

// LIANȚI - Gleturi (toate produsele - 21 produse)
 export const gleturiProducts: Product[] = [
  {
    id: "glet-rigips-rimano-bianco-20kg",
    name: "Glet nivelare de interior Rigips Rimano Bianco 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet nivelare de interior marca Rigips, tip Rimano Bianco, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Rigips",
      Tip: "Rimano Bianco"
    },
    images: ["/images/glet1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-ceresit-ct127-5kg",
    name: "Glet pentru finisaje fine la interior Ceresit CT 127 5kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet pentru finisaje fine interior, Ceresit CT 127, 5kg.",
    specifications: {
      Greutate: "5kg",
      Marca: "Ceresit",
      Tip: "CT 127"
    },
    images: ["/images/glet2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "ipsos-constructii-rigips-construct-gips-25kg",
    name: "Ipsos construcții Rigips Construct Gips 25kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Ipsos construcții Rigips Construct Gips, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Rigips",
      Tip: "Construct Gips"
    },
    images: ["/images/glet3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-ceresit-ct126-20kg",
    name: "Glet pentru interior Ceresit CT 126 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet interior Ceresit CT 126, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Ceresit",
      Tip: "CT 126"
    },
    images: ["/images/glet4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "ipsos-modelaj-rigips-model-gips-25kg",
    name: "Ipsos modelaj Rigips Model Gips 25kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Ipsos modelaj Rigips Model Gips, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Rigips",
      Tip: "Model Gips"
    },
    images: ["/images/glet5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-ceresit-ct126-5kg",
    name: "Glet pentru interior Ceresit CT 126 5kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet interior Ceresit CT 126, 5kg.",
    specifications: {
      Greutate: "5kg",
      Marca: "Ceresit",
      Tip: "CT 126"
    },
    images: ["/images/glet6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "ipsos-modelaj-rigips-model-gips-5kg",
    name: "Ipsos modelaj Rigips Model Gips 5kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Ipsos modelaj Rigips Model Gips, 5kg.",
    specifications: {
      Greutate: "5kg",
      Marca: "Rigips",
      Tip: "Model Gips"
    },
    images: ["/images/glet7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-aplafill-finisaj-20kg",
    name: "Glet finisare interior Aplafill Finisaj 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet finisare interior Aplafill, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Aplafill",
      Tip: "Finisaj"
    },
    images: ["/images/glet8.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "ipsos-imbinare-rigips-super-25kg",
    name: "Ipsos îmbinare Rigips Super 25kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Ipsos îmbinare Rigips Super, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Rigips",
      Tip: "Super"
    },
    images: ["/images/glet9.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-weber-n19-20kg",
    name: "Glet extra-alb de finisaj Weber N19 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet extra-alb de finisaj Weber N19, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Weber",
      Tip: "N19"
    },
    images: ["/images/glet10.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "ipsos-imbinare-rigips-super-5kg",
    name: "Ipsos îmbinare Rigips Super 5kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Ipsos îmbinare Rigips Super, 5kg.",
    specifications: {
      Greutate: "5kg",
      Marca: "Rigips",
      Tip: "Super"
    },
    images: ["/images/glet11.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-baumit-finobello-20kg",
    name: "Glet extra-fin ipsos de interior Baumit FinoBello 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet extra-fin ipsos de interior Baumit FinoBello, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Baumit",
      Tip: "FinoBello"
    },
    images: ["/images/glet12.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-rigips-rimano-uni-25kg",
    name: "Tencuială ipsos mecanizată Rigips Rimano Uni 25kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Tencuială ipsos mecanizată Rigips Rimano Uni, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Rigips",
      Tip: "Rimano Uni"
    },
    images: ["/images/glet13.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-baumit-finogrande-20kg",
    name: "Glet ipsos de interior Baumit FinoGrande 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet ipsos de interior Baumit FinoGrande, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Baumit",
      Tip: "FinoGrande"
    },
    images: ["/images/glet14.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-meseriasului-gm-20-20kg",
    name: "Gletul Meseriasului GM-20, glet finisare interior 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Gletul Meseriasului GM-20, glet finisare interior, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Meseriasului",
      Tip: "GM-20"
    },
    images: ["/images/glet15.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-meseriasului-gm-20-5kg",
    name: "Gletul Meseriasului GM-20, glet finisare interior 5kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Gletul Meseriasului GM-20, glet finisare interior, 5kg.",
    specifications: {
      Greutate: "5kg",
      Marca: "Meseriasului",
      Tip: "GM-20"
    },
    images: ["/images/glet15.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-super-top-20kg",
    name: "Glet finisare Rigips Super Top 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet finisare Rigips Super Top, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Rigips",
      Tip: "Super Top"
    },
    images: ["/images/glet17.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-ceresit-in46-3kg",
    name: "Glet finisare interior Ceresit IN 46 3kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet finisare interior Ceresit IN 46, 3kg.",
    specifications: {
      Greutate: "3kg",
      Marca: "Ceresit",
      Tip: "IN 46"
    },
    images: ["/images/glet18.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-rigips-rimano-ten-25kg",
    name: "Tencuială ipsos de interior Rigips Rimano Ten 25kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Tencuială ipsos de interior Rigips Rimano Ten, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Rigips",
      Tip: "Rimano Ten"
    },
    images: ["/images/glet19.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "glet-ceresit-ct127-20kg",
    name: "Glet pentru finisaje fine la interior Ceresit CT 127 20kg",
    category: "lianti",
    subcategory: "gleturi",
    price: "request",
    unit: "sac",
    description: "Glet pentru finisaje fine interior, Ceresit CT 127, 20kg.",
    specifications: {
      Greutate: "20kg",
      Marca: "Ceresit",
      Tip: "CT 127"
    },
    images: ["/images/glet20.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  }
];



// LIANȚI - Mortare (toate produsele - 28 produse)
export const mortareProducts: Product[] = [
  {
    id: "tinci-fin-multibat-extrafin-f3-25kg",
    name: "Tinci fin interior/exterior Multibat ExtraFin F3 25kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Tinci fin pentru interior și exterior Multibat ExtraFin F3, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Multibat",
      Tip: "ExtraFin F3"
    },
    images: ["/images/mortar1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-manuala-baumit-manu-4-40kg",
    name: "Tencuială manuală interior/exterior Baumit MANU 4 40kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Tencuială manuală pentru interior și exterior Baumit MANU 4, 40kg.",
    specifications: {
      Greutate: "40kg",
      Marca: "Baumit",
      Tip: "MANU 4"
    },
    images: ["/images/mortar2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-adeplast-tinci-alb-25kg",
    name: "Mortar interior Adeplast Tinci Alb 25kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar pentru interior Adeplast Tinci Alb, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Adeplast",
      Tip: "Tinci Alb"
    },
    images: ["/images/mortar3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-ceresit-cd25-25kg",
    name: "Mortar fin reparație beton 5-30mm Ceresit CD 25 25kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar fin de reparație beton 5-30mm Ceresit CD 25, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CD 25",
      "Grosime strat": "5-30mm"
    },
    images: ["/images/mortar4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-adeplast-mz-5-30kg",
    name: "Mortar zidărie Adeplast MZ 5 30kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar de zidărie Adeplast MZ 5, 30kg.",
    specifications: {
      Greutate: "30kg",
      Marca: "Adeplast",
      Clasa: "MZ 5"
    },
    images: ["/images/mortar5.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-ceresit-cd26-25kg",
    name: "Mortar reparație beton 30-100mm Ceresit CD 26 25kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar de reparație beton 30-100mm Ceresit CD 26, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CD 26",
      "Grosime strat": "30-100mm"
    },
    images: ["/images/mortar6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-adeplast-klasico-30kg",
    name: "Mortar tencuire interior/exterior Adeplast Klasico 30kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar pentru tencuire interior și exterior Adeplast Klasico, 30kg.",
    specifications: {
      Greutate: "30kg",
      Marca: "Adeplast",
      Tip: "Klasico"
    },
    images: ["/images/mortar7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-ceresit-cd30-25kg",
    name: "Mortar protecție corozivă pentru oțel și beton Ceresit CD 30 25kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar de protecție corozivă pentru oțel și beton Ceresit CD 30, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CD 30"
    },
    images: ["/images/mortar8.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-adeplast-mti-25-30kg",
    name: "Mortar tencuială manuală și mecanizată de interior Adeplast MTi-25 30kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar tencuială interior Adeplast MTi-25, manuală și mecanizată, 30kg.",
    specifications: {
      Greutate: "30kg",
      Marca: "Adeplast",
      Tip: "MTi-25"
    },
    images: ["/images/mortar9.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-ceresit-cd24-25kg",
    name: "Mortar reparație beton Ceresit CD 24 25kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar de reparație beton Ceresit CD 24, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CD 24"
    },
    images: ["/images/mortar10.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-adeplast-mte-35-30kg",
    name: "Mortar tencuială manuală și mecanizată de exterior Adeplast MTe-35 30kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar tencuială exterior Adeplast MTe-35, manuală și mecanizată, 30kg.",
    specifications: {
      Greutate: "30kg",
      Marca: "Adeplast",
      Tip: "MTe-35"
    },
    images: ["/images/mortar11.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-adeplast-tinci-25kg",
    name: "Mortar interior Adeplast Tinci 25kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar interior Adeplast Tinci, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Adeplast",
      Tip: "Tinci"
    },
    images: ["/images/mortar12.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "mortar-baumit-mm50-40kg",
    name: "Mortar zidărie Baumit MM 50 40kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Mortar de zidărie Baumit MM 50, 40kg.",
    specifications: {
      Greutate: "40kg",
      Marca: "Baumit",
      Clasa: "MM 50"
    },
    images: ["/images/mortar13.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "liant-aditivat-multibat-40kg",
    name: "Liant aditivat pentru tencuială și zidărie Multibat 40kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Liant aditivat Multibat pentru tencuială și zidărie, 40kg.",
    specifications: {
      Greutate: "40kg",
      Marca: "Multibat",
      Tip: "Aditivat"
    },
    images: ["/images/mortar14.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-mecanizata-baumit-mpa-35-40kg",
    name: "Tencuială mecanizată interior/exterior Baumit MPA 35 40kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Tencuială mecanizată Baumit MPA 35 pentru interior și exterior, 40kg.",
    specifications: {
      Greutate: "40kg",
      Marca: "Baumit",
      Tip: "MPA 35"
    },
    images: ["/images/mortar15.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-exterior-multibat-extratenc-e-t2-30kg",
    name: "Tencuială manuală și mecanizată de exterior Multibat ExtraTenc-E T2 30kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Tencuială exterior Multibat ExtraTenc-E T2, manuală și mecanizată, 30kg.",
    specifications: {
      Greutate: "30kg",
      Marca: "Multibat",
      Tip: "ExtraTenc-E T2"
    },
    images: ["/images/mortar16.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-ipsos-baumit-ratioglatt-35-30kg",
    name: "Tencuială ipsos mecanizată Baumit RatioGlatt 35 30kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Tencuială ipsos mecanizată Baumit RatioGlatt 35, 30kg.",
    specifications: {
      Greutate: "30kg",
      Marca: "Baumit",
      Tip: "RatioGlatt 35"
    },
    images: ["/images/mortar17.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-interior-multibat-extratenc-i-t1-30kg",
    name: "Tencuială manuală și mecanizată de interior Multibat ExtraTenc-I T1 30kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Tencuială interior Multibat ExtraTenc-I T1, manuală și mecanizată, 30kg.",
    specifications: {
      Greutate: "30kg",
      Marca: "Multibat",
      Tip: "ExtraTenc-I T1"
    },
    images: ["/images/mortar18.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "tencuiala-mecanizata-baumit-mpi-25-40kg",
    name: "Tencuială mecanizată de interior Baumit MPI 25 40kg",
    category: "lianti",
    subcategory: "mortare",
    price: "request",
    unit: "sac",
    description: "Tencuială mecanizată Baumit MPI 25 pentru interior, 40kg.",
    specifications: {
      Greutate: "40kg",
      Marca: "Baumit",
      Tip: "MPI 25"
    },
    images: ["/images/mortar19.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  }
];







// ADEZIVI - Adezivi gips carton
const adeziviGipsCartonProducts: Product[] = [
  {
    id: "adeziv-gips-carton-rigips-rifix-25kg",
    name: "Adeziv gips carton Rigips Rifix 25kg",
    category: "adezivi",
    subcategory: "adezivi-gips-carton",
    price: "request",
    unit: "sac",
    description: "Adeziv gri pe baza de ipsos pentru lipire placi din gips-carton pe structura de zidarie, aplicabil manual.",
    specifications: {
      Greutate: "25kg",
      Marca: "Rifix",
      Baza: "Ipsos",
    },
    images: ["/images/adeziv1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
    badge: "bestseller",
  },
]

// ADEZIVI - Adezivi gresie si faianta (toate produsele - 16 produse)
// lib/data/products.ts
export const adeziviGresieFaiantaProducts: Product[] = [
  {
    id: "adeziv-weber-stone-25kg",
    name: "Adeziv pentru piatră Weber Stone 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Weber Stone pentru placări din piatră, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Weber",
      Tip: "Stone"
    },
    images: ["/images/adeziv2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm11-plus-5kg",
    name: "Adeziv gresie și faianță Ceresit CM 11 Plus 5kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Ceresit CM 11 Plus pentru gresie și faianță, 5kg.",
    specifications: {
      Greutate: "5kg",
      Marca: "Ceresit",
      Tip: "CM 11 Plus",
      Aplicare: "Interior/Exterior"
    },
    images: ["/images/adeziv3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-weber-ex25-25kg",
    name: "Adeziv pentru placări ceramice interior/exterior Weber EX25 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Weber EX25 pentru placări ceramice interior/exterior, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Weber",
      Tip: "EX25",
      Aplicare: "Interior/Exterior"
    },
    images: ["/images/adeziv4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm11-plus-275kg",
    name: "Adeziv gresie și faianță Ceresit CM 11 Plus 27.5kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Ceresit CM 11 Plus pentru gresie și faianță, 27.5kg.",
    specifications: {
      Greutate: "27.5kg",
      Marca: "Ceresit",
      Tip: "CM 11 Plus",
      Aplicare: "Interior/Exterior"
    },
    images: ["/images/adeziv5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-weber-st10-25kg",
    name: "Adeziv gresie și faianță de interior Weber ST10 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Weber ST10 pentru gresie și faianță de interior, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Weber",
      Tip: "ST10",
      Aplicare: "Interior"
    },
    images: ["/images/adeziv6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm25-25kg",
    name: "Adeziv flexibil alb pentru gresie și faianță Ceresit CM 25 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv alb flexibil Ceresit CM 25 pentru gresie și faianță, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CM 25",
      Culoare: "Alb"
    },
    images: ["/images/adeziv7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-baumit-flexmarmor-25kg",
    name: "Adeziv flexibil marmură și piatră naturală Baumit FlexMarmor 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Baumit FlexMarmor pentru marmură și piatră naturală, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Baumit",
      Tip: "FlexMarmor"
    },
    images: ["/images/adeziv8.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm17-5kg",
    name: "Adeziv super-flexibil gresie și faianță interior/exterior Ceresit CM 17 5kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv super-flexibil Ceresit CM 17 pentru gresie și faianță, 5kg.",
    specifications: {
      Greutate: "5kg",
      Marca: "Ceresit",
      Tip: "CM 17",
      Aplicare: "Interior/Exterior"
    },
    images: ["/images/adeziv9.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm16-25kg",
    name: "Adeziv flexibil gresie și faianță interior/exterior Ceresit CM 16 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv flexibil Ceresit CM 16 pentru gresie și faianță, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CM 16",
      Aplicare: "Interior/Exterior"
    },
    images: ["/images/adeziv10.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm17-275kg",
    name: "Adeziv super-flexibil gresie și faianță interior/exterior Ceresit CM 17 27.5kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv super-flexibil Ceresit CM 17 pentru gresie și faianță, 27.5kg.",
    specifications: {
      Greutate: "27.5kg",
      Marca: "Ceresit",
      Tip: "CM 17",
      Aplicare: "Interior/Exterior"
    },
    images: ["/images/adeziv11.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm17-25kg",
    name: "Adeziv super-flexibil gresie și faianță interior/exterior Ceresit CM 17 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv super-flexibil Ceresit CM 17 pentru gresie și faianță, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CM 17",
      Aplicare: "Interior/Exterior"
    },
    images: ["/images/adeziv12.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm12-25kg",
    name: "Adeziv flexibil gresie și faianță Ceresit CM 12 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv flexibil Ceresit CM 12 pentru gresie și faianță, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CM 12"
    },
    images: ["/images/adeziv13.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm9-25kg",
    name: "Adeziv gresie și faianță Ceresit CM 9 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Ceresit CM 9 pentru gresie și faianță, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CM 9"
    },
    images: ["/images/adeziv14.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm11-plus-alb-25kg",
    name: "Adeziv marmură și piatră naturală Ceresit CM 11 Plus Alb 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Ceresit CM 11 Plus Alb pentru marmură și piatră naturală, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CM 11 Plus Alb"
    },
    images: ["/images/adeziv15.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-multibat-extrafix-f4-25kg",
    name: "Adeziv pentru gresie și faianță Multibat ExtraFix F4 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Multibat ExtraFix F4 pentru gresie și faianță, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Multibat",
      Tip: "ExtraFix F4"
    },
    images: ["/images/adeziv16.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-cm11-plus-25kg",
    name: "Adeziv gresie și faianță Ceresit CM 11 Plus 25kg",
    category: "adezivi",
    subcategory: "adezivi-gresie-faianta",
    price: "request",
    unit: "sac",
    description: "Adeziv Ceresit CM 11 Plus pentru gresie și faianță, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "CM 11 Plus"
    },
    images: ["/images/adeziv17.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  }
];



// ADEZIVI - Adezivi polistiren (toate produsele - 8 produse)
export const adeziviPolistirenProducts: Product[] = [
  {
    id: "adeziv-weber-p39-25kg",
    name: "Adeziv polistiren expandat și grafitat Weber P39 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv Weber P39 pentru polistiren expandat și grafitat, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Weber",
      Tip: "P39"
    },
    images: ["/images/polistireni1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-weber-r40-25kg",
    name: "Adeziv vată minerală și polistiren expandat Weber R40 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv Weber R40 pentru vată minerală și polistiren expandat, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Weber",
      Tip: "R40"
    },
    images: ["/images/polistireni2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-adeplast-polistirol-premium-25kg",
    name: "Adeziv polistiren Adeplast Polistirol Premium 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv Adeplast Polistirol Premium pentru polistiren, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Adeplast",
      Tip: "Polistirol Premium"
    },
    images: ["/images/polistireni3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-adeplast-polistirol-eco-plus-25kg",
    name: "Adeziv polistiren Adeplast Polistirol Eco Plus 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv Adeplast Polistirol Eco Plus pentru polistiren, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Adeplast",
      Tip: "Polistirol Eco Plus"
    },
    images: ["/images/polistireni4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-baumit-duocontact-25kg",
    name: "Adeziv polistiren și vată minerală Baumit DuoContact 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv Baumit DuoContact pentru polistiren și vată minerală, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Baumit",
      Tip: "DuoContact"
    },
    images: ["/images/polistireni5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-thermouniversal-25kg",
    name: "Adeziv polistiren și vată minerală Ceresit ThermoUniversal 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv Ceresit ThermoUniversal pentru polistiren și vată minerală, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "ThermoUniversal"
    },
    images: ["/images/polistireni6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-sikahome-insulate-polystyrene-25kg",
    name: "Adeziv polistiren SikaHome Insulate Polystyrene 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv SikaHome Insulate Polystyrene pentru polistiren, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "SikaHome",
      Tip: "Insulate Polystyrene"
    },
    images: ["/images/polistireni7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-multibat-extratherm-t6-25kg",
    name: "Adeziv Multibat ExtraTherm T6 25kg",
    category: "adezivi",
    subcategory: "adezivi-polistiren",
    price: "request",
    unit: "sac",
    description: "Adeziv Multibat ExtraTherm T6 pentru termoizolații, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Multibat",
      Tip: "ExtraTherm T6"
    },
    images: ["/images/polistireni8.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  }
];


// ADEZIVI - Adezivi vata minerala (toate produsele - 5 produse)
export const adeziviVataMineralaProducts: Product[] = [
  {
    id: "adeziv-weber-p40-25kg",
    name: "Adeziv vată minerală Weber P40 25kg",
    category: "adezivi",
    subcategory: "adezivi-vata-minerala",
    price: "request",
    unit: "sac",
    description: "Adeziv Weber P40 pentru vată minerală, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Weber",
      Tip: "P40"
    },
    images: ["/images/vata1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-weber-r40-25kg",
    name: "Adeziv vată minerală și polistiren expandat Weber R40 25kg",
    category: "adezivi",
    subcategory: "adezivi-vata-minerala",
    price: "request",
    unit: "sac",
    description: "Adeziv Weber R40 pentru vată minerală și polistiren expandat, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Weber",
      Tip: "R40"
    },
    images: ["/images/vata2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-isover-profi-fassade-fix-25kg",
    name: "Adeziv vată minerală bazaltică Isover Profi Fassade Fix 25kg",
    category: "adezivi",
    subcategory: "adezivi-vata-minerala",
    price: "request",
    unit: "sac",
    description: "Adeziv Isover Profi Fassade Fix pentru vată minerală bazaltică, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Isover",
      Tip: "Profi Fassade Fix"
    },
    images: ["/images/vata3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-baumit-duocontact-25kg",
    name: "Adeziv polistiren și vată minerală Baumit DuoContact 25kg",
    category: "adezivi",
    subcategory: "adezivi-vata-minerala",
    price: "request",
    unit: "sac",
    description: "Adeziv Baumit DuoContact pentru polistiren și vată minerală, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Baumit",
      Tip: "DuoContact"
    },
    images: ["/images/vata4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-ceresit-thermouniversal-25kg",
    name: "Adeziv polistiren și vată minerală Ceresit ThermoUniversal 25kg",
    category: "adezivi",
    subcategory: "adezivi-vata-minerala",
    price: "request",
    unit: "sac",
    description: "Adeziv Ceresit ThermoUniversal pentru polistiren și vată minerală, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Ceresit",
      Tip: "ThermoUniversal"
    },
    images: ["/images/vata5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  }
];


// ADEZIVI - Adezivi zidarie (toate produsele - 3 produse)
export const adeziviZidarieProducts: Product[] = [
  {
    id: "adeziv-multibat-extra-zid-z6-25kg",
    name: "Adeziv de zidărie Multibat ExtraZid Z6 25kg",
    category: "adezivi",
    subcategory: "adezivi-zidarie",
    price: "request",
    unit: "sac",
    description: "Adeziv Multibat ExtraZid Z6 pentru zidărie, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Multibat",
      Tip: "ExtraZid Z6"
    },
    images: ["/images/zidarie1.webp"],      // completează cu calea ta
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-bca-baumit-planofix-5-25kg",
    name: "Adeziv BCA Baumit PlanoFix 5 25kg",
    category: "adezivi",
    subcategory: "adezivi-zidarie",
    price: "request",
    unit: "sac",
    description: "Adeziv Baumit PlanoFix 5 pentru BCA, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Baumit",
      Tip: "PlanoFix 5"
    },
    images: ["/images/zidarie2.webp"],      // completează cu calea ta
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "adeziv-bca-adeplast-optim-dekor-25kg",
    name: "Adeziv BCA Adeplast Optim Dekor 25kg",
    category: "adezivi",
    subcategory: "adezivi-zidarie",
    price: "request",
    unit: "sac",
    description: "Adeziv Adeplast Optim Dekor pentru BCA, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Adeplast",
      Tip: "Optim Dekor"
    },
    images: ["/images/zidarie3.webp"],      // completează cu calea ta
    inStock: true,
    rating: 0,
    reviews: 0
  }
];


// GIPS CARTON - Accesorii (toate produsele - 13 produse)
export const accesoriiGipsCartonProducts: Product[] = [
  {
    id: "banda-fibra-sticla-autoadeziva-rigips-hydro",
    name: "Bandă din fibră de sticlă autoadezivă Rigips Hydro",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă autoadezivă Rigips Hydro din fibră de sticlă pentru etanșare şi armare.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Fibră de sticlă",
      Tip: "Hydro autoadezivă"
    },
    images: ["/images/banda3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-etansare-rigips-uw100-vata-bazaltica",
    name: "Bandă etanșare adezivă din vată minerală bazaltică Rigips pentru profil UW 100",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă de etanșare Rigips bazaltică autoadezivă pentru profil UW 100.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Vată minerală bazaltică",
      Compatibilitate: "Profil UW 100"
    },
    images: ["/images/banda2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-armare-rosturi-hartie-rigips-75m",
    name: "Bandă armare rosturi din hârtie Rigips 75m",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din hârtie pentru armare rosturi, lungime 75m.",
    specifications: {
      Lungime: "75m",
      Material: "Hârtie",
      Utilizare: "Armare rosturi"
    },
    images: ["/images/banda4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-colt-hartie-alux-30m",
    name: "Bandă de colț Rigips Alux din hârtie armată 30m",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips Alux din hârtie armată pentru colțuri, lungime 30m.",
    specifications: {
      Lungime: "30m",
      Material: "Hârtie armată",
      Tip: "Alux"
    },
    images: ["/images/banda5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-armare-rosturi-fibra-sticla-rigips",
    name: "Bandă armare rosturi din fibră de sticlă Rigips",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din fibră de sticlă pentru armare rosturi.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Fibră de sticlă",
      Utilizare: "Armare rosturi"
    },
    images: ["/images/banda6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-autoadeziva-gips-carton-rigips-45m",
    name: "Bandă autoadezivă gips-carton Rigips 45m",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă autoadezivă Rigips pentru gips-carton, lungime 45m.",
    specifications: {
      Lungime: "45m",
      Material: "Hârtie specială",
      Utilizare: "Gips-carton"
    },
    images: ["/images/banda7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-autoadeziva-gips-carton-rigips-90m",
    name: "Bandă autoadezivă gips-carton Rigips 90m",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă autoadezivă Rigips pentru gips-carton, lungime 90m.",
    specifications: {
      Lungime: "90m",
      Material: "Hârtie specială",
      Utilizare: "Gips-carton"
    },
    images: ["/images/banda7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-etansare-uw100-polietilena-rigips",
    name: "Bandă etanșare adezivă din poliietilenă expandată Rigips pentru profil UW 100",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din poliietilenă expandată autoadezivă pentru profil UW 100.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Polietilenă expandată",
      Compatibilitate: "Profil UW 100"
    },
    images: ["/images/banda1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-etansare-uw75-polietilena-rigips",
    name: "Bandă etanșare adezivă din poliietilenă expandată Rigips pentru profil UW 75",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din poliietilenă expandată autoadezivă pentru profil UW 75.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Polietilenă expandată",
      Compatibilitate: "Profil UW 75"
    },
    images: ["/images/banda1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-etansare-uw50-polietilena-rigips",
    name: "Bandă etanșare adezivă din poliietilenă expandată Rigips pentru profil UW 50",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din poliietilenă expandată autoadezivă pentru profil UW 50.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Polietilenă expandată",
      Compatibilitate: "Profil UW 50"
    },
    images: ["/images/banda1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-etansare-ud28-polietilena-rigips",
    name: "Bandă etanșare adezivă din poliietilenă expandată Rigips pentru profil UD 28",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din poliietilenă expandată autoadezivă pentru profil UD 28.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Polietilenă expandată",
      Compatibilitate: "Profil UD 28"
    },
    images: ["/images/banda1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-etansare-uw50-vata-bazaltica-rigips",
    name: "Bandă etanșare adezivă din vată minerală bazaltică Rigips pentru profil UW 50",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din vată minerală bazaltică autoadezivă pentru profil UW 50.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Vată minerală bazaltică",
      Compatibilitate: "Profil UW 50"
    },
    images: ["/images/banda2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "banda-etansare-uw75-vata-bazaltica-rigips",
    name: "Bandă etanșare adezivă din vată minerală bazaltică Rigips pentru profil UW 75",
    category: "gips-carton",
    subcategory: "accesorii-gips-carton",
    price: "request",
    unit: "rola",
    description: "Bandă Rigips din vată minerală bazaltică autoadezivă pentru profil UW 75.",
    specifications: {
      Lungime: "măsură ta",
      Material: "Vată minerală bazaltică",
      Compatibilitate: "Profil UW 75"
    },
    images: ["/images/banda2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  }
];


// GIPS CARTON - Placi (toate produsele - 18 produse)
// lib/data/products.ts
export const placiGipsCartonProducts: Product[] = [
  {
    id: "rigips-fonic-12-5-1200x2000mm",
    name: "Gips carton Rigips Fonic 12,5, 1200x2000mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips Fonic, grosime 12,5mm, dimensiuni 1200×2000mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2000mm",
      Tip: "Fonic"
    },
    images: ["/images/gips1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rfi-15-1200x2600mm",
    name: "Gips carton Rigips RFI 15, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RFI, grosime 15mm, dimensiuni 1200×2600mm.",
    specifications: {
      Grosime: "15mm",
      Dimensiuni: "1200×2600mm",
      Tip: "RFI"
    },
    images: ["/images/gips2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rf-15-1200x2600mm",
    name: "Gips carton Rigips RF 15, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RF, grosime 15mm, dimensiuni 1200×2600mm.",
    specifications: {
      Grosime: "15mm",
      Dimensiuni: "1200×2600mm",
      Tip: "RF"
    },
    images: ["/images/gips3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rb-9-5-1200x2000mm",
    name: "Gips carton Rigips RB 9,5, 1200x2000mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RB, grosime 9,5mm, dimensiuni 1200×2000mm.",
    specifications: {
      Grosime: "9,5mm",
      Dimensiuni: "1200×2000mm",
      Tip: "RB"
    },
    images: ["/images/gips4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rf-15-1200x2000mm",
    name: "Gips carton Rigips RF 15, 1200x2000mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RF, grosime 15mm, dimensiuni 1200×2000mm.",
    specifications: {
      Grosime: "15mm",
      Dimensiuni: "1200×2000mm",
      Tip: "RF"
    },
    images: ["/images/gips5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rb-9-5-1200x2600mm",
    name: "Gips carton Rigips RB 9,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RB, grosime 9,5mm, dimensiuni 1200×2600mm.",
    specifications: {
      Grosime: "9,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "RB"
    },
    images: ["/images/gips6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-activ-air-12-5-1200x2000mm",
    name: "Gips carton Rigips Activ’Air 12,5, 1200x2000mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips Activ’Air, grosime 12,5mm, 1200×2000mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2000mm",
      Tip: "Activ’Air"
    },
    images: ["/images/gips7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rb-12-5-1200x2600mm",
    name: "Gips carton Rigips RB 12,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RB, grosime 12,5mm, dimensiuni 1200×2600mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "RB"
    },
    images: ["/images/gips8.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-habito-1200x2600mm",
    name: "Gips carton Rigips Habito, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips Habito, grosime 12,5mm, dimensiuni 1200×2600mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "Habito"
    },
    images: ["/images/gips9.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rb-12-5-1200x2000mm",
    name: "Gips carton Rigips RB 12,5, 1200x2000mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RB, grosime 12,5mm, dimensiuni 1200×2000mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2000mm",
      Tip: "RB"
    },
    images: ["/images/gips10.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-aquaroc-12-5x1200x2500mm",
    name: "Placă ciment de exterior Rigips Aquaroc 12,5x1200x2500mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă de ciment Rigips Aquaroc pentru exterior, 12,5×1200×2500mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2500mm",
      Tip: "Aquaroc"
    },
    images: ["/images/gips11.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rbi-12-5-1200x2600mm",
    name: "Gips carton Rigips RBI 12,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RBI, grosime 12,5mm, 1200×2600mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "RBI"
    },
    images: ["/images/gips12.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "duragips-a-9-5-1200x2600mm",
    name: "Gips carton Duragips A 9,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Duragips A, grosime 9,5mm, 1200×2600mm.",
    specifications: {
      Grosime: "9,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "Duragips A"
    },
    images: ["/images/gips13.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rf-12-5-1200x2600mm",
    name: "Gips carton Rigips RF 12,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RF, grosime 12,5mm, dimensiuni 1200×2600mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "RF"
    },
    images: ["/images/gips14.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "duragips-a-12-5-1200x2600mm",
    name: "Gips carton Duragips A 12,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Duragips A, grosime 12,5mm, 1200×2600mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "Duragips A"
    },
    images: ["/images/gips15.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-rf-12-5-1200x2000mm",
    name: "Gips carton Rigips RF 12,5, 1200x2000mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips RF, grosime 12,5mm, dimensiuni 1200×2000mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2000mm",
      Tip: "RF"
    },
    images: ["/images/gips16.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "duragips-h-12-5-1200x2600mm",
    name: "Gips carton Duragips H 12,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Duragips H, grosime 12,5mm, dimensiuni 1200×2600mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "Duragips H"
    },
    images: ["/images/gips17.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: "rigips-fonic-12-5-1200x2600mm",
    name: "Gips carton Rigips Fonic 12,5, 1200x2600mm",
    category: "gips-carton",
    subcategory: "placi-gips-carton",
    price: "request",
    unit: "buc",
    description: "Placă gips-carton Rigips Fonic, grosime 12,5mm, 1200×2600mm.",
    specifications: {
      Grosime: "12,5mm",
      Dimensiuni: "1200×2600mm",
      Tip: "Fonic"
    },
    images: ["/images/gips18.webp"],
    inStock: true,
    rating: 0,
    reviews: 0
  }
];


// GIPS CARTON - Profile (toate produsele - 54 produse)
export const profileGipsCartonProducts: Product[] = [
  {
    id: "1-profil-gips-carton-ua-75-15mm-4m",
    name: "Profil gips carton UA 75 1,5mm, 4m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UA 75 1,5mm, 4m.",
    specifications: { Tip: "UA", Grosime: "1,5mm", Lungime: "4m" },
    images: ["/images/profile1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "2-profil-gips-carton-cd-60-05mm-3m",
    name: "Profil gips carton CD 60 0,5mm, 3m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton CD 60 0,5mm, 3m.",
    specifications: { Tip: "CD", Grosime: "0,5mm", Lungime: "3m" },
    images: ["/images/profile2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "3-profil-gips-carton-uw-30-04mm-3m",
    name: "Profil gips carton UW 30 0,4mm, 3m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UW 30 0,4mm, 3m.",
    specifications: { Tip: "UW", Grosime: "0,4mm", Lungime: "3m" },
    images: ["/images/profile3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "4-profil-gips-carton-cw-75-05mm-4m",
    name: "Profil gips carton CW 75 0,5mm, 4m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton CW 75 0,5mm, 4m.",
    specifications: { Tip: "CW", Grosime: "0,5mm", Lungime: "4m" },
    images: ["/images/profile4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "5-profil-gips-carton-ua-75-2mm-4m",
    name: "Profil gips carton UA 75 2mm, 4m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UA 75 2mm, 4m.",
    specifications: { Tip: "UA", Grosime: "2mm", Lungime: "4m" },
    images: ["/images/profile5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "6-profil-gips-carton-ua-100-15mm-3m",
    name: "Profil gips carton UA 100 1,5mm, 3m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UA 100 1,5mm, 3m.",
    specifications: { Tip: "UA", Grosime: "1,5mm", Lungime: "3m" },
    images: ["/images/profile6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "7-profil-gips-carton-cd-60-05mm-4m",
    name: "Profil gips carton CD 60 0,5mm, 4m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton CD 60 0,5mm, 4m.",
    specifications: { Tip: "CD", Grosime: "0,5mm", Lungime: "4m" },
    images: ["/images/profile7.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "8-profil-gips-carton-uw-30-04mm-4m",
    name: "Profil gips carton UW 30 0,4mm, 4m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UW 30 0,4mm, 4m.",
    specifications: { Tip: "UW", Grosime: "0,4mm", Lungime: "4m" },
    images: ["/images/profile8.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "9-profil-gips-carton-cw-75-06mm-3m",
    name: "Profil gips carton CW 75 0,6mm, 3m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton CW 75 0,6mm, 3m.",
    specifications: { Tip: "CW", Grosime: "0,6mm", Lungime: "3m" },
    images: ["/images/profile9.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "10-profil-gips-carton-ua-100-2mm-3m",
    name: "Profil gips carton UA 100 2mm, 3m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UA 100 2mm, 3m.",
    specifications: { Tip: "UA", Grosime: "2mm", Lungime: "3m" },
    images: ["/images/profile10.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "11-profil-gips-carton-ua-100-15mm-4m",
    name: "Profil gips carton UA 100 1,5mm, 4m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UA 100 1,5mm, 4m.",
    specifications: { Tip: "UA", Grosime: "1,5mm", Lungime: "4m" },
    images: ["/images/profile11.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "12-profil-gips-carton-cd-60-04mm-3m",
    name: "Profil gips carton CD 60 0,4mm, 3m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton CD 60 0,4mm, 3m.",
    specifications: { Tip: "CD", Grosime: "0,4mm", Lungime: "3m" },
    images: ["/images/profile12.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
    {
    id: "13-profil-gips-carton-uw-30-06mm-3m",
    name: "Profil gips carton UW 30 0,6mm, 3m",
    category: "gips-carton",
    subcategory: "profile-gips-carton",
    price: "request",
    unit: "buc",
    description: "Profil gips carton UW 30 0,6mm, 3m.",
    specifications: { Tip: "UW", Grosime: "0,6mm", Lungime: "3m" },
    images: ["/images/profile13.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
{
  id: "14-profil-gips-carton-cd-06mm-4m",
  name: "Profil gips carton CD 60 0,6mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CD 60 0,6mm, 4m.",
  specifications: { Tip: "CD", Grosime: "0,6mm", Lungime: "4m" },
  images: ["/images/profile14.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "15-profil-gips-carton-cw-100-05mm-4m",
  name: "Profil gips carton CW 100 0,5mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CW 100 0,5mm, 4m.",
  specifications: { Tip: "CW", Grosime: "0,5mm", Lungime: "4m" },
  images: ["/images/profile15.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "16-profil-gips-carton-cw-100-06mm-3m",
  name: "Profil gips carton CW 100 0,6mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CW 100 0,6mm, 3m.",
  specifications: { Tip: "CW", Grosime: "0,6mm", Lungime: "3m" },
  images: ["/images/profile16.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "17-profil-gips-carton-cw-100-06mm-4m",
  name: "Profil gips carton CW 100 0,6mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CW 100 0,6mm, 4m.",
  specifications: { Tip: "CW", Grosime: "0,6mm", Lungime: "4m" },
  images: ["/images/profile17.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "18-profil-gips-carton-cw-50-05mm-4m",
  name: "Profil gips carton CW 50 0,5mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CW 50 0,5mm, 4m.",
  specifications: { Tip: "CW", Grosime: "0,5mm", Lungime: "4m" },
  images: ["/images/profile18.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "19-profil-gips-carton-cw-50-06mm-3m",
  name: "Profil gips carton CW 50 0,6mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CW 50 0,6mm, 3m.",
  specifications: { Tip: "CW", Grosime: "0,6mm", Lungime: "3m" },
  images: ["/images/profile19.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "20-profil-gips-carton-cw-50-06mm-4m",
  name: "Profil gips carton CW 50 0,6mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CW 50 0,6mm, 4m.",
  specifications: { Tip: "CW", Grosime: "0,6mm", Lungime: "4m" },
  images: ["/images/profile20.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "21-profil-gips-carton-cw-75-05mm-3m",
  name: "Profil gips carton CW 75 0,5mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton CW 75 0,5mm, 3m.",
  specifications: { Tip: "CW", Grosime: "0,5mm", Lungime: "3m" },
  images: ["/images/profile21.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "22-profil-gips-carton-ua-50-15mm-3m",
  name: "Profil gips carton UA 50 1,5mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UA 50 1,5mm, 3m.",
  specifications: { Tip: "UA", Grosime: "1,5mm", Lungime: "3m" },
  images: ["/images/profile22.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "23-profil-gips-carton-ua-50-15mm-4m",
  name: "Profil gips carton UA 50 1,5mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UA 50 1,5mm, 4m.",
  specifications: { Tip: "UA", Grosime: "1,5mm", Lungime: "4m" },
  images: ["/images/profile23.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "24-profil-gips-carton-ua-50-2mm-3m",
  name: "Profil gips carton UA 50 2mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UA 50 2mm, 3m.",
  specifications: { Tip: "UA", Grosime: "2mm", Lungime: "3m" },
  images: ["/images/profile24.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "25-profil-gips-carton-ua-50-2mm-4m",
  name: "Profil gips carton UA 50 2mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UA 50 2mm, 4m.",
  specifications: { Tip: "UA", Grosime: "2mm", Lungime: "4m" },
  images: ["/images/profile25.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "26-profil-gips-carton-ua-75-15mm-3m",
  name: "Profil gips carton UA 75 1,5mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UA 75 1,5mm, 3m.",
  specifications: { Tip: "UA", Grosime: "1,5mm", Lungime: "3m" },
  images: ["/images/profile26.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "27-profil-gips-carton-ua-75-2mm-3m",
  name: "Profil gips carton UA 75 2mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UA 75 2mm, 3m.",
  specifications: { Tip: "UA", Grosime: "2mm", Lungime: "3m" },
  images: ["/images/profile27.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "28-profil-gips-carton-uw-100-05mm-3m",
  name: "Profil gips carton UW 100 0,5mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 100 0,5mm, 3m.",
  specifications: { Tip: "UW", Grosime: "0,5mm", Lungime: "3m" },
  images: ["/images/profile28.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "29-profil-gips-carton-uw-100-05mm-4m",
  name: "Profil gips carton UW 100 0,5mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 100 0,5mm, 4m.",
  specifications: { Tip: "UW", Grosime: "0,5mm", Lungime: "4m" },
  images: ["/images/profile28.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "30-profil-gips-carton-uw-100-06mm-4m",
  name: "Profil gips carton UW 100 0,6mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 100 0,6mm, 4m.",
  specifications: { Tip: "UW", Grosime: "0,6mm", Lungime: "4m" },
  images: ["/images/profile30.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "31-profil-gips-carton-uw-50-05mm-3m",
  name: "Profil gips carton UW 50 0,5mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 50 0,5mm, 3m.",
  specifications: { Tip: "UW", Grosime: "0,5mm", Lungime: "3m" },
  images: ["/images/profile31.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "32-profil-gips-carton-uw-50-06mm-4m",
  name: "Profil gips carton UW 50 0,6mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 50 0,6mm, 4m.",
  specifications: { Tip: "UW", Grosime: "0,6mm", Lungime: "4m" },
  images: ["/images/profile32.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "33-profil-gips-carton-uw-75-05mm-3m",
  name: "Profil gips carton UW 75 0,5mm, 3m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 75 0,5mm, 3m.",
  specifications: { Tip: "UW", Grosime: "0,5mm", Lungime: "3m" },
  images: ["/images/profile33.webp"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "34-profil-gips-carton-uw-75-05mm-4m",
  name: "Profil gips carton UW 75 0,5mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 75 0,5mm, 4m.",
  specifications: { Tip: "UW", Grosime: "0,5mm", Lungime: "4m" },
  images: ["/images/profile34.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "35-profil-gips-carton-uw-75-06mm-4m",
  name: "Profil gips carton UW 75 0,6mm, 4m",
  category: "gips-carton",
  subcategory: "profile-gips-carton",
  price: "request",
  unit: "buc",
  description: "Profil gips carton UW 75 0,6mm, 4m.",
  specifications: { Tip: "UW", Grosime: "0,6mm", Lungime: "4m" },
  images: ["/images/profile35.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
}
]

  


// TEGO - Panouri (toate produsele - 3 produse)
const panouriTegoProducts: Product[] = [
  {
    id: "panou-tego-21mm-2500x1250",
    name: "Panou TEGO 21mm 2500x1250mm",
    category: "tego",
    subcategory: "panouri-tego",
    price: "request",
    unit: "buc",
    description: "Panou TEGO din lemn stratificat, grosime 21mm.",
    specifications: {
      Dimensiuni: "2500x1250x21mm",
      Grosime: "21mm",
    },
    images: ["/images/tego1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "panou-tego-18mm-2500x1250",
    name: "Panou TEGO 18mm 2500x1250mm",
    category: "tego",
    subcategory: "panouri-tego",
    price: "request",
    unit: "buc",
    description: "Panou TEGO din lemn stratificat, grosime 18mm.",
    specifications: {
      Dimensiuni: "2500x1250x18mm",
      Grosime: "18mm",
    },
    images: ["/images/tego1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "panou-tego-20mm-2440x1220",
    name: "Panou TEGO 20mm 2440x1220mm",
    category: "tego",
    subcategory: "panouri-tego",
    price: "request",
    unit: "buc",
    description: "Panou TEGO din lemn stratificat, grosime 20mm.",
    specifications: {
      Dimensiuni: "2440x1220x20mm",
      Grosime: "20mm",
    },
    images: ["/images/tego1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  }
]



// TENCUIELI DECORATIVE (toate produsele - 6 produse)
const tencuieliDecorativeProducts: Product[] = [
  {
    id: "tencuiala-decorativa-ceresit-ct174",
    name: "Tencuiala decorativa siliconico-silicatica Ceresit CT 174",
    category: "tencuieli-decorative",
    subcategory: "tencuieli-decorative",
    price: "request",
    unit: "galeata",
    description: "Tencuială decorativă siliconico-silicatică Ceresit CT 174.",
    specifications: {
      Marca: "Ceresit",
      Tip: "CT 174",
      Baza: "Siliconico-silicatică",
    },
    images: ["/images/ten1.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "tencuiala-decorativa-ceresit-ct75",
    name: "Tencuiala decorativa siliconica Ceresit CT 75",
    category: "tencuieli-decorative",
    subcategory: "tencuieli-decorative",
    price: "request",
    unit: "galeata",
    description: "Tencuială decorativă siliconică Ceresit CT 75.",
    specifications: {
      Marca: "Ceresit",
      Tip: "CT 75",
      Baza: "Siliconică",
    },
    images: ["/images/ten2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "tencuiala-decorativa-ceresit-ct175",
    name: "Tencuiala decorativa siliconico-silicatica Ceresit CT 175",
    category: "tencuieli-decorative",
    subcategory: "tencuieli-decorative",
    price: "request",
    unit: "galeata",
    description: "Tencuială decorativă siliconico-silicatică Ceresit CT 175.",
    specifications: {
      Marca: "Ceresit",
      Tip: "CT 175",
      Baza: "Siliconico-silicatică",
    },
    images: ["/images/ten3.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "tencuiala-decorativa-ceresit-ct74",
    name: "Tencuiala decorativa siliconica Ceresit CT 74",
    category: "tencuieli-decorative",
    subcategory: "tencuieli-decorative",
    price: "request",
    unit: "galeata",
    description: "Tencuială decorativă siliconică Ceresit CT 74.",
    specifications: {
      Marca: "Ceresit",
      Tip: "CT 74",
      Baza: "Siliconică",
    },
    images: ["/images/ten4.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "tencuiala-decorativa-ceresit-ct64",
    name: "Tencuiala decorativa acrilica Ceresit CT 64",
    category: "tencuieli-decorative",
    subcategory: "tencuieli-decorative",
    price: "request",
    unit: "galeata",
    description: "Tencuială decorativă acrilică Ceresit CT 64.",
    specifications: {
      Marca: "Ceresit",
      Tip: "CT 64",
      Baza: "Acrilică",
    },
    images: ["/images/ten5.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "tencuiala-decorativa-ceresit-ct60",
    name: "Tencuiala decorativa acrilica Ceresit CT 60",
    category: "tencuieli-decorative",
    subcategory: "tencuieli-decorative",
    price: "request",
    unit: "galeata",
    description: "Tencuială decorativă acrilică Ceresit CT 60.",
    specifications: {
      Marca: "Ceresit",
      Tip: "CT 60",
      Baza: "Acrilică",
    },
    images: ["/images/ten6.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  }
]



// PRODUSE SIKA - Materiale finisare (toate produsele - 9 produse)
const materialeFiniareProducts: Product[] = [
  {
    id: "sika-tilebond-ceramic",
    name: "SikaHome® TileBond Ceramic Adeziv pentru placari ceramice",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Adeziv pentru placări ceramice – SikaHome® TileBond Ceramic.",
    specifications: {
      Marca: "Sika",
      Tip: "Adeziv ceramic",
    },
    images: ["/images/sika1.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-level-gypsum",
    name: "SikaHome® Level Gypsum",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Sapa autonivelanta pe baza de ipsos – SikaHome® Level Gypsum.",
    specifications: {
      Marca: "Sika",
      Tip: "Nivelare cu ipsos",
    },
    images: ["/images/sika2.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sikaceram-105",
    name: "SikaCeram®-105",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Adeziv pentru placări ceramice – SikaCeram®-105.",
    specifications: {
      Marca: "Sika",
      Tip: "SikaCeram-105",
    },
    images: ["/images/sika3.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-tilebond-flexible",
    name: "SikaHome® TileBond Flexible",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Adeziv flexibil pentru plăci ceramice – SikaHome® TileBond Flexible.",
    specifications: {
      Marca: "Sika",
      Tip: "Adeziv flexibil",
    },
    images: ["/images/sika4.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-tilebond-natural-stone",
    name: "SikaHome® TileBond Natural Stone",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Adeziv pentru piatră naturală – SikaHome® TileBond Natural Stone.",
    specifications: {
      Marca: "Sika",
      Tip: "Adeziv piatră naturală",
    },
    images: ["/images/sika5.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-level-fine",
    name: "SikaHome Level Fine Glet De Finisaj",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Glet de finisaj autonivelant – SikaHome Level Fine.",
    specifications: {
      Marca: "Sika",
      Tip: "Glet de finisaj",
    },
    images: ["/images/sika6.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sikaceram-205-gri",
    name: "Sika Ceram-205 Gri Adeziv flexibil interior/exterior",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Adeziv flexibil pentru interior și exterior – Sika Ceram-205 Gri.",
    specifications: {
      Marca: "Sika",
      Tip: "Ceram-205 Gri",
    },
    images: ["/images/sika7.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sikaceram-255-starflex-gri",
    name: "SikaCeram-255 StarFlex Gri",
    category: "produse-sika",
    subcategory: "materiale-finisare",
    price: "request",
    unit: "sac",
    description: "Adeziv flexibil de înaltă performanță – SikaCeram-255 StarFlex Gri.",
    specifications: {
      Marca: "Sika",
      Tip: "Ceram-255 StarFlex Gri",
    },
    images: ["/images/sika8.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  }
]



// PRODUSE SIKA - Sigilari si lipiri (toate produsele - 9 produse)
const sigilariSiLipiriProducts: Product[] = [
  {
    id: "sika-boom-580-750ml",
    name: "Sika Boom 580 Fix&Fill Spumă Poliuretanică Galben 750ml",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "buc",
    description: "Spumă poliuretanică de umplere și fixare Sika Boom 580, 750ml.",
    specifications: {
      Volum: "750ml",
      Marca: "Sika",
      Tip: "Boom 580",
    },
    images: ["/images/sig1.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-boom-582-750ml",
    name: "Sika Boom 582 Foam Fix Spumă Poliuretanică Lipire 750ml",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "buc",
    description: "Spumă poliuretanică de lipire Sika Boom 582, 750ml.",
    specifications: {
      Volum: "750ml",
      Marca: "Sika",
      Tip: "Boom 582",
    },
    images: ["/images/sig2.webp"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sikaflex-11-fc-plus-300ml",
    name: "Sikaflex -11 FC+ Gri 300ml Adeziv și sigilant poliuretanic",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "buc",
    description: "Adeziv și sigilant poliuretanic Sikaflex -11 FC+ Gri, 300ml.",
    specifications: {
      Volum: "300ml",
      Marca: "Sika",
      Tip: "Sikaflex -11 FC+",
    },
    images: ["/images/sig3.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sikaflex-111-stick-seal",
    name: "Sikaflex®-111 Stick &Seal Adeziv și Sigilant Elastic",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "buc",
    description: "Adeziv și sigilant elastic Sikaflex®-111 Stick &Seal.",
    specifications: {
      Marca: "Sika",
      Tip: "Sikaflex-111 Stick &Seal",
    },
    images: ["/images/sig4.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-seal-tape-s-10m",
    name: "Bandă sigilare Sika Seal Tape S, elastomer, 120 mm, L 10 m",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "rola",
    description: "Bandă de sigilare Sika Seal Tape S, 120mm lățime, 10m lungime.",
    specifications: {
      Lungime: "10m",
      Marca: "Sika",
      Tip: "Seal Tape S",
    },
    images: ["/images/sig5.png"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-igasol-101-12l",
    name: "Sika® Igasol®-101 12L",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "buc",
    description: "Hidroizolație lichidă Sika® Igasol®-101, 12L.",
    specifications: {
      Volum: "12L",
      Marca: "Sika",
      Tip: "Igasol-101",
    },
    images: ["/images/sig6.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-top-seal-107-mortar",
    name: "Top Seal 107 Mortar de impermeabilizare Sika",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "sac",
    description: "Mortar de impermeabilizare Sika Top Seal 107.",
    specifications: {
      Marca: "Sika",
      Tip: "Top Seal 107",
    },
    images: ["/images/sig7.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-igolflex-n-25kg",
    name: "Hidroizolație Sika Igolflex N, pentru fundație-piscine-subsol, 25 kg",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "sac",
    description: "Hidroizolație Sika Igolflex N pentru aplicații exterioare, 25kg.",
    specifications: {
      Greutate: "25kg",
      Marca: "Sika",
      Tip: "Igolflex N",
    },
    images: ["/images/sig8.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "sika-seal-tape-s-50m",
    name: "Bandă sigilare Sika Seal Tape S, elastomer, L 50 m",
    category: "produse-sika",
    subcategory: "sigilari-lipiri",
    price: "request",
    unit: "rola",
    description: "Bandă de sigilare Sika Seal Tape S, lungime 50m.",
    specifications: {
      Lungime: "50m",
      Marca: "Sika",
      Tip: "Seal Tape S",
    },
    images: ["/images/sig9.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  }
]


const polistirenExpandatProducts: Product[] = [
  {
    id: "eps50-20cm",
    name: "Polistiren expandat Sikatherm® EPS50 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS50.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS50",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps50.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "eps60-20cm",
    name: "Polistiren expandat Sikatherm® EPS60 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS60.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS60",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps50.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  {
    id: "eps70-20cm",
    name: "Polistiren expandat Sikatherm® EPS70 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS70.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS70",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps50.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
 
  {
    id: "eps80-20cm",
    name: "Polistiren expandat Sikatherm® EPS80 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS80.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS80",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps80.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  {
    id: "eps100-20cm",
    name: "Polistiren expandat Sikatherm® EPS100 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS100.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS100",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps100.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  {
    id: "eps120-20cm",
    name: "Polistiren expandat Sikatherm® EPS120 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS120.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS120",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps100.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  {
    id: "eps150-20cm",
    name: "Polistiren expandat Sikatherm® EPS150 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS150.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS150",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps100.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  {
    id: "eps200-20cm",
    name: "Polistiren expandat Sikatherm® EPS200 ",
    category: "polistiren",
    subcategory: "polistiren-expandat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren expandat EPS200.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS200",
      Brand: "Sikatherm®",
    },
    images: ["/images/eps100.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
]

const polistirenExtrudatProducts: Product[] = [
  {
    id: "xps-50mm",
    name: "Polistiren Extrudat 50mm XPS",
    category: "polistiren",
    subcategory: "polistiren-extrudat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren extrudat XPS, grosime 50mm.",
    specifications: {
      Grosime: "50mm",
      Tip: "XPS",
    },
    images: ["/images/extrudat.jpeg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  
  {
    id: "xps-20mm",
    name: "Polistiren Extrudat 20mm XPS",
    category: "polistiren",
    subcategory: "polistiren-extrudat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren extrudat XPS, grosime 20mm.",
    specifications: {
      Grosime: "20mm",
      Tip: "XPS",
    },
    images: ["/images/extrudat.jpeg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  {
    id: "xps-100mm",
    name: "Polistiren Extrudat 100mm XPS",
    category: "polistiren",
    subcategory: "polistiren-extrudat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren extrudat XPS, grosime 100mm.",
    specifications: {
      Grosime: "100mm",
      Tip: "XPS",
    },
    images: ["/images/extrudat.jpeg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  {
    id: "xps-30mm",
    name: "Polistiren Extrudat 30mm XPS",
    category: "polistiren",
    subcategory: "polistiren-extrudat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren extrudat XPS, grosime 30mm.",
    specifications: {
      Grosime: "30mm",
      Tip: "XPS",
    },
    images: ["/images/extrudat.jpeg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
]

const polistirenGrafitatProducts: Product[] = [
  {
    id: "eps80-grafitat-20cm",
    name: "Polistiren Grafitat Sikatherm® EPS80 ",
    category: "polistiren",
    subcategory: "polistiren-grafitat",
    price: "request",
    unit: "buc",
    description: "Plăci de polistiren grafitat EPS80.",
    specifications: {
      Grosime: "Grosimile variază între 20 mm și 250 mm, în funcție de cerința clientului.",
      Densitate: "EPS80 Grafitat",
      Brand: "Sikatherm®",
    },
    images: ["/images/grafitat.jpg"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
]

const polistirenSpecialProducts: Product[] = [
  {
    id: "pir-bv-bv-1200x2400-3cm",
    name: "Placă PIR Thermotop cu barieră de vapori BV-BV 1200×2400 mm, 3 cm",
    category: "polistiren",
    subcategory: "polistiren-special",
    price: "request",
    unit: "buc",
    description: "Placă PIR cu barieră de vapori, 3cm grosime, dimensiuni 1200×2400mm.",
    specifications: {
      Dimensiuni: "1200×2400mm",
      Grosime: "3cm",
      Tip: "PIR + barieră vapori",
    },
    images: ["/images/top1.png"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },
  {
    id: "pir-al-al-1200x2400-3cm",
    name: "Placă PIR Thermotop cu folie de aluminiu AL-AL 1200×2400 mm, 3 cm",
    category: "polistiren",
    subcategory: "polistiren-special",
    price: "request",
    unit: "buc",
    description: "Placă PIR cu folie aluminiu, 3cm grosime, dimensiuni 1200×2400mm.",
    specifications: {
      Dimensiuni: "1200×2400mm",
      Grosime: "3cm",
      Tip: "PIR + folie aluminiu",
    },
    images: ["/images/top2.png"],
    inStock: true,
    rating: 0,
    reviews: 0,
  },

  // ——— ACCESORII TERMOSISTEM ———
{
  id: "coltar-pvc-cu-plasa",
  name: "Coltar PVC cu Plasa",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Colțar PVC pentru finisaje tz termoizolante, rezistent și ușor de montat.",
  specifications: {},
  images: ["/images/PVC.jpeg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "profil-pvc-cu-picurator-2-5m",
  name: "Profil PVC cu picurator 2,5m",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Profil PVC cu picurător integrat, lungime 2,5m, pentru sisteme ETICS.",
  specifications: { lungime: "2.5m", material: "PVC" },
  images: ["/images/pvc2.jpeg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "dibluri-polistiren-10x90mm",
  name: "Dibluri Polistiren 10×90 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Dibluri pentru ancorarea plăcilor de polistiren, Ø10 mm, L 90 mm.",
  specifications: { diametru: "10mm", lungime: "90mm", material: "polistiren" },
  images: ["/images/dibluri.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "dibluri-10x120mm",
  name: "Dibluri 10×120 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Dibluri universale Ø10 mm, lungime 120 mm, pentru termoizolații.",
  specifications: { diametru: "10mm", lungime: "120mm" },
  images: ["/images/dibluri.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "dibluri-10x140mm",
  name: "Dibluri 10×140 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Dibluri universale Ø10 mm, lungime 140 mm, pentru termoizolații.",
  specifications: { diametru: "10mm", lungime: "140mm" },
  images: ["/images/dibluri.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "dibluri-10x160mm",
  name: "Dibluri 10×160 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Dibluri universale Ø10 mm, lungime 160 mm, pentru termoizolații.",
  specifications: { diametru: "10mm", lungime: "160mm" },
  images: ["/images/dibluri.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "dibluri-10x180mm",
  name: "Dibluri 10×180 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Dibluri universale Ø10 mm, lungime 180 mm, pentru termoizolații.",
  specifications: { diametru: "10mm", lungime: "180mm" },
  images: ["/images/dibluri.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "dibluri-10x200mm",
  name: "Dibluri 10×200 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Dibluri universale Ø10 mm, lungime 200 mm, pentru termoizolații.",
  specifications: { diametru: "10mm", lungime: "200mm" },
  images: ["/images/dibluri.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "dibluri-10x260mm",
  name: "Dibluri 10×260 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Dibluri universale Ø10 mm, lungime 260 mm, pentru termoizolații.",
  specifications: { diametru: "10mm", lungime: "260mm" },
  images: ["/images/dibluri.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "profil-soclu-aluminiu-termosistem-100x2500mm",
  name: "Profil Soclu Aluminiu Termosistem 100 × 2500 mm",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Profil de soclu din aluminiu, 100 × 2500 mm, rezistent la coroziune.",
  specifications: { material: "aluminiu", dimensiuni: "100×2500mm" },
  images: ["/images/soclu.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "plasa-fibra-premium-145gr-50mp",
  name: "Plasa Fibra Premium 145 gr 50 mp",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Plasă de fibră de sticlă 145 g/m², rolă de 50 m², pentru armare.",
  specifications: { greutate: "145gr/m²", suprafata: "50mp" },
  images: ["/images/plasa1.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
{
  id: "plasa-fibra-premium-160gr-50mp",
  name: "Plasa Fibra Premium 160 gr 50 mp",
  category: "accesorii-termosistem",
  subcategory: "",
  price: "request",
  unit: "buc",
  description: "Plasă de fibră de sticlă 160 g/m², rolă de 50 m², pentru armare.",
  specifications: { greutate: "160gr/m²", suprafata: "50mp" },
  images: ["/images/plasa2.jpg"],
  inStock: true,
  rating: 0,
  reviews: 0,
},
]

// Combinăm toate produsele
export const products: Product[] = [
  ...fierBetonProducts,
  ...fierBetonFasonatProducts,
  ...bcaProducts,
  ...caramidaProducts,
  ...amorseProducts,
  ...cimentProducts,
  ...gleturiProducts,
  ...mortareProducts,
  ...adeziviGipsCartonProducts,
  ...adeziviGresieFaiantaProducts,
  ...adeziviPolistirenProducts,
  ...adeziviVataMineralaProducts,
  ...adeziviZidarieProducts,
  ...accesoriiGipsCartonProducts,
  ...placiGipsCartonProducts,
  ...profileGipsCartonProducts,
  ...panouriTegoProducts,
  ...tencuieliDecorativeProducts,
  ...materialeFiniareProducts,
  ...sigilariSiLipiriProducts,
  ...decobitProducts,
  ...gamaProfesionalProducts,
  ...gamaStandardProducts,
  ...gamaFestaProducts,
  ...amorseMasticuriProducts,
  ...membranaCramponataProducts,
   ...polistirenExpandatProducts,
  ...polistirenExtrudatProducts,
  ...polistirenGrafitatProducts,
  ...polistirenSpecialProducts,
]

// Funcții helper
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return products.filter((product) => product.subcategory === subcategory)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.subcategory.toLowerCase().includes(lowercaseQuery),
  )
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.badge === "bestseller").slice(0, 8)
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.badge === "new").slice(0, 8)
}

export function getOfferProducts(): Product[] {
  return products.filter((product) => product.badge === "offer").slice(0, 8)
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId)
  if (!product) return []

  return products.filter((p) => p.id !== productId && p.subcategory === product.subcategory).slice(0, limit)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id)
}

export function getSubcategoryById(categoryId: string, subcategoryId: string): Subcategory | undefined {
  const category = getCategoryById(categoryId)
  return category?.subcategories.find((sub) => sub.id === subcategoryId)
}
export { products as allProducts }
