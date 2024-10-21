"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";
import SectionTitles from "@components/molecules/sectionTitles";

export default function AboutBringing() {
  return (
    <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
      <SectionTitles
        title='The whys  <br/>   and <span class="font-playfairMedium">hows!</span>'
        subtitle="Making Better Happen™ for <br/>everyone and the planet"
        paragraphs={[
        `The driving force propels us to create transformative impacts that extend beyond our products into the very communities and environment we serve.`, 
        `So, by integrating social initiatives and community engagement into our core business strategy, we are inspiring progress across frontiers.`
        ]}
        bulletPointers={[
          `Forge a culture of giving`,
          ` Support sustainable development `,
          ` Build and nurture resilient communities`,
          ]}

        />
    </section>
  );
}

export const data = [
  {
    image: "/assets/coDevelopment/ourTeam/00(3).jpg",
    id: "1",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(4).jpg",
    id: "2",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(5).jpg",
    id: "3",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(6).jpg",
    id: "4",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(7).jpg",
    id: "5",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    image: "/assets/coDevelopment/ourTeam/00(3).jpg",
    id: "6",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(4).jpg",
    id: "7",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(5).jpg",
    id: "8",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(6).jpg",
    id: "9",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/assets/coDevelopment/ourTeam/00(7).jpg",
    id: "10",
    title: "Handover of Ambulance and Garbage",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
