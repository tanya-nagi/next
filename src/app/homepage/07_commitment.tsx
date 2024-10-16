"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { commitmentStatics } from "@statics/homepage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

export default function Commitment() {
  return (
    <section className="blade-top-padding blade-bottom-padding-lg">
      <div className="w-container 2xl:max-w-screen-xl max-w-screen-lg gsap-fade-in">
        <h1 className=" text-blue font-playfairMedium max-w-xl">
          <i className="font-playfairMediumItalic"> Though, </i> <br /> our
          commitment <br /> doesn’t end here!
        </h1>
        <div className="md:flex justify-end md:mt-5 mt-3">
          <h6 className="text-blue max-w-xl">
            We&apos;re collectively driven by a fervent desire to nurture the
            communities that nurture us. From community service to environmental
            initiatives, our every action is aimed at leaving a lasting,
            positive impact on the world we share.
          </h6>
        </div>
      </div>

      <div className="lg:blade-top-padding pt-5  relative  ">
        <Swiper
          modules={[Pagination]}
          className="w-full md:pr-32 sm:pr-10 h-auto md:!pb-14 !pb-4 "
          slidesPerView={1.05}
          spaceBetween={10}
          pagination={{
            type: "progressbar",
            el: ".swiper-progressbar",
            progressbarOppositeClass: "fill-progressbar",
          }}
          autoHeight
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
              spaceBetween: 40,
            },
          }}
        >
          {commitmentStatics.map((item, index) => {
            const { title, desc, image, id, location } = item;
            return (
              <SwiperSlide key={id} className="w-full h-auto ">
                <div className="w-full h-auto flex md:flex-row flex-col ">
                  <div className="h-full md:w-6/12">
                    <Image
                      src={image}
                      height={400}
                      width={400}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-navy 2xl:p-14 xl:p-10 md:p-6 p-4 flex flex-col justify-between md:w-6/12">
                    <h6 className="text-white">/0{id}</h6>

                    <div className="mt-3">
                      <h4 className="text-white font-worksansMedium">
                        {title}
                      </h4>

                      <h6 className="text-sm text-white mt-1 font-light">
                        {location}
                      </h6>
                      <h6 className="text-white mt-3 font-light">{desc}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-progressbar !top-auto !bottom-0 left-4 right-0 mx-auto md:!w-full !w-6/12 max-w-3xl z-50 pt-1 2xl:mt-10 rounded-md overflow-hidden bg-navy bg-opacity-20"></div>
        </Swiper>
      </div>
    </section>
  );
}