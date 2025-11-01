import nextra from "nextra";

const nextConfig = {
  serverExternalPackages: [],
};

const withNextra = nextra({
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

nextConfig.experimental = {
  turbo: {
    resolveAlias: {
      "@": "./apps/web",
      "next-mdx-import-source-file": "./components/mdx-components.js",
    },
  },
};

export default withNextra(nextConfig);
