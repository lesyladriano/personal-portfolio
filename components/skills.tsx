"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const webDesigningSkills = [
    "UI/UX Design",
    "Responsive Design",
    "Figma",
    "Photoshop",
    "Illustrator",
    // Add more web designing skills here
  ];

  const webDevelopmentSkills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    // "WordPress",
    // "Shopify",
    // Add more web development skills here
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="flex justify-center gap-10">
        <ul className="flex flex-col gap-2 text-lg text-gray-800">
          <h3 className="font-semibold mb-4 text-xl">Web Designing</h3>
          {webDesigningSkills.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2 text-lg text-gray-800">
          <h3 className="font-semibold mb-4 text-xl">Web Development</h3>
          {webDevelopmentSkills.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
