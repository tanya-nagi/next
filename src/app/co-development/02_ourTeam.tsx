"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";
import SectionTitles from "@components/molecules/sectionTitles";

export default function OurTeam() {
  return (
    <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
      {/* <div className="w-container 2xl:max-w-screen-xl xlg:max-w-screen-md lg:max-w-screen-md sm:max-w-screen-sm max-w-2xl"> */}

      <SectionTitles
        title='Our team of <span class="font-playfairMedium">specialists</span> is there where it counts!'
        boldParagraphs={[
          "Walking through the relevant parts of your value chain, for you, with you, near you!",
        ]}
        paragraphs={[
          `With over 150 years of global pedigree, our purview encompasses your entire value chain – from sustainable sourcing all the way through to generating marketing claims.`,
        ]}
      />

      <Swiper
        modules={[FreeMode, Autoplay]}
        className="md:mt-20 swiper-carousel"
        grabCursor={true}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        speed={9999}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          786: {
            spaceBetween: 40,
          },
        }}
        // autoplay={{
        //   delay: 0.0,
        //   disableOnInteraction: false,
        // }}
      >
        {data.map((item, index) => {
          const { title, desc, image, id } = item;
          const keyVal = index + " " + id;
          return (
            <SwiperSlide
              key={keyVal}
              className="2xl:!h-[28rem] lg:!h-[20rem] !h-[15rem] !w-fit md:!max-w-[40%] max-w-[80%] swiper-carousel-slide rounded-2xl overflow-hidden"
            >
              <Image
                className="h-full w-full object-cover rounded-2xl overflow-hidden"
                src={image}
                height={400}
                width={100}
                layout="responsive"
                alt={title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        modules={[FreeMode, Autoplay]}
        className="md:mt-[40px] mt-[20px]  md:px-32"
        grabCursor={true}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        speed={9999}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          786: {
            spaceBetween: 40,
          },
        }}
        // autoplay={{
        //   delay: 0.0,
        //   disableOnInteraction: false,
        // }}
      >
        {data.slice(2).map((item, index) => {
          const { title, desc, image, id } = item;
          const keyVal = title + " " + id;
          return (
            <SwiperSlide
              key={keyVal}
              className="2xl:!h-[28rem] lg:!h-[20rem] !h-[15rem]  !w-fit md:!max-w-[40%] max-w-[80%] rounded-2xl overflow-hidden"
            >
              <Image
                className="h-full w-full object-cover rounded-2xl overflow-hidden"
                src={image}
                height={400}
                width={100}
                layout="responsive"
                alt={title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
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
