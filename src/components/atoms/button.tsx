import Link from "next/link";
import React, { ReactNode } from "react";

// types ## move it to the types folder in production
type ButtonType = {
  text: string;
  onClick: () => void;
  icon?: ReactNode | boolean;
  size?: "sm" | "base" | "lg";
  theme: "blue" | "white" | "outline";
  className?: string;
};

type ButtonLinkType = {
  text: string;
  href: string;
  theme: "blue" | "white" | "outline";
  icon?: ReactNode | boolean;
  size?: "sm" | "base" | "lg";
  className?: string;
};

// props
const sizeClasses = {
  sm: "text-sm",
  base: "xlg:text-base text-sm lg:px-6 px-4 rounded-3xl",
  lg: "xl:text-xl text-base lg:px-6 px-4 rounded-[99px]",
};
const btnThemeClasses = {
  white: "text-white hover:opacity-50 font-worksans lg:py-3 py-2",
  blue: "text-white bg-blue font-worksans lg:py-3 py-2",
  outline:
    "text-white bg-transparent border-white border font-worksans lg:py-[10px] py-2",
};

export function ButtonAtom({
  text,
  icon,
  onClick,
  size = "sm",
  theme,
  className,
}: ButtonType) {
  return (
    <button
      className={` ${
        sizeClasses[size] + " " + btnThemeClasses[theme]
      } flex items-center gap-3 ${className}`}
      onClick={onClick}
    >
      {text}{" "}
      {icon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-2"
          viewBox="0 0 7 12"
          fill="none"
        >
          <path
            d="M1 0.993225L6 6.00721L1 11.0071"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        ""
      )}
    </button>
  );
}

export function ButtonLinkAtom({
  text,
  icon,
  href,
  size = "sm",
  theme,
  className,
}: ButtonLinkType) {
  return (
    <Link
      href={href}
      className={` ${
        className + " " + sizeClasses[size] + " " + btnThemeClasses[theme]
      } w-fit flex items-center gap-3 `}
    >
      {text}
      {icon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-2"
          viewBox="0 0 7 12"
          fill="none"
        >
          <path
            d="M1 0.993225L6 6.00721L1 11.0071"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        ""
      )}
    </Link>
  );
}
