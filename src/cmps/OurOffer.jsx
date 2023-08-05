import { Link } from 'react-scroll'

export const OurOffer = () => {
  return (
    <section className='our-offer-container'>
      <div className='our-offer container flex align-center'>
        <div className='not-offer-info'>
          <h1 className='not-offer-header'>
            Mastery Demands Extreme Focus so...
          </h1>
          <h1 className='not-offer-sub-header'>
            We don't offer any other services except for{' '}
            <span className='highlighted'>paid advertising...</span>
          </h1>
          <ul className='clean-list'>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              Web Design
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              Content Creation
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              Email Marketing
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              Social Media Management
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              Instagram Growth
            </li>
            <li>
              <img
                src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691232414/icons8-circled-x-24_qnga1o.png'
                alt=''
                className='x-icon'
              />
              PR Service
            </li>
          </ul>
        </div>
        <div className='offer-info flex column'>
          <h1 className='what-we-offer-header'>What we offer</h1>
          <h1 className='big-header'>Paid Advertising</h1>
          <h4 className='offer-sub-header'>Ads, Just Ads.</h4>
          <p className='offer-text-1'>
            We do one thing - and we do it with a monastic focus and better then
            anyone else. If you want an agency that offers a full service
            solution of everything that won't move the needle forward, then you
            might want to look for a diffrent agency
          </p>
          <p className='offer-text-2'>
            If you want an agency where with tow clicks, you can get a clear
            breakdown of how much was spent, how much was made & what your net
            profit was - we are a perfect match for you.
          </p>
          <Link
            className='book-call-btn flex column'
            to='book-a-call'
            smooth={true}
            offset={0}
            duration={200}
          >
            <span className='btn-big-text'>Speak To Our Team Today</span>
            <span className='btn-small-text'>
              Schedule Your FREE Audit Call Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
