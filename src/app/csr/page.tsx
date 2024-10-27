"use client";

import React from "react";
import AboutBringing from "./01_aboutBringing";
// import Journey from "./03_journey";
import StatesRow from "./03_statesRow";
import Evolution from "./05_evolution";
import Collborations from "./02_collaboration";
import Behaviors from "./06_betterBehavior";
import LeadershipTeam from "./08_behavior";
import ValueSection from "./07_valueSection";
import CommunityEngagement from "./CommunityEngagement";
import Mission from "./Mission";
import Initiatives from "./Initiatives";
import Goals from "./Goals";
import Card from "./Card";
// import FAQ from "./06_faq";
import Banner from "@molecules/banner";
import Breadcrumb from "@components/atoms/breadcrumb";
import useGSAP from "@hooks/useGsap";
import AAKGlobal from "./03_aakGlobal";
import Map from "./04_map";
import PathToPurpose from "./09_ourPathToPurpose";

export default function CoDevelopment() {
  useGSAP(".co-development-main-wrp");
  return (
    <section className="co-development-main-wrp">
      <Breadcrumb
        route={{ title: "Home", link: "/" }}
        subroute={{ title: "CSR", link: "/csr" }}
      />
      <Banner
        heading='Social initiatives and community engagement'
        subheading="A responsibility and commitment to social good"
        image=""
        classes=""
        video="/assets/about-us/banner.mp4"
      />
      <CommunityEngagement />
      <AboutBringing />
      <Mission/>
      <Goals/>
      <AAKGlobal /> 

      
    </section>
  );
}
