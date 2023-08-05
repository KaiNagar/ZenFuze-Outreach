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
          <div className='book-call-btn flex column'>
            <span className="btn-big-text">Speak To Our Team Today</span>
            <span className='btn-small-text'>
              Schedule Your FREE Audit Call Now
            </span>
          </div>
        </div>
        <div className='hero-img flex column align-center space-between'>
          <img
            src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691152004/image-removebg-preview_1_kcp3g7.png'
            alt='ZenFuze Logo'
          />
          <h2 className='hero-img-text'>ZenFuze Outreach</h2>
        </div>
      </div>
    </section>
  )
}
