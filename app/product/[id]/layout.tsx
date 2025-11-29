import { Metadata } from "next";

type ProductPageProps = {
  params: Promise<{ id: string }>;
  //   searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: URLSearchParams;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await params;
  return {
    title: `Product Page - ${product.id}`,
    description: `Inspector for ${product.id}`,
  };
}

export default async function Layout({
  params,
  searchParams,
  children,
}: ProductPageProps) {
  const { id } = await params;
  return <>{children}</>;
}
