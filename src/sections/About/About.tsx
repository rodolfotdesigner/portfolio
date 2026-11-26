import { useRef } from "react";
import { useTranslation } from "react-i18next";
import digital from "../../assets/about/digital.svg";
import { tools } from "../../data/tools";
import AboutPortrait from "./AboutPortrait";
import { useAboutAnimation } from "./useAboutAnimation";
import styles from "./About.module.css";

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useAboutAnimation(sectionRef);

  return (
    <section ref={sectionRef} className={styles.about} aria-labelledby="about-title">
      <span
        className={`${styles.line} ${styles.lineTop}`}
        data-about-line="top"
        aria-hidden="true"
      />
      <span
        className={`${styles.line} ${styles.lineHeader}`}
        data-about-line="header"
        aria-hidden="true"
      />
      <span
        className={`${styles.line} ${styles.lineLeft}`}
        data-about-line="left"
        aria-hidden="true"
      />
      <span
        className={`${styles.line} ${styles.lineRight}`}
        data-about-line="right"
        aria-hidden="true"
      />
      <div className={styles.content}>
        <header className={styles.header} data-about-anim="header">
          <img
            className={styles.digital}
            src={digital}
            alt=""
            aria-hidden="true"
            data-about-anim="digital"
          />
          <h2 id="about-title" className={styles.title} data-about-anim="title">
            {t("about.title")}
          </h2>
        </header>

        <div className={styles.upper}>
          <AboutPortrait alt={t("about.portraitAlt")} />

          <div className={styles.biography} data-about-anim="biography">
            <p data-about-anim="biography-paragraph">{t("about.biography.1")}</p>
            <p data-about-anim="biography-paragraph">{t("about.biography.2")}</p>
            <p data-about-anim="biography-paragraph">{t("about.biography.3")}</p>
          </div>
        </div>

        <div className={styles.resume}>
          <span
            className={`${styles.line} ${styles.lineDivider}`}
            data-about-line="divider"
            aria-hidden="true"
          />
          <section className={styles.experienceSection} aria-labelledby="about-experience-title">
            <h3 id="about-experience-title" data-about-anim="experience-title">
              <span className={styles.experienceTitleDesktop}>
                {t("about.experience.title")}
              </span>
              <span className={styles.experienceTitleMobile}>
                {t("about.experience.titleMobile")}
              </span>
            </h3>
            <div className={styles.experienceList}>
              <article className={styles.experienceItem} data-about-anim="experience-kenlo">
                <h4>{t("about.experience.kenlo.role")}</h4>
                <div className={styles.experienceDescription}>
                  <p>{t("about.experience.kenlo.description.1")}</p>
                  <p>{t("about.experience.kenlo.description.2")}</p>
                  <p>{t("about.experience.kenlo.description.3")}</p>
                </div>
              </article>
              <article className={styles.experienceItem} data-about-anim="experience-mercadocar">
                <h4>{t("about.experience.mercadocar.role")}</h4>
                <div className={styles.experienceDescription}>
                  <p>{t("about.experience.mercadocar.description")}</p>
                </div>
              </article>
            </div>
          </section>

          <div className={styles.resumeSidebar}>
            <section className={styles.educationSection} aria-labelledby="about-education-title" data-about-anim="education">
              <h3 id="about-education-title" data-about-anim="education-title">{t("about.education.title")}</h3>
              <div className={styles.contentEducation}>
                <p data-about-anim="education-degree">{t("about.education.degree")}</p>
                <div className={styles.aboutDownload} data-about-anim="education-download">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M5.5 0.5V10.5M0.5 5.5L5.5 10.5L10.5 5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#4880FE"
                    />
                  </svg>
                  <a
                    href="/diploma/Diploma.jpg"
                    download="Diploma.jpg"
                    aria-label={t("about.downloadAriaLabel")}
                  >
                    {t("about.download")}
                  </a>
                </div>
              </div>
            </section>

            <section className={styles.toolsSection} aria-labelledby="about-tools-title">
              <h3 id="about-tools-title" data-about-anim="tools-title">{t("about.tools.title")}</h3>
              <ul className={styles.toolsList} data-about-anim="tools-grid">
                {tools.map((tool) => (
                  <li key={tool.id} className={styles.toolItem} data-about-anim="tool-item">
                    <img
                      src={tool.icon}
                      alt={t(tool.labelKey)}
                      width="44"
                      height="44"
                    />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
