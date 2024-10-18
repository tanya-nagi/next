import React, { useState } from "react";
import Image from "next/image";

interface StoryCardProps {
  imageUrl: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ imageUrl }) => {
  const [hover, setHover] = useState(false); // Track hover state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // Track cursor position

  // Handle mouse movement inside the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-72">
        <Image
          src={imageUrl}
          alt={"storyImage"}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {hover && (
        <div
          className="absolute w-10 h-10 bg-blue text-white flex items-center justify-center rounded-full pointer-events-none transition-all duration-300 ease-in-out z-10"
          style={{
            top: cursorPos.y - 20,
            left: cursorPos.x - 20,
          }}
        >
          <span className="text-xs">View</span>
        </div>
      )}
    </div>
  );
};

export default StoryCard;
