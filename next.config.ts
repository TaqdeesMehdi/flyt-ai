import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript error checking during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
