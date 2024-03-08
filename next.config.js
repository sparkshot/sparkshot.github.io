/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
