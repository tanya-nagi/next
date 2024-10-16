export default function PlantToBrand() {
  return (
    <section className="blade-top-padding-lg blade-bottom-padding">
      <div className="w-container xlg:max-w-screen-xl max-w-screen-lg gsap-fade-in">
        <h1 className=" text-blue font-playfairSemibold text-center ">
          From plant to brand
        </h1>
        <h6 className="text-sm md:text-lg text-blue mt-3 text-center">
          Curating opportunities, near you, for you, and with you
        </h6>

        <h5 className=" 2xl:my-10 md:my-8 my-5 font-playfairSemibold text-center">
          Yet, what sets us apart?
        </h5>
      </div>

      <div className="w-container grid sm:grid-cols-3 grid-cols-1 ">
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="card 2xl:py-7 py-5 border-b-2 border-blue border-opacity-25 last-of-type:border-none gsap-fade-in"
            >
              <div className="2xl:max-w-sm max-w-xs">
                <h5 className="text-blue">{item.id}</h5>
                <h6 className="mt-2 font-worksans">{item.text}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const data = [
  {
    id: "01",
    text: "Fueled by a 150-year-old legacy, the team is primed to tackle diverse challenges and co-develop customizable solutions.",
  },
  {
    id: "02",
    text: "Leveraging global pedigree to harvest global synergies that drive growth with efficiency.",
  },
  {
    id: "03",
    text: "Exhibiting the broadest portfolio in the multi-oil industry.",
  },
  {
    id: "04",
    text: "Continually redefining industry standards and anticipating future demands through relentless innovation.",
  },
  {
    id: "05",
    text: "Taking a comprehensive approach that covers every step of your journey, for proficiency and sustainability.",
  },
  {
    id: "06",
    text: "Delivering seamless integration and peak performance in every scenario across industries and contexts.",
  },
  {
    id: "07",
    text: "Offering production flexibility and a seamless transition from small-scale co-development to large-scale endeavors.",
  },
  {
    id: "08",
    text: "An unyielding commitment to comprehending unique visions and delivering bespoke solutions.",
  },
  {
    id: "09",
    text: "Implementing stringent quality management systems to maintain precise control over inputs and processes.",
  },
  {
    id: "10",
    text: "Harnessing advanced analytics across the entire new product development spectrum.",
  },
];
