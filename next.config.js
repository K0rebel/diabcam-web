/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  async rewrites() {
    return [
      {
        source: '/auth/action',
        destination: '/pl/auth/action',
      },
    ]
  },
}


module.exports = nextConfig
