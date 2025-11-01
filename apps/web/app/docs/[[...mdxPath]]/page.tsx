import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/components/mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: { params: { mdxPath: string } }) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath as unknown as string[]);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: { params: { mdxPath: string } }) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath as unknown as string[]);
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
