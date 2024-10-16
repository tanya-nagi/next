"use client";
import React from "react";
import SwiperCore from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { ButtonAtom, ButtonLinkAtom } from "@/components/atoms/button";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const slides = [
  {
    id: 1,
    title: "Investing in sustainable technologies",
    imgsrc: "/assets/home/sustainable-future.jpg",
    description:
      "Pioneering the path to Making Better HappenTM through innovation and research!",
  },
  {
    id: 2,
    title: "Investing in sustainable technologies",
    imgsrc:
      "https://images.unsplash.com/photo-1508361727343-ca787442dcd7?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Pioneering the path to Making Better HappenTM through innovation and research!",
  },
];

const Banner = () => {
  return (
    <section className="relative ">
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slides.map((slide: any) => (
          <SwiperSlide key={slide.title}>
            <div className="relative overflow-hidden text-white ">
              <div className="h-screen min-h-[600px]">
                <Image
                  className="w-full h-full object-cover"
                  src={slide.imgsrc}
                  alt={slide.title || "Slide"}
                />
              </div>
              {slide.title && (
                <div className="absolute inset-0 flex justify-end items-end py-36 bg-gradient-to-b from-transparent to-[#0000004c]">
                  <div className="w-container">
                    <div className="max-w-md">
                      <h2 className="font-playfairMedium text-white">
                        {slide.title}
                      </h2>
                      {slide.description && (
                        <p className="mt-2">{slide.description}</p>
                      )}
                      <ButtonLinkAtom
                        className="mt-4"
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
      <div className="absolute w-container z-10 bottom-10 left-0 right-0 flex gap-10">
        {slides.map((item, index) => {
          return (
            <SlidePagination key={item.id} text={item.title} index={index} />
          );
        })}
      </div>
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

export default Banner;
