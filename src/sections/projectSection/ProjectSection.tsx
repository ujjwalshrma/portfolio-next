"use client";

import styles from "./ProjectSection.module.css";

import { useState } from "react";

import { Projects } from "./Projects";

import Image from "next/image";
import Button from "@/components/button/Button";
import TechPill from "@/components/techpill/TechPill";

function ProjectSection() {
  const [hoveredImgId, setHoveredImgId] = useState<number>(NaN);

  const handleMouseEnter = (id: number) => {
    setHoveredImgId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImgId(NaN);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.projects__wrapper}>
          {Projects.map((project) => (
            <div key={project.id} className={styles.project__card}>
              <div>
                <Image
                  className={
                    project.id === hoveredImgId
                      ? `${styles.project__img} ${styles.hover}`
                      : styles.project__img
                  }
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <div className={styles.project__text}>
                <div>
                  <h2 className={styles.title}>{project.title}</h2>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.techs}>
                    {project.techStack.map((tech, idx) => (
                      <TechPill key={idx} tech={tech} id={idx} />
                    ))}
                  </div>
                </div>
                <div
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <Button
                    href={`/projects/${encodeURIComponent(project.slug)}`}
                  >
                    View More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
