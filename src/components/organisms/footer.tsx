import Link from "next/link";
import { ButtonLinkAtom } from "../atoms/button";
import LinkAtom from "../atoms/link";
import Image from "next/image";

export default function FooterOrganism() {
  return (
    <footer className="bg-blue">
      <div className="xl:bg-[url(/assets/bg-footer-logo.png)] xl:bg-left bg-[left-200px] bg-cover bg-no-repeat">
        <div className="grid grid-cols-12 gap-5 2xl:py-20 md:py-14 py-10 ">
          <div className="2xl:col-span-4 xl:col-span-3 lg:col-span-1 md:px-0 px-3"></div>
          <div className="flex 2xl:col-span-8 xl:col-span-9 md:col-span-11 col-span-12 md:px-0 px-3">
            <div className="flex-1">
              <Image
                height={100}
                width={0}
                className="h-auto w-24 mb-4 xl:hidden"
                src="/assets/aak-logo-white.svg"
                alt="aak logo"
              />
              <h2 className="text-white font-playfair font-medium">
                Our team of passionate <br className="sm:block hidden" />{" "}
                experts is standing by,{" "}
              </h2>
              <h5 className="text-white mt-4">
                ready to lend a listening ear!
              </h5>
              <ButtonLinkAtom
                className="mt-6"
                text="Contact Us"
                theme="outline"
                size="lg"
                href="/"
                icon
              />

              <div className="grid lg:gap-8 sm:gap-4 gap-2 lg:grid-cols-4 grid-cols-2 2xl:mt-24 xl:mt-16 md:mt-12 mt-8">
                {footerlinksData.map((cols, i) => {
                  return (
                    <div
                      key={cols.id}
                      className="grid gap-3 place-content-start last-of-type:col-span-1"
                    >
                      {cols.gridData.map((col) => {
                        return (
                          <>
                            {col.link ? (
                              <Link
                                key={col.link}
                                href={col.link}
                                className="sm:text-base text-sm text-white block"
                              >
                                {col.title}
                              </Link>
                            ) : (
                              <h5
                                key={col.link}
                                className="text-lg  text-white block first-of-type:font-semibold mb-3"
                              >
                                {col.title}
                              </h5>
                            )}
                          </>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-container-lg border-t border-white border-opacity-50 md:py-10 py-5 flex lg:flex-row flex-col-reverse justify-between">
          <p className="text-white sm:text-base text-sm">
            © 2024 AAK | All Rights Reserved
          </p>
          <div className="flex gap-5">
            <Link href="/" className="text-white sm:text-base text-sm">
              Privacy Policy
            </Link>
            <Link href="/" className="text-white sm:text-base text-sm">
              Terms and Conditions
            </Link>
          </div>
          <div>
            <Link href="/" className="text-white sm:text-base text-sm">
              Twitter{" "}
            </Link>
            <Link href="/" className="text-white sm:text-base text-sm">
              Linkedin
            </Link>{" "}
            <Link href="/" className="text-white sm:text-base text-sm">
              YouTube{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerlinksData = [
  {
    id: 1,
    gridData: [
      { title: "Quick Links" },
      { title: "About Us", link: "about-us" },
      { title: "Co-development", link: "co-development" },
      { title: "Sustainability", link: "sustainability" },
      {
        title: "Manufacturing & Supply Chain",
        link: "manufacturing-supply-chain",
      },
      { title: "Working at AAK", link: "working-at-aak" },
      { title: "Contact Us", link: "contact-us" },
    ],
  },
  {
    id: 2,
    gridData: [
      { title: "Industries" },
      { title: "Bakery", link: "bakery" },
      { title: "Chocolate and Confectionery", link: "chocolate-confectionery" },
      { title: "Dairy", link: "dairy" },
      { title: "Food Service", link: "food-service" },
      {
        title: "Plant-based & New Food Solutions",
        link: "plant-based-new-food-solutions",
      },
      { title: "Special Nutrition & Health", link: "special-nutrition-health" },
      { title: "Personal Care", link: "personal-care" },
      { title: "Technical Products", link: "technical-products" },
    ],
  },
  {
    id: 3,
    gridData: [
      { title: "Stories of Impact" },
      { title: "Industry Case Studies", link: "industry-case-studies" },
      {
        title: "Manufacturing & Supply Chain",
        link: "manufacturing-supply-chain",
      },
      { title: "Sustainable Innovation", link: "sustainable-innovation" },
      {
        title: "Social Initiative and Community Engagement",
        link: "social-initiative-community-engagement",
      },
      {
        title: "Plant-based Alternatives & Technical Products",
        link: "plant-based-alternatives-technical-products",
      },
      { title: "Team Spotlight", link: "team-spotlight" },
    ],
  },
  {
    id: 4,
    gridData: [
      { title: "News & Media" },
      { title: "Newsroom", link: "newsroom" },
      { title: "Blogs", link: "blogs" },
    ],
  },
];
