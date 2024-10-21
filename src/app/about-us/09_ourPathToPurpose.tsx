// PathToPurpose.tsx
import React from "react";

const PathToPurpose = () => {
  return (
    <div className="flex items-start justify-between bg-white py-24  pl-[15rem]">
      {/* Left Side: Title */}
      <div className="w-1/3">
        <h1 className="text-5xl font-bold text-blue font-playfairBold leading-tight">
          Our path to
          <br />
          purpose
        </h1>
      </div>

      {/* Right Side: Description Box */}
      <div className="w-2/3 bg-[#EFF6FF] pl-32 pr-52 py-8 rounded-md shadow-sm">
        <p className="text-gray-700 text-lg leading-relaxed font-worksansMedium">
          Embracing these behaviors ensures our cohesive approach to not only
          strengthen our culture but also deepen our relationships with all
          stakeholders; neighbors, customers, suppliers, partners, employees,
          and investors.
        </p>

        <br />

        {/* Second part: light */}
        <p className="text-gray-700 text-lg leading-relaxed font-worksansLight">
          Living these Better Behaviors has enabled us to consistently make
          better happen in every community we touch, driving positive change and
          sustainable growth.
        </p>
      </div>
    </div>
  );
};

export default PathToPurpose;
