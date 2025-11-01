import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./docs.css";
import Image from "next/image";
export const metadata = {
  title: "XF402 Docs",
  description: "Learn how to use and integrate XF402 protocol",
};

const navbar = (
  <Navbar
    logo={
      <Image
        src="/logo.svg"
        alt="XF402"
        className="h-6 w-auto"
        width={100}
        height={100}
      />
    }
    logoLink="/"
  />
);
const footer = (
  <Footer className="text-white  flex items-center justify-center">
    {new Date().getFullYear()} © XF402.
  </Footer>
);

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap("/docs");
  
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          nextThemes={{ forcedTheme: "dark", defaultTheme: "dark" }}
          darkMode={false}
          editLink={false}
          copyPageButton={false}
          feedback={{ content: null, labels: undefined, link: undefined }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
