import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@/locales/en.json'
import es from '@/locales/es.json'
import fr from '@/locales/fr.json'

// Initialize i18n for tests
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
  },
  lng: 'en', // Default to English in tests
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  // Disable suspense for tests
  react: {
    useSuspense: false,
  },
})

export default i18n

// Helper to change language in tests
export function changeLanguage(lang: 'en' | 'es' | 'fr') {
  return i18n.changeLanguage(lang)
}

// Helper to get current language
export function getCurrentLanguage() {
  return i18n.language
}
