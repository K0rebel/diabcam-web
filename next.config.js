/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  // Upewniamy się, że Next.js dołącza pliki Markdown z bloga do paczki serverless
  // Jest to konieczne na Netlify/Vercel, gdzie process.cwd() wskazuje na inny katalog
  outputFileTracingIncludes: {
    '/[lang]/blog': ['./src/content/blog/**/*.md'],
    '/[lang]/blog/[slug]': ['./src/content/blog/**/*.md'],
  },
  // Wyciszamy ostrzeżenie o wielu lockfiles
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
