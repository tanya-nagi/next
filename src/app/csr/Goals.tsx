"use client";

import React from "react";
import ImageCard from "./ImageCard";

import "swiper/css";
import "swiper/css/free-mode";
import "./style.css";
import SectionTitles from "@components/molecules/sectionTitles";

const imagesArray = [
  '/assets/csr/image',
  '/assets/csr/image',
  '/assets/csr/image',
  '/assets/csr/image',
  '/assets/csr/image',
  '/assets/csr/image',
  '/assets/csr/image',
  '/assets/csr/image',
  '/assets/csr/image'
]

export default function AboutBringing() {
  const [isPlaying, setIsPlaying]= React.useState(true);

  const animationDuration = 8650; // 10 seconds

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      // Set a timeout to pause the animation after it runs for 10 seconds
      timer = setTimeout(() => {
        setIsPlaying(false); // Pauses animation after the duration
        console.log("Animation paused");
      }, animationDuration); // Match the duration of your CSS animation
    }

    return () => {
      // Clear the timeout to prevent memory leaks
      clearTimeout(timer);
    };
  }, [isPlaying]);
  return (
    <div style={{ backgroundColor: '#EFF6FF' }} className="pb-32">
      <section className="co-development sm:blade-top-padding blade-bottom-padding-lg">
        <SectionTitles
          title='The initiatives’<br/><span class="font-playfairMedium"> meticulous alignment</span>'
          subtitle="UN Sustainable Development Goals"
          paragraphs={[
            `<b>By focusing on tree plantations, distribution of plastic-free bags, donating ambulance and garbage vans, and empowering communities through awareness around nutrition-rich food, we are driving meaningful progress towards a sustainable future for all.</b>`,
            `Our commitment to these global goals underscores our dedication to making a lasting, positive impact on the world.`
          ]}
        />
      </section>
         <div
      className="scroll-container"
      onMouseEnter={() => {
        setIsPlaying(true); // Start the animation on hover
        console.log("Animation started");
      }}
      // onMouseLeave={() => {
      //   setIsPlaying(false); // Pause the animation on mouse leave
      //   console.log("Animation paused");
      // }}
    >
      <div className={`scroll-content ${isPlaying ? 'play-animation' : ''}`}>
        {imagesArray.map((src, key) => (
          <ImageCard
            imageUrl={`${src}${key + 1}.png`}
            altText={`Sample Image ${key + 1}`}
            key={key}
            style={{
              width: '408.16px',
              height: '370.16px',
              left: '270px',
              borderRadius: '15px',
              marginRight: '3rem'
            }

            }
          />
        ))}
      </div>
    </div>

    </div>
  );
}