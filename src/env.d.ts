import { type SupportedReflectionsLang } from "@/languages.ts";

declare global {
   interface NowListening {
      track: string;
      artist: string;
   }
   type NowListeningPromise = Promise<NowListening | null>;

   interface Window {
      setLang: (lang: SupportedReflectionsLang) => void;
      setPreferredLang: (document: DocumentType) => void;
   }
}
