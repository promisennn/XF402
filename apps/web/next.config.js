import nextra from "nextra";

const nextConfig = {
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
