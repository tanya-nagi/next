import React, { ChangeEvent, useState } from "react";

type Props = {
  password: string;
  setPassword: (e: ChangeEvent<any>) => void;
  isError: boolean;
  name: string;
};

const PasswordInput = ({ password, setPassword, isError, name }: Props) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`${isError ? "" : ""} ${
        isError
          ? "border-red border-opacity-50"
          : focus
          ? "border-blue border-opacity-100"
          : "hover:border-blue border-gray-400 border-opacity-40"
      } bg-white tracking-wide border-solid border group rounded-sm flex 
      flex-nowrap`}
    >
      <input
        size={1}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        id={name}
        type={showPassword ? "text" : "password"}
        inputMode="text"
        placeholder="Enter Password"
        value={password}
        onChange={setPassword}
        className="w-full 
        rounded-md pb-2 pt-2 px-3 bg-transparent md:px-4 text-base font-normal focus:outline-none flex-1"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={`${
          isError
            ? "stroke-black bg-white"
            : focus
            ? "stroke-white bg-blue"
            : "stroke-black bg-white group-hover:bg-blue group-hover:stroke-white"
        } rounded-sm 
        grid place-content-center basis-16 grow-0 shrink 
        `}
      >
        {!showPassword ? (
          <svg
            data-testid="geist-icon"
            fill="none"
            height={24}
            shapeRendering="geometricPrecision"
            stroke="inherit"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={24}
            style={{ color: "var(--geist-foreground)" }}
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
        ) : (
          <svg
            data-testid="geist-icon"
            fill="none"
            height={24}
            shapeRendering="geometricPrecision"
            stroke="inherit"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={24}
            style={{ color: "var(--geist-foreground)" }}
          >
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
            <path d="M1 1l22 22" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
