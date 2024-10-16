import React, { useEffect, useState } from "react";
import "./circularCarousel.css";
import { act } from "react-dom/test-utils";
import Image from "next/image";

export default function CircularCarousel({
  handleIndexChange,
  activeIndex,
  handleProgress,
  cdata,
}: {
  handleIndexChange: Function;
  handleProgress?: Function;
  activeIndex: number;
  cdata?: any;
}) {
  useEffect(() => {}, [activeIndex]);
  return (
    <div className="h-full">
      <div className="relative content-wrapper rounded-full h-full flex justify-between border-transparent">
        {cdata.map((item: any, index: number) => {
          const { id, title, icon, progressPercentage } = item;
          return (
            <button
              key={`${index}carousal`}
              id="pagination-wrapper"
              onClick={() => {
                handleIndexChange(id);
              }}
              className={`h-9 w-9 absolute rounded-full transition-all cursor-pointer origin-center flex justify-center items-center`}
            >
              <div
                className={`${
                  id !== activeIndex ? "scale-[0.2]" : "scale-[1]"
                } text-black  h-full w-full rounded-full transition-all duration-1000 `}
              >
                <div className="bg-blue h-full w-full rounded-full relative z-10">
                  <Image
                    src={icon}
                    fill
                    alt=""
                    className={`${
                      id !== activeIndex ? "opacity-0" : "opacity-100"
                    } w-full h-full object-contain transition-all duration-500 `}
                  />
                </div>
                <div className="absolute inset-0 bg-white rounded-full scale-150"></div>
              </div>

              {id === activeIndex ? (
                <svg
                  id="autofillsvg"
                  className="absolute h-full w-full inset-0 -rotate-90 scale-150"
                  viewBox="0 0 200 200"
                >
                  <circle
                    className="circle"
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#2067CA"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                ""
              )}
            </button>
          );
        })}
      </div>

      <div className="absolute h-full w-full inset-0">
        <img
          className="h-full w-full object-contain"
          src="/assets/circle.svg"
          alt=""
        />
      </div>

      {/* <svg
        className="absolute h-full w-full inset-0 -rotate-90 !transition-none !duration-0"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="#2067CA"
          strokeWidth="0.2"
          opacity="1"
          className="!transition-none !duration-0"
        />
          <circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="#2067CA"
          strokeWidth="0.2"
          strokeDasharray="311"
          strokeDashoffset="311"
          id="progress-circle" 
      </svg> */}
    </div>
  );
}
