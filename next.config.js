/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
     
      {
        protocol: 'https',
        hostname: 'www.server.aestheticsolution.net',
        pathname: '/**',
      }
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig
