import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

export const Hero = () => {
  const { t } = useTranslation()
  return (
    <section className='hero-container'>
      <div className='hero container flex'>
        <div className='hero-introduction flex column space-between'>
          <div className='intro-text'>
            <h4 className='intro-header'>{t('hero_intro_header')}</h4>
            <p className='intro-sub-text'>{t('hero_intro_sub_text_1')}</p>
            <p className='intro-sub-text'>{t('hero_intro_sub_text_2')}</p>
          </div>
          <Link
            className='book-call-btn flex column'
            to='book-a-call'
            smooth={true}
            offset={0}
            duration={200}
          >
            <span className='btn-big-text'>{t('book_call_btn_big_txt')}</span>
            <span className='btn-small-text'>
              {t('book_call_btn_small_txt')}
            </span>
          </Link>
        </div>
        <div className='hero-img flex column align-center justify-center'>
          {/* <img
            src='https://cdn.pixabay.com/photo/2020/09/17/18/05/people-5579977_960_720.png'
            alt='ZenFuze Logo'
          /> */}
          {/* <span className='logo'>
            ZenFuze <span className='logo-outreach'>Outreach</span>
          </span> */}
        </div>
      </div>
    </section>
  )
}
