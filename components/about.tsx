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
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3">
      After graduating with a degree in <span className="font-medium">Information Technology</span>, I pursued my passion for <span className="font-medium">web designing</span>, while also gaining strong skills in <span className="font-medium">web development</span>. My favorite part of being a designer is the blend of creativity and technical problem-solving that the role demands. I'm always eager to learn and stay updated with the latest technologies, as it's essential in the IT field.
    </p>
  
    <p className="mb-3">
      Currently, I'm expanding my expertise by learning e-commerce platforms and content management systems like <span className="font-medium">WordPress</span> and <span className="font-medium">Shopify</span>.
    </p>
  
    <p>
      When I'm away from the computer, I'm constantly exploring new technologies and design trends, driven by a natural curiosity and a desire to continuously enhance my skills. Beyond my professional life, I'm a huge music lover and a nature enthusiast. Traveling is a passion, and I also embrace my inner tech geek. This combination of creativity, curiosity, and technical expertise fuels my journey as a web designer.
    </p>
  </motion.section>
  

  );
}
