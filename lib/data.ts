import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sirmataImg from "@/public/sirmata.jpg";
import plantsImg from "@/public/plant-landing-page.jpg";
import constructionImg from "@/public/rb-builders.jpg";
import cleaningImg from "@/public/cleaning-services.png";

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
      "Refined my skills in developing responsive, user-friendly websites while gaining hands-on experience with modern web technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Bachelor of Science in Information Technology",
    location: "AMA University",
    description:
      "Completed a degree in Information Technology, providing a strong foundation in web development and design, which I apply to real-world projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Layout Artist | School Newspaper",
    location: "Nueva Ecija High School",
    description:
      "Designed visually appealing layouts for the school newspaper, establishing a solid foundation in design principles. ",
    icon: React.createElement(CgWorkAlt),
    date: "2017-2018",
  },
  
] as const;

export const projectsData = [
  {
    title: "Plant Shop E-Commerce Landing Page",
    description:
      "Designed a user-friendly landing page that showcases a variety of plants in an appealing layout.",
    tags: ["Web Design", "Figma"],
    imageUrl: plantsImg,  // Replace with the appropriate image URL for your project
    link: "https://www.figma.com/proto/rnXEiyVdGVTeuI8gyk0Up1/Plant-Ecommerce?page-id=0%3A1&node-id=366-206&node-type=canvas&viewport=417%2C443%2C0.25&t=k1lpC6vgTCyESTQZ-8&scaling=min-zoom&content-scaling=fixed&hide-ui=1", // Replace with your actual Figma file link
  },
  
  {
    title: "Construction Business Website",
    description:
      "Created a professional website, focusing on a clean interface that effectively showcases services and projects.",
    tags: ["Web Design", "Figma"],
    imageUrl: constructionImg, // Replace with the appropriate image URL for your project
    link: "https://www.figma.com/proto/wMItHSaKFM97KzwLfdvn7K/RB-Sydney-Builders?page-id=0%3A1&node-id=2-3&node-type=frame&viewport=785%2C700%2C0.33&t=wn4mbk22n6GcEbth-8&scaling=min-zoom&content-scaling=fixed&hide-ui=1", // Add the actual link to the project
  },

  {
  title: "Web-Based Management System",
  description: "Created a system with virtual tours, booking, and separate admin/user interfaces.",
  tags: ["React", "Tailwind CSS", "Laravel", "MySQL", "Figma"],
  imageUrl: sirmataImg, // Replace with the appropriate image URL for your project
  link: "https://your-web-based-management-system-link.com", // Add the actual link to the project
}
,
  
  
  {
    title: "Cleaning Services Website",
    description:
      "Created a user-friendly landing page that effectively showcases cleaning services and strengthens brand identity.",
    tags: ["Web Design", "Figma"],
    imageUrl: cleaningImg, // Replace with the appropriate image URL for your project
    link: "https://www.figma.com/proto/NA2tLnKfpSC2mLavxzGwP9/%5BAdriano%5D-Designer-Exam---Spotless-Clean-Maid-Service?page-id=0%3A1&node-id=37-4038&node-type=frame&viewport=1022%2C598%2C0.1&t=fIkwi0DtuLd2yOsB-8&scaling=min-zoom&content-scaling=fixed&hide-ui=1", // Add the actual link to the project
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
