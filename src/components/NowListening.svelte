<script>
   let nowListening = $state(getNowListening())

   async function getNowListening() {
      let responseText
      try {
         const response = await fetch('https://lastfm-a9r.martyr.workers.dev/')
         responseText = await response.text()
      } catch (error) {
         console.error("Error fetching Now Listening data!")
         throw Error("Error fetching Now Listening data!")
      }
      const htmlParser = new DOMParser()
      const doc = htmlParser.parseFromString(responseText, "text/html")
      
      const trackName = doc.querySelector("tbody tr:first-child:has(.chartlist-now-scrobbling) .chartlist-name a")?.textContent
      const artistName = doc.querySelector("tbody tr:first-child:has(.chartlist-now-scrobbling) .chartlist-artist a")?.textContent

      if (!trackName || !artistName) return null

      return {
         track: trackName,
         artist: artistName
      }
   }

</script>


{#await nowListening}
	<span>...waiting</span>
{:then object}
   {#if object}
	   <span>Now Listening: {object.artist} - {object.track}</span>
   {/if}
{:catch error}
	<span style="color: red">{error.message}</span>
{/await}