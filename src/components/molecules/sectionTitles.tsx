import React from "react";

type TitleSection = {
  allignCenter?: boolean;
  middleModify?: boolean;
  title: string;
  subtitle?: string;
  subtitleClassname?: string;
  boldParagraphs?: string[];
  paragraphs: string[];
  bulletPointers?: string[];
};

export default function SectionTitles({
  title,
  subtitle,
  subtitleClassname,
  boldParagraphs,
  paragraphs,
  bulletPointers,
  middleModify,
  allignCenter,
}: TitleSection) {
  return (
    <section>
      {!allignCenter ? (
        <div className="w-container 2xl:max-w-screen-xl xlg:max-w-screen-md lg:max-w-screen-md sm:max-w-screen-sm max-w-2xl">
          <div className={`border-dark sm:w-6/12 ${!middleModify && "2xl:pl-20"} md:min-h-[${middleModify ? "70px" : "250px"}] ${!middleModify && "relative"}`}>
            {middleModify ? (
              boldParagraphs ? (
                boldParagraphs.map((paragraph, index) => (
                  <h5
                    key={index}
                    className="max-w-lg font-worksansMedium gsap-fade-in"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))
              ) : (
                ""
              )
            ) : (
              <>
                <h1
                  className="text-blue font-worksansLight max-w-lg gsap-fade-in"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                {
                  subtitle && (
                    <h6
                      className="text-blue font-worksansMedium mt-4"
                      dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                  )
                }
              </>
            )}

            <div className="absolute h-full right-0 top-0  bg-black w-[1px] overflow-hidden gsap-height"></div>
          </div>
          <div className={`md:flex lg:gap-8 gap-4 flex-col lg:mt-14 sm:mt-8 mt-3  w-full ml-auto ${middleModify ? "sm:w-6/12" : "sm:w-6/12"} `}>
            {(boldParagraphs && !middleModify)
              ? boldParagraphs.map((paragraph, index) => {
                return (
                  <h5
                    key={index}
                    className="max-w-lg font-worksansMedium gsap-fade-in"
                    dangerouslySetInnerHTML={{ __html: paragraph }}

                  />
                );
              })
              : ""}
            {paragraphs.map((paragraph, index) => {
              return (
                <h5
                  key={index}
                  className={`${!middleModify && "max-w-lg"} gsap-fade-in`}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              );
            })}

          </div>
          {bulletPointers?.length && <div className="md:flex lg:gap-8 gap-4 flex-col lg:mt-14 sm:mt-8 mt-3 sm:w-6/12 w-full ml-auto">

            <ul className="bullet-list  gsap-fade-in">

              {bulletPointers?.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>}
        </div>
      ) : (
        <div className="w-container 2xl:max-w-screen-xl xlg:max-w-screen-md lg:max-w-screen-md sm:max-w-screen-sm max-w-2xl">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-blue font-worksansLight text-center gsap-fade-in"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
              <h6
                className={`${subtitleClassname} text-blue font-worksansMedium lg:my-10 sm:my-8 my-5 text-center gsap-fade-in`}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}
          </div>

          <div className="md:flex lg:gap-8 gap-4 flex-col max-w-3xl mx-auto">
            {boldParagraphs &&
              boldParagraphs.map((paragraph, index) => (
                <h6 key={index} className="font-worksansMedium text-center gsap-fade-in">
                  {paragraph}
                </h6>
              ))}

            {paragraphs &&
              paragraphs.map((paragraph, index) => (
                <h6 key={index} className="text-center gsap-fade-in">
                  {paragraph}
                </h6>
              ))}

          </div>

        </div>
      )}
    </section>
  );
}
