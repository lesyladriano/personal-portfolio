"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="my-28 max-w-[60rem] mx-auto flex flex-col sm:flex-row items-center justify-between sm:mb-0 scroll-mt-[100rem] space-y-10 sm:space-y-0"
    >
      {/* First Column: Greeting */}
      <div className="sm:w-1/2 flex flex-col items-start text-left space-y-6 px-6">
        <motion.h1
          className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm Lesyl 👋🏻
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A <span className="font-semibold">web designer</span> from Luzon, Philippines, who creates
          easy-to-use and attractive websites. Focused on helping you stand out online with custom digital solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Let's Connect{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-6 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </motion.div>

        <motion.div
          className="flex items-center space-x-4 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.1] hover:scale-[1.1] active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/lesylannedrn/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
            href="https://www.behance.net/lesyladriano1"
            target="_blank"
          >
            <FaBehanceSquare />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/lesyladriano"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>

      {/* Second Column: Photo */}
      <div className="flex justify-center sm:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration: 0.5,
          }}
          className="relative"
        >
           <Image
            src="/laa-portrait.jpg"
            alt="Lesyl portrait"
            width="200"
            height="200"
            quality="95"
            priority={true}
             className="h-60 w-60 rounded-full object-cover border-2 border-black shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
