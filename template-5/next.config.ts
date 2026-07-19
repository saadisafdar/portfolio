import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: "/template-5/out",
  assetPrefix: "/template-5/out",
};

export default nextConfig;