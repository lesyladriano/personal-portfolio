import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sirmataImg from "@/public/sirmata.jpg";
import plantsImg from "@/public/plants-ecommerce.jpg";
import rbbuildersImg from "@/public/rb-builders.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development Intern",
    location: "Techstacks",
    description:
      "During my internship, I honed my skills in creating responsive, user-friendly websites and gained hands-on experience with modern web technologies. ",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Bachelor of Science in Information Technology",
    location: "AMA Univeristy",
    description:
      "After completing a four-year degree in Information Technology, I began applying my knowledge to real-world projects. My education provided a solid foundation in both web development and design, and I am now focused on leveraging these skills to advance my career in the industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Web Designer",
    location: "Luzon, Philippines",
    description:
      "I’m a web designer with a strong foundation in both design and development. My expertise includes creating visually appealing and user-friendly websites. I am currently working as a freelancer and am open to full-time opportunities where I can continue to apply my skills and contribute to exciting projects.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "RB Sydney Builders Website",
    description:
      "Designed the website, focusing on showcasing construction services with a user-friendly and professional layout.",
    tags: ["Web Design", "Figma"],
    imageUrl: rbbuildersImg,  // Replace with the appropriate image URL for your project
  },
  
  {
    title: "Plant E-commerce Website",
    description:
      "Designed a plant e-commerce website with a focus on a clean, user-friendly interface for browsing and purchasing plants.",
    tags: ["Web Design", "Figma"],
    imageUrl: plantsImg,  // Replace with the appropriate image URL for your project
  },
  
  
    {
      title: "Web-Based Management System",
      description:
        "Designed and developed a system with virtual tours, booking features, and separate admin and user interfaces.",
      tags: ["React", "Tailwind CSS", "Laravel", "MySQL", "Figma"],
      imageUrl: sirmataImg,  // Replace with the appropriate image URL for your project
    
  },
  
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
