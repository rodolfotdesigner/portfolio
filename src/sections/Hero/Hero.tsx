import { useTranslation } from 'react-i18next'
import HeroVisual from './HeroVisual'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.layout}>
        <HeroVisual />
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1 id="hero-title" className={styles.title}>
              {t('hero.title')}
            </h1>
            <p className={styles.description}>{t('hero.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
