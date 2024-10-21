"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";
import SectionTitles from "@components/molecules/sectionTitles";

const timelineData = [
  { year: 1871, description: "Plant established in <br/> Aarhus, Denmark" },
  { year: 1918, description: "Plant establishment in  <br/>Karlshamn, Sweden" },
  { year: 1965, description: "Plant established in <br/>Aarhus, Denmark" },
  { year: 1986, description: "First shea products <br/>for cosmetics" },
  { year: 2009, description: "Start of Kolo Nafaso <br/>women's program" },
  {
    year: 2020,
    description: "Joined the innovation science-based targets initiative",
  },
];

export default function Evolution() {
  return (
    <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
      <div
        className="bg-wrapper bg-blue gap-y-12 flex 
          gap-x-12 xl:gap-x-28 xlg:gap-x-32 justify-center blade-top-padding-lg 
          blade-bottom-padding-lg"
      >
        <div className="w-full overflow-hidden">
          <div className="flex 2xl:col-span-8 xl:col-span-9 md:col-span-11 col-span-12 md:px-0 px-3 relative left-[9rem]">
            <div className="flex-1">
              <h2 className="text-white font-playfair font-medium">
                Tracing the evolution
              </h2>
              <h5 className="text-white mt-4">
                A heritage of enduring innovation, excellence,
                <br /> and expertise
              </h5>

              {/* Global and India Milestones Tabs */}
              <div className="flex mt-4">
                <h4 className="text-white mr-[3rem] border-b-2 border-white pb-1 cursor-pointer">
                  AAK Global; Key milestones
                </h4>
                <h4 className="text-white opacity-50 cursor-pointer">
                  Key milestones in India
                </h4>
              </div>

              {/* Main paragraph content */}
              <p className="text-white mt-16 font-work-sans text-[24px] font-normal leading-[32px] tracking-[-0.03em] text-left">
                The story of AAK is one of enduring <br /> innovation and
                unparalleled expertise.
              </p>
            </div>
          </div>

          {/* Scrollable Timeline without Visible Scrollbar */}
          <div className="relative  overflow-x-auto mt-12 hide-scroll-bar scroll-smooth snap-x snap-mandatory h-[10rem] left-[9rem]">
            {/* Timeline Horizontal Line */}
            <div className="absolute left-0 w-[3000px] h-1 bg-white top-[9rem]"></div>

            {/* Timeline Items */}
            <div className="whitespace-nowrap flex flex-nowrap">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="relative inline-block text-center mx-4 sm:mx-8 snap-start opacity-0 animate-slide-in"
                >
                  <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto absolute top-[8.65rem]"></div>

                  <p className="text-[24px] font-bold text-left text-[#FFFFFF] leading-[40px] tracking-[-0.03em] mb-2">
                    {item.year}
                  </p>

                  <p
                    className="text-[24px] font-normal text-[#FFFFFF] leading-[32px] tracking-[-0.03em] w-[251px] h-[64px] mx-auto"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  >
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
