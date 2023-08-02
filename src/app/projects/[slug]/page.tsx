import styles from "./project.module.css";
import { FC } from "react";
import Image from "next/image";

import Button from "@/components/button/Button";
import TechPill from "@/components/techpill/TechPill";

import { Projects } from "@/sections/projectSection/Projects";

interface ProjectDetailProps {
  params: { slug: string };
}

const ProjectDetail: FC<ProjectDetailProps> = ({ params }) => {
  const project = Projects.find((project) => project.slug === params.slug);

  return (
    <div className={styles.project__detail__section}>
      <div className="container">
        <div className={styles.project__detail__hero__section}>
          <h1 className={styles.project__name}>{project?.title}</h1>
          <div className={styles.project__description__wrapper}>
            <p className={styles.project__description}>
              {project?.longDescription}
            </p>
            <Button
              className={styles.project__btn}
              href={`${project?.link}`}
              target="_blank"
            >
              View Live
            </Button>
          </div>
        </div>
        <Image
          src={project!.img}
          alt="project img"
          className={styles.project__img}
        />
        <div className={styles.project__detail__bottom__section}>
          <p>{project?.date}</p>
          <p>{project?.mentions}</p>
          <div className={styles.project__techpill__wrapper}>
            {project?.techStack.map((tech, idx) => (
              <TechPill tech={tech} id={idx} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
