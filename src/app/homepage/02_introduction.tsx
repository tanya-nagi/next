import Image from "next/image";

export default function Introduction() {
  return (
    <section className="relative blade-top-padding-lg blade-bottom-padding">
      <div className="max-w-2xl border-black absolute inset-0 opacity-20 md:block hidden">
        <video className="w-11/12" autoPlay muted loop playsInline>
          <source src="/assets/ripple-effect-video.mp4" />
        </video>
      </div>
      <div className="flex relative w-container">
        <div className="md:flex-1 "></div>
        <div className="flex-1">
          <div className="grid gap-3 max-w-xl">
            <div className="grid gap-3 ">
              <h3 className="text-40 text-blue font-playfairSemibold gsap-fade-in">
                <i className="font-playfairSemiboldItalic">Welcome to</i> <br />{" "}
                AAK India, South Asia, and Sub-Saharan Africa!
              </h3>
              <p className="text-blue text-lg gsap-fade-in">
                Your co-development partners in Making Better Happen™
              </p>
            </div>
            <div className="grid gap-3 ">
              <h5 className="2xl:mt-10 xl:mt-8 mt-5 font-worksansMedium gsap-fade-in">
                Yes!
              </h5>
              <h5 className="font-worksansMedium gsap-fade-in">
                At AAK, we are all about driving better product and business
                outcomes.
              </h5>

              <h6 className="gsap-fade-in">
                A multi-oil, plant-based ingredient house, we are your
                co-development partners for enriching the flavors, texture,
                nutritional profile, and economic viability of products, people
                love to consume.
              </h6>

              <h6 className="gsap-fade-in">
                At the heart of what we do lies an innovation landscape that
                helps you tailor your sourcing, supply chain, communication
                strategies, and internal processes to meet your product and
                business aspirations.{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="w-container relative z-10 grid xl:gap-8 sm:gap-6 gap-4 md:grid-cols-4 sm:grid-cols-3 md:blade-top-padding pt-5">
        <div className="gsap-fade-in">
          <Card title="4,100" des="employee base till 2024" />
        </div>
        <div className="gsap-fade-in">
          <Card title="20" des="running manufacturing facilities" />
        </div>
        <div className="gsap-fade-in border border-blue md:rounded-2xl rounded-md overflow-hidden md:col-span-2  2xl:h-80 sm:h-60 h-36">
          <Image
            src="/assets/home/introduction/stats-01.jpg"
            alt="statistical mockup"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-container relative z-10 grid xl:gap-8 sm:gap-6 gap-4 md:grid-cols-4 sm:grid-cols-3 xl:mt-8 sm:mt-6 mt-4">
        <div className="gsap-fade-in border border-blue md:rounded-2xl rounded-md overflow-hidden  2xl:h-80 sm:h-60 h-36">
          <Image
            src="/assets/home/introduction/stats-02.jpg"
            alt="statistical mockup"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="gsap-fade-in">
          <Card title="25" des="sales offices" />
        </div>
        <div className="gsap-fade-in">
          <Card title="16" des="customer innovation centers" />
        </div>
        <div className="gsap-fade-in">
          <Card title="3000+" des="products co-developed so far" />
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, des }: { title: string; des: string }) => {
  return (
    <div className="border-blueDark bg-white border-opacity-25 border 2xl:min-h-80 sm:min-h-60 min-h-36 flex flex-col justify-end md:p-6 p-4 md:rounded-2xl rounded-md overflow-hidden">
      <h1 className="font-bold text-blue">{title}</h1>
      <h6 className="mt-1">{des}</h6>
    </div>
  );
};
