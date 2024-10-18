import React, { useState } from "react";
import Image from "next/image";

// Define the structure for each value in the valuesData object
interface ValueData {
  title: string;
  image: string;
  points: string[];
}

// Define the structure for the entire valuesData object
interface ValuesData {
  [key: string]: ValueData;
}

// Data for each value (Passionate, Agile, etc.)
const valuesData: ValuesData = {
  Passionate: {
    title: "We are <b> passionate </b>about <br/>Making Better Happen.",
    image: "/assets/about-us/passionate.png", // Update with actual image path
    points: [
      "Loving continuous improvement",
      "Being a better me",
      "Striving to make a difference",
    ],
  },
  Agile: {
    title: "We are <b> agile </b> by intent.",
    image: "/assets/about-us/agile.png", // Update with actual image path
    points: [
      "Adapting to changes quickly",
      "Embracing new challenges",
      "Always staying flexible",
    ],
  },
  Accountable: {
    title: "We are <b>accountable </b>for <br/> for actions.",
    image: "/assets/about-us/accountable.png", // Update with actual image path
    points: [
      "Taking ownership",
      "Delivering on commitments",
      "Ensuring reliable results",
    ],
  },
  Collaborative: {
    title: "We are <b> collaborative</b> </br> by choice.",
    image: "/assets/about-us/collabrative.png", // Update with actual image path
    points: [
      "Working together",
      "Sharing knowledge",
      "Achieving more as a team",
    ],
  },
};

const ValueSection: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("Passionate");

  // Function to handle clicking on a value in the left sidebar
  const handleValueClick = (value: string) => {
    setSelectedValue(value);
  };

  // Extract relevant data for the selected value
  const { title, image, points } = valuesData[selectedValue];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 p-8 w-full gsap-fade-in px-[15rem]">
      {/* Left Navigation Menu */}
      <div className="w-full lg:w-1/3 flex flex-col space-y-6 gsap-fade-in">
        {Object.keys(valuesData).map((value) => (
          <button
            key={value}
            onClick={() => handleValueClick(value)}
            className={`text-left text-blue text-xl ${
              selectedValue === value ? "font-bold underline" : "text-gray"
            } hover:underline cursor-pointer focus:outline-none`}
          >
            {value}
          </button>
        ))}

        {/* Circular logo */}

        <div className="w-full lg:w-1/3 flex flex-col space-y-6">
          <div className="flex flex-col items-center">
            <svg width="250" height="250" viewBox="0 0 300 300">
              {/* Outer circle */}
              <circle
                cx="150"
                cy="150"
                r="140"
                fill="none"
                stroke="#0078D4"
                strokeWidth="2"
              />

              {/* Inner circle */}
              <circle
                cx="150"
                cy="150"
                r="85"
                fill="none"
                stroke="#0078D4"
                strokeWidth="2"
              />

              {/* Center text */}
              <text
                x="150"
                y="110"
                textAnchor="middle"
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                dominantBaseline="middle"
              >
                <tspan x="150" dy="0">
                  Making
                </tspan>
                <tspan x="150" dy="25">
                  Better
                </tspan>
                <tspan x="150" dy="25">
                  Happen
                </tspan>
              </text>
              <text
                x="150"
                y="195"
                textAnchor="middle"
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="30"
                dominantBaseline="middle"
              >
                ™
              </text>

              {/* Define paths for text */}
              <defs>
                <path
                  id="innerCirclePath"
                  d="M 150,150 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                />
              </defs>

              {/* Top text: Passionate */}
              <text
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="bold"
              >
                <textPath
                  href="#innerCirclePath"
                  startOffset="18%"
                  textAnchor="middle"
                >
                  Passionate
                </textPath>
              </text>

              {/* Right side: Agile */}
              <text
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="bold"
              >
                <textPath
                  href="#innerCirclePath"
                  startOffset="45%"
                  textAnchor="middle"
                >
                  Agile
                </textPath>
              </text>

              {/* Bottom side: Accountable */}
              <text
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="bold"
              >
                <textPath
                  href="#innerCirclePath"
                  startOffset="69%"
                  textAnchor="middle"
                >
                  Accountable
                </textPath>
              </text>

              {/* Left side: Collaborative */}
              <text
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="bold"
              >
                <textPath
                  href="#innerCirclePath"
                  startOffset="91%"
                  textAnchor="middle"
                >
                  Collaborative
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-full lg:w-2/3 gsap-fade-in">
        <div className="grid gap-3 ">
          <h3 className="text-[40px] text-blue font-playfair gsap-fade-in">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
            <br />
          </h3>
        </div>

        <div className="mt-6 gsap-fade-in">
          <Image
            src={image}
            alt={selectedValue}
            height={500}
            width={500}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Bullet points */}
        <ul className="list-disc mt-6 pl-5 text-blue text-lg space-y-2 gsap-fade-in">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ValueSection;
