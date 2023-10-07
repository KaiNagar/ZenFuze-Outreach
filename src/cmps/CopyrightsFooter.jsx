import { useTranslation } from "react-i18next"

export const CopyrightFooter = () => {
    const {t} = useTranslation()
  return (
    <section className='copyright-footer-container'>
      <div className='copyright-footer container'>
          <span className='logo'>
            ZenFuze <span className='logo-outreach'>Outreach</span>
          </span>
          <h6>{t('footer_rights_reserved')}</h6>
          <span className='copy-rights'>
            Copyrights &copy; from 2023 by Kai Nagar | ZenFuze Outreach
          </span>
      </div>
    </section>
  )
}
