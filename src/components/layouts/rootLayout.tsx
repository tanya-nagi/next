import { MetaType } from "@/types/meta/metaType";
import "./globals.css";
import PageHead from "@organisms/head";
import FooterOrganism from "@organisms/footer";
import NavbarOrganism from "@organisms/navbar";
import Head from "next/head";

export default function RootLayout({
  children,
  metadata,
}: Readonly<{
  children: React.ReactNode;
  metadata: MetaType;
}>) {
  const { title, description } = metadata;
  return (
    <>
      <Head>
        <PageHead />
        {/* variable values */}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
      </Head>
      <body>
        <NavbarOrganism />
        {children}
        <FooterOrganism />
      </body>
    </>
  );
}
