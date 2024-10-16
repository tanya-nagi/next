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
        title='<span class="font-playfairSemibold">Though, that’s not all!</span>'
        subtitle='We feel your speed-to-market is also paramount in <br class="md:block hidden"/> establishing strong product and brand foundations.'
        subtitleClassname="text-2xl"
        paragraphs={[
          "Perhaps, the reason we've engineered flexibility into every aspect of our operations, bringing agility, resilience, and responsiveness at every turn. From delivering small volumes at launch to swiftly scaling up, we're committed to meeting your evolving needs.",
        ]}
        allignCenter
      />

      <div className="md:pl-[10%] md:flex 2xl:gap-32 xl:gap-24 gap-6 blade-top-padding">
        <div className="max-w-2xl md:pl-0 pl-4 h-auto flex flex-col 2xl:gap-20 md:gap-10 gap-5">
          <div>
            <h1 className=" text-blue font-playfairSemibold">
              Our collaborations
            </h1>
            <h6 className="text-blue mt-3 font-worksansMedium">
              Unlocking the possibilities of today and shaping the <br />
              industries of tomorrow!
            </h6>
          </div>
          <div className="md:flex lg:gap-8 gap-4 flex-col lg:mt-16 sm:mt-8 mt-3">
            <h6 className="max-w-lg font-worksansMedium">
              From tackling the quest for taste and texture in bakery to
              answering the calls for melt-in-mouth goodness in desserts, we are
              pioneering solutions that blend functionality with sustainability.
            </h6>
            <h6 className="max-w-lg">
              Here’s to our co-creation in action, where every partnership is a
              story waiting to be told.
            </h6>
          </div>
        </div>
        <div className="flex-1 md:w-6/12 mt-4">
          <Swiper
            modules={[Pagination]}
            className="h-auto md:!pb-10 !pb-4 !px-4"
            slidesPerView={1.05}
            spaceBetween={10}
            pagination={{
              type: "progressbar",
              el: ".swiper-progressbar",
              progressbarOppositeClass: "fill-progressbar",
            }}
            breakpoints={{
              540: {
                slidesPerView: 1.6,
                spaceBetween: 30,
                centeredSlides: true,
              },
              786: {
                slidesPerView: 1.6,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {collaborationStatics.map((item, index) => {
              const { title, image, id, type } = item;
              return (
                <SwiperSlide
                  key={id}
                  className="w-full h-auto"
                >
                  <div className="w-full h-auto">
                    <div className="h-full relative ">
                      <Image
                        src={image}
                        height={400}
                        width={400}
                        alt={title}
                        className="w-full h-full object-cover rounded-xl overflow-hidden"
                      />
                      <h6 className="text-sm px-5 py-2 bg-dark bg-opacity-5 backdrop-blur-2xl rounded-full font-worksansLight text-white absolute top-5 left-5">
                        Case Study
                      </h6>
                    </div>
                    <h5 className="xl:mt-4 mt-3 font-light text-blueDark font-worksansMedium">
                      {title}
                    </h5>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="swiper-progressbar !top-auto !bottom-0 !left-4 right-0 md:!w-full !w-6/12 max-w-2xl z-50 pt-1 mt-10 rounded-md overflow-hidden bg-navy bg-opacity-10"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
