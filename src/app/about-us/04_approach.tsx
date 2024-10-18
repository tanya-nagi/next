import SectionTitles from "@components/molecules/sectionTitles";
import Image from "next/image";
import React from "react";

export default function Approach() {
  return (
    <section className="co-development blade-bottom-padding-lg overflow-hidden">
      <SectionTitles
        title='The approach <br/> to better <br/> <span class="font-playfairSemibold">co-development</span> <br/> success rates'
        subtitle="Collaborative value creation from seed to shelf"
        boldParagraphs={[
          "Under the aegis of our Customer Innovation Centers, we bring our specialist capabilities, application competencies, and incremental innovation into our co-development collaboration. ",
        ]}
        paragraphs={[
          "Creating lasting value for you and your business, we unlock scale and depth with our Customer Innovation Centers spread across the world.",
        ]}
      />
      <div className="w-container blade-top-padding-sm">
        <Image
          src="/assets/about-us/global-footprint.png"
          height={1000}
          width={1000}
          alt="world map"
          className="w-full"
        />
      </div>
    </section>
  );
}
