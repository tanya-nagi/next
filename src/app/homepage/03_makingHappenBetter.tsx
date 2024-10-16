"use client";

import { makingBetterHappenStatic } from "@statics/homepage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function MakingHappenBetter() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.innerWidth > 786) {
      const wrapper = document.querySelector("#section-wrapper");
      const texts = document.querySelectorAll(".paragraph");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-wrapper",
          pin: "#section-wrapper",
          markers: false,
          start: "top top",
          end: "bottom -300%",
          scrub: 1.2,
        },
      });

      texts.forEach((element) => {
        tl.fromTo(
          element,
          { y: 1000 },
          {
            y: 0,
            opacity: 1,
          }
        );
      });

      tl.to(".content-wrapper", {
        opacity: 0,
        filter: "blur(10px)",
      });
      tl.fromTo(
        ".slidein-carousel",
        { x: "100vw" },
        {
          x: "-0vw",
          duration: 1,
        },
        "<"
      );
      tl.addPause(4);
    }
  });

  return (
    <section
      id="section-wrapper"
      className="overflow-hidden blade-bottom-padding md:min-h-screen relative md:blade-top-padding-xl pt-0"
    >
      <div className="content-wrapper w-container xlg:max-w-screen-xlg xl:max-w-screen-lg md:flex gap-20">
        <div className="flex-1 h-fit max-w-2xl">
          <h1 className="text-mega text-blue font-playfairSemibold ">
            Making <br className="lg:block hidden" /> Better <br /> Happen
            <sup className="2xl:text-5xl lg:text-4xl text-base">™</sup>{" "}
            <br className="lg:block hidden" />
            <i className="font-playfairMediumItalic">in action</i>
          </h1>
          <h6 className="text-sm md:text-lg text-blue mt-4">
            Pioneering sustainable incremental innovation
          </h6>
        </div>

        <div className="flex-1 md:mt-2 mt-3 max-w-2xl ">
          <div className="paragraph md:opacity-20 ">
            <h4 className="font-worksans">
              Our steadfast commitment to customized innovation, manifesting
              from plant to brand has enabled us to continuously push the
              boundaries of what&apos;s possible.
            </h4>
          </div>
          <div className="paragraph md:opacity-20">
            <h4 className="2xl:mt-8 mt-4 font-worksansMedium italic">
              It’s perhaps imperative as your product is much beyond a mere
              wrapped consumable.
            </h4>
          </div>
          <div className="paragraph md:opacity-20">
            <h4 className="2xl:mt-8 mt-4 font-worksansMedium italic">
              To us, it’s a reflection of your brand’s values, identity, and
              aspirations!
            </h4>
          </div>
          <div className="paragraph md:opacity-20">
            <h4 className="2xl:mt-8 mt-4 font-worksansMedium italic">
              That’s why we don’t just stop at ‘good’.
            </h4>
          </div>
          <div className="paragraph md:opacity-20">
            <h4 className="2xl:mt-8 mt-4 font-worksansMedium italic">
              We offer more than just solutions, making sure your product keeps
              evolving for the ‘better’.
            </h4>
          </div>
        </div>
      </div>

      <section className="">
        <div className="slidein-carousel md:translate-x-full flex items-center lg:blade-top-padding-lg pt-5 blade-bottom-padding md:absolute inset-0 my-auto left-0 h-full w-full ">
          <Swiper
            modules={[Navigation]}
            className="w-full h-auto md:!px-[10%] !px-3"
            navigation={{
              prevEl: ".prevBtn",
              nextEl: ".nextBtn",
            }}
            autoHeight
            speed={1000}
            slidesPerView={1.1}
            spaceBetween={20}
            breakpoints={{
              540: {
                slidesPerView: 1.6,
                spaceBetween: 30,
                centeredSlides: true,
              },
              786: {
                slidesPerView: 1.2,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 1.2,
                spaceBetween: 100,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 140,
              },
            }}
          >
            {makingBetterHappenStatic.map((item, index) => {
              const { title, desc, image, id } = item;
              return (
                <SwiperSlide key={id}>
                  <div className="w-full !h-full !flex gap-4 md:flex-row flex-col justify-between md:border-none border-2 border-blue border-opacity-20 overflow-hidden">
                    <div className="flex flex-col justify-between 2xl:w-4/12 md:w-5/12 max-w-md px-3 pt-3 h-auto ">
                      <h2 className="leading-tight font-worksansMedium ">
                        {title}
                      </h2>
                      <div className="w-[2px] rounded-2xl bg-[#00264E] bg-opacity-10 flex-1 my-5 md:block hidden" />
                      <div className="mt-3">
                        <h6 className="md:mt-3 font-light">{desc}</h6>
                      </div>
                    </div>
                    <div className="2xl:h-[600px] xl:h-[400px] h-fit 2xl:w-8/12 md:w-7/12">
                      <Image
                        src={image}
                        height={500}
                        width={500}
                        alt={title}
                        className="w-full h-full  object-cover "
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="custom-navigation w-container md:mt-10 mt-5 flex justify-end gap-7">
              <button
                className="prevBtn cursor-pointer xlg:w-16 w-10"
                // eslint-disable-next-line
                // onClick={() => swiper.slidePrev()}
                ref={prevRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 57 27"
                  fill="none"
                  className="w-full"
                >
                  <path
                    d="M1.48456 13.7119H55.4417"
                    stroke="#2067CA"
                    strokeWidth="2.36557"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.2346 1.92773L1.48335 13.7119L13.2346 25.463"
                    stroke="#2067CA"
                    strokeWidth="2.36557"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="nextBtn cursor-pointer xlg:w-16 w-10"
                // eslint-disable-next-line
                // onClick={() => swiper.slideNext()}
                ref={nextRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 57 27"
                  fill="none"
                  className="w-full"
                >
                  <path
                    d="M55.7073 13.7119H1.75024"
                    stroke="#2067CA"
                    strokeWidth="2.36557"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M43.9592 1.92773L55.7105 13.7119L43.9592 25.463"
                    stroke="#2067CA"
                    strokeWidth="2.36557"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </section>
    </section>
  );
}
