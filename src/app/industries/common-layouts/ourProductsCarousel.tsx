"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

type DataProps = {
  data: {
    heading: string;
    productArray: {
      id: string;
      image: string;
      title: string;
      desc: string;
    }[];
  };
};

export default function OurProductsCarousel({ data }: DataProps) {
  return (
    <section className="blade-top-padding blade-bottom-padding">
      <div className="w-container-sm">
        <hr />
        <h2 className="text-blue text-40 font-worksansMedium mt-5">
          {data.heading}
        </h2>
      </div>

      <div className="pt-6 relative ">
        <Swiper
          modules={[Pagination, Navigation]}
          className="lg:!pl-[10%] xl:!pl-[16%] !pl-4 !pr-[5%] md:!pb-8 !pb-4"
          spaceBetween={20}
          slidesPerView={1.1}
          pagination={{
            el: ".swiper-progressbar",
            type: "progressbar",
            progressbarOppositeClass: "fill-progressbar",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
            1280: {
              spaceBetween: 20,
              slidesPerView: 3.1,
            },
            1536: {
              spaceBetween: 20,
              slidesPerView: 3.5,
            },
          }}
        >
          {data.productArray.map((slide, i) => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="grid gap-2">
                  <Image
                    height={400}
                    width={500}
                    src={slide.image}
                    alt={slide.title}
                    className="2xl:h-[25rem] object-cover rounded-lg"
                  />
                  <h5 className="font-worksansMedium mt-2">{slide.title}</h5>
                  <p className="font-worksans md:pr-5">{slide.desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-container-sm relative">
          <div className="swiper-progressbar ml-3 !top-auto !bottom-0 md:!w-full !w-6/12 max-w-md z-50 pt-1 2xl:mt-10 rounded-md overflow-hidden bg-navy bg-opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
