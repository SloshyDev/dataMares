/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
      {
        protocol: 'https',
        hostname: 'creative-respect-d09344948f.strapiapp.com/graphql',
        port: '',
      }
    ],
  },
  // ...existing config
};

export default nextConfig;