import { Link } from 'react-scroll'

export const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero container flex'>
        <div className='hero-introduction flex column space-between'>
          <div className='intro-text'>
            <h4 className='intro-header'>
              We Help Local Businesses Produce Spine-Chilling ROI Via Paid
              Advertising
            </h4>
            <p className='intro-sub-text'>
              Stop Wasting time and money on faulty and ineffetive ad campaigns.
            </p>
            <p className='intro-sub-text'>
              It's time to make your ad-budget count, scale your business and
              blow up your sales.
            </p>
          </div>
          <Link className='book-call-btn flex column' to='book-a-call' smooth={true} offset={0} duration={200}>
            <span className='btn-big-text'>Speak To Our Team Today</span>
            <span className='btn-small-text'>
              Schedule Your FREE Audit Call Now
            </span>
          </Link>
        </div>
        <div className='hero-img flex column align-center space-between'>
          <img
            src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691152004/image-removebg-preview_1_kcp3g7.png'
            alt='ZenFuze Logo'
          />
          <span className="logo">ZenFuze <span className='logo-outreach'>Outreach</span></span>
        </div>
      </div>
    </section>
  )
}
