import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

export const WhatWeOffer = () => {
  const { t } = useTranslation()
  return (
    <section className='what-we-offer-container'>
      <div className='what-we-offer container flex column'>
        <h1 className='offer-header'>What We Offer for Real Estate Agents</h1>
        <div className='offers-info'>
          <div className='offer offer-1'>
            <span className='offer-icon offer-1-icon'></span>
            <h3 className='offer-title'>Tailored Marketing Solutions</h3>
            <div className='offer-desc'>
              Harness the power of targeted marketing campaigns to attract more
              clients and close more deals in the competitive real estate
              market.
            </div>
          </div>
          <div className='offer offer-2'>
            <span className='offer-icon offer-2-icon'></span>
            <h3 className='offer-title'>Comprehensive Market Analysis</h3>
            <div className='offer-desc'>
              We provide data-driven insights and market analysis to help you
              understand current trends and make informed decisions in your real
              estate business.
            </div>
          </div>
          <div className='offer offer-3'>
            <span className='offer-icon offer-3-icon'></span>
            <h3 className='offer-title'>Transparent Reporting</h3>
            <div className='offer-desc'>
              Benefit from clear performance reports and analytics to track your
              marketing efforts and optimize your strategies for maximum
              results.
            </div>
          </div>
          <div className='offer offer-4'>
            <span className='offer-icon offer-4-icon'></span>
            <h3 className='offer-title'>Affordable Marketing Solutions</h3>
            <div className='offer-desc'>
              Our budget-friendly marketing solutions are designed to maximize
              your return on investment (ROI) and help you grow your real estate
              business affordably.
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
