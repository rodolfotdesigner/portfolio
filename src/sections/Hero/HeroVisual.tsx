import { useTranslation } from 'react-i18next'
import portrait from '../../assets/images/Eu_HeroSection.png'
import pattern from '../../assets/images/Patterns.svg'
import ProfileCard from './ProfileCard'
import styles from './HeroVisual.module.css'

export default function HeroVisual() {
  const { t } = useTranslation()

  return (
    <div className={styles.visual}>
      <div className={styles.circle} aria-hidden="true" />
      <div className={styles.decorativeFrame} aria-hidden="true" />
      <div className={styles.profileFrame} aria-hidden="true" />
      <img className={styles.pattern} src={pattern} alt="" aria-hidden="true" />
      <img
        className={styles.portrait}
        src={portrait}
        alt={t('hero.portraitAlt')}
        width="406"
        height="673"
      />
      <div className={styles.accent} aria-hidden="true" />
      <ProfileCard />
      <div className={styles.horizontalLine} aria-hidden="true" />
      <div className={styles.verticalLine} aria-hidden="true" />
    </div>
  )
}
