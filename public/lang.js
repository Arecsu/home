const LANG_LOCAL_STORAGE_KEY = 'preferredLang';

function getPreferredLanguage() {
  return localStorage.getItem(LANG_LOCAL_STORAGE_KEY) || 
         (navigator.language.startsWith('es') ? 'es' : 'en');
}

function setLang(lang) {
  localStorage.setItem(LANG_LOCAL_STORAGE_KEY, lang);
  document.documentElement.dataset.lang = lang;
}

function setPreferredLang(document) {
  document.documentElement.dataset.lang = getPreferredLanguage();
}

setPreferredLang(document);

window.setLang = setLang;
window.setPreferredLang = setPreferredLang;