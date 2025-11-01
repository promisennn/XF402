import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "XF402 Docs",
  description: "Learn how to use and integrate XF402 protocol",
};

const navbar = (
  <Navbar
    logo={<h2 className="text-2xl font-bold"> XF402 Docs</h2>}
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
