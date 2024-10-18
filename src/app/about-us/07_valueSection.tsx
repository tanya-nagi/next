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
    title: "We are passionate about Making Better Happen™",
    image: "/assets/about-us/passionate.png", // Update with actual image path
    points: [
      "Loving continuous improvement",
      "Being a better me",
      "Striving to make a difference",
    ],
  },
  Agile: {
    title: "We are agile in Making Better Happen™",
    image: "/assets/about-us/agile.png", // Update with actual image path
    points: [
      "Adapting to changes quickly",
      "Embracing new challenges",
      "Always staying flexible",
    ],
  },
  Accountable: {
    title: "We are accountable for Making Better Happen™",
    image: "/assets/about-us/accountable.png", // Update with actual image path
    points: [
      "Taking ownership",
      "Delivering on commitments",
      "Ensuring reliable results",
    ],
  },
  Collaborative: {
    title: "We are collaborative in Making Better Happen™",
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
    <div className="flex flex-col lg:flex-row items-start gap-12 p-8 w-full gsap-fade-in">
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
          {/* Circular logo centered */}
          <div className="flex flex-col items-center">
            <svg width="200" height="200" viewBox="0 0 300 300">
              {/* Outer circle */}
              <circle
                cx="150"
                cy="150"
                r="140" // Increased radius for the outer circle
                fill="none"
                stroke="#0078D4"
                strokeWidth="2"
              />

              {/* Inner circle */}
              <circle
                cx="150"
                cy="150"
                r="100" // Increased radius for the inner circle
                fill="none"
                stroke="#0078D4"
                strokeWidth="2"
              />

              {/* Center text */}
              <text
                x="150"
                y="120" // Adjusted Y position for better centering
                textAnchor="middle"
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                dominantBaseline="middle" // Centers the text vertically
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
                y="195" // Adjusted Y position for centering
                textAnchor="middle"
                fill="#0078D4"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                dominantBaseline="middle"
              >
                ™
              </text>

              {/* Define paths for inner text */}
              <defs>
                <path
                  id="innerCirclePath"
                  d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
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
                  startOffset="10%"
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
                  startOffset="35%"
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
                  startOffset="60%"
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
                  startOffset="85%"
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
          <h3 className="text-40 text-blue font-playfairSemibold gsap-fade-in">
            <span className="font-playfairSemibold">{title}</span> <br /> AAK
            India, South Asia, and Sub-Saharan Africa!
          </h3>
          <p className="text-blue text-lg gsap-fade-in">
            Your co-development partners in Making Better Happen™
          </p>
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
