export const NOTES_LANGUAGES = {
  en: {
    label: 'EN',
    name: 'English',
    locale: 'en-US',
    htmlLangClass: 'lang-en'
  },
  es: {
    label: 'ES',
    name: 'Español',
    locale: 'es-AR',
    htmlLangClass: 'lang-es'
  }
} as const;

export type SupportedNotesLang = keyof typeof NOTES_LANGUAGES; 