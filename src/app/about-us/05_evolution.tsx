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
    description: "Joined the MISTA<br/> innovation platform, setting<br/> science-based targets",
  },
  {
    year: 2021,
    description: "Implementation of satellite <br/> monitoring to support zero <br/> deforestation",
  },
  {
    year: 2023,
    description: "CO2 reduction biomass<br/> boiler investment in Aarhus",
  },
];

export default function Evolution() {
  const timelineRef = React.useRef<HTMLDivElement>(null);// Reference to the timeline container
  const [activeTab, setActiveTab] = React.useState(0);

  const handleScroll = (index: any) => {
    setActiveTab(index); // Update the active tab when clicked

    if (timelineRef.current) {
      const scrollAmount = timelineRef.current.scrollWidth / timelineData.length; // Adjust based on data length
      if (index === 0) {
        // Scroll to the first tab
        timelineRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (index === 1) {
        // Scroll to the second tab
        timelineRef.current.scrollTo({ left: scrollAmount*4.5, behavior: 'smooth' });
      }
    }
  };
  return (
        <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
          <div
            className="bg-wrapper bg-blue gap-y-12 flex 
              gap-x-12 xl:gap-x-28 xlg:gap-x-32 justify-center blade-top-padding-lg 
              blade-bottom-padding-lg"
          >
            <div className="w-full overflow-hidden">
              <div className="flex 2xl:col-span-8 xl:col-span-9 md:col-span-11 col-span-12 md:px-0 px-3 relative left-[9rem] blueDart">
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
                    <h4
                      className={`mr-[3rem] pb-1 cursor-pointer ${activeTab === 0
                          ? 'text-white border-b-2 border-white'
                          : 'text-white opacity-50'
                        }`}
                      onClick={() => handleScroll(0)}
                    >
                      AAK Global; Key milestones
                    </h4>
                    <h4
                      className={`pb-1 cursor-pointer ${activeTab === 1
                          ? 'text-white border-b-2 border-white'
                          : 'text-white opacity-50'
                        }`}
                      onClick={() => handleScroll(1)}
                    >
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
              <div className="relative  overflow-x-auto mt-12 hide-scroll-bar scroll-smooth snap-x snap-mandatory h-full left-[9rem] blueDart">
                {/* Timeline Horizontal Line */}
                <div className="absolute left-0 w-[3000px] h-[0.09rem] bg-white top-[14rem]"></div>

                {/* Timeline Items */}
                {/* <div
            className="whitespace-nowrap flex flex-nowrap scrollbar-hide" // Hide the scrollbar
            ref={timelineRef}
            style={{ scrollBehavior: 'smooth' }} // Smooth scroll when buttons are clicked
          >
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
                />
              </div>
            ))}
          </div> */}
                <div
                  className="whitespace-nowrap overflow-x-scroll flex flex-nowrap transition-transform whitespace-nowrap flex flex-nowra scrollbar-hide h-full" // Hide the scrollbar
                  ref={timelineRef}
                  style={{ scrollBehavior: 'smooth' }} // Smooth scroll when buttons are clicked
                >
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className="relative inline-block text-center mx-4 sm:mx-8 snap-start opacity-0 animate-slide-in"
                    >
                      <div className="">
    <div className="vertical-line"></div>
  </div>

                      <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto absolute top-[13.65rem]"></div>

                      <p className="text-[24px] font-bold text-left text-[#FFFFFF] leading-[40px] tracking-[-0.03em] mb-2 r-t-8">
                        {item.year}
                      </p>

                      <p
                        className="text-[24px] font-normal text-[#FFFFFF] leading-[32px] tracking-[-0.03em] w-[251px] h-[64px] mx-auto text-start textCorrection r-t-8"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </section >
  );
}
