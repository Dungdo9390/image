import LocalizedStrings from 'react-localization'
import { vi } from './locales/vi'
import { en } from './locales/en'

export const locale = new LocalizedStrings(
  {
      vi: vi,
      en: en
  }  
)