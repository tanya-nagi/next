"use client";

import React from "react";
import { ButtonLinkAtom } from "@components/atoms/button";
import SectionTitlesWithButton from "@components/molecules/sectionTitlesWithButton";

export default function AAKGlobal() {
  return (
    <section className="co-development sm:blade-top-padding my-24">
      <SectionTitlesWithButton
        title='Join us in  <span class="font-playfairMedium">transforming lives & environments</span>'

        paragraphs={[
          `<b>We invite you to partner with us or volunteer in our diverse social initiatives.</b>`,
          `Whether you are an organization eager to collaborate or an individual ready to make a difference, a collective effort is crucial in this journey to make better happen.`,
          `So, join us in transforming lives, the environment and the communities.`
        ]}
        paragraphsClass={true}
        buttonText="Join Us"
      />
    </section>
  );
}
