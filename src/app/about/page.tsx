import { MetaType } from "@/types/meta/metaType";
import RootLayout from "@components/layouts/rootLayout";
import Banner from "./banner";

export default function Home() {
  return (
    <RootLayout metadata={metadata}>
      <main className="flex min-h-screen">
        <Banner />
      </main>
    </RootLayout>
  );
}

const metadata: MetaType = {
  title: "AAK | About Us",
  description:
    "At AAK, we are experts in vegetable oils and fats. We collaborate with you in an innovative and sustainable way to come up with the optimal solution for your products, applying more than 150 years of experience.",
};
