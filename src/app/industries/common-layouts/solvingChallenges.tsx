"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination } from "swiper/modules";

type ProductRichTextProps = {
  data: {
    title: string;
    subtitle: string;
    list: string[];
    heading: string;
    carouselArray: {
      id: number;
      category: string;
      title: string;
      desc: string;
    }[];
  };
};

export default function SolvingChallenges({ data }: ProductRichTextProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperInstance = React.useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore): void => {
    setActiveSlide(swiper.activeIndex);
  };

  const goToSlide = (slideIndex: number): void => {
    if (swiperInstance.current) {
      const swiperRef = swiperInstance.current;
      swiperRef.slideTo(slideIndex);
    }
  };

  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide]);
  return (
    <div className="bg-blueShade blade-top-padding blade-bottom-padding-lg">
      <section className="w-container-sm blade-bottom-padding-xl">
        <h1
          className="lg:w-7/12 sm:w-8/12 w-full font-worksansLight text-blue leading-tight"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <h6
          className="sm:w-5/12 leading-snug mt-2 text-blue font-worksansMedium"
          dangerouslySetInnerHTML={{ __html: data.subtitle }}
        />

        <div className="mt-2 sm:flex justify-end ">
          {data.list.map((paragraph) => {
            return (
              <h6 className="2xl:w-4/12 sm:w-5/12 leading-snug font-worksansMedium">
                {paragraph}
              </h6>
            );
          })}
        </div>
      </section>
      <div className="w-container-sm">
        <h2 className="text-blue text-40 font-worksansMedium mt-7">
          {data.heading}
        </h2>
        <hr className="mt-4" />
      </div>
      <div className="w-container-sm flex md:gap-4 gap-1 md:mt-8 mt-4">
        <button
          onClick={() => goToSlide(0)}
          className={`${
            activeSlide < 2 ? "border- border-blue" : "opacity-50"
          } text-left 2xl:text-2xl md:text-xl text-[12px] py-2 font-worksansMedium transition-all duration-500 text-black `}
          type="button"
        >
          Tackling product challenges{" "}
        </button>
        <button
          onClick={() => goToSlide(3)}
          className={`${
            activeSlide >= 2 ? "border- border-blue" : "opacity-50"
          } text-left 2xl:text-2xl md:text-xl text-[12px] md:px-6 px-3 py-2 font-worksansMedium transition-all duration-500 text-black `}
          type="button"
        >
          Streamlining process efficiency
        </button>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperInstance.current = swiper)}
        className="lg:!pl-[10%] xl:!pl-[16%] !pl-4 2xl:!pb-10 !lg:pb-5 !pb-3 xlg:!mt-14 !mt-6 !pr-10"
        modules={[Pagination, Navigation, A11y]}
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        initialSlide={0}
        slideToClickedSlide
        onSlideChange={(ele) => {
          // setActiveSlide(ele.activeIndex)
          handleSlideChange(ele);
        }}
        slideActiveClass="slideActiveClass"
        //   centeredSlides
        speed={1500}
        grabCursor
        scrollbar={{
          el: ".swiper-scrollbar",
          draggable: true,
          horizontalClass: "bg-[#181818]",
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2.8,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 3.1,
            spaceBetween: 30,
          },
        }}
      >
        {data.carouselArray.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <div className='flex flex-col justify-between xlg:h-[28rem] md:h-[24rem] h-[20rem] mx-auto w-full bg-white md:px-8 px-5 md:py-5 rounded-md border bg-[url("/assets/industries/ripple.png")] bg-no-repeat bg-cover bg-right-top'>
                <h4 className="mt-4 pr-10 leading-relaxed font-semibold">
                  {item.title}
                </h4>
                <div className="md:min-h-36 min-h-32">
                  <h6 className=" text-opacity-60 mt-1 font-light pr-10 leading-relaxed ">
                    {item.desc}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="custom-navigation w-container-sm mt-5 flex justify-end gap-7">
        <button className="prevBtn cursor-pointer xlg:w-16 w-10">
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
        <button className="nextBtn cursor-pointer xlg:w-16 w-10">
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
    </div>
  );
}

// public\assets\industries\ripple.png
