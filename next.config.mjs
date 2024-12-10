/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  reactStrictMode: false,
  experimental: {
      appDir: true, // Enable App Directory for API routes
    },
};

export default nextConfig;
