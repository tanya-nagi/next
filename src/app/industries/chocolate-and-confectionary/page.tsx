import Breadcrumbs from "@components/atoms/breadcrumbs";
import PlaceholderLayout from "@components/layouts/placeholder";
import Banner from "@components/molecules/banner";
import React from "react";
import ProductRichText from "../common-layouts/productRichText";
import OurProductsCarousel from "../common-layouts/ourProductsCarousel";
import Attributes from "../common-layouts/attributes";
import SolvingChallenges from "../common-layouts/solvingChallenges";

export default function ChocolateAndConfectionary() {
  return (
    <div>
      <Breadcrumbs routesArray={breadcrumbsData} />
      <div className="xl:min-h-[600px] h-auto ">
        <Banner
          // Elevate your chocolate & confectionery creations!
          heading="<span class='font-light'> Elevate your <span class='font-playfairSemibold'> chocolate & confectionery creations! </span>  </span>"
          subheading="Bringing innovation with excellence and impact"
          image="/assets/contact/banner-image.png"
          classes=""
        />
        <ProductRichText data={productRichTextData} />
        <OurProductsCarousel data={ourProductsCarouselData} />
        <Attributes data={attributesData} />

        <SolvingChallenges data={solvingChallengesData} />
      </div>
    </div>
  );
}

const breadcrumbsData = [
  {
    title: "Industries",
    link: "/industries",
  },
  {
    title: "Chocolate & confectionary",
    link: "/industries/chocolate-and-confectionary",
  },
];
const productRichTextData = {
  title:
    "Create chocolate and confectionery products that are delicious, sensory-rich, and aligned with consumer trends.",
  list: [
    "From smooth, melt-in-the-mouth chocolates to perfectly gooey caramel, a versatility that caters to a wide range of needs, making sure every bite delivers an unforgettable experience.",
  ],
};
const solvingChallengesData = {
  title:
    'Solving challenges <br/> with <span class="font-playfairSemibold"> experience and expertise </span>',
  subtitle:
    'From development to optimization, we’ve <br class="md:block hidden"/> got you covered',
  list: [
    "In the dynamic world of chocolate and confectionery, challenges are inevitable and unique but so are opportunities for innovation in products, production, and processes.",
  ],
  heading: "Actualizing your brand potential",

  carouselArray: [
    {
      id: 1,
      category: "analyzer-module",
      title: "Consistency you can count on",
      desc: "Enjoy uniform texture, flavor, and appearance in every product, ensuring your customers get the quality they love, every time.",
    },
    {
      id: 2,
      category: "analyzer-module",
      title: "Extended freshness",
      desc: "Keep your products fresher for a longer time, reduce waste, and keep your customers satisfied with whatever they expect.",
    },
    // add image for this one
    {
      id: 3,
      category: "analyzer-module",
      title: "Healthier options, uncompromised taste",
      desc: "Improve nutritional profiles while maintaining the indulgent taste and texture your customers crave.",
    },
    {
      id: 4,
      category: "analyzer-module",
      title: "Perfecting every bite",
      desc: "From the softest crumb in cakes to the perfect crunch in cookies, ensure your products hit the mark every time.",
    },
    {
      id: 5,
      category: "analyzer-module",
      title: "Flavors that shine",
      desc: `Bring out the best in your ingredients, ensuring a delicious and consistent flavor experience.`,
    },
  ],
};
const ourProductsCarouselData = {
  heading: "Products we co-develop",
  productArray: [
    {
      image: "/assets/home/commitment/handover-of-ambulance.jpg",
      id: "1",
      title: "Chocolate bars",
      desc: "Elevate your snacking experience with handcrafted, exquisite flavors",
    },
    {
      image: "/assets/home/commitment/04.jpg",
      id: "2",
      title: "Toffees",
      desc: "A nostalgic treat with a modern twist, offering a perfect balance of chewiness, smoothness, and sweetness",
    },
    {
      image: "/assets/home/commitment/02.jpg",
      id: "3",
      title: "Truffles",
      desc: "Indulge in the ultimate blend of creamy centers and rich chocolate shells",
    },
    {
      image: "/assets/home/commitment/03.jpg",
      id: "4",
      title: "Spreads and paste",
      desc: "Perfectly smooth and delightful, a sweet taste of velvet luxury",
    },
    {
      image: "/assets/home/commitment/03.jpg",
      id: "5",
      title: "Nougat bars and wafers",
      desc: "Crunchy, chewy, and packed enrobings with delightful surprises in every bite",
    },
    {
      image: "/assets/home/commitment/03.jpg",
      id: "6",
      title: "Decadent pralines",
      desc: "Elegantly crafted to offer a rich and satisfying chocolate experience",
    },
  ],
};
const attributesData = {
  heading: "Make your products achieve desirable attributes",
  iconsArray: [
    {
      image:
        "/assets/industries/chocolateAndConfectionary/attributes/health.svg",
      id: "1",
      title: "Health",
    },
    {
      image:
        "/assets/industries/chocolateAndConfectionary/attributes/health.svg",
      id: "2",
      title: "Functionality",
    },
    {
      image:
        "/assets/industries/chocolateAndConfectionary/attributes/health.svg",
      id: "3",
      title: "Sensory",
    },
    {
      image:
        "/assets/industries/chocolateAndConfectionary/attributes/health.svg",
      id: "4",
      title: "Process Efficiency",
    },
    {
      image:
        "/assets/industries/chocolateAndConfectionary/attributes/health.svg",
      id: "5",
      title: "Food Safety",
    },
    {
      image:
        "/assets/industries/chocolateAndConfectionary/attributes/health.svg",
      id: "6",
      title: "Sustainability",
    },
  ],
  textArray: [
    {
      id: "1",
      title: "Taste",
      desc: "Enhance flavors to create rich, indulgent experiences",
    },
    {
      id: "2",
      title: "Texture",
      desc: "Achieve the perfect snap, chewiness, or melt-in-mouth experience",
    },
    {
      id: "3",
      title: "Mouthfeel",
      desc: "Deliver a smooth, velvety sensation",
    },
    {
      id: "4",
      title: "Release",
      desc: "Ensure a flawless release from molds and packaging",
    },
    {
      id: "5",
      title: "Nutritional Value",
      desc: "Incorporate healthier options without compromising on taste or quality",
    },
    {
      id: "6",
      title: "Sustainable",
      desc: "Customize products to meet specific dietary, nutritional requirements or market trends",
    },
  ],
};
