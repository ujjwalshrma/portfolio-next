"use client";

import styles from "./AboutSection.module.css";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import plusIcon from "../../../assets/plus-icon-accordian.svg";

const AccordianData = [
  {
    title: "Bio",
    description:
      "Hi, my name is Ujjwal Sharma and I am 21 years old, currently pursuing Bachelor’s of Computer Applications. I currently reside in New Delhi, India and have worked with many different individuals till now from when I started freelancing on Upwork and even worked on Web3 web applications. I currently work at Pallavi Nopany Design Studio as a lead developer, and work on client projects. I have worked with many famous brands (through the studio) like Tarun Tahiliani, Gunam, Obeetee, Owlish labs etc.",
    id: 1,
    isOpen: true,
  },
  {
    title: "Skills",
    description: `
    Proficient in React.js, Next.js, and TypeScript, I utilize reusable components, manage state, and employ server-side rendering and static site generation for scalable web application development. With expertise in GSAP, I create engaging animations, while designing and prototyping responsive websites using Webflow. Additionally, I possess strong skills in Python, JavaScript, MySQL, Three.js, HTML, CSS, SASS, and Tailwind CSS, enabling me to develop modern web applications with dynamic animations, appealing designs, and a focus on code quality and maintainability. 
`,
    id: 2,
    isOpen: false,
  },

  {
    title: "Experience",
    description: `
    Since 2020 I have been developing creative websites on Upwork. Right now I am working at Pallavi Nopany Design Studio as a lead developer and previously have worked at TheDefiNetwork as a junior front-end developer and worked on their flagship Web3 Platform for NFTs, Dropspace. I have in total 2.5+ years of experience and I am still always learning about new technologies and frameworks to improve my skills and knowledge.
`,
    id: 3,
    isOpen: false,
  },
];

function AboutSection() {
  const [accordian, setAccordian] =
    useState<
      { title: String; description: String; id: number; isOpen: Boolean }[]
    >(AccordianData);

  const handleAccordian = (accordianId: number) => {
    setAccordian(
      accordian.map((accordianData) => {
        if (accordianData.id !== accordianId) {
          accordianData.isOpen = false;
        }
        if (accordianData.id === accordianId) {
          return {
            ...accordianData,
            isOpen: !accordianData.isOpen,
          };
        } else {
          return accordianData;
        }
      })
    );
  };

  return (
    <section id={styles.accordian__section}>
      <div className="container">
        <div className={styles.accordian__wrapper}>
          {accordian.map((accordianData) => (
            <div className={styles.accordian} key={accordianData.id}>
              <div
                onClick={() => handleAccordian(accordianData.id)}
                className={`${styles.accordian__title} ${styles.accordian__bg}`}
              >
                <h2>{accordianData.title}</h2>
                <motion.div
                  initial={{ rotateZ: 0 }}
                  animate={{
                    rotateZ: accordianData.isOpen ? 45 : 0,
                  }}
                  exit={{ rotateZ: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  <Image
                    className={styles.plus}
                    src={plusIcon}
                    alt="plus icon"
                  />
                </motion.div>
              </div>
              <AnimatePresence mode="popLayout">
                {accordianData.isOpen && (
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                    className={`${styles.accordian__answer} ${styles.accordian__bg}`}
                  >
                    <h2 className={styles.description}>
                      {accordianData.description}
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
