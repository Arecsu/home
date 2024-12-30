import { type SupportedReflectionsLang } from "@/languages.ts"

interface NowListening {
   track: string
   artist: string
}
type NowListeningPromise = Promise<NowListening | null>

declare global {
   interface Window {
      setLang: (lang: SupportedReflectionsLang) => void;
      setPreferredLang: (document: DocumentType) => void;
   }
}