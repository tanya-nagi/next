import React, { useState } from "react";
import StoryCard from "./05_storyCard";
import { ButtonAtom } from "@components/atoms/button";

const stories = [
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_1.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_2.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_3.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_4.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_5.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_6.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_7.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_8.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_9.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_10.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_11.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_5.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_4.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_3.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_8.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_9.png",
  },
  {
    imageUrl: "/assets/storiesOfImpact/storyGrid/all_1.png",
  },
  // ... (add the rest of your stories here)
];

const INITIAL_LOAD = 12; // Number of stories to load initially
const LOAD_INCREMENT = 12; // Number of stories to load on each button click

const StoryGrid: React.FC = () => {
  const [visibleStories, setVisibleStories] = useState(INITIAL_LOAD);

  const handleLoadMore = () => {
    setVisibleStories((prev) => prev + LOAD_INCREMENT);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stories.slice(0, visibleStories).map((story, index) => (
          <StoryCard key={index} imageUrl={story.imageUrl} />
        ))}
      </div>
      <div className="flex justify-center mb-6">
        <ButtonAtom
          className="mt-7 font-worksansLight bg-blue"
          onClick={handleLoadMore} // Use onClick handler
          text="Load more"
          theme="blue"
          icon
          size="base"
        />
      </div>
      )
    </div>
  );
};

export default StoryGrid;
