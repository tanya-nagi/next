"use client";

import React from "react";
import Image from "next/image";
import SectionTitles from "@components/molecules/sectionTitles";

export default function TestMent() {
  return (
    <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
      {/* <div className="w-container 2xl:max-w-screen-xl xlg:max-w-screen-md lg:max-w-screen-md sm:max-w-screen-sm max-w-2xl"> */}

      <SectionTitles
        //   Testament to Making Better Happen™
        title='Testament to <span class="font-playfairMedium">Making Better Happen™</span>'
        boldParagraphs={[
          "At AAK India, South Asia, and Sub-Saharan Africa, our mission extends beyond delivering high-quality, specialty, plant-based oils and fats.",
        ]}
        paragraphs={[
          `Our impact resonates across the regions we serve, empowering local communities, advancing sustainable practices, preserving environments, and setting new industry standards.`,
        ]}
      />
    </section>
  );
}
