"use client";

import React from "react";

import Banner from "@molecules/banner";
import Breadcrumb from "@components/atoms/breadcrumb";
import useGSAP from "@hooks/useGsap";
import TestMent from "./01_testmentToBetter";
import StoriesOfImpact from "./02_storiesOfImpact";
import SectionOfStories from "./03_sectionofStories";
import StoryGrid from "./04_storyGrid";

export default function CoDevelopment() {
  useGSAP(".stories-of-impact-main-wrp");
  return (
    <section className="stories-of-impact-main-wrp">
      <Breadcrumb
        route={{ title: "Home", link: "/" }}
        subroute={{ title: "Stories of impact", link: "/stories-of-impact" }}
      />
      <Banner
        heading='<span class="font-playfairSemibold"> Impactful narratives</span><br class="lg:block hidden" /> <span class="text-[20px]">Empowering change</span>'
        image="/assets/coDevelopment/co-development-banner.png"
        classes=""
      />
      <TestMent />
      <StoriesOfImpact />
      <SectionOfStories />
      <StoryGrid />
    </section>
  );
}
