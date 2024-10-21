"use client";

import React from "react";


import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";
import SectionTitles from "@components/molecules/sectionTitles";

export default function CommunityEngagement() {
  return (
    <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
      <SectionTitles
        title='The whys  <br/>   and <span class="font-playfairMedium">hows!</span>'
        
        paragraphs={[
          `Our social and community-focused efforts are at the<br/> heart of our sustainability pillars of climate, biodiversity,<br/> and people.`,
          `We find it central to creating lasting positive impact that<br/> goes beyond business, touching lives, and fostering a<br/> better world for future generations.`
        ]}
        boldParagraphs={[
          `At AAK India, South Asia, and <br/> Sub-Saharan Africa, we are a<br/>  family of changemakers.`,
          ]}
        middleModify={true}
        />
    </section>
  );
}