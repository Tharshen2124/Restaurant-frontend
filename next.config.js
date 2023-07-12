/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/something',
        headers: [
          {
            key: 'Accept',
            value: 'application/vnd.api+json',
          },
          {
            key: 'Content-Type',
            value: 'application/vnd.api+json',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
