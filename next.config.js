/** @type {import('next').NextConfig} */
module.exports = {
  // output:'export',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
}
