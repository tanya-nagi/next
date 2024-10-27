import Image, { StaticImageData } from "next/image";
import "./style.css";

type Props = {
  heading: string;
  subheading?: string;
  image: string;
  classes?: string;
  video?: string;
};

export default function Banner({
  heading,
  subheading,
  image,
  classes,
  video,
}: Props) {
  return (
    <div
      className={`w-container blade-bottom-padding-lg lg:blade-bottom-padding-xl mt-10 xl:mt-14 2xl:mt-20 ${classes} `}
    >
      <div className="banner-text-wrapper">
        <h2
          className="animate-fadeUp-600 text-blue text-center font-worksansLight lg:max-w-none max-w-md mx-auto"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        {subheading ? (
          <h6 className="animate-fadeUp-600 text-blue md:mt-3 mt-2 font-worksansMedium text-center">
            {subheading}
          </h6>
        ) : null}
      </div>
      {!video ? (
        <div className="animate-fadeUp-800 w-full relative h-[200px] sm:h-[350px] md:h-fit mt-3 md:mt-6 xl:mt-10 ">
          <Image
            src={image}
            alt={heading}
            width={1280}
            height={600}
            className="w-full rounded-2xl h-full object-cover"
          />
        </div>
      ) : (
        <div className="block w-full gsap-fade-in">
          <video
            className="w-full h-full  object-cover rounded-2xl mt-8"
            autoPlay
            loop
            style={{
              width: "1651.94px",
              height: "430px",
              borderRadius: "2",
            }}
            playsInline
          >
            <source src={video} />
          </video>
        </div>
      )}
    </div>
  );
}
