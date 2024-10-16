import Banner from "@components/molecules/banner";
import Form from "./form";
import "./style.css";
import LocationCard from "./locationCard";
import MapImage from "../../../public/assets/contact/map.png";
import Breadcrumb from "@components/atoms/breadcrumb";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <>
      <Breadcrumb
        route={{ title: "Home", link: "/" }}
        subroute={{ title: "Contact us", link: "/contact-us" }}
      />
      <div className="xl:min-h-[600px] h-auto ">
        <Banner
          heading="<span class='font-light'> Let's <span class='font-playfairSemibold'> make better happen </span> together! </span>"
          image="/assets/contact/banner-image.png"
          classes=""
        />
      </div>
      <div
        className="bg-wrapper bg-navy gap-y-12 flex flex-col lg:flex-row items-center lg:items-start 
        gap-x-12 xl:gap-x-28 xlg:gap-x-32 justify-center blade-top-padding-lg 
        blade-bottom-padding-lg"
      >
        <h1
          className="text-white lg:max-w-[400px] text-[32px] lg:text-[62px] xl:text-[68px] xlg:text-[76px] 2xl:text-[90px] 
        font-playfairSemibold text-center lg:text-left"
        >
          Reach <br className="hidden lg:block" /> out to us{" "}
          <br className="block" /> today.
        </h1>
        <div className="w-[86%] lg:w-[580px] xlg:w-[700px] form-container rounded-md py-12 lg:py-20 px-6 sm:px-12 lg:px-[52px] xlg:px-[76px] h-auto bg-blue">
          <ContactForm />
        </div>
      </div>

      <div className="flex gap-y-10 gap-x-10 xl:justify-center w-container flex-wrap xl:flex-nowrap flex-row blade-top-padding-xl blade-bottom-padding-xl">
        <LocationCard
          heading="AAK India Pvt. Ltd. <br class='block sm:hidden lg:block' /> (Manufacturing Unit)"
          location="Honad Village, Takai Aadoshi Road Post <br class='hidden lg:block' /> Sajgaon, Khalapur, 
          Khopoli Raigad, <br class='hidden lg:block' /> Maharashtra (410 203), India"
          mapImage={MapImage}
          phoneNumber="+91 (0) 22684 53300"
          email="info.in@aak.com"
          officeNumber="+91 (0) 22684 53320"
          websiteUrl="www.aakindia.com"
        />
        <LocationCard
          heading="AAK South East India Pvt. Ltd. <br class='block sm:hidden lg:block' /> (Manufacturing Unit)"
          location="Factory: Near Old NFCL Park, <br class='hidden lg:block' /> ADB Road, Kakinada, East Godavari, 
          <br class='hidden lg:block' /> Andhra Pradesh (533 003), India"
          mapImage={MapImage}
          phoneNumber="+91 93929 06588"
          email="info.in-kak@aak.com"
          websiteUrl="www.aak.com"
        />
        <LocationCard
          heading="AAK India Pvt. Ltd. <br class='block sm:hidden lg:block' /> (Head Office)"
          location="14th Floor, Quantum, Central Avenue, Hiranandani Business Park, Hiranandani Estate, Ghodbunder Road, Thane (W) – 400607, Maharashtra, India"
          mapImage={MapImage}
          phoneNumber="1800 266 6363"
          email="info.in@aak.com"
        />
      </div>
    </>
  );
}
