<script lang="ts">
	interface NowListening {
		track: string
		artist: string
	}
	type NowListeningPromise = Promise<NowListening | null>

	let musicData = $state<NowListening | null>(null)
	let isLoading = $state(true)
  let isCurrentlyPlaying = $state(false)

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

		let cleanedTrackName
		if (trackName.includes("-")) {
			const parts = trackName.split("-").map((part) => part.trim())
			if (parts[parts.length - 1].toLowerCase().includes("remaster")) {
				parts.pop()
			}
			cleanedTrackName = parts.join(" - ")
		} else {
			cleanedTrackName = trackName
		}

		return {
			track: cleanedTrackName,
			artist: artistName,
		}
	}

	async function updateNowPlaying() {
		try {
			const nowPlayingData = await getNowListening()
			// Only update if the data has actually changed
      if (nowPlayingData && nowPlayingData !== musicData) {
				musicData = nowPlayingData
			}
      isCurrentlyPlaying = !!nowPlayingData
		} catch (error) {
			console.error(error)
		} finally {
			isLoading = false
		}
	}

	// Initial load
	updateNowPlaying()

	// Set up interval
	setInterval(updateNowPlaying, 10000)
</script>

{#if !isLoading && musicData}
	<div class="now-listening" class:is-playing={isCurrentlyPlaying}>
		<span class="listening-to">in my ears now ↙</span>
		<a
			class="no-underline disable-link-arrow"
			href="https://www.last.fm/user/Alejandro9R/"
			target="_blank"
		>
			<slot name="icon" />
			{musicData?.artist} - {musicData?.track}
		</a>
	</div>
{/if}

<style>
	.now-listening {
		display: flex;
		align-items: end;
		gap: 0.1rem;
		flex-direction: column;
	}

  .now-listening a {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
  }
</style>
