import Image from "next/image";
import React from "react";

type DataProps = {
  data: {
    heading: string;
    iconsArray: {
      id: string;
      image: string;
      title: string;
    }[];
    textArray: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
};

export default function Attributes({ data }: DataProps) {
  return (
    <section className="blade-top-padding-sm blade-bottom-padding-xl">
      <div className="w-container-sm">
        <hr />
        <h2 className="text-blue text-40 font-worksansMedium mt-7">
          {data.heading}
        </h2>
      </div>

      <div className="blade-top-margin-sm relative w-container-sm">
        <div className="sm:flex grid grid-cols-2 2xl:flex-nowrap flex-wrap xl:gap-5 md:gap-3 gap-6 gap-y-5">
          {data.iconsArray.map((icon, index) => {
            return (
              <div className="2xl:mr-[3%] mr-0 2xl:min-w-40 xlg:min-w-32 sm:min-w-28 min-w-[20%]">
                <div className="2xl:h-32 xl:h-20 h-16 2xl:w-32 xl:w-20 w-16 flex items-center 2xl:pt-2 pt-1 2xl:px-8 px-4 md:mx-auto rounded-full bg-blue ">
                  <Image
                    width={200}
                    height={200}
                    src={icon.image}
                    alt={icon.title}
                  />
                </div>
                <h6 className="md:text-center whitespace-nowrap font-worksansSemiBold mt-4">
                  {icon.title}
                </h6>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 2xl:gap-10 gap-6 2xl:blade-top-margin blade-top-margin-sm">
          {data.textArray.map((tile, index) => {
            return (
              <div className="mr-[2%] min-w-40">
                <h5 className="whitespace-nowrap font-worksansSemiBold mt-4 ">
                  {tile.title}
                </h5>
                <h6 className="mt-2 w-[95%]">{tile.desc}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
