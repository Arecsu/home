interface NowListening {
   track: string
   artist: string
}
type NowListeningPromise = Promise<NowListening | null>
