<script lang="ts">
	//Animation Imports
	import { fly } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
	// Component Imports
	import { StudentService } from '$lib/index';
	import { Separator } from '$lib/components/ui/separator';
	import { Mount } from '$lib/index';
	import { Admin } from '$lib/index';
	import { Student } from '$lib/index';
	import { AdminService } from '$lib/index';
	//Type Imports
	import type { ActionData } from './$types';
	//Exports
	export let form: ActionData;

	//Scroll Animation
</script>

<Mount>
	<div
		class="mx-auto mt-48 flex max-w-screen-md flex-col items-center justify-center gap-y-2 rounded-2xl bg-secondary bg-opacity-50 px-4 pb-4 pt-8 backdrop-blur-sm"
		in:fly={{ y: 200, duration: 700, easing: sineIn }}
	>
		<p class="text-5xl font-bold text-primary-foreground">Laundromate</p>
		<p class="pt-5 text-center text-2xl text-primary-foreground">
			Laundry Made Easy, Updates Just a Click Away.
		</p>
		<div class="flex flex-row items-center justify-center space-x-4 pt-6">
			<Admin {form} />
			<Separator orientation="vertical" />
			<Student {form} />
		</div>
	</div>
	<div
		class="mb-24 mt-48 rounded-xl p-1 backdrop-blur-xl"
		transition:fly={{ x: -200, duration: 700, delay: 800, easing: sineIn }}
	>
		<p class="text-5xl font-semibold text-accent">
			What We <span class="text-secondary">Offer</span>
		</p>
	</div>
	<div class="flex flex-row items-center justify-center">
		<StudentService />
		<AdminService />
	</div>
</Mount>
