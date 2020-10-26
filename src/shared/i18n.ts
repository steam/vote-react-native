/* eslint-disable @typescript-eslint/no-empty-function */
import i18next, { LanguageDetectorModule } from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => RNLocalize.getLocales()[0].languageCode,
  init: () => {},
  cacheUserLanguage: () => {},
}

const en = {
  addressPlaceholder: 'e.g. 123 Voter Way, Your City State, Zip',
  findPollingLocaions: 'Find my polling locations',
  getDirections: 'Get Directions',
  hours: 'Hours',
  pollingLocations: 'Polling Locations',
  source: 'Source',
}

const initializeI18N = () => {
  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: false,
      resources: {
        en: {
          translation: { ...en },
        },
      },
    })
}

export { en, initializeI18N }
