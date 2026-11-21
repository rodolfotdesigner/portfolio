import { useTranslation } from 'react-i18next'
import whatsappIcon from '../../assets/icons/WhatsApp.svg'
import linkedinIcon from '../../assets/icons/Linkedin.svg'
import emailIcon from '../../assets/icons/Email.svg'
import downloadCvIcon from '../../assets/icons/Download_CV.svg'
import styles from './ProfileCard.module.css'

export default function ProfileCard() {
  const { t } = useTranslation()

  return (
    <div className={styles.card} data-hero-anim="card">
      <p className={styles.name} data-hero-anim="name">{t('hero.name')}</p>
      <p className={styles.role} data-hero-anim="role">{t('hero.role')}</p>
      <ul className={styles.contacts} aria-label={t('hero.contactsLabel')}>
        <li data-hero-anim="contact">
          <a
            className={styles.contact}
            href="https://wa.me/5511983447912"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt={t('hero.whatsapp')} width="24" height="24" />
          </a>
        </li>
        <li data-hero-anim="contact">
          <a
            className={styles.contact}
            href="https://www.linkedin.com/in/rodolfo-tadeu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt={t('hero.linkedin')} width="24" height="24" />
          </a>
        </li>
        <li data-hero-anim="contact">
          <a className={`${styles.contact} ${styles.email}`} href="mailto:rodolfotdesigner@gmail.com">
            <img src={emailIcon} alt={t('hero.email')} width="26" height="21" />
          </a>
        </li>
        <li data-hero-anim="contact">
          <a
            className={`${styles.contact} ${styles.download}`}
            href="/cv/rodolfo-tadeu-cv.pdf"
            download="rodolfo-tadeu-cv.pdf"
          >
            <img src={downloadCvIcon} alt={t('hero.downloadCv')} width="97" height="19" />
          </a>
        </li>
      </ul>
    </div>
  )
}
