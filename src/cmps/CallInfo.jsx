import { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { zfoService } from '../services/zfo.service'
import { UserImg } from './UserImg'

export const CallInfo = () => {
  const { t } = useTranslation()
  const [user, setUser] = useState()

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    const user = zfoService.getMember('Kai Nagar')
    setUser(user)
  }

  if (!user) return 'Loading User'

  return (
    <section className='call-info flex column '>
      <UserImg user={user} />
      <div className='call-info-sec-1'>
        <h4 className='call-info-sub-header'>
          {t('call_info_sec_1_sub_header')}
        </h4>
        <h1 className='call-info-header'>{t('call_info_sec_1_header')}</h1>
        <p className='sec-1-text-1'>{t('call_info_sec_1_text_1')}</p>
        <p className='sec-1-text-2'>{t('call_info_sec_1_text_2')}</p>
      </div>
      <div className='call-info-sec-2'>
        <h4 className='call-sec-2-header'>{t('call_info_sec_2_header')}</h4>
        <ul className='clean-list'>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />
            {t('call_info_sec_2_list_point_1')}{' '}
            <span className='highlighted'>
              {t('call_info_sec_2_list_point_1_highlighted')}
            </span>
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />
            {t('call_info_sec_2_list_point_2')}{' '}
            <span className='highlighted'>
              {t('call_info_sec_2_list_point_2_highlighted')}
            </span>
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />
            {t('call_info_sec_2_list_point_3')}{' '}
            <span className='highlighted'>
              {t('call_info_sec_2_list_point_3_highlighted')}
            </span>
            {t('call_info_sec_2_list_point_3_rest')}
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />
            {t('call_info_sec_2_list_point_4')}{' '}
            <span className='highlighted'>
              {t('call_info_sec_2_list_point_4_highlighted')}
            </span>
          </li>
          <li>
            <img
              src='https://res.cloudinary.com/db9bey3ot/image/upload/v1691222492/icons8-check-48_nlbg2j.png'
              alt=''
              className='check-icon'
            />
            {t('call_info_sec_2_list_point_5')}{' '}
            <span className='highlighted'>
              {t('call_info_sec_2_list_point_5_highlighted')}
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
