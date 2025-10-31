import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [],
};

const withNextra = nextra({
  defaultShowCopyCode: true,
  contentDirBasePath: '/docs',
});

nextConfig.turbopack = {
  resolveAlias: {
    'next-mdx-import-source-file': './components/mdx-components.js'
  }
};

export default withNextra(nextConfig);
