/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '**',
            // port: '',
            // pathname: '*',
          },
          {
            protocol: 'https',
            hostname: '**'
            // port: '',
            // pathname: '*',
          },
        ],
      },
};

module.exports = nextConfig
