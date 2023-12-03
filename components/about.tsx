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
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 text-bold'>I'm a junior at the University of Alabama studying{" "}<span className='font-medium'>Computer Science</span>. I changed my major from electrical engineering to computer science in the fall of 2023 and I haven't looked back. I'm aspiring to become a {" "}<span className='font-medium'>fullstack web developer</span>.{" "}<span className='italic'>My favorite part of programming</span> is the problem solving aspect. I <span className='text-bold'>love</span> the feeling of finding a solution to a problem that hasn't been done before or better optimizes an already known solution. I also love working as part of a team playing off other developer's strength. My core stack is{" "}<span className='font-medium'>{" "}<span className='underline text-bold capitalize'>React</span>,{' '}<span className='underline text-bold capitalize'>Next.js</span>,{' '}<span className='underline text-bold capitalize'>MongoDB</span></span> I also am familiar with{" "}<span className='underline text-bold capitalize'> TypeScript</span>,{" "}<span className='underline text-bold capitalize'>JavaScript</span>,{' '}<span className='underline text-bold capitalize'>C</span>,{" "}<span className='underline text-bold capitalize'>C++</span>,and{' '}<span className='underline text-bold capitalize'>python</span>.</p>

      <p>When I'm not going to school, working, or programming, I enjoy the outdoors, playing video games, and sports. I also have my student pilot license. ROLL TIDE!</p>

    </motion.section>
  );
}
