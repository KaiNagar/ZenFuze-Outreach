import { useTranslation } from "react-i18next"
import { Link } from "react-scroll"

export const WhatWeOffer = () => {
    const { t } = useTranslation()
  return (
    <section className='what-we-offer-container'>
      <div className='what-we-offer container flex column'>
        <h1 className='offer-header'>What We Offer</h1>
        <div className='offers-info'>
          <div className='offer offer-1'>
            <span className="offer-icon offer-1-icon"></span>
            <h3 className='offer-title'>Paid Advertising</h3>
            <div className='offer-desc'>
              Harness the power of targeted ad campaigns to boost sales and
              maximize your ROI.
            </div>
          </div>
          <div className='offer offer-2'>
          <span className="offer-icon offer-2-icon"></span>
            <h3 className='offer-title'>Data-Driven Insights</h3>
            <div className='offer-desc'>
              We analyze results and optimize strategies to help you improve
              campaigns and stay competitive.
            </div>
          </div>
          <div className='offer offer-3'>
          <span className="offer-icon offer-3-icon"></span>
            <h3 className='offer-title'>Transparent Reporting</h3>
            <div className='offer-desc'>
              Benefit from clear performance reports for informed decisions and
              budget control.
            </div>
          </div>
          <div className='offer offer-4'>
          <span className="offer-icon offer-4-icon"></span>
            <h3 className='offer-title'>Affordable Strategies</h3>
            <div className='offer-desc'>
              Our budget-friendly solutions maximize your ROI, allowing you to
              grow your business affordably.
            </div>
          </div>
        </div>
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
      </div>
    </section>
  )
}
