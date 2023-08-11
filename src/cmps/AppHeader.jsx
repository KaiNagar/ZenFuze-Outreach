import i18next from 'i18next'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { zfoService } from '../services/zfo.service'

export const AppHeader = () => {
  const currentLangCode = Cookies.get('i18next') || 'en'
  const languages = zfoService.getLanguages()
  const currentLang = zfoService.getLang(currentLangCode)
  const [isDropdown, setIsDropdown] = useState(false)
  const { t } = useTranslation()

  const onChangeLang = (code) => {
    i18next.changeLanguage(code)
    Cookies.set('i18next', code)
    setIsDropdown((prevState) => !prevState)
  }

  useEffect(() => {
    document.body.dir = currentLang.dir || 'ltr'
  }, [currentLang])

  const dropdownPos = currentLang.dir === 'ltr' ? { right: 0 } : { left: 0 }
  return (
    <header className='app-header-constainer '>
      <div className='app-header flex space-between align-center'>
        <span className='logo'>
          ZenFuze <span className='logo-outreach'>Outreach</span>
        </span>

        <div className='dropdown-languages'>
          <button
            className='language-drop-btn'
            onClick={() => setIsDropdown((prevState) => !prevState)}
          >
            {t('language_dropdown')}
          </button>
          <ul
            style={dropdownPos}
            className={`clean-list ${isDropdown && 'open'}`}
          >
            {languages.map(({ code, lngName, imgUrl }) => (
              <li key={code}>
                <div
                  className='dropdown-item flex align-center space-between'
                  onClick={() => onChangeLang(code)}
                >
                  <span className='country-logo'>
                    <img src={imgUrl} alt='' />
                  </span>
                  {lngName}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
