// import { useTranslation } from 'react-i18next'
// import { Link } from 'react-scroll'
import { CopyrightFooter } from './CopyrightsFooter'
import { Socials } from './Socials'

export const AppFooter = () => {
  // const { t } = useTranslation()

  return (
    <footer className='app-footer-container'>
      {/* <div className='app-footer container flex column align-center justify-center'>
        <h1 className='inquiry-header'>{t('footer_inquiry_header')}</h1>
        <h4 className='inquiry-text'>{t('footer_inquiry_text')}</h4>
        <Link
          className='book-call-btn flex column'
          to='book-a-call'
          smooth={true}
          offset={0}
          duration={200}
        >
          <span className='btn-big-text'>{t('book_call_btn_big_txt')}</span>
          <span className='btn-small-text'>{t('book_call_btn_small_txt')}</span>
        </Link>
      </div> */}
      <Socials />
      <CopyrightFooter />
    </footer>
  )
}
