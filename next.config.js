/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/form',
        destination: '/',
        permanent: true,
      },
      {
        source: '/check-in',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
