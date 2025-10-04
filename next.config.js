module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'sierraskyeview.com',
          },
        ],
        destination: 'https://www.sierraskyeview.com/$1',
        permanent: true,
      },
    ];
  },
};
