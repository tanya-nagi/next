"use client";
import React from "react";
import SectionTitles from "@components/molecules/sectionTitles";

export default function Collaborations() {
  return (
    <section className="co-development overflow-hidden mt-20">
      <SectionTitles
        title='<span class="font-playfairSemibold"></span>'
        subtitle="The global footprint is vast, yet we intend to <br/> keep our approach deeply personal."
        subtitleClassname="text-3xl font-medium"
        paragraphs={[]}
        allignCenter
      />
    </section>
  );
}
