"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { faqCoDevelopment } from "@statics/coDevelopment";

export default function FAQ() {
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={` blade-top-padding-lg blade-bottom-padding-lg`}>
      <div className="text-center px-3">
        <h3 className="text-[#2B2B2B] font-semibold tracking-wide">
          Frequently asked questions
        </h3>
      </div>

      <div className="mt-4 md:mt-8 lg:mt-16 px-3">
        <div className="flex flex-col gap-2 md:gap-6 lg:gap-7 max-w-4xl md:w-11/12 mx-auto">
          {faqCoDevelopment.map((accordion: AccordionItem, index: number) => {
            const key = index;
            if (showMore) {
              return (
                <Accordion
                  key={key}
                  title={accordion.title}
                  content={accordion.content}
                  isOpen={openIndex === key}
                  index={key}
                  handleOpen={handleOpen}
                />
              );
            } else if (index <= 4) {
              return (
                <Accordion
                  key={key}
                  title={accordion.title}
                  content={accordion.content}
                  isOpen={openIndex === key}
                  index={key}
                  handleOpen={handleOpen}
                />
              );
            }
            return null;
          })}
          <div className="flex justify-center md:mt-10 mt-3">
            <button
              onClick={() => setShowMore(!showMore)}
              className="border-none cursor-pointer bg-transparent text-base md:text-xl font-medium animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`md:w-5 w-3 ${
                  showMore ? "-rotate-90" : "rotate-90"
                } `}
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M1 0.993225L6 6.00721L1 11.0071"
                  className="stroke-dark"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  index: number;
  handleOpen: (index: number) => void;
}

export interface AccordionItem {
  title: string;
  content: string;
}

function Accordion({
  title,
  content,
  handleOpen,
  index,
  isOpen,
}: AccordionProps) {
  const accordionRef = useRef<HTMLDivElement>(null);
  const toggleAccordion = () => {
    handleOpen(index);
  };

  useLayoutEffect(() => {
    const accordionContent = accordionRef.current as HTMLElement;
    if (isOpen) {
      gsap.to(accordionContent, { height: "auto", duration: 0.3, padding: 0 });
    } else {
      gsap.to(accordionContent, { height: 0, duration: 0.3, padding: 0 });
    }
  }, [isOpen]);

  return (
    <div
      className={` ${
        isOpen ? "" : ""
      }  bg-white md:py-6 py-2 self-start accordion-item overflow-hidden border-b border-[#00264e7b] `}
    >
      <button
        type="button"
        className="accordion-header flex transition-colors duration-300 ease-in-out items-center gap-3 group outline-none rounded-md pr-2 w-full"
        onClick={toggleAccordion}
      >
        <h6 className="flex-1 font-worksans font-bold leading-tight text-left">
          {title}
        </h6>
        <div className="grid relative place-content-start rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`md:w-5 h-4 md:h-5 ${
              isOpen ? "rotate-180 opacity-0" : "opacity-100"
            } duration-300 ease-in-out transition-all`}
            viewBox="0 0 19 20"
            fill="none"
          >
            <g clipPath="url(#clip0_3302_257)">
              <path
                d="M11.6113 0.0449219L11.6113 19.3347H7.39514L7.39514 0.0449219L11.6113 0.0449219ZM18.7377 7.73098V11.6113L0.231445 11.6113L0.231445 7.73098L18.7377 7.73098Z"
                fill="#00264E"
              />
            </g>
            <defs>
              <clipPath id="clip0_3302_257">
                <rect
                  width="18.5062"
                  height="19.2898"
                  fill="white"
                  transform="translate(0.231445 0.0449219)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            className={`absolute inset-0 fill-black md:w-5 h-4 md:h-5 ${
              isOpen ? "opacity-100" : "-rotate-180 opacity-0"
            } duration-300 ease-in-out transition-all`}
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>
      </button>

      <div
        className={`accordion-content overflow-hidden ${isOpen ? "" : "h-0"}`}
        ref={accordionRef}
      >
        <span className="font-medium font-worksans mt-2 md:mt-0 block leading-tight md:leading-normal text-sm md:text-base 2xl:text-lg w-[86%] md:py-7 py-2">
          {content}
        </span>
      </div>
    </div>
  );
}
