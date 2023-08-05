import { useEffect } from 'react'
import { useState } from 'react'
import { zfoService } from '../services/zfo.service'
import { UserImg } from './UserImg'

export const CallInfo = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    const user = zfoService.getUser('Kai Nagar')
    setUser(user)
  }

  if (!user) return 'Loading User'

  return (
    <section className='call-info'>
      <UserImg user={user} />
      <div className='call-info-sec-1'>
        <h4 className='call-info-sub-header'>Scedule Your Call With Kai</h4>
        <h1 className='call-info-header'>Free 15-Minutes Demo Call</h1>
        <p className='sec-1-text-1'>
          By the end of this Audit call, you will have a clear understanding of
          the next steps you can take for your business to start generating
          consistent and reliable results online with Funnels & Paid Advertising
        </p>
        <p className='sec-1-text-2'>
          Find a suitable time on Kai's calendar to schedule your call today,
          and we are looking forward to speaking with you soon!
        </p>
      </div>
      <div className='call-info-sec-2'>
        <h4 className='call-sec-2-header'>This Audit Call Is Perfect For:</h4>
        <ul className='clean-list'>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />{' '}
            Businesses looking to convert their current website into a{' '}
            <span className='highlighted'>
              high quality & streamlined funnel format.
            </span>
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />{' '}
            Businesses looking to take their offline business{' '}
            <span className='highlighted'>online.</span>
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />{' '}
            Businesses looking to understand their{' '}
            <span className='highlighted'>increased revenue potential </span>
            with funnels & conversion rate optimization.
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />{' '}
            Businesses looking to{' '}
            <span className='highlighted'>
              maximize their conversion rates & average order value.
            </span>
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />{' '}
            Businesses looking for a reliable agency that can{' '}
            <span className='highlighted'>make their company a priority.</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
