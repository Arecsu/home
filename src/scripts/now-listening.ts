import { atom } from 'nanostores';

export const musicData = atom<NowListening | null>(null)
export const isCurrentlyPlaying = atom(false)
let cronUpdateNowPlaying: ReturnType<typeof setInterval> | null

const cleanTrack = (track: string) => {
   if (track.includes("-")) {
      const filters = ["remaster", "remastered"]
      const parts = track.split("-").map((part) => part.trim())
      const checksFilters = filters.some((filter) => parts[parts.length - 1].toLowerCase().includes(filter))
      if (checksFilters) parts.pop()
      return parts.join(" - ")
   } else {
      return track
   }
}

async function getNowListening(): NowListeningPromise {
   let responseText
   try {
      const response = await fetch("https://lastfm-a9r.martyr.workers.dev/")
      responseText = await response.text()
   } catch (error) {
      console.error("Error fetching Now Listening data!")
      throw Error("Error fetching Now Listening data!")
   }

   const htmlParser = new DOMParser()
   const doc = htmlParser.parseFromString(responseText, "text/html")
   const trackName = doc.querySelector(
      "tbody tr:first-child:has(.chartlist-now-scrobbling) .chartlist-name a"
   )?.textContent
   const artistName = doc.querySelector(
      "tbody tr:first-child:has(.chartlist-now-scrobbling) .chartlist-artist a"
   )?.textContent

   if (!trackName || !artistName) return null

   return {
      track: cleanTrack(trackName),
      artist: artistName,
   }
}

async function updateNowPlaying() {
   if (document.hidden) {
      clearInterval(cronUpdateNowPlaying!)
      cronUpdateNowPlaying = null
      return
   }
   try {
      const nowPlayingData = await getNowListening()
      // Only update if the data has actually changed
      if (nowPlayingData && nowPlayingData !== musicData.get()) {
            musicData.set(nowPlayingData)
         }
      isCurrentlyPlaying.set(!!nowPlayingData)
   } catch (error) {
      console.error(error)
   } 
}

export function initCronUpdateNowPlaying() {
   updateNowPlaying()
   cronUpdateNowPlaying = setInterval(updateNowPlaying, 10 * 1000)
   document.addEventListener('visibilitychange', handleVisibilityChange)
}

export function stopCronUpdateNowPlaying() {
   if(!cronUpdateNowPlaying) return
   clearInterval(cronUpdateNowPlaying)
   cronUpdateNowPlaying = null
   document.removeEventListener('visibilitychange', handleVisibilityChange)
}

function handleVisibilityChange() {
   if (!document.hidden && !cronUpdateNowPlaying) {
      updateNowPlaying()
      cronUpdateNowPlaying = setInterval(updateNowPlaying, 10 * 1000)
   }
}