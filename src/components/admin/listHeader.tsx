import React, { ReactElement } from "react";
import { OutlineBtn } from "./buttons";

type Props = {
  hasAddPermission?: boolean;
  onNavigate?: () => void;
  title: string;
  addButtonText?: string;
  icon?: ReactElement;
};
export default function ListHeader({
  hasAddPermission,
  onNavigate,
  title,
  addButtonText,
  icon,
}: Props) {
  return (
    <>
      <div className="mt-12 flex justify-between mx-10 2xl:mx-20">
        <h5 className="font-semibold flex items-center justify-center text-2xl text-dark">
          {title}
        </h5>

        {hasAddPermission && onNavigate && addButtonText && icon ? (
          <div className="flex">
            <OutlineBtn
              isGrayscale={false}
              text={addButtonText}
              icon={icon}
              callback={onNavigate}
            />
          </div>
        ) : null}
      </div>
      <div className="mx-10 2xl:mx-20 h-[1px] bg-gray bg-opacity-60 mt-6" />
    </>
  );
}
