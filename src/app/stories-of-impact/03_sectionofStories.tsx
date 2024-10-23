import React, { useState, useRef, useLayoutEffect } from "react";
import './style.css'; 

export default function SectionOfStories() {
  const categories = [
    "All",
    "Bakery",
    "Chocolates & confectionery",
    "Dairy analogue",
    "Food service & retail",
    "Plant-based dairy analogue",
    "Special nutrition & health",
    "Medical nutrition",
    "Personal care",
    "Technical products",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null); // Correctly typed for a div element

  useLayoutEffect(() => {
    if (navRef.current) {
      const activeTab = navRef.current.children[activeIndex] as HTMLAnchorElement;
      setUnderlineStyle({
        width: activeTab.offsetWidth,
        left: activeTab.offsetLeft,
      });
    }
  }, [activeIndex]);

  return (
    <nav
      className="category-nav flex flex-wrap justify-center w-full mx-auto px-4 h-auto text-blue text-sm mb-12 relative"
      ref={navRef}
    >
      {categories.map((category, index) => (
        <a
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`category-link ${activeIndex === index ? "active-tab" : ""}`}
        >
          {category}
        </a>
      ))}
      <div className="underline" style={underlineStyle} />
    </nav>
  );
}
