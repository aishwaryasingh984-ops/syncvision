import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the static one-page site at the home page (preview branch)
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/syncvision-onepage.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
