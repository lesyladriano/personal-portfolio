/** @type {import('next').NextConfig} */
const nextConfig = {
  // other configuration options...

  images: {
    formats: ['image/avif', 'image/webp'], // This enables support for modern image formats.
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure Sharp is used for image processing
      require('sharp');
    }

    return config;
  },
};

module.exports = nextConfig;
