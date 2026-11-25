import portrait from "../../assets/about/portrait.png";
import styles from "./AboutPortrait.module.css";

type AboutPortraitProps = {
  alt: string;
};

export default function AboutPortrait({ alt }: AboutPortraitProps) {
  return (
    <div className={styles.composition}>
      <span className={styles.backgroundPanel} aria-hidden="true" />
      <span className={styles.pattern} aria-hidden="true" />
      <span className={styles.semicircle} aria-hidden="true" />
      <span className={styles.horizontalLine} aria-hidden="true" />
      <span className={styles.verticalLine} aria-hidden="true" />
      <span className={styles.rightBar} aria-hidden="true" />
      <img className={styles.portrait} src={portrait} alt={alt} width="515" height="488" />
      <span className={styles.leftOverlay} aria-hidden="true" />
      <span className={styles.lowerOverlay} aria-hidden="true" />
      <span className={styles.circle} aria-hidden="true" />
    </div>
  );
}
