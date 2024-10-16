"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./reactTransition.css";
import Image from "next/image";
import { ButtonLinkAtom } from "@components/atoms/button";
import gsap, { Power1 } from "gsap";
import BannerMobile from "./01_bannerMobile";

const slides = [
  {
    id: 0,
    title: "Women, at the heart of change!",
    imgsrc: "/assets/home/banner/women-at-the-heart.jpg",
    description:
      "72,000kg of Sal Seed harvested and sold by women to AAK South Asia.",
  },
  {
    id: 1,
    title: "Medical nutrition success story",
    imgsrc: "/assets/home/banner/medical-nutrition.jpg",
    description:
      "Catered a customer with a pharma grade plant-based oil for their ointment formulation, to be used for muscle and joint pain treatment.",
  },
  {
    id: 2,
    title: "Accessible basic healthcare service",
    imgsrc: "/assets/home/banner/healthcare-service.jpg",
    description:
      "Distributed an ambulance to provide a crucial life support to patients in the 20km vicinity of our Khopoli unit, Maharashtra, India",
  },
  {
    id: 3,
    title: "Candle wax success story",
    imgsrc: "/assets/home/banner/candle-wax.jpg",
    description:
      "Delivered an indigenous plant-based sustainable candle wax solution to a client, helping them align with the growing demand of sustainable products",
  },
];

const Slide = ({
  slide,
  key,
  classes,
}: {
  slide: any;
  classes?: string;
  key?: any;
}) => {
  return (
    <div
      className={`absolute inset-0 md:h-screen min-h-[600px] overflow-hidden text-white `}
    >
      <div className="md:h-screen min-h-[600px] w-full">
        <Image
          src={slide.imgsrc}
          className="w-full h-full object-cover images"
          height={900}
          width={1280}
          layout="cover"
          alt={slide.id}
        />
      </div>
      {slide.title && (
        <div className="absolute inset-0 md:h-screen min-h-[600px] flex justify-end items-end 2xl:py-36 md:py-32 py-14 bg-gradient-to- from-transparent via-[#020f2252] to-[#2067cab2] ">
          <div className="w-container">
            <div className="max-w-md">
              <h2 className="current-title font-playfairBold text-white">
                {slide.title}
              </h2>
              {slide.description && (
                <h6 className="current-subtitle mt-5 font-worksansLight">
                  {slide.description}
                </h6>
              )}
              <ButtonLinkAtom
                className="mt-7 font-worksansLight"
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
  );
};

const Banner = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  // const handleNextSlide = () => {
  //   setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  // };

  // const handlePrevSlide = () => {
  //   setActiveSlideIndex(
  //     (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
  //   );
  // };
  const handlePagination = (slideIndex: number) => {
    setActiveSlideIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [activeSlideIndex]);

  return (
    <div>
      <div className="slideshow min-h-[600px] xl:flex hidden h-screen bg-blue relative overflow-hidden">
        <TransitionGroup>
          <CSSTransition
            key={slides[activeSlideIndex].id}
            timeout={1000}
            // classNames="slides"
            mountOnEnter
            onEnter={(node: any) => {
              gsap.to(node, { opacity: 0 });
            }}
            onEntered={(node: any) => {
              gsap.to(node, { opacity: 1, duration: 1 });
              gsap.to(".images", { scale: 1.1, duration: 6 });
            }}
            onExit={(node: any) => {
              gsap.to(node, { opacity: 1, delay: 1 });
            }}
            onExited={(node: any) => {
              gsap.to(node, { opacity: 0, duration: 2 });
            }}
          >
            <Slide slide={slides[activeSlideIndex]} />
          </CSSTransition>
        </TransitionGroup>

        <div className=" ">
          <TransitionGroup>
            <CSSTransition
              key={slides[activeSlideIndex].id}
              timeout={1000}
              // classNames="ripple"
              mountOnEnter
              onEnter={(node: any) => {
                gsap.to(node, {
                  scale: 14,
                  duration: 2,
                  ease: Power1.easeInOut,
                });
              }}
              onEntered={(node: any) => {
                gsap.to(node, {
                  scale: 14,
                  duration: 0.4,
                  opacity: 0,
                  ease: Power1.easeOut,
                });
              }}
              onExit={(node: any) => {
                gsap.to(node, { scale: 0, opacity: 0 });
              }}
              onExited={(node: any) => {
                gsap.to(node, { scale: 0, opacity: 0 });
              }}
            >
              <div className="ripple-wrapper top-[-30vw] left-[-20vw] flex justify-center scale-0 items-center origin-center bg-blue bg-opacity-100 absolute h-[50vw] w-[50vw] rounded-full mx-auto">
                {/* 
                <div className="effect inset-[80px] absolute  bg-blue bg-opacity-15 rounded-full shadow-lg shadow-black"></div>
                <div className="effect inset-[125px] absolute  bg-blue bg-opacity-25 rounded-full shadow-lg shadow-black"></div>
                <div className="effect inset-[148px] absolute  bg-blue bg-opacity-35 rounded-full shadow-lg shadow-black"></div>
                <div className="effect inset-[170px] absolute  bg-blue bg-opacity-45 rounded-full shadow-lg shadow-black"></div>
                <div className="effect inset-[195px] absolute  bg-blue bg-opacity-100 rounded-full shadow-lg shadow-black"></div> */}
                {/* <div className="effect inset-[100px] absolute  bg-blue bg-opacity-100 rounded-full shadow-lg shadow-black"></div> */}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>

        <div className="absolute right-0 left-0 mx-auto bottom-14 h-fit w-container flex gap-2 xl:justify-between justify-center">
          {slides.map((slide, index) => {
            const i = index + 1;
            return (
              <button
                className="text-white text-nowrap"
                onClick={() => handlePagination(index)}
                key={i}
              >
                <span className="xl:block hidden">
                  0{i} {slide.title}
                </span>
                <div className="bg-white bg-opacity-40 h-[2px] min-w-[30px] relative mt-2 overflow-clip">
                  <span
                    className={` ${
                      activeSlideIndex === index
                        ? " progress-bar "
                        : " hide-progress "
                    }  w-full absolute inset-0 h-[2px] block bg-white`}
                  ></span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {/* <div className="flex justify-center gap-5 absolute left-0 bottom-0 bg-white p-2 z-[999]">
        <button className="d" onClick={handlePrevSlide}>
          Previous
        </button>
        <button className="d" onClick={handleNextSlide}>
          Next
        </button>
      </div> */}
      <div className="xl:hidden block">
        <BannerMobile slides={slides} />
      </div>
    </div>
  );
};

export default Banner;
