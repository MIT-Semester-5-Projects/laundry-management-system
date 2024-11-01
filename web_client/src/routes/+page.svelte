<script lang="ts">
	//Transition Imports

	import { fade, fly } from 'svelte/transition';
	import { quadIn, sineIn } from 'svelte/easing';
	//Component Imports

	import { Separator } from '$lib/components/ui/separator';

	//Misc Imports
	import { Mount } from '$lib/index';
	import { Admin } from '$lib/index';
	import { Student } from '$lib/index';
</script>

<Mount>
	<div
		class="relative flex h-2/5 w-3/4 flex-col items-center justify-start gap-y-2 rounded-2xl bg-secondary bg-opacity-50 backdrop-blur-sm"
		in:fade={{ duration: 400, easing: quadIn }}
	>
		<p
			class="pt-5 text-5xl font-bold text-primary-foreground"
			in:fly={{ y: 100, delay: 400, duration: 500, easing: sineIn }}
		>
			Laundromate
		</p>
		<p
			class="pt-5 text-2xl text-primary-foreground"
			in:fly={{ y: 200, delay: 700, duration: 500, easing: quadIn }}
		>
			Laundry Made Easy, Updates Just a Click Away.
		</p>
		<div
			class="absolute bottom-1/3 left-1/2 flex -translate-x-1/2 flex-row items-end justify-between space-x-4"
			in:fly={{ y: 300, delay: 700, duration: 500, easing: quadIn }}
		>
			<Admin />
			<Separator orientation="vertical" />
			<Student />
		</div>
	</div>
</Mount>
