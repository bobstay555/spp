import type { NextConfig } from "next";
import path from "node:path";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Path for your custom loader
const LOADER = path.resolve(
  __dirname,
  "src/visual-edits/component-tagger-loader.js"
);

// Enable analyzer only when running with ANALYZE=true
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  // Fixes Turbopack file tracing issues
  outputFileTracingRoot: path.resolve(__dirname),

  // You currently allow builds with TS errors
  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Keep your custom loader
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
};

// Export wrapped config (TypeScript-safe)
export default withAnalyzer(nextConfig);
