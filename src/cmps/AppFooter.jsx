export const AppFooter = () => {
  return (
    <section className='app-footer-container'>
      <div className='app-footer container flex column align-center justify-center'>
        <h1 className="inquiry-header">Have A General Inquiry?</h1>
        <h4 className="inquiry-text">
          If you have a general inquiry and would like to speak to our expert
          team, you can contact us via email at: kainagar@zenfuzeoutreach.com
        </h4>
        <div className='contact-btn flex column'>
            <span className="btn-big-text">Speak To Our Team Today</span>
            <span className='btn-small-text'>
              Schedule Your FREE Audit Call Now
            </span>
          </div>
        <div className='rights-section'>
        <span className="logo">ZenFuze <span className='logo-outreach'>Outreach</span></span>
          <h6>All Rights Reserved | All Wrongs Reserved also</h6>
          <span className='copy-rights'>
            Copyrights &copy; from 2023 by Kai Nagar | ZenFuze Outreach
          </span>
        </div>
      </div>
    </section>
  )
}
