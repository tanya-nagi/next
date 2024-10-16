import React from "react";
import "./index.css";

const LoadingIndicator = ({ indicatorStyle }: { indicatorStyle?: string }) => {
  return <div className={`loadingSpinner ${indicatorStyle}`}></div>;
};

export default LoadingIndicator;
