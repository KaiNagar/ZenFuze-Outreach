// import i18next from 'i18next'
import Cookies from 'js-cookie'
import { useEffect} from 'react'
// import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import { zfoService } from '../services/zfo.service'

export const AppHeader = () => {
  const currentLangCode = Cookies.get('i18next') || 'en'
  // const languages = zfoService.getLanguages()
  const currentLang = zfoService.getLang(currentLangCode)
  // const [forceUpdate, setForceUpdate] = useState(false)
  // const { t } = useTranslation()

  // const onChangeLang = (code) => {
  //   i18next.changeLanguage(code)
  //   Cookies.set('i18next', code)
  //   setForceUpdate((prevState) => !prevState)
  // }

  useEffect(() => {
    document.body.dir = currentLang.dir || 'ltr'
  }, [currentLang])

  return (
    <header style={{ direction: 'ltr' }} className='app-header-container'>
      <div className='app-header flex space-between align-center container'>
        <span className='logo'>
          ZenFuze <span className='logo-outreach'>Outreach</span>
        </span>
        <Link
          className='book-call-btn flex column'
          to='book-a-call'
          smooth={true}
          offset={0}
          duration={200}
        >
          <span className='btn-big-text'>Book FREE Discovery Call</span>
        </Link>

        {/* <ul className='clean-list flex'>
          {languages.map(({ code, lngName, imgUrl }) => (
            <li key={code}>
              <div
                className='lang-item flex align-center space-between'
                onClick={() => onChangeLang(code)}
              >
                <span className='country-logo flex align-center justify-center'>
                  <img src={imgUrl} alt='' />
                </span>
                {lngName}
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </header>
  )
}
