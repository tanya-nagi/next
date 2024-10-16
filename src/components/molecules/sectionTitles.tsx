import React from "react";

type TitleSection = {
  allignCenter?: boolean;
  title: string;
  subtitle?: string;
  subtitleClassname?: string;
  boldParagraphs?: string[];
  paragraphs: string[];
};

export default function SectionTitles({
  title,
  subtitle,
  subtitleClassname,
  boldParagraphs,
  paragraphs,
  allignCenter,
}: TitleSection) {
  return (
    <section>
      {!allignCenter ? (
        <div className="w-container 2xl:max-w-screen-xl xlg:max-w-screen-md lg:max-w-screen-md sm:max-w-screen-sm max-w-2xl">
          <div className="border-dark sm:w-6/12 2xl:pl-20 md:min-h-[250px] relative">
            <h1
              className=" text-blue font-worksansLight max-w-lg gsap-fade-in"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle ? (
              <h6
                className="text-blue font-worksansMedium mt-4"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            ) : (
              ""
            )}
            <div className="absolute h-full right-0 top-0  bg-black w-[1px] overflow-hidden gsap-height"></div>
          </div>
          <div className="md:flex lg:gap-8 gap-4 flex-col lg:mt-14 sm:mt-8 mt-3 sm:w-6/12 w-full ml-auto">
            {boldParagraphs
              ? boldParagraphs.map((paragraph, index) => {
                  return (
                    <h5
                      key={index}
                      className="max-w-lg font-worksansMedium gsap-fade-in"
                    >
                      {paragraph}
                    </h5>
                  );
                })
              : ""}
            {paragraphs.map((paragraph, index) => {
              return (
                <h5 key={index} className="max-w-lg  gsap-fade-in">
                  {paragraph}
                </h5>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-container 2xl:max-w-screen-xl xlg:max-w-screen-md lg:max-w-screen-md sm:max-w-screen-sm max-w-2xl">
          <div className="max-w-3xl mx-auto">
            <h2
              className=" text-blue font-worksansLight text-center gsap-fade-in"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
              <h6
                className={`${subtitleClassname} text-blue font-worksansMedium lg:my-10 sm:my-8 my-5 text-center  gsap-fade-in`}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}
          </div>
          <div className="md:flex lg:gap-8 gap-4 flex-col max-w-3xl mx-auto">
            {boldParagraphs
              ? boldParagraphs.map((paragraph, index) => {
                  return (
                    <h6
                      key={index}
                      className="font-worksansMedium text-center  gsap-fade-in"
                    >
                      {paragraph}
                    </h6>
                  );
                })
              : ""}
            {paragraphs.map((paragraph, index) => {
              return (
                <h6 key={index} className="text-center  gsap-fade-in">
                  {paragraph}
                </h6>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
