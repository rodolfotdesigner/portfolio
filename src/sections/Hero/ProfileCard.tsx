import { useTranslation } from 'react-i18next'
import whatsappIcon from '../../assets/icons/WhatsApp.svg'
import linkedinIcon from '../../assets/icons/Linkedin.svg'
import emailIcon from '../../assets/icons/Email.svg'
import { contacts } from '../../data/contacts'
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
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappIcon} alt={t('hero.whatsapp')} width="24" height="24" />
          </a>
        </li>
        <li data-hero-anim="contact">
          <a
            className={styles.contact}
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt={t('hero.linkedin')} width="24" height="24" />
          </a>
        </li>
        <li data-hero-anim="contact">
          <a className={`${styles.contact} ${styles.email}`} href={contacts.email}>
            <img src={emailIcon} alt={t('hero.email')} width="26" height="21" />
          </a>
        </li>
        <li data-hero-anim="contact">
          <a
            className={`${styles.contact} ${styles.download}`}
            href="/cv/rodolfo-tadeu-cv.pdf"
            download="rodolfo-tadeu-cv.pdf"
          >
            <svg
              className={styles.downloadIcon}
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9.00008 3.25C9.55233 3.25004 10.0001 3.69774 10.0001 4.25V12.3359L13.543 8.79297C13.9336 8.40248 14.5666 8.40246 14.9571 8.79297C15.3476 9.18348 15.3476 9.81652 14.9571 10.207L9.70711 15.457C9.66058 15.5036 9.60872 15.5444 9.55379 15.5811C9.51466 15.6072 9.47436 15.6304 9.43269 15.6504C9.3872 15.6723 9.34009 15.6912 9.29109 15.7061C9.27435 15.7111 9.25725 15.7146 9.24031 15.7188C9.22471 15.7226 9.20932 15.7274 9.19344 15.7305C9.18634 15.7319 9.17907 15.7322 9.17195 15.7334C9.11601 15.7431 9.05879 15.75 9.00008 15.75C8.94344 15.75 8.88813 15.7434 8.83406 15.7344C8.82366 15.7326 8.81316 15.7316 8.80281 15.7295C8.79131 15.7272 8.77999 15.7244 8.76863 15.7217C8.74806 15.7168 8.72739 15.7123 8.70711 15.7061C8.65845 15.6912 8.61167 15.6722 8.56648 15.6504C8.52669 15.6312 8.48776 15.6097 8.45027 15.585C8.39361 15.5476 8.34086 15.5048 8.29305 15.457L3.04305 10.207C2.65252 9.81651 2.65252 9.18349 3.04305 8.79297C3.43357 8.40248 4.0666 8.40246 4.45711 8.79297L8.00008 12.3359V4.25C8.00008 3.69772 8.44779 3.25 9.00008 3.25Z" fill="currentColor" />
            </svg>
            <span>{t('hero.downloadCv')}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
