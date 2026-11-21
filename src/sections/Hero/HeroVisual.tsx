import { useTranslation } from 'react-i18next'
import portrait from '../../assets/images/Eu_HeroSection.png'
import pattern from '../../assets/images/Patterns.svg'
import ProfileCard from './ProfileCard'
import styles from './HeroVisual.module.css'

export default function HeroVisual() {
  const { t } = useTranslation()

  return (
    <div className={styles.visual}>
      <div className={styles.circle} data-hero-anim="circle" aria-hidden="true" />
      <div className={styles.decorativeFrame} data-hero-anim="decorative-frame" aria-hidden="true" />
      <div className={styles.profileFrame} data-hero-anim="profile-frame" aria-hidden="true" />
      <img className={styles.pattern} data-hero-anim="pattern" src={pattern} alt="" aria-hidden="true" />
      <img
        className={styles.portrait}
        data-hero-anim="portrait"
        src={portrait}
        alt={t('hero.portraitAlt')}
        width="406"
        height="673"
      />
      <div className={styles.accent} data-hero-anim="accent" aria-hidden="true" />
      <ProfileCard />
      <div className={styles.horizontalLine} data-hero-anim="horizontal-line" aria-hidden="true" />
      <div className={styles.verticalLine} data-hero-anim="vertical-line" aria-hidden="true" />
    </div>
  )
}
