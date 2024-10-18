import React, { useState } from 'react';

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
    image: "/path/to/passionate-image.jpg", // Update with actual image path
    points: [
      "Loving continuous improvement",
      "Being a better me",
      "Striving to make a difference",
    ],
  },
  Agile: {
    title: "We are agile in Making Better Happen™",
    image: "/path/to/agile-image.jpg", // Update with actual image path
    points: [
      "Adapting to changes quickly",
      "Embracing new challenges",
      "Always staying flexible",
    ],
  },
  Accountable: {
    title: "We are accountable for Making Better Happen™",
    image: "/path/to/accountable-image.jpg", // Update with actual image path
    points: [
      "Taking ownership",
      "Delivering on commitments",
      "Ensuring reliable results",
    ],
  },
  Collaborative: {
    title: "We are collaborative in Making Better Happen™",
    image: "/path/to/collaborative-image.jpg", // Update with actual image path
    points: [
      "Working together",
      "Sharing knowledge",
      "Achieving more as a team",
    ],
  },
};

const ValueSection: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('Passionate');

  // Function to handle clicking on a value in the left sidebar
  const handleValueClick = (value: string) => {
    setSelectedValue(value);
  };

  // Extract relevant data for the selected value
  const { title, image, points } = valuesData[selectedValue];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 p-8 w-full">
      {/* Left Navigation Menu */}
      <div className="w-full lg:w-1/3 flex flex-col space-y-6">
        {Object.keys(valuesData).map((value) => (
          <button
            key={value}
            onClick={() => handleValueClick(value)}
            className={`text-left text-blue-600 text-xl ${
              selectedValue === value ? 'font-bold underline' : 'text-gray-500'
            } hover:underline cursor-pointer focus:outline-none`}
          >
            {value}
          </button>
        ))}

        {/* Circular logo */}
       <div className="flex justify-center items-center  bg-white">
  <svg width="400" height="400" viewBox="0 0 400 400">
    {/* Outer circle */}
    <circle cx="200" cy="200" r="180" fill="none" stroke="#0078D4" strokeWidth="2" />

    {/* Inner circle */}
    <circle cx="200" cy="200" r="130" fill="none" stroke="#0078D4" strokeWidth="2" />

    {/* Center text */}
    <text x="200" y="185" textAnchor="middle" fill="#0078D4" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">
      <tspan x="200" dy="-20">Making</tspan>
      <tspan x="200" dy="30">Better</tspan>
      <tspan x="200" dy="30">Happen</tspan>
    </text>
    <text x="200" y="260" textAnchor="middle" fill="#0078D4" fontFamily="Arial, sans-serif" fontSize="16">
      ™
    </text>

    {/* Define paths for inner text */}
    <defs>
      <path id="innerCirclePath" d="M 200, 200 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" />
    </defs>

    {/* Top text: Passionate */}
    <text fill="#0078D4" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">
      <textPath href="#innerCirclePath" startOffset="15%" textAnchor="middle" >
        Passionate
      </textPath>
    </text>

    {/* Right side: Agile */}
    <text fill="#0078D4" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">
      <textPath href="#innerCirclePath" startOffset="40%" textAnchor="middle" >
        Agile
      </textPath>
    </text>

    {/* Bottom side: Accountable */}
    <text fill="#0078D4" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">
      <textPath href="#innerCirclePath" startOffset="65%" textAnchor="middle">
        Accountable
      </textPath>
    </text>

    {/* Left side: Collaborative */}
    <text fill="#0078D4" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">
      <textPath href="#innerCirclePath" startOffset="90%" textAnchor="middle">
        Collaborative
      </textPath>
    </text>
  </svg>
</div>

      </div>

      {/* Right Content Area */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-blue-600 text-3xl font-bold">{title}</h2>

        {/* Image */}
        <div className="mt-6">
          <img
            src={image}
            alt={selectedValue}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Bullet points */}
        <ul className="list-disc mt-6 pl-5 text-blue-600 text-lg space-y-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ValueSection;
