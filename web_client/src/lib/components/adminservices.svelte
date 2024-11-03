<script lang="ts">
	// Component Imports
	import * as Card from './ui/card/index.js';
	import * as Carousel from './ui/carousel';
	import { fly } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
</script>

<div
	class="mb-10 mt-10 flex w-3/4 max-w-screen-md flex-col items-center justify-center rounded-3xl pb-5"
	transition:fly={{ x: -200, duration: 700, delay: 900, easing: sineIn }}
>
	<p class="p-3 text-3xl font-bold text-blue-500">For Business Owners</p>
	<Carousel.Root class="relative w-3/4 self-center">
		<Carousel.Content>
			<Carousel.Item>
				<Card.Root class="h-full w-full border-none bg-accent bg-opacity-50">
					<Card.Header class="flex flex-col items-center justify-center">
						<Card.Title class="text-2xl text-[#F5F5D1]">Data Driven Analytics</Card.Title>
						<img src="/graph.svg" width="25px" alt="Business Analytics" />
					</Card.Header>
					<Card.Content class="flex w-full  flex-row ">
						<p class="text-xl font-medium text-current">
							Gain valuable insights through our comprehensive visualizations that highlight
							essential metrics critical to your business's success. Our user-friendly dashboard
							allows you to track everything from operational efficiency to customer engagement,
							providing a holistic view of your performance. By leveraging these data-driven
							insights, you can make informed decisions that drive growth and improve service
							delivery. We are committed to helping you understand your business's health, ensuring
							you can optimize processes and enhance overall profitability. Experience the clarity
							that comes from our advanced analytics, tailored specifically for your business needs.
						</p>
					</Card.Content>
				</Card.Root>
			</Carousel.Item>
		</Carousel.Content>
	</Carousel.Root>
</div>
