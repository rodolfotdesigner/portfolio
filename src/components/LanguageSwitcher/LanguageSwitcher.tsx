import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const radioGroupName = useId()
  const activeLanguage = i18n.resolvedLanguage

  function selectLanguage(language: 'pt-BR' | 'en') {
    if (activeLanguage !== language) {
      void i18n.changeLanguage(language)
    }
  }

  return (
    <fieldset className={styles.switcher}>
      <legend className={styles.legend}>{t('languageSwitcher.label')}</legend>
      <label className={styles.option} lang="pt-BR">
        <input
          className={styles.input}
          type="radio"
          name={radioGroupName}
          value="pt-BR"
          checked={activeLanguage === 'pt-BR'}
          onChange={() => selectLanguage('pt-BR')}
          aria-label={t('languageSwitcher.portuguese')}
        />
        <span className={styles.text} aria-hidden="true">
          {t('languageSwitcher.ptShort')}
        </span>
      </label>
      <label className={styles.option} lang="en">
        <input
          className={styles.input}
          type="radio"
          name={radioGroupName}
          value="en"
          checked={activeLanguage === 'en'}
          onChange={() => selectLanguage('en')}
          aria-label={t('languageSwitcher.english')}
        />
        <span className={styles.text} aria-hidden="true">
          {t('languageSwitcher.enShort')}
        </span>
      </label>
    </fieldset>
  )
}
