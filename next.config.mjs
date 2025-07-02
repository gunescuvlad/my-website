/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Listează aici domeniile de unde servești imagini
    domains: [
      'izopresto.ro',
      // adaugă alte domenii CDN dacă folosești
    ],
    // Formate moderne pe care Next.js le va genera automat
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Optimizează CSS pentru a elimina CSS blocant
    optimizeCss: true,
  },
};

export default nextConfig;
