"use client";

import React from "react";
import { ButtonLinkAtom } from "@components/atoms/button";
import SectionTitlesWithButton from "@components/molecules/sectionTitlesWithButton";

export default function AAKGlobal() {
  return (
    <section className="co-development sm:blade-top-padding mt-20 ">
      <SectionTitlesWithButton
        title="AAK Global"
        subtitle="Making Better Happen™ worldwide"
        paragraphs={[
          "For more than a century and a half, AAK has been pioneering advancements in plant-based solutions, setting new industry standards, and enriching the lives of consumers globally.   It’s perhaps a legacy that comes to fruition every single day, resting on a commitment to Making Better Happen™, and driving every aspect of our business",
        ]}
        boldParagraphs={[`Global reach, local expertise!`]}
      />
    </section>
  );
}
