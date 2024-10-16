import React from "react";

const EmptyContainer = ({
  message,
  className,
}: {
  message: string;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-96 flex items-center justify-center ${className}`}
    >
      <h3 className="text-2xl">{message}</h3>
    </div>
  );
};

export default EmptyContainer;
