interface NowListening {
   track: string
   artist: string
}
type NowListeningPromise = Promise<NowListening | null>


// declared in public/lang.js
interface Window {
   setLang: (lang: 'lang-en' | 'lang-es') => void;
}