const LANG_LOCAL_STORAGE_KEY = 'preferredLang';

// Determine the preferred language
function getPreferredLanguage() {
  const storedLang = localStorage.getItem(LANG_LOCAL_STORAGE_KEY);
  if (storedLang) return storedLang;

  const browserLang = navigator.language;
  if (browserLang.startsWith('es')) return 'lang-es';

  return 'lang-en';
}

// Initialize language class
document.documentElement.classList.add(getPreferredLanguage());

// Export the public function
window.setLang = function(lang) {
  localStorage.setItem(LANG_LOCAL_STORAGE_KEY, lang);
  document.documentElement.classList.remove('lang-en', 'lang-es');
  document.documentElement.classList.add(lang);
}