import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from 'i18next-http-backend'


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HTTPApi)
    .init({
        fallbackLng: 'en',
        detection: { order: [ 'cookie','htmlTag', 'localStorage', 'path', 'subdomain'] },
        caches: ['cookies'],
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        },
        react: {
            useSuspense: false
        }
    })

export default i18next