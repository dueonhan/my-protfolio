"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <div className="xs:w-[250px] w-full sm:w-[250px]">
    <Tilt
      className="xs:w-[250px] w-full"
      transitionSpeed={450}
      scale={1}
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75) as any}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  </div>
);

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant(0.1) as any}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1) as any}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Cybersecurity professional with 4+ years of experience
        specializing in Penetration Testing and Vulnerability Analysis. Having
        conducted over 40 enterprise-level assessments annually, I focus on
        identifying high-risk structural weaknesses. My unique strength lies in
        my Full-Stack background, allowing me to provide developers with
        precise, code-level remediation guidance based on OWASP Top 10
        standards.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};
//export default About;

export default SectionWrapper(About, "about");
