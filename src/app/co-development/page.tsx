"use client";

import React from "react";
import OurTeam from "./02_ourTeam";
import Journey from "./03_journey";
import Approach from "./04_approach";
import Collborations from "./05_collaboration";
import FAQ from "./06_faq";
import Banner from "@molecules/banner";
import Breadcrumb from "@components/atoms/breadcrumb";
import useGSAP from "@hooks/useGsap";

export default function CoDevelopment() {
  useGSAP(".co-development-main-wrp");
  return (
    <section className="co-development-main-wrp">
      <Breadcrumb
        route={{ title: "Home", link: "/" }}
        subroute={{ title: "Co-Development", link: "/co-development" }}
      />
      <Banner
        heading='Co-developing opportunities in your <br class="lg:block hidden" /> journey from<span class="font-playfairSemibold"> plant to brand</span>'
        image="/assets/coDevelopment/co-development-banner.png"
        classes=""
      />
      <OurTeam />
      <Journey />
      <Approach />
      <Collborations />
      <FAQ />
    </section>
  );
}
