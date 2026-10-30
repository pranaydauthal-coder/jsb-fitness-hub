import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Removed the conflicting v4 turbopack CSS loader
};

export default nextConfig;