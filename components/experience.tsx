"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-32 sm:mb-40 sm:px-80 px-4"
    >
      <SectionHeading>My experience</SectionHeading>

      <div className="relative grid grid-cols-1 mt-20 gap-20">
        {/* Vertical Line */}
        <div className="absolute w-1 h-full bg-gray-300 left-1/2 transform -translate-x-1/2"></div>

        {experiencesData.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline Box */}
            <div
              className={`p-6 bg-[#F3F4F6] shadow-md border border-gray-200 w-full md:w-[45%] ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
              style={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal text-sm text-gray-500">{item.location}</p>
              <p className="mt-2 text-gray-700  dark:text-white/75">
                {item.description}
              </p>
            </div>

            {/* Timeline Icon */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center absolute z-10 shadow-lg transition-transform duration-200 ease-in-out ${
                index % 2 === 0 ? "left-1/2 top-[-2rem] transform -translate-x-1/2" : "left-1/2 top-[-2rem] transform -translate-x-1/2"
              }`}
              style={{
                background: "#1D1D1F", // Set background to black
                boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.7)", // Deeper shadows for badge effect
              }}
            >
              <div className="text-white text-3xl"> {/* Increased icon size for visibility */}
                {item.icon}
              </div>
            </div>

            {/* Date next to the icon */}
            <div
              className={`absolute text-sm font-normal text-gray-500 ${
                index % 2 === 0 ? "left-[calc(50%-8rem)]" : "right-[calc(50%-8rem)]"
              }`}
              style={{
                top: "-.5rem", // Adjust vertical positioning to align with the icon
              }}
            >
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
