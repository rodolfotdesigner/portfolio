import { useTranslation } from 'react-i18next'
import whatsappIcon from '../../assets/icons/WhatsApp.svg'
import linkedinIcon from '../../assets/icons/Linkedin.svg'
import emailIcon from '../../assets/icons/Email.svg'
import downloadCvIcon from '../../assets/icons/Download_CV.svg'
import styles from './ProfileCard.module.css'

export default function ProfileCard() {
  const { t } = useTranslation()

  return (
    <div className={styles.card}>
      <p className={styles.name}>{t('hero.name')}</p>
      <p className={styles.role}>{t('hero.role')}</p>
      <ul className={styles.contacts} aria-label={t('hero.contactsLabel')}>
        <li>
          <span className={styles.contact}>
            <img src={whatsappIcon} alt={t('hero.whatsapp')} width="24" height="24" />
          </span>
        </li>
        <li>
          <span className={styles.contact}>
            <img src={linkedinIcon} alt={t('hero.linkedin')} width="24" height="24" />
          </span>
        </li>
        <li>
          <span className={`${styles.contact} ${styles.email}`}>
            <img src={emailIcon} alt={t('hero.email')} width="26" height="21" />
          </span>
        </li>
        <li>
          <span className={`${styles.contact} ${styles.download}`}>
            <img src={downloadCvIcon} alt={t('hero.downloadCv')} width="97" height="19" />
          </span>
        </li>
      </ul>
    </div>
  )
}
