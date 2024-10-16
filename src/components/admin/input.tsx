import React, { ChangeEvent } from "react";

type Props = {
  error: null | string;
  name: string;
  value: any;
  setValue: (e: ChangeEvent<any>) => void;
  type?: string;
  placeholder?: string;
  label: string;
  className?: string;
};

const Input = ({
  error,
  name,
  value,
  setValue,
  type,
  placeholder,
  label,
  className,
}: Props) => {
  return (
    <div className={`grid w-11/12 ${className}`}>
      <span className="text-base font-semibold mb-1">{label}</span>
      <input
        className={`${
          error
            ? "border-red border-opacity-50"
            : "border-gray border-opacity-30 focus:border-blue hover:border-blue"
        } bg-white py-2 px-3 text-base font-normal tracking-wide border focus:outline-none 
        border-black hover:outline-none rounded-sm`}
        size={1}
        name={name}
        id={name}
        type={type}
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

export default Input;
