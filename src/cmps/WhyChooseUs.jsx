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
            When it comes to your real estate success, partnering with us offers unique advantages:
            </h4>
            <ul>
          <li>
            <span className="highlight">Personalized Support:</span> Experience personalized support through regular consultations, ensuring your needs are addressed effectively.
          </li>
          <li>
            <span className="highlight">Real-Time Updates:</span> Stay updated with real-time progress reports via video updates or messages, keeping you informed every step of the way.
          </li>
          <li>
            <span className="highlight">Live Campaign Dashboard:</span> Access our live campaign dashboard anytime to monitor campaign performance and gain actionable insights to enhance your real estate strategies.
          </li>
          <li>
            <span className="highlight">Client-Centric Approach:</span> Your real estate goals are our top priority. We tailor our services to align with your objectives and are committed to helping you achieve success in the competitive market.
          </li>
          <li>
            <span className="highlight">Passion for Success:</span> Our dedicated team is passionate about your real estate success. We are driven to help real estate agents like you thrive and excel in the dynamic real estate industry.
          </li>
        </ul>
        <h4 className='sub-header-2'>
          By choosing to partner with us, you're choosing a dedicated ally committed to your real estate growth, providing timely updates, and sharing your passion for success in the real estate market.
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
