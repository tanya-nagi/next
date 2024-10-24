// PathToPurpose.tsx
import React from "react";

const PathToPurpose = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between bg-white py-24 lg:pl-[15rem] px-6">
    {/* Left Side: Title */}
    <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
      <h1 className="text-5xl lg:text-8xl font-bold text-blue font-playfairBold leading-tight">
        Our path to
        <br />
        purpose
      </h1>
    </div>
  
    {/* Right Side: Description Box */}
    <div className="w-full lg:w-2/3 bg-[#EFF6FF] lg:pl-32 lg:pr-52 py-8 rounded-md shadow-sm h-auto lg:h-96 pt-10 lg:pt-20">
      <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-worksansMedium">
        Embracing these behaviors ensures our cohesive <br/>approach to not only
        strengthen our culture but also <br/>deepen our relationships with all
        stakeholders; <br/>neighbors, customers, suppliers, partners, employees,<br/>
        and investors.
      </p>
  
      <br />
  
      {/* Second part: light */}
      <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-worksansLight">
        Living these Better Behaviors has enabled us to <br/> consistently make
        better happen in every <br/> community we touch, driving positive change and <br/>
        sustainable growth.
      </p>
    </div>
  </div>
  
  );
};

export default PathToPurpose;
