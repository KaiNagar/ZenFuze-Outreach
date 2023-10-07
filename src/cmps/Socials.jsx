export const Socials = () => {
  return (
    <section className='socials-container'>
      <div className='socials container flex align-center'>
        <div className='social-site social'>
          <span className='site-logo'></span>Site:{' '}
          <a
            className='clear-link'
            href='https://zenfuzeoutreach.com/'
            target='_blank'
            rel="noreferrer"
          >
            www.zenfuzeoutreach.com
          </a>
        </div>
        <div className='social-email social'>
          <span className='email-logo'></span>Email: support@zenfuzeoutreach.com
        </div>

        <a
          href='https://www.facebook.com/profile.php?id=100094671951857'
          target='_blank'
          rel="noreferrer"
          className='clear-link social'
        >
          <span className='social-fb'></span>
        </a>
        <a
          href='https://www.instagram.com/zenfuze_outreach/'
          target='_blank'
          rel="noreferrer"
          className='clear-link social'
        >
          <span className='social-ig'></span>
        </a>
      </div>
    </section>
  )
}
