import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className='why-choose-us-container'>
      <div className='why-choose-us container flex column'>
        <h3 className='sec-header'>Why Choose Us</h3>
        <div className='why-container flex space-between'>
          <div className='why-img'></div>
          <div className='why-info'>
            <h4 className='sub-header'>
              At ZenFuze Outreach, we're committed to your success. Here's why partnering with us is the smart choice:
            </h4>
            <ul>
              <li>
                <span className="highlight">Personalized Support:</span> Benefit from weekly Zoom calls for open and transparent communication, ensuring your needs are met promptly.
              </li>
              <li>
                <span className="highlight">Real-Time Updates:</span> Stay informed with weekly updates via Loom videos or messages, keeping you confident in our progress.
              </li>
              <li>
                <span className="highlight">Live Campaign Dashboard:</span> Access our live campaign dashboard 24/7 to track performance and gain valuable insights anytime, anywhere.
              </li>
              <li>
                <span className="highlight">Client-Centric Approach:</span> Your success is our priority. We align our efforts with your goals and are dedicated to helping you achieve them.
              </li>
              <li>
                <span className="highlight">Passion for Success:</span> Our team is driven by your success. We're passionate about helping real estate agents reach their goals and thrive in the market.
              </li>
            </ul>
            <h4 className='sub-header-2'>
              Choosing ZenFuze Outreach means choosing a partner dedicated to your growth, keeping you informed, and passionate about your success.
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
  );
};
