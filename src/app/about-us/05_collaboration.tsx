"use client";
import React from "react";
import SectionTitles from "@components/molecules/sectionTitles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { collaborationStatics } from "@statics/coDevelopment";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Collaborations() {
  return (
    <section className="co-development blade-top-padding blade-bottom-padding-lg overflow-hidden">
      <SectionTitles
        title='<span class="font-playfairSemibold"></span>'
        subtitle='The global footprint is vast, yet we intend to keep our approach deeply personal.'
        subtitleClassname="text-2xl"
        paragraphs={[
        ]}
        allignCenter
      />
    </section>
  );
}
