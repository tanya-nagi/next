"use client";

import React from "react";
import OurTeam from "./02_ourTeam";
// import Journey from "./03_journey";
import Approach from "./04_approach";
import Evolution from "./evolution";
import Collborations from "./05_collaboration";
import Behaviors from "./05_plantToBrand";
import LeadershipTeam from "./LeadershipTeam";
import ValueSection from "./valueSection";
// import FAQ from "./06_faq";
import Banner from "@molecules/banner";
import Breadcrumb from "@components/atoms/breadcrumb";
import useGSAP from "@hooks/useGsap";
import ContactForm from "./contactForm";

export default function CoDevelopment() {
  useGSAP(".co-development-main-wrp");
  return (
    <section className="co-development-main-wrp">
      <Breadcrumb
        route={{ title: "Home", link: "/" }}
        subroute={{ title: "About us", link: "/about-us" }}
      />
      <Banner
        heading='Celebrating a <span class="font-playfairSemibold"> 150-year-old </span> odyssey<br class="lg:block hidden" />'
        subheading="Pioneering a trail of product innovation, process excellence & business impact"
        image="/assets/coDevelopment/co-development-banner.png"
        classes=""
      />
      <OurTeam />
      Cardd
      <OurTeam />
      <Collborations />
      <Approach />
      <Evolution/>
      <Behaviors/>
      <ValueSection/>
      <LeadershipTeam/>





      {/* 
      <Journey />
      <FAQ /> */}
    </section>
  );
}
