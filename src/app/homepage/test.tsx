"use client";

import React, { useEffect, useRef } from "react";
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
import gsap, { Power1 } from "gsap";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const slides = [
  {
    id: "01",
    title: "Women, at the heart of change!",
    imgsrc: "/assets/home/banner/candle-wax.jpg",
    description:
      "72,000kg of Sal Seed harvested and sold by women to AAK South Asia.",
  },
  {
    id: "02",
    title: "Medical nutrition success story",
    imgsrc: "/assets/home/banner/medical-nutrition.jpg",
    description:
      "Catered a customer with a pharma grade plant-based oil for their ointment formulation, to be used for muscle and joint pain treatment.",
  },
  {
    id: "03",
    title: "Accessible basic healthcare service",
    imgsrc: "/assets/home/banner/healthcare-service.jpg",
    description:
      "Distributed an ambulance to provide a crucial life support to patients in the 20km vicinity of our Khopoli unit, Maharashtra, India",
  },
  {
    id: "04",
    title: "Candle wax success story",
    imgsrc: "/assets/home/banner/candle-wax.jpg",
    description:
      "Delivered an indigenous plant-based sustainable candle wax solution to a client, helping them align with the growing demand of sustainable products",
  },
  // {
  //   id: "05",
  //   title: "Lorem ipsum",
  //   imgsrc: "/assets/home/banner/candle-wax.jpg",
  //   description:
  //     "Lorem the path to Making Better HappenTM through innovation and research!",
  // },
];

export const SwiperTest = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const animateSlide = (slide: any) => {
    if (slide) {
      const cover = slide.querySelectorAll(".cover");
      const tl = gsap.timeline();
      tl.fromTo(
        cover,
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          stagger: 0.1,
        }
      );
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    const onSlideChange = () => {
      const currentSlide = swiperInstance?.slides[swiperInstance.activeIndex];
      animateSlide(currentSlide);
    };
    // Animate the initial slide
    const initialSlide = swiperInstance?.slides[swiperInstance.activeIndex];
    animateSlide(initialSlide);

    swiperInstance?.on("slideChange", onSlideChange);
    return () => {
      swiperInstance?.off("slideChange", onSlideChange);
    };
  }, [swiperRef]);
  return (
    <section className="relative home-banner-main">
      <Swiper
        // onSlideChangeTransitionStart={(swiper) => {
        //   const currentSlide =
        //     swiperInstance?.slides[swiperInstance.activeIndex];
        //   animateSlide(currentSlide);
        // }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              `<span class=" ${className} + text-style + font-worksansLight"> <span>${
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
        effect="creative"
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["50%", 500, 0],
          },
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
      >
        {slides.map((slide: any, index: number) => (
          <SwiperSlide key={slide.id}>
            <div className="relative overflow-hidden text-white ">
              <div className="md:h-screen min-h-[600px] d relative">
                <Image
                  className="bg-image w-full h-full object-cover image"
                  src={slide.imgsrc}
                  layout="fill"
                  alt={slide.title || "Slide"}
                />
                {/* <div className="cover absolute inset-0 d scale-0 bg-blue z-10 rounded-full h-[200vh] w-[200vh] "></div>
                <div className="cover absolute inset-0 d scale-0 bg-white z-10 rounded-full h-[200vh] w-[200vh] "></div>
                <div className="cover absolute inset-0 d scale-0 bg-blue z-10 rounded-full h-[200vh] w-[200vh] "></div> */}
              </div>
              {slide.title && (
                <div className="absolute inset-0 flex justify-end items-end 2xl:py-36 md:py-32 py-14 bg-gradient-to-b from-transparent via-[#020f2252] to-[#2067cab2] ">
                  <div className="w-container">
                    <div className="max-w-md">
                      <h2 className=" current-title font-playfairBold text-white">
                        {slide.title}
                      </h2>
                      {slide.description && (
                        <h6 className=" current-subtitle mt-5 font-worksansLight">
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
