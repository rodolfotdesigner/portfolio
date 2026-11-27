import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { contacts } from '../../data/contacts'
import { useFooterAnimation } from './useFooterAnimation'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()
  const footerRef = useRef<HTMLElement>(null)

  useFooterAnimation(footerRef)

  return (
    <footer ref={footerRef} className={styles.footer}>
      <span className={`${styles.line} ${styles.lineLeft}`} data-footer-anim="side-line" aria-hidden="true" />
      <span className={`${styles.line} ${styles.lineRight}`} data-footer-anim="side-line" aria-hidden="true" />
      <div className={styles.content}>
        <nav aria-label={t('footer.navAriaLabel')}>
          <ul className={styles.links}>
            <li>
              <a className={styles.link} href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" data-footer-anim="link">
                {t('footer.contact')}
              </a>
            </li>
            <li>
              <a className={styles.link} href={contacts.linkedin} target="_blank" rel="noopener noreferrer" data-footer-anim="link">
                {t('footer.linkedin')}
              </a>
            </li>
            <li>
              <a className={styles.link} href={contacts.email} data-footer-anim="link">
                {t('footer.email')}
              </a>
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>
          <span className={styles.copyrightLine} data-footer-anim="copyright-line" aria-hidden="true" />
          <span className={styles.copyrightText} data-footer-anim="copyright-text">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </span>
        </p>
      </div>
    </footer>
  )
}
