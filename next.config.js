/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://opencollective.com/decentsocial/events/decentsocial-conference-8c7e0a05/contribute/decentsocial-2023-49790',
        permanent: false,
        basePath: false,
      },
    ]
  },
}

module.exports = nextConfig
