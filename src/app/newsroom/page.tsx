import Banner from "@components/molecules/banner";
import Form from "./form";
import "./style.css";
import Breadcrumb from "@components/atoms/breadcrumb";
import News from "./news";

export default function Contact() {
  return (
    <>
      <Breadcrumb
        route={{ title: "Home", link: "/" }}
        subroute={{ title: "Newsroom", link: "/newsroom" }}
      />
      <div className="xl:min-h-[600px] w-container px-4 h-auto mx-auto blade-bottom-padding-lg lg:blade-bottom-padding-xl">
        <Banner
          heading="<span class='font-worksansLight'> Get updated with our <span class='font-playfairSemibold'> latest insights <br/> and breakthroughs! </span></span>"
          image="/assets/newsroom/banner.jpg"
          classes="mt-10 xl:mt-14 2xl:mt-20"
        />
      </div>

      <News />
    </>
  );
}
