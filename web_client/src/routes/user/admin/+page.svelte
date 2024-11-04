<script lang="ts">
	import Mount from '$lib/components/mount.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { sineIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import options from './options';
	import data from './data';
	import { LineChart } from '@carbon/charts-svelte';
	import '@carbon/charts-svelte/styles.css';
</script>

<Mount>
	<div class="grid h-3/4 w-3/4 grid-cols-3 gap-x-10">
		<div in:fly={{ y: -100, easing: sineIn, duration: 700 }}>
			<Card.Root>
				<Card.Header class="items-center justify-center">
					<Card.Title class="text-2xl font-bold">Lifetime Statistics</Card.Title>
				</Card.Header>
				<Card.Content class="flex flex-col items-start justify-center gap-y-5">
					<div>
						<p class="text-md font-semibold">Average Turn-Around Time(TAT)</p>
					</div>
					<div>
						<p class="text-md font-semibold">Total Bags Processed</p>
					</div>
					<div>
						<p class="text-md font-semibold">No. Of Working Days</p>
					</div></Card.Content
				>
				<Card.Footer></Card.Footer>
			</Card.Root>
		</div>
		<div in:fly={{ y: -100, easing: sineIn, delay: 200, duration: 700 }}>
			<Card.Root>
				<Card.Header class="items-center justify-center">
					<Card.Title class="text-2xl font-bold">Daily Analytics</Card.Title>
				</Card.Header>
				<Card.Content class="flex flex-row"
					><LineChart {data} {options} style="padding:2rem;" />
				</Card.Content>
				<Card.Footer></Card.Footer>
			</Card.Root>
		</div>
		<div in:fly={{ y: -300, easing: sineIn, delay: 400, duration: 700 }}>
			<Card.Root>
				<Card.Header class="items-center justify-center">
					<Card.Title class="text-2xl font-bold">Weekly Analytics</Card.Title>
				</Card.Header>
				<Card.Content></Card.Content>
				<Card.Footer></Card.Footer>
			</Card.Root>
		</div>
	</div>
</Mount>
