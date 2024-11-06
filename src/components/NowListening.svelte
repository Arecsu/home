<script lang="ts">
	import { musicData, isCurrentlyPlaying, 
		initCronUpdateNowPlaying, stopCronUpdateNowPlaying } from "@scripts/now-listening"
	import { onDestroy } from "svelte";

	initCronUpdateNowPlaying()

	onDestroy(() => {
		stopCronUpdateNowPlaying()
   	isCurrentlyPlaying.set(false)
	})
</script>

{#if $musicData}
	<div class="now-listening" class:is-playing={$isCurrentlyPlaying}>
		<span class="listening-to">in my ears now ↙</span>
		<a
			class="no-underline disable-link-arrow"
			href="https://www.last.fm/user/Alejandro9R/"
			target="_blank"
		>
			<slot name="icon" />
			{$musicData?.artist} - {$musicData?.track}
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
