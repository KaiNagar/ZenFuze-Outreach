import { useTranslation } from "react-i18next"
import { Link } from "react-scroll"

export const WhyChooseUs = () => {
  const { t } = useTranslation()
  return (
    <section className='why-choose-us-container'>
      <div className='why-choose-us container flex column'>
        <h3 className='sec-header'>Why Choose Us</h3>
        <div className='why-container flex space-between'>
          <div className='why-img'></div>
          <div className='why-info'>
            <h4 className='sub-header'>
              At ZenFuze Outreach, we go above and beyond to ensure your
              success. Here's why partnering with us sets you up for greatness:
            </h4>
            <ul>
              <li>
                <span>Personalized Weekly Zoom Calls:</span> Stay closely
                connected with our team through weekly Zoom calls. We prioritize
                open and transparent communication to address your questions and
                concerns promptly.
              </li>
              <li>
                <span>Real-Time Updates via Loom Videos or Messages:</span>{' '}
                You're never in the dark about your campaigns. Expect weekly
                updates delivered via Loom videos or messages, keeping you
                informed and confident in our progress.
              </li>
              <li>
                <span>Accessible Live Campaign Dashboard:</span> Gain 24/7
                access to our live campaign dashboard. Check campaign status,
                metrics, and insights anytime, anywhere, ensuring full
                transparency and contru.
              </li>
              <li>
                <span>Client-Centric Approach:</span> We're not just another
                agency. We're driven by your success. Your goals are our goals,
                and we're committed to helping you achieve them.
              </li>
              <li>
                <span>A Hunger for Your Success:</span> Our team is hungry for
                your success. We're passionate about aiding as many businesses
                as possible in reaching their dream goals. Your triumph fuels
                our dedication.
              </li>
            </ul>
            <h4 className='sub-header-2'>
              Choosing ZenFuze Outreach means choosing a partner who prioritizes
              your business growth, keeps you informed, and is genuinely
              dedicated to your success.
            </h4>
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
            <span className='btn-small-text'>
              {t('book_call_btn_small_txt')}
            </span>
          </Link>
      </div>
    </section>
  )
}
