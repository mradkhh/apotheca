import i18n from 'i18next';
import {
    default as Backend,
    default as LanguageDetector,
} from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import Russian from './translations/ru/translations.json'
import Uzbek from './translations/uz/translations.json'
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: Uzbek,
      },
      ru: {
        translation: Russian,
      },
    },
    fallbackLng: localStorage.getItem('i18nextLng') || 'uz',
    debug: false,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    // ns: ['general'],
    // defaultNS: 'general',
    // fallbackNS: 'general',
    // nsSeparator: '::',
    // keySeparator: '::',
  });
export default i18n;