<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { fetchStudentDetails } from '$lib/server/user_details';
	import { onMount } from 'svelte';

	// Variable Declarations
	let noCycles: number = 0;
	let laundry_status: string = '';
	let date_received: string = '';
	let date_delivered: string = '';
	let message: string | null = null; // To store any error messages

	// Fetch the student details on component mount
	onMount(async () => {
		const result = await fetchStudentDetails();

		if (result && 'message'! in result) {
			// Destructure data if response is successful
			const {
				date_received: received,
				date_collected: collected,
				remaining_cycles,
				status
			} = result.data || {};

			date_received = received || '';
			date_delivered = collected || '';
			noCycles = remaining_cycles || 0;
			laundry_status = status || '';
		} else if ('message' in result) {
			// Handle failed response with error message
			message = result.message || 'Failed to retrieve laundry status';
		}
	});
</script>

<div class="flex h-full w-3/4 flex-col items-center gap-y-4">
	<Card.Root class="h-3/4 w-2/4">
		<Card.Header class="items-center">
			<Card.Title><p class="text-3xl text-accent">Laundry Status</p></Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col items-center justify-center">
			{#if message}
				<p class="text-lg text-red-500">{message}</p>
			{:else if laundry_status === 'Washing'}
				<img class="items-center" src="/status_pending.gif" alt="Still Pending" />
				<p class="text-2xl">In Progress...</p>
			{:else if laundry_status === 'Ready'}
				<img src="/ready.png" width="75px" alt="Ready To Collect" />
				<p class="pt-4 text-center text-2xl font-semibold">
					Ready To Collect<br />
					Delivery Date: {date_delivered}
				</p>
			{:else if laundry_status === 'Collected'}
				<img src="/collected.svg" width="75px" alt="Laundry Dropped Off" />
				<p class="pt-4 text-center text-2xl font-semibold">
					Laundry Received, Waiting For Transit<br />
					Received Date: {date_received}
				</p>
			{:else}
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
		<Card.Content class="flex flex-col items-center justify-center text-3xl font-extrabold">
			{noCycles}
		</Card.Content>
		<Card.Footer></Card.Footer>
	</Card.Root>
</div>
