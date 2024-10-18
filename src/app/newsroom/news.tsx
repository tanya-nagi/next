"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="w-container blade-bottom-padding-lg">
      <div className="flex gap-6 justify-center">
        {categories.map((item, index) => (
          <button
            key={index}
            className={`${
              selectedCategory === item
                ? "text-blueDark underline"
                : "text-blue" // Change to your light blue class
            }`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 px-4">
        {newsData.map((item) => {
          const { title, image, id } = item;
          return (
            <div className="w-full h-auto relative group" key={id}>
              <div className="relative mb-4 overflow-hidden rounded-[7.55px]">
                <Image
                  src={image}
                  height={297}
                  width={516}
                  alt={title}
                  className="w-full h-[297px] object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      View
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="mt-2 font-worksansMedium text-blueDark text-left text-[14px] font-semibold leading-[26.43px]">
                {title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const categories = [
  "Recent Updates",
  "Insights",
  "Happenings",
  "Awards & Recognitions",
];

const newsData = [
  {
    id: 1,
    title: "The AAK Annual Report for 2023 is now launched",
    image: "/assets/newsroom/img1.png",
  },
  {
    id: 2,
    title: "AAK opens new innovation centre in Antwerp, Belgium",
    image: "/assets/newsroom/img2.png",
  },
  {
    id: 3,
    title: "Now launched: AAK's 2023 Sustainability Report!",
    image: "/assets/newsroom/img3.png",
  },
  {
    id: 4,
    title:
      "AAK in 6th place in a new sustainability report - Hållbara Bolag 2023",
    image: "/assets/newsroom/img4.png",
  },
  {
    id: 5,
    title: "AAK has received the EcoVadis silver medal",
    image: "/assets/newsroom/img5.png",
  },
  {
    id: 6,
    title:
      "Is supercritical CO₂ a better solution for more sustainable production methods at AAK?",
    image: "/assets/newsroom/img6.png",
  },
];
