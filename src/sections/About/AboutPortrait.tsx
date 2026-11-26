import portrait from "../../assets/about/portrait.png";
import styles from "./AboutPortrait.module.css";

type AboutPortraitProps = {
  alt: string;
};

export default function AboutPortrait({ alt }: AboutPortraitProps) {
  return (
    <div className={styles.composition} data-about-anim="portrait-composition">
      <span className={styles.backgroundPanel} data-about-anim="portrait-background-panel" aria-hidden="true" />
      <span className={styles.pattern} data-about-anim="portrait-pattern" aria-hidden="true" />
      <span className={styles.semicircle} data-about-anim="portrait-semicircle" aria-hidden="true" />
      <span className={styles.horizontalLine} data-about-anim="portrait-horizontal-line" aria-hidden="true" />
      <span className={styles.verticalLine} data-about-anim="portrait-vertical-line" aria-hidden="true" />
      <span className={styles.rightBar} data-about-anim="portrait-right-bar" aria-hidden="true" />
      <img className={styles.portrait} data-about-anim="portrait-photo" src={portrait} alt={alt} width="515" height="488" />
      <span className={styles.leftOverlay} data-about-anim="portrait-left-overlay" aria-hidden="true" />
      <span className={styles.lowerOverlay} data-about-anim="portrait-lower-overlay" aria-hidden="true" />
      <span className={styles.circle} data-about-anim="portrait-circle" aria-hidden="true" />
    </div>
  );
}
