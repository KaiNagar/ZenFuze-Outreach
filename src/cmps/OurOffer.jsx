import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

export const OurOffer = () => {
  const {t} = useTranslation()
  return (
    <section className='our-offer-container'>
      <div className='our-offer container flex align-center'>
        <div className='not-offer-info'>
          <h1 className='not-offer-header'>
            {t('our_offer_not_offer_header')}
          </h1>
          <h1 className='not-offer-sub-header'>
          {t('our_offer_not_offer_sun_header_1')}{' '}
            <span className='highlighted'>{t('our_offer_not_offer_sun_header_2')}</span>
          </h1>
          <ul className='clean-list'>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              {t('our_offer_not_offer_list_web')}
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              {t('our_offer_not_offer_list_content')}
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              {t('our_offer_not_offer_list_email')}
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              {t('our_offer_not_offer_list_social')}
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              {t('our_offer_not_offer_list_instagram')}
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              {t('our_offer_not_offer_list_pr_service')}
            </li>
          </ul>
        </div>
        <div className='offer-info flex column'>
          <h1 className='what-we-offer-header'>{t('our_offer_offer_header')}</h1>
          <h1 className='big-header'>{t('our_offer_offer_big_header')}</h1>
          <h4 className='offer-sub-header'>{t('our_offer_offer_sub_header')}</h4>
          <p className='offer-text-1'>
          {t('our_offer_offer_text_1')}
          </p>
          <p className='offer-text-2'>
          {t('our_offer_offer_text_2')}
          </p>
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
      </div>
    </section>
  )
}
