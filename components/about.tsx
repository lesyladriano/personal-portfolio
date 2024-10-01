"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
    ref={ref}
    className=" mb-28 max-w-[50rem] text-left leading-8 sm:mb-40 scroll-mt-28 px-8"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>About Me</SectionHeading>
<p className="mb-6">
  After graduating with a degree in <span className="font-medium">Information Technology</span>, I pursued my passion for <span className="font-medium">web design</span> while building strong skills in <span className="font-medium">web development</span>. I thrive in roles that blend creativity with technical problem-solving and stay up-to-date with the latest industry trends.
</p>

<p className="mb-6">
  I’m currently enhancing my expertise in content management systems like <span className="font-medium">WordPress</span> and <span className="font-medium">Shopify</span>. My curiosity drives me to constantly learn and refine my skills.
</p>

<p>
  Away from the keyboard, I’m a tech enthusiast who enjoys music, nature, arts, and traveling — always bringing fresh perspectives into my designs.
</p>

  </motion.section>
  

  );
}
