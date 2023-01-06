/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_CONFIG_BASEPATH ?? undefined,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://opencollective.com/decentsocial/events/decentsocial-conference-8c7e0a05/contribute/decentsocial-2023-49790',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
