import { useRef } from "react";
import { useTranslation } from "react-i18next";
import eyeVideo from "../../assets/Images_Projects/eye.webm";
import { projects } from "../../data/projects";
import { useProjectsAnimation } from "./useProjectsAnimation";
import styles from "./Projects.module.css";

type ProjectsProps = {
  heroIntroComplete: boolean;
};

export default function Projects({ heroIntroComplete }: ProjectsProps) {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useProjectsAnimation(heroIntroComplete, sectionRef, videoRef, titleRef);

  return (
    <section
      ref={sectionRef}
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <span className={`${styles.line} ${styles.horizontalLine} ${styles.lineTop}`} data-projects-line="top" aria-hidden="true" />
      <span className={`${styles.line} ${styles.horizontalLine} ${styles.lineHeader}`} data-projects-line="header" aria-hidden="true" />
      <span className={`${styles.line} ${styles.horizontalLine} ${styles.lineBottom}`} data-projects-line="bottom" aria-hidden="true" />
      <span className={`${styles.line} ${styles.verticalLine} ${styles.lineLeft}`} data-projects-line="left" aria-hidden="true" />
      <span className={`${styles.line} ${styles.verticalLine} ${styles.lineRight}`} data-projects-line="right" aria-hidden="true" />
      <div className={styles.frame}>
        <div className={styles.header}>
          <video
            ref={videoRef}
            className={styles.eye}
            src={eyeVideo}
            width="108"
            height="44"
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <h2 ref={titleRef} id="projects-title" className={styles.title}>
            {t("projects.title")}
          </h2>
        </div>
        <ul className={styles.list}>
          {projects.map((project) => (
            <li key={project.id} className={styles.item} data-projects-card>
              <img
                className={styles.image}
                src={project.coverImage}
                alt={t(project.coverAltKey)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
