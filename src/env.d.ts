import { type SupportedNotesLang } from "@/languages"

interface NowListening {
   track: string
   artist: string
}
type NowListeningPromise = Promise<NowListening | null>

declare global {
   interface Window {
      setLang: (lang: SupportedNotesLang) => void;
      setPreferredLang: (document: DocumentType) => void;
   }
}