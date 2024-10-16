"use client";
import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  useLayoutEffect,
} from "react";
import SectionTitles from "@components/molecules/sectionTitles";
import "./style.css";
import CircularCarousel from "./circularCarousel";

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  // const progressCircle = document.getElementById("progress-circle");
  // function handleProgress(percentage: any) {
  //   const radius = 50;
  //   const circumference = 2 * Math.PI * radius;
  //   const offset = circumference - (percentage / 100) * circumference;

  //   if (progressCircle) {
  //     progressCircle.style.strokeDashoffset = `${offset}`;
  //     progressCircle.style.transition = "4s";
  //     progressCircle.style.transitionTimingFunction = "linear";
  //   }
  // }

  useEffect(() => {
    const intervalId = setInterval((index) => {
      console.log(index);
      if (activeIndex === 6) {
        setActiveIndex(1);
      } else {
        const next = activeIndex + 1;
        setActiveIndex(next);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handleIndexChange = (update: number) => {
    const i = update - 1;
    setActiveIndex(update);
    console.log(update);
  };

  let circleWrapperRef = useRef<any>();

  return (
    <section className="co-development sm:blade-top-padding sm:blade-bottom-padding-xl overflow-hidden">
      <SectionTitles
        title='<span class="font-playfairSemibold">The Journey</span>'
        subtitle='Curated for navigating your product and <br class="md:block hidden"/> business success'
        boldParagraphs={[
          "Co-development, a collaboration for transforming your vision into reality all the way through to the launch of your product.",
        ]}
        paragraphs={[
          "It’s the Customer Innovation Centers where concepts are developed, tested, and refined in real-life conditions, optimizing your product and strengthening your business for the better.",
        ]}
      />

      <div className="lg:pl-[10%] mt-3 sm:blade-top-padding-xl sm:blade-bottom-padding-xl">
        <div className="lg:grid grid-cols-5 ">
          <div className="col-start-1 col-end-3 sm:blade-top-padding-xl">
            <div className="relative blade-bottom-padding flex flex-col lg:gap-8 gap-0 selection:max-w-xl  h-fit">
              {cdata.map((elem, index: number) => {
                const key = `00${index}`;
                return (
                  <SlideTab
                    index={elem.id}
                    isActive={activeIndex === elem.id}
                    handleClick={() => handleIndexChange(elem.id)}
                    data={elem}
                    key={key}
                  />
                );
              })}
            </div>
          </div>

          <div className="col-span-3 col-start-3 lg:block hidden">
            <div className="min-h-[800px] h-full relative my-auto flex justify-center items-center">
              <article className="h-[800px] w-[800px] relative">
                <div className="h-[800px] w-[800px] 2xl:scale-[1.8] scale-125">
                  <div
                    ref={circleWrapperRef}
                    className=" circles-wrapper inset-0 "
                  >
                    <div className="circle" id="six"></div>
                    <div className="circle" id="five"></div>
                    <div className="circle" id="four">
                      <CircularCarousel
                        handleIndexChange={handleIndexChange}
                        activeIndex={activeIndex}
                        cdata={cdata}
                      />
                    </div>
                    <div className="circle" id="three"></div>
                  </div>
                </div>
                <div className="ripple-effect absolute inset-0 m-auto z-20 2xl:h-96 h-80 2xl:w-96 w-80 overflow-hidden rounded-full ">
                  {cdata.map((elem, index: number) => {
                    const key = `000${index}`;
                    return (
                      <img
                        key={key}
                        className={`rounded-full absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out ${
                          elem.id === activeIndex
                            ? "scale-100 opacity-100"
                            : "scale-50 opacity-0"
                        }`}
                        src={elem.img}
                        alt={elem.title}
                      />
                    );
                  })}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ISlideTab = {
  isActive: boolean;
  index: number;
  handleClick: (update: number) => void;
  data: {
    id: number;
    img: string;
    icon: string;
    title: string;
    description: string;
    progressPercentage: number;
  };
};

function SlideTab({ data, isActive, handleClick, index }: ISlideTab) {
  const accordionRef = useRef<any>();
  useEffect(() => {
    const elem = accordionRef.current;
    if (elem) {
      if (isActive) {
        elem.style.height = `${elem.scrollHeight}px`;
        elem.style.opacity = 1;
      } else {
        elem.style.height = "0px";
        elem.style.opacity = 0;
      }
    }
  }, [isActive]);

  const { icon, title, description, img } = data;
  return (
    <article
      className={`border-1 border-solid text-blue rounded-md md:rounded-lg xl:rounded-[10px] ${
        isActive ? "border-[#414141] opacity-100" : "opacity-50"
      }`}
    >
      <button
        type="button"
        onClick={() => handleClick(data.id)}
        className="flex items-center py-2 md:py-0 gap-1 md:gap-3 w-full"
      >
        <h5 className="relative font-worksansMedium basis-10">
          0{index}
          <div
            className={`lg:hidden absolute bg-blue left-5 right-0 top-5 bottom-auto w-[1px] h-[10px] ${
              data.id === Object.keys(data).length && "hidden"
            }`}
          />
        </h5>
        <div className="flex-1 text-left">
          <h5 className="font-worksansMedium leading-normal md:leading-normal lg:leading-normal 2xl:leading-normal text-left">
            {title}
          </h5>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out relative lg:pl-14 pl-11 lg:pr-0 pr-4"
        ref={accordionRef}
      >
        <div className="md:hidden block absolute bg-blue inset-0 w-[1px] left-5" />

        <div className="pr-8 md:pl-0 lg:py-1 lg:pt-4 pt-2 overflow-hidden">
          <h6 className="block max-w-lg">{description}</h6>
        </div>

        <div className="h-44 mt-5 mb-4 lg:hidden block max-w-2xl">
          <img
            src={img}
            className="h-full w-full object-center object-cover"
            alt={title}
          />
        </div>
      </div>
    </article>
  );
}
const cdata = [
  {
    id: 1,
    img: "/assets/coDevelopment/journey/01_understanding.jpg",
    title: "Understanding",
    description:
      "Our specialists meticulously analyze every facet of your value chain, from plant to brand, identify hidden opportunities, and illuminate bespoke pathways to progress.",
    icon: "/assets/coDevelopment/journey/01.png",
    progressPercentage: 16,
  },
  {
    id: 2,
    img: "/assets/coDevelopment/journey/02_ideation.jpg",
    title: "Ideation",
    description:
      "You join forces with our cohort of specialists wherein we unearth ideas for solutions with the depth to redefine the status quo.",
    icon: "/assets/coDevelopment/journey/02.png",
    progressPercentage: 34,
  },
  {
    id: 3,
    img: "/assets/coDevelopment/journey/03_creation.jpg",
    title: "Creation",
    description:
      "Here, we breathe life into your ideas, transforming them from mere concepts into tangible solutions.",
    icon: "/assets/coDevelopment/journey/03.png",
    progressPercentage: 50,
  },
  {
    id: 4,
    img: "/assets/coDevelopment/journey/04_proof-of-concept.jpg",
    title: "Proof-of-concept",
    description:
      "With scientific precision, concepts are tested in conditions, that mirror your actual manufacturing setup in our Customer Innovation Centers.",
    icon: "/assets/coDevelopment/journey/04.png",
    progressPercentage: 65,
  },
  {
    id: 5,
    img: "/assets/coDevelopment/journey/05_implementation.jpg",
    title: "Implementation",
    description:
      "Comprehensive assistance is provided to implement and optimize our solution on your production line within your organization. This support extends to critical functions like supply chain, bulk supply, minimum order quantity, sustainability, and marketing.",
    icon: "/assets/coDevelopment/journey/05.png",
    progressPercentage: 83,
  },
  {
    id: 6,
    img: "/assets/coDevelopment/journey/06_launch.jpg",
    title: "Launch",
    description:
      "Setting a staged pipeline for continuous improvements, we support your go-to-market endeavors in the region, industry, and audience of your choosing.",
    icon: "/assets/coDevelopment/journey/06.png",
    progressPercentage: 100,
  },
];
