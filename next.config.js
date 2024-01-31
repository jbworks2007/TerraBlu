/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jocky-boa-transformer-polygon.infura-ipfs.io',
      },
    ],
  },
}

module.exports = nextConfig
