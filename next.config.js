/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable app directory (Next.js 13+ feature)
    appDir: true,
  },
  // Optimize for production
  swcMinify: true,
  // Enable TypeScript strict mode
  typescript: {
    // Only run type checking in development
    ignoreBuildErrors: false,
  },
  // Image optimization for potential future use
  images: {
    domains: [],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
}

module.exports = nextConfig