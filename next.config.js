/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: " ",
  },
  // basePath: "/home",
  // assetPrefix: "/home",
};

module.exports = nextConfig;
