import React, { ReactElement } from "react";
import LoadingIndicator from "./loadingIndicator";
import Link from "next/link";

interface Props {
  callback?: () => void;
  icon?: ReactElement;
  text: string;
  showIcon?: boolean;
  isDisabled?: boolean;
  type?: "button" | "submit";
}

export function MasterBtn({ callback, text, showIcon, icon, type }: Props) {
  return (
    <button
      type={type ?? "button"}
      onClick={callback}
      className="flex flex-nowrap items-center gap-3 py-2 pl-4 pr-5 rounded-sm bg-violet text-white fill-white stroke-white font-semibold tracking-wide active:scale-95 transition-all duration-100 ease-in-out focus:outline-violet outline-offset-4   hover:text-opacity-80"
    >
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="inherit"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="inherit"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      )}

      {text}
    </button>
  );
}

export function IconBtn({ callback, text, showIcon, icon, type }: Props) {
  return (
    <button
      type={type ?? "button"}
      onClick={callback}
      className="flex flex-nowrap items-center gap-3 py-2 rounded-sm text-red fill-red stroke-red font-semibold tracking-wide 
      active:scale-95 transition-all duration-100 ease-in-out focus:outline-red outline-offset-4 hover:text-opacity-80"
    >
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="inherit"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="inherit"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      )}
      {icon && <div>{icon}</div>}
    </button>
  );
}

export function OutlineBtn({
  callback,
  text,
  icon,
  isGrayscale,
  type,
  isLoading,
}: Props & { isGrayscale: boolean; isLoading?: boolean }) {
  return (
    <button
      type={type ?? "button"}
      onClick={callback}
      className={` ${
        isGrayscale
          ? "text-darkGray border-darkGray stroke-darkGray"
          : "  border-black stroke-black"
      }  flex border flex-nowrap items-center justify-center gap-3 py-2 px-8 rounded-sm bg-transparent font-normal 
      tracking-wide active:scale-95 transition-all duration-100 ease-in-out  outline-offset-4 hover:border-blue
      hover:text-white hover:bg-blue hover:stroke-white focus:outline-blue focus:bg-blue focus:text-white 
      focus:stroke-white focus:border-blue ${
        isLoading ? "bg-blue border-bue" : "bg-transparent border-black"
      }`}
    >
      {icon && <div>{icon}</div>}
      {isLoading ? (
        <LoadingIndicator indicatorStyle="!w-5 !h-5 !border-2 !border-t-2 !border-t-red" />
      ) : (
        text
      )}
    </button>
  );
}
export function FilledBtn({
  callback,
  text,
  icon,
  isGrayscale,
  isDisabled,
  isLoading,
  type,
}: Props & { isGrayscale: boolean; isLoading?: boolean }) {
  return (
    <button
      disabled={isDisabled}
      type={type ?? "button"}
      onClick={callback}
      className={`flex flex-nowrap items-center justify-center gap-3 py-2 px-8 rounded-sm bg-black enabled:hover:bg-blue 
     font-normal text-base disabled:bg-opacity-25 disabled:cursor-not-allowed tracking-wide enabled:active:scale-95 
     transition-all duration-100 ease-in-out text-white stroke-white ${
       isLoading ? "bg-blue" : "bg-black"
     }`}
    >
      {icon && <div>{icon}</div>}
      {isLoading ? (
        <LoadingIndicator indicatorStyle="!w-5 !h-5 !border-2 !border-t-2 !border-t-blue" />
      ) : (
        text
      )}
    </button>
  );
}

export function TextBtn({
  callback,
  text,
  isGrayscale = false,
  isLoading,
  isArrow = true,
}: Omit<Props, "icon"> & {
  isGrayscale?: boolean;
  isLoading: boolean;
  isArrow?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={callback}
      className={` ${
        isGrayscale
          ? "text-gray hover:text-dark hover:stroke-grayDark stroke-gray hover:stroke-dark"
          : "text-blue stroke-blue"
      } flex flex-nowrap items-center gap-3 focus:outline-none opacity-100
      rounded-sm bg-transparent font-semibold tracking-wide active:scale-95 transition-all duration-100 ease-in-out`}
    >
      {text}
      {isLoading ? (
        <LoadingIndicator indicatorStyle="!w-5 !h-5 border-1 !border-2 !border-t-2 !border-t-violet" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="inherit"
          className={`${isArrow ? "block w-5" : "hidden"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </button>
  );
}
