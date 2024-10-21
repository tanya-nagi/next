import React from "react";

type StatItemProps = {
  number: string | number;
  label: string;
  color: string;
};

const StatItem: React.FC<StatItemProps> = ({ number, label, color }) => {
  return (
    <div className="text-center">
      <div className="font-playfair text-[64px] font-medium leading-[64px] tracking-[-0.01em] text-blue">
        {number}
      </div>
      <div className="flex items-center justify-center mt-1">
        <span className={`w-3 h-3 rounded-full mr-2 ${color}`}></span>
        <span className="text-blue text-sm">
          {label.split(" ").length > 2 ? (
            <span className="flex flex-col">
              <span className="flex items-center">
                {label.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="flex items-center">
                {label.split(" ").slice(2).join(" ")}
              </span>
            </span>
          ) : (
            label
          )}
        </span>
      </div>
    </div>
  );
};

const StatesRow: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <StatItem number="20" label="Production plants" color="bg-blue" />
        <StatItem number="25" label="Sales offices" color="bg-green-500" />
        <StatItem
          number="16"
          label="Customer Innovation Centers"
          color="bg-orange-500"
        />
        <StatItem
          number="10"
          label="Sourcing operations"
          color="bg-[#704822]"
        />
        <StatItem
          number="4,100"
          label="Employees, strategically positioned"
          color="bg-blue-600"
        />
      </div>
    </div>
  );
};

export default StatesRow;
