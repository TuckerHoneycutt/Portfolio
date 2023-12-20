import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import taylorImg from "@/public/TaylorSwiftSite.png"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import snakeIMG from "@/public/snake.png"
import stockpredictorIMG from '../public/stock-predictor.png'

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
  title: "NASA MSFC | Summer Intern",
  location: "Huntsville, Al",
  description:
    "I worked for 3 months on NASA's ISRU crygenic propulsion as an intern.",
  icon: React.createElement(LuGraduationCap),
  date: "Summer 2018",
},
{
  title: "Giga-Parts | Shipping Assistant Supervisor",
  location: "Huntsville, Al",
  description:
    "Trained and managed new shipping department workers.  Packaged and shipped HAM radio and computer",
  icon: React.createElement(CgWorkAlt),
  date: "January - May 2019",
},
{
  title: "University Of Alabama Antenna And Microwave Laboratory Intern",
  location: "Tuscaloosa, Al",
  description:
    "Designed, developed and tested Arduino circuitry used as the data acquisition system which flies on a drone as part of a wireless power transfer project for the Naval Research Laboratory.  Wrote and debugged the software which reports various voltages in the charging circuit.",
  icon: React.createElement(CgWorkAlt),
  date: "May - August 2019",
},
{
  title: "University Of Alabama",
  location: "Tuscaloosa, Al",
  description:
    "Majored in Electrical engineering. Changed my major to Computer science in the fall of 2023",
  icon: React.createElement(LuGraduationCap),
  date: "August 2019 - Present",
},
{
  title: "Bestbuy | Seasonal Sales Associate",
  location: "Tuscaloosa, Al",
  description:
    "Computing sales associate at BestBuy. Specialized in helping customers find the best product to fit their computing needs. Assisted in Car Audio, Home Theater, and Home Appliances.",
  icon: React.createElement(CgWorkAlt),
  date: "October 2020 - January 2021",
},
{
  title: "Publix | Deli associate",
  location: "Tuscaloosa, Al",
  description:
    "Deli associate in charge of making deli foods, slicing meat, making sandwiches, and stocking shelves.",
  icon: React.createElement(CgWorkAlt),
  date: "January 2022 - January 2023",
},
{
  title: "Verizon Wireless | Retail Specalist",
  location: "Tuscaloosa, Al",
  description:
    "Responsible for cell phone and electronic sales, troubleshooting customer devices, and resolving technical issues.",
  icon: React.createElement(CgWorkAlt),
  date: "February - June 2023",
},
] as const;


export const projectsData = [
  {
    title: "Stock-Predictor",
    description:
      "My dad inspired this project as a personal project he's been working on forever and I took it to the next level.",
    tags: ['Streamlit', 'TensorFlow', 'Python', 'Pandas', 'Yfinance'],
    imageUrl: stockpredictorIMG,
  },
  {
    title: "Taylor Swift Album Cards",
    description:
      "I self studied and build this project outside of class for a friend.",
    tags: ["HTML", "CSS"],
    imageUrl: taylorImg,
  },
  {
    title: "Snake Game",
    description:
      "I build this simple snake game in preparation for an interview",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: snakeIMG,
  },
  {
    title: "Word Analytics",
    description:
      "My dad inspired this project as a personal project he's been working on forever and I took it to the next level.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  }
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
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
  "Resend",
  "C",
  "C++",
  "Rust",
  'TensorFLow',
  'Pandas',
  'Streamlit',
  'Yfinance',
] as const;
