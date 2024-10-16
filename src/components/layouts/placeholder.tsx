import React from "react";

// This component is for the development environment only
export default function PlaceholderLayout({ text }: { text: string }) {
  return (
    <div className="h-[100vh] bg-blueLight grid place-content-center blade-top-padding">
      {/* PlacholderLayout */}
      <h2>{text}</h2>
    </div>
  );
}
