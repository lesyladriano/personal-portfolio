/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable modern image formats
  images: {
    formats: ['image/avif', 'image/webp'], // This enables support for modern image formats
  },

  webpack: (config, { isServer }) => {
    // Ensure Sharp is used for image processing only on the server
    if (isServer) {
      // Note: `sharp` should be included in your dependencies in package.json
      const sharp = require('sharp');
    }

    // Return the modified config
    return config;
  },
};

module.exports = nextConfig;
