<script>
	import { fade, fly } from 'svelte/transition';
	import { quadIn, circIn, sineIn, quadOut, expoIn } from 'svelte/easing';
</script>

<div
	class="flex h-2/5 w-3/4 flex-col items-center justify-start gap-y-2 rounded-2xl bg-secondary bg-opacity-50 backdrop-blur-sm"
	in:fade={{ duration: 400, easing: quadIn }}
	out:fade={{ duration: 200, easing: quadOut }}
>
	<!-- The p tag with fly transition -->
	<p
		class="pt-1 text-5xl text-primary-foreground"
		in:fly={{ y: 100, delay: 400, duration: 500, easing: sineIn }}
	>
		Laundromate
	</p>
	<p
		class="pt-5 text-2xl text-primary-foreground"
		in:fly={{ y: 200, delay: 700, duration: 500, easing: quadIn }}
	>
		Everything Laundry, One Click Away
	</p>
	<div></div>
</div>
