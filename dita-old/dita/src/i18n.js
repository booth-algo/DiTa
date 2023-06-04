import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(Backend)
.init({
    debug: true,
    fallbackLng: 'en',
    preload: ['en', 'zh-TW', 'zh-CN'],
    react: {
        // useSuspense: false
    }
})

// change language according to browser language
setTimeout(function(){
    var userLang = navigator.language || navigator.userLanguage; 
    if(userLang == 'zh-TW' || userLang == 'zh-CN') {
      i18next.changeLanguage(userLang)
    }
}, 200)