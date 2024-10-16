import RootLayout from "@components/layouts/rootLayout";
import { MetaType } from "@/types/meta/metaType";
import { headers } from "next/headers";
import AdminRootLayout from "@components/layouts/adminLayout";

export const metadata: MetaType = {
  title: "AAK",
  description:
    "At AAK, we are experts in vegetable oils and fats. We collaborate with you in an innovative and sustainable way to come up with the optimal solution for your products, applying more than 150 years of experience.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = headers().get("X-Layout");
  if (layout === "main") {
    return (
      <html lang="en">
        <RootLayout metadata={metadata}>{children}</RootLayout>
      </html>
    );
  }
  return (
    <html>
      <body>
        <AdminRootLayout>{children}</AdminRootLayout>
      </body>
    </html>
  );
}
