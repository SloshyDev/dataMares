/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
      // allow Strapi media subdomains (used by your CMS uploads)
      {
        protocol: 'https',
        // match hosts like creative-respect-d09344948f.media.strapiapp.com
        hostname: '**.strapiapp.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // ...existing config
};

export default nextConfig;