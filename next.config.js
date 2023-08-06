/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'loremflickr.com',
            port: '',
            pathname: '/640/480/nightlife',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '/200'
          }
        ],
      },
}

module.exports = nextConfig
