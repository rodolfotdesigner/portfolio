import { useTranslation } from 'react-i18next'
import styles from './Home.module.css'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className={styles.main}>
      <h1>{t('setup.title')}</h1>
      <p>{t('setup.description')}</p>
    </main>
  )
}
