import React from "react";

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

  return (
    <nav className="flex flex-wrap justify-center gap-4 w-full max-w-screen-xl mx-auto px-4 h-auto text-blue text-sm mb-8">
      {categories.map((category, index) => (
        <a
          key={index}
          //   href="#"
          className={`hover:underline  ${category ? "cursor-pointer" : ""} ${
            category === "All" ? "font-bold text-blue underline" : ""
          }`}
        >
          {category}
        </a>
      ))}
    </nav>
  );
}
