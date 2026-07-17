import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/politica-confidentialitate",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/politica-cookies",
        destination: "/cookies-policy",
        permanent: true,
      },
      {
        source: "/termeni-conditii",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
