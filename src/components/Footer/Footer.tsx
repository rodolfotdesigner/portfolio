import { useTranslation } from 'react-i18next'
import { contacts } from '../../data/contacts'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden="true" />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden="true" />
      <div className={styles.content}>
        <nav aria-label={t('footer.navAriaLabel')}>
          <ul className={styles.links}>
            <li>
              <a className={styles.link} href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
                {t('footer.contact')}
              </a>
            </li>
            <li>
              <a className={styles.link} href={contacts.linkedin} target="_blank" rel="noopener noreferrer">
                {t('footer.linkedin')}
              </a>
            </li>
            <li>
              <a className={styles.link} href={contacts.email}>
                {t('footer.email')}
              </a>
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}
