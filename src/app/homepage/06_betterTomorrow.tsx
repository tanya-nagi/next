"use client";

import { ButtonAtom, ButtonLinkAtom } from "@components/atoms/button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BetterTomorrow() {
  useEffect(() => {
    const isMobile = window.innerWidth < 786;
    // console.log(isMobile);

    const cards = document.querySelectorAll(".chip");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-trigger",
        markers: false,
        start: isMobile ? "top 70%" : "top 20%",
        end: isMobile ? "top 70%" : "top 20%",
      },
    });

    cards.forEach((element) => {
      isMobile
        ? tl
            .fromTo(
              element,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
              }
            )
            .to(element.lastChild, { opacity: 1, y: 0 })
        : tl
            .fromTo(
              element,
              { x: "60vw", opacity: 0.5 },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
              }
            )
            .fromTo(
              element.lastChild,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0 }
            );
      // fromTo(
      //   element,
      //   { x: "10vw", opacity: 0.5 },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     duration: 0.8,
      //   }
      // );
    });
  }, []);
  return (
    <section
      id="section-trigger"
      className="flex md:flex-row flex-col md:gap-10 gap-5 2xl:pl-[10%] lg:pl-[4%] blade-top-padding blade-bottom-padding overflow-x-hidden"
    >
      <div className="md:w-4/12 2xl:w-5/12 pl-3 gsap-fade-in">
        <h1 className=" text-blue font-playfairMedium max-w-xl">
          <i className="font-playfairMediumItalic">Shaping</i> <br /> a better
          tomorrow
        </h1>
        <h6 className="text-blue text-sm md:text-lg max-w-xl mt-3">
          By forging sustainable synergies today!
        </h6>
        <div className="md:grid hidden 2xl:gap-6 gap-4 2xl:mt-14 xl:mt-6 mt-3">
          <h6 className="max-w-lg">
            From the crop roots to the final product on the shelf, we have got
            sustainability woven into the very fabric of our value chain. For
            us, it’s about touching every base from plant to brand through
            better sourcing, better Manufacturing & Supply Chain, and better
            solutions.
          </h6>
          <h6 className="max-w-lg">
            At the nucleus of our sustainability endeavors lies our ‘House of
            Sustainability’, resting on pillars that are a beacon towards a
            brighter, more sustainable tomorrow.
          </h6>

          <ButtonLinkAtom
            text="Let’s deep dive!"
            size="base"
            theme="blue"
            href="/"
            icon
            className="lg:mt-5"
          />
        </div>
      </div>

      <div className="grid sm:gap-0 gap-4 sm:grid-cols-3 md:w-8/12 2xl:w-7/12 w-full">
        {data.map((item, index) => {
          return <Chip image={item.image} text={item.text} key={item.id} />;
        })}
      </div>
    </section>
  );
}

const Chip = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="chip">
      <Image
        src={image}
        alt={text}
        height={400}
        width={300}
        className="md:w-full w-full md:h-full h-56 object-cover"
      />
      <h6 className="md:p-0 px-2 mt-2 text-blue font-bold ">{text}</h6>
    </div>
  );
};

const data = [
  {
    id: 1,
    image: "/assets/home/betterTomorrow/01.jpg",
    text: "Climate",
  },
  {
    id: 2,
    image: "/assets/home/betterTomorrow/02.jpg",
    text: "Biodiversity",
  },
  {
    id: 3,
    image: "/assets/home/betterTomorrow/03.jpg",
    text: "People",
  },
];
