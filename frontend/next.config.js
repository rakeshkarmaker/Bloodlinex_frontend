/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to generate a static 'out' folder
  images: {
    unoptimized: true, // Required for static exports unless using a 3rd party loader
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'randomuser.me' },
    ],
  },
};

module.exports = nextConfig
