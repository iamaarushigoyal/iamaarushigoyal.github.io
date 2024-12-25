/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '', // process.env.NODE_ENV === 'production' ? '/intro' : '',
  assetPrefix: '/', //process.env.NODE_ENV === 'production' ? '/intro/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
