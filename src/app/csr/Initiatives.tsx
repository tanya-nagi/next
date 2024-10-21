"use client";

import React from "react";


import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";
import SectionTitles from "@components/molecules/sectionTitles";

export default function Initiatives() {
  return (
    <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
      <SectionTitles
        title=''
        
        paragraphs={[
        `<b>‘Pragati’</b> means progress and for us, it’s perhaps a <br/>  commitment to driving sustainable growth, fostering <br/> community well-being, and nurturing our planet.`,  
        `We hereby champion a holistic approach to endeavors that address environmental stewardship, community engagement, and food security.`
        ]}
        boldParagraphs={[
          `At AAK India, South Asia, and <br/> Sub-Saharan Africa, the Pragati <br/> Mission embodies the heart of <br/> our CSR initiatives.`,
          ]}
        middleModify={true}
        />
    </section>
  );
}