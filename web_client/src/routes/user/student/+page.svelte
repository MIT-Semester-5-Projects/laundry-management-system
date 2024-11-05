<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	//Variable Declarations
	let noCycles = 30;

	export let inProgress: boolean = false;
	export let isReady: boolean = false;
	export let isCollected: boolean = true;
	export let isNone: boolean = true;
	if (inProgress) {
		isReady = false;
		isCollected = false;
		isNone = false;
	} else if (isReady) {
		inProgress = false;
		isCollected = false;
		isNone = false;
	} else if (isCollected) {
		isReady = false;
		isNone = false;
		inProgress = false;
	} else if (isNone) {
		inProgress = false;
		isReady = false;
		isCollected = false;
	}

	export let date: string = '10/05/2024';
	if (isReady) {
		noCycles -= 1;
	}
</script>

<div class="flex h-full w-3/4 flex-col items-center gap-y-4">
	<Card.Root class="h-3/4 w-2/4">
		<Card.Header class="items-center">
			<Card.Title><p class="text-3xl text-accent">Laundry Status</p></Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col items-center justify-center">
			{#if inProgress}
				<img class="items-center" src="/status_pending.gif" alt="Still Pending" />
				<p class="text-2xl">In Progress...</p>
			{:else if isReady}
				<img src="/ready.png" width="75px" alt="Ready To Collect" />
				<p class="pt-4 text-2xl font-semibold">Ready To Collect</p>
			{:else if isCollected}
				<img src="/collected.svg" width="75px" alt="Laundry Dropped Off" />
				<p class="pt-4 text-center text-2xl font-semibold">
					Laundry Recieved, Waiting For Transit<br />
					Recieved Date: {date}
				</p>
			{:else if isNone}
				<img src="/empty.svg" width="75px" alt="No Laundry Found" />
				<p class="pt-4 text-2xl font-semibold">No Laundry Order Found</p>
			{/if}
		</Card.Content>
	</Card.Root>
	<Card.Root class="mt-5 h-3/4 w-2/4 ">
		<Card.Header class="items-center">
			<Card.Title class="text-2xl">Remaining Cycles</Card.Title>
			<Card.Description class="text-xl">Number Of Laundry Cycles Left</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col items-center justify-center text-3xl font-extrabold"
			>{noCycles}</Card.Content
		>
		<Card.Footer></Card.Footer>
	</Card.Root>
</div>
