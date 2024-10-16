import React, { ChangeEvent } from "react";

type Props = {
  error: null | string;
  name: string;
  value: any;
  setValue: (e: ChangeEvent<any>) => void;
  rows?: number;
  placeholder?: string;
  label: string;
  className?: string;
};

const Textarea = ({
  error,
  name,
  value,
  setValue,
  rows,
  placeholder,
  label,
  className,
}: Props) => {
  return (
    <div className={`grid w-11/12 ${className}`}>
      <span className="text-base font-semibold mb-1">{label}</span>
      <textarea
        className={`${
          error
            ? "border-red border-opacity-50"
            : "border-gray-400 border-opacity-40"
        } bg-white py-2 px-3 md:px-4 text-base font-regular tracking-wide border-solid border  
      focus:outline-none resize-none hover:outline-none focus:border-yellow hover:border-yellow rounded-sm`}
        name={name}
        id={name}
        draggable={false}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
      {error && (
        <small className="text-red text-opacity-70 mt-1 font-normal flex flex-nowrap items-center gap-1 text-base">
          {error}
        </small>
      )}
    </div>
  );
};

export default Textarea;
