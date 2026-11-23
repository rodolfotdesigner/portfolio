import { useRef } from "react";
import { useTranslation } from "react-i18next";
import eyeVideo from "../../assets/Images_Projects/eye.webm";
import { projects } from "../../data/projects";
import { useEyePlayback } from "./useEyePlayback";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEyePlayback(sectionRef, videoRef);

  return (
    <section
      ref={sectionRef}
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className={styles.frame}>
        <div className={styles.header}>
          <video
            ref={videoRef}
            className={styles.eye}
            src={eyeVideo}
            width="108"
            height="44"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <h2 id="projects-title" className={styles.title}>
            {t("projects.title")}
          </h2>
        </div>
        <ul className={styles.list}>
          {projects.map((project) => (
            <li key={project.id} className={styles.item}>
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
