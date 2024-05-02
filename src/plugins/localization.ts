import { createI18n } from 'vue-i18n'
import * as messages from '@/locales'

export const localization = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  fallbackWarn: false,
  globalInjection: true,
  missingWarn: false,
  warnHtmlMessage: false,
  messages: messages as any,
})
