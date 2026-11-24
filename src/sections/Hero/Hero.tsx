import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import HeroVisual from './HeroVisual'
import { useHeroAnimation } from './useHeroAnimation'
import styles from './Hero.module.css'

type HeroProps = {
  onIntroComplete?: () => void
}

export default function Hero({ onIntroComplete }: HeroProps) {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  useHeroAnimation(sectionRef, onIntroComplete)

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.layout}>
        <HeroVisual />
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1 id="hero-title" className={styles.title} data-hero-anim="title">
              {t('hero.title')}
            </h1>
            <p className={styles.description} data-hero-anim="description">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
