import { ButtonLinkAtom } from "@components/atoms/button";
import React from "react";

export default function Codevelopment() {
  return (
    <section className="relative bg-blue min-h-[600px] md:h-screen md:pt-0 blade-top-padding-lg md:pb-0 blade-bottom-padding-lg overflow-hidden">
      <div className="md:block hidden xl:w-7/12 w-6/12 absolute inset-0">
        <video
          className="w-11/12 h-full  object-contain gsap-fade-in"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/home/co-development.mp4" />
        </video>
      </div>
      <div className="flex items-center relative w-container min-h-[600px] md:h-screen">
        <div className="md:flex-1"></div>

        <div className="flex-1 2xl:max-w-xl max-w-md grid 2xl:gap-8 gap-2 gsap-fade-in">
          <h1 className=" text-white font-playfairMedium ">Co-development</h1>
          <h6 className="text-lg text-white">
            Centered on your needs, fueled by collaboration
          </h6>

          <div className="md:hidden block w-full gsap-fade-in">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/home/co-development.mp4" />
            </video>
          </div>

          <h6 className="font-worksansLight text-white 2xl:mt-8 md:mt-6 mt-3">
            Together, we engineer the value-adding products your business needs,
            drawing upon our 150-year-old legacy of walking diverse value chains
            across applications and markets.
          </h6>

          <h6 className="font-worksansLight text-white">
            Primed with a repertoire of capabilities, ranging from recipe
            creation to pilot testing, our cadre of specialists at Customer
            Innovation Centers meticulously enhance your products whilst
            strengthening your enterprise.
          </h6>

          <ButtonLinkAtom
            className="mt-3"
            text="The next step!"
            size="base"
            theme="outline"
            href="/"
            icon
          />
        </div>
      </div>
    </section>
  );
}
