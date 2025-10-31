import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextra = nextra({
  // ... Add Nextra-specific options here
});

nextConfig.turbopack = {
  resolveAlias: {
    'next-mdx-import-source-file': './components/mdx-components.js'
  }
};

export default withNextra(nextConfig);
