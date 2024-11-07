import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: false,
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig;
