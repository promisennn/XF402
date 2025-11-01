import nextra from "nextra";

const nextConfig = {
  serverExternalPackages: [],
};

const withNextra = nextra({
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

// ✅ Turbopack alias config for monorepo
nextConfig.experimental = {
  turbo: {
    resolveAlias: {
      "@": "./", 
      "next-mdx-import-source-file": "./components/mdx-components.js",
    },
  },
};

export default withNextra(nextConfig);
