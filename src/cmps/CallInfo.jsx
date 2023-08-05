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
    console.log(user)
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
          the next steps you can take for your business tostart generating
          consistent and reliable results online with Funnels & Paid Advertising
        </p>
        <p className="sec-1-text-2">
          Find a time on Kai's calendar to schedule your call today and we look forward to speaking to you soon!
        </p>
      </div>
    </section>
  )
}
