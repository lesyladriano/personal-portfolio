"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaBehance, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const socialLinks = [
    { name: "WhatsApp", url: "https://wa.me/639263941228", icon: <FaWhatsapp /> },
    { name: "Email", url: "mailto:lesyl.adriano@gmail.com", icon: <FaEnvelope /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lesyladriano/", icon: <FaLinkedin /> },
    { name: "Behance", url: "https://www.behance.net/lesyladriano", icon: <FaBehance /> },
    { name: "GitHub", url: "https://github.com/lesyladriano", icon: <FaGithub /> },
    { name: "Manila, Philippines", icon: <FaMapMarkerAlt /> }, // Link to Google Maps with your location
  ];

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full text-center md:text-left flex flex-col md:flex-row justify-between sm:px-12 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-6 text-left space-y-8"> {/* Increased space-y value */}
        <SectionHeading className="text-left">Contact me</SectionHeading>

        <p className="text-gray-700 dark:text-white/80">
          Got questions or need design advice? Please reach out to me via email for any web design inquiries. I'm always here to help, driven more by the passion for design than anything else. Looking forward to hearing from you!
        </p>

        {/* Sticky Note */}
        <div className="relative bg-[#1D1D1F] p-6 rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105">
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-700 rounded-full transform rotate-45 shadow-lg"></div>
          <p className="text-gray-300">
          While I’m a junior with limited experience, my passion for design and commitment to continuous learning set me apart. I bring fresh perspectives and innovative ideas, and I'm dedicated to honing my skills. I believe my enthusiasm and potential make me an asset to any project, and I'm excited to contribute as a junior web designer.
          </p>
        </div>
      </div>

      {/* Main wrapper for profile box and social links */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:items-start px-4 md:px-6">
        {/* Profile Box */}
        <div className="relative p-4 bg-white borderBlack rounded-xl shadow-md border border-gray-200 dark:bg-gray-800 flex items-center w-full mb-4 max-w-sm justify-start mx-auto">
          {/* Profile Photo */}
          <Image
            src="/la-portrait.jpg"
            alt="Lesyl portrait"
            width="200"
            height="200"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover shadow-xl"
          />
          <div className="ml-8">
            <h3 className="text-xl font-bold">Lesyl Adriano</h3>
            <p className="text-gray-700 dark:text-white/80">Web Designer</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-2 w-full mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="flex items-center p-3 bg-white borderBlack rounded-xl border border-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all w-full max-w-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-4">{link.icon}</span> {/* Icon */}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
