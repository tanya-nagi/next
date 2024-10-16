import Image from "next/image";
import React from "react";

export default function News() {
  return (
    <section className="w-container blade-bottom-padding-lg">
      <div className="flex gap-6 justify-center">
        {categories.map((item, index) => {
          const i = index + 1;

          return (
            <button key={i} className="text-blue">
              {item}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-4 gap-5 mt-10">
        {newsData.map((item, i) => {
          const { title, description, image, id } = item;
          return (
            <div className="w-full h-auto" key={id}>
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
          );
        })}
      </div>
    </section>
  );
}

const categories = [
  "2030 Aspirations",
  "Webinars",
  "Recent Updates",
  "Awards & Recongitions",
  "Events",
];

const newsData = [
  {
    id: 1,
    category: "",
    title: "news 1",
    description: "descriptio 1",
    image: "/assets/newsroom/",
    data: "10 Mar 2024",
  },
  {
    id: 2,
    category: "",
    title: "news 1",
    description: "descriptio 1",
    image: "/assets/newsroom/",
    data: "10 Mar 2024",
  },
  {
    id: 2,
    category: "",
    title: "news 1",
    description: "descriptio 1",
    image: "/assets/newsroom/",
    data: "10 Mar 2024",
  },
  {
    id: 2,
    category: "",
    title: "news 1",
    description: "descriptio 1",
    image: "/assets/newsroom/",
    data: "10 Mar 2024",
  },
  {
    id: 2,
    category: "",
    title: "news 1",
    description: "descriptio 1",
    image: "/assets/newsroom/",
    data: "10 Mar 2024",
  },
  {
    id: 2,
    category: "",
    title: "news 1",
    description: "descriptio 1",
    image: "/assets/newsroom/",
    data: "10 Mar 2024",
  },
];
