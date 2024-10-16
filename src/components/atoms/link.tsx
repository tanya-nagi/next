import Link from "next/link";
import React from "react";

type LinkProps = {
  href: string;
  text: string;
  theme?: "white" | "blue" | "outline";
  size?: "sm" | "base" | "lg";
  className?: string;
  hover?: boolean;
};

export default function LinkAtom({
  href,
  text,
  theme = "white",
  size = "sm",
  hover = true,
  className,
}: LinkProps) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-2xl",
  };

  const themeClasses = {
    white: `${hover && "hover:opacity-50"} text-white font-worksansLight`,
    blue: `${hover && "hover:opacity-50"} text-blue font-worksansMedium`,
    outline: "border-2",
  };

  return (
    <Link
      href={href}
      className={`${
        className + " " + sizeClasses[size] + " " + themeClasses[theme]
      } transition-all duration-200`}
    >
      {text}
    </Link>
  );
}
