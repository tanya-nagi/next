import SectionTitles from "@components/molecules/sectionTitles";
import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <section className="co-development blade-bottom-padding-lg overflow-hidden">
      <div className="w-container blade-top-padding-sm">
        <div className="relative w-full">
          <Image
            src="/assets/about-us/global-footprint.png"
            alt="world map"
            layout="responsive"
            width={1000} // Set the width of the original image
            height={500} // Set the height of the original image
            className="object-contain" // Maintain aspect ratio
          />
        </div>
      </div>
    </section>
  );
}
