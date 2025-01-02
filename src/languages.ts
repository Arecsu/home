export const REFLECTIONS_LANGUAGES = {
  en: {
    label: 'EN',
    name: 'English',
    locale: 'en-US',
    htmlLangClass: 'lang-en',
    articleSwitchLabel: 'English',
  },
  es: {
    label: 'ES',
    name: 'Español',
    locale: 'es-ES',
    htmlLangClass: 'lang-es',
    articleSwitchLabel: 'Español',
  }
} as const;

export type SupportedReflectionsLang = keyof typeof REFLECTIONS_LANGUAGES;