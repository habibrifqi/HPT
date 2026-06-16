import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['scontent.fsrg10-1.fna.fbcdn.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fjog8-1.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
