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
      className="sm:my-28 my-14 max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-8"
    >
      {/* First Column: Greeting */}
      <div className="flex flex-col items-start text-left space-y-6 px-6">
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
            src="/la-portrait.jpg"
            alt="Lesyl portrait"
            width="200"
            height="200"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover shadow-xl"
          />
        </motion.div>

        <motion.h1
          className="text-5xl sm:pt-7 pt-2 font-semibold text-[#1D1D1F] dark:text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello! I'm Lesyl <h2 className="mt-4">Adriano 👋🏻</h2>
        </motion.h1>
        
      </div>

      {/* Second Column: Description and Photo */}
      <div className="flex flex-col justify-center items-start px-6">
        <motion.p
          className="text-lg sm:text-xl text-[#1D1D1F] dark:text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="items-start text-left font-semibold text-[1.7rem] leading-snug">
            A Website designer based in the Philippines.
          </h2>

          <p className="mt-4 text-gray-400 text-base">
            Passionate about creating user-friendly websites.
          </p>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group bg-[#1D1D1F] text-white px-6 py-2 flex items-center gap-2 rounded-lg outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Let's Connect{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <motion.a
            className="group bg-white px-6 py-2 flex items-center gap-2 rounded-lg outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10"
            href="/CV.pdf"
            download
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center space-x-4 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.1] hover:scale-[1.1] active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/lesyladriano"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <BsLinkedin />
          </motion.a>

          <motion.a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
            href="https://www.behance.net/lesyladriano"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FaBehanceSquare />
          </motion.a>

          <motion.a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-100 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/lesyladriano"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaGithubSquare />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
