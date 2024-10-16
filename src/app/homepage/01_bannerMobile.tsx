"use client";

import React, { useEffect } from "react";
import SwiperCore from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";
import useIsMobileView from "@hooks/useIsMobileView";

import { ButtonLinkAtom } from "@/components/atoms/button";
import Image from "next/image";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const BannerMobile = ({ slides }: { slides: any }) => {
  return (
    <section className="relative home-banner-main bg-blue">
      <Swiper
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              `<span class=" ${className} text-style font-worksansLight"> <span>${
                slides[index].id
              } ${" "} ${slides[index].title}</span>` +
              "<em>" +
              "</em>" +
              "<i></i>" +
              "<b></b>" +
              "</span>"
            );
          },
        }}
        onSlideChangeTransitionStart={(swiper) => {
          console.log("slide changed");
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          console.log(swiper.activeIndex);
        }}
        speed={2000}
        effect={useIsMobileView() ? "slide" : "fade"}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
      >
        {slides.map((slide: any) => (
          <SwiperSlide key={slide.id}>
            <div className="relative overflow-hidden text-white ">
              <div className="md:h-screen min-h-[600px]">
                <Image
                  className="w-full h-full object-cover image"
                  src={slide.imgsrc}
                  layout="fill"
                  alt={slide.title || "Slide"}
                />
              </div>
              {slide.title && (
                <div className="absolute inset-0 flex justify-end items-end 2xl:py-36 md:py-32 py-14 bg-gradient-to-b from-transparent via-[#020f2252] to-[#2067cab2] ">
                  <div className="w-container">
                    <div className="max-w-m md:px-10">
                      <h2 className="current-title font-playfairBold text-white leading-tight">
                        {slide.title}
                      </h2>
                      {slide.description && (
                        <h6 className="current-subtitle mt-5 font-worksansLight">
                          {slide.description}
                        </h6>
                      )}
                      <ButtonLinkAtom
                        className="mt-4 font-worksansLight"
                        href="/contact-us"
                        text="Contact Us"
                        theme="blue"
                        icon
                        size="base"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const SlidePagination = ({ text, index }: { text: string; index: number }) => {
  const id = index + 1;
  return (
    <div>
      <button className="text-white">
        0{id}. {text}
      </button>
      <div className="w-[50%] bg-white h-[1px] " />
    </div>
  );
};

export default BannerMobile;
