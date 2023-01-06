/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_CONFIG_BASEPATH ?? undefined,
  reactStrictMode: true,
}

module.exports = nextConfig
