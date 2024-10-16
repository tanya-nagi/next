import React from "react";

type Props = {
  onClickBack: () => void;
  title: string;
};

const FormHeader = ({ onClickBack, title }: Props) => {
  return (
    <div className="flex relative flex-nowrap justify-center gap-6 items-center px-6 py-4 mt-4">
      <button
        onClick={onClickBack}
        className="absolute top-4 left-4  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <h6 className="font-semibold text-dark text-2xl tracking-wide">
        {title}
      </h6>
    </div>
  );
};

export default FormHeader;
