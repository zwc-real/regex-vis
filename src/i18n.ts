import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

// import translationEN from '@/locales/en/translation.json';
import translationCN from '@/locales/cn/translation.json'

// the translations
const resources = {
  // en: {
  //   translation: translationEN
  // },
  cn: {
    translation: translationCN
  }
};

// https://react.i18next.com/legacy-v9/step-by-step-guide
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "sessionStorage"],
    },
  })

export default i18n
