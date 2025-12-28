/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable experimental app directory; this is on by default for Next 14 but explicit here for clarity.
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;