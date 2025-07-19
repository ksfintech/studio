const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
