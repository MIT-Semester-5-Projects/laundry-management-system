<script lang="ts">
	// Component Imports
	import * as Card from './ui/card/index.js';
	import * as Carousel from './ui/carousel';
	import { fly } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';
</script>

<div
	class="mb-16 flex w-3/4 max-w-screen-md flex-col items-center justify-center rounded-3xl pb-5"
	transition:fly={{ x: -200, duration: 700, delay: 900, easing: sineIn }}
>
	<p class=" p-4 text-3xl font-bold text-blue-300">For Students</p>
	<Carousel.Root class="relative w-3/4 self-center">
		<Carousel.Content>
			{#each Array(3) as _, i (i)}
				<Carousel.Item>
					<Card.Root class="h-full w-full border-none bg-accent bg-opacity-50">
						<Card.Header class="flex flex-col items-center justify-center">
							<Card.Title class="text-2xl text-[#F5F5D1]">Pickup And Dropoff Kiosk</Card.Title>
							<img src="/kiosk.svg" width="25px" alt="Pickup and DropOff Kiosk" />
						</Card.Header>
						<Card.Content class="flex w-full  flex-row ">
							<p class="text-xl font-medium text-current">
								Enjoy the convenience of dropping off or picking up your laundry at our centrally
								located kiosk, where digital data entry ensures a smooth and efficient experience.
								Our system streamlines the process, making it easy for you to keep track of your
								laundry status, so you can focus on your day while we handle the rest.
							</p>
						</Card.Content>
					</Card.Root>
				</Carousel.Item>

				<Carousel.Item class="w-full">
					<Card.Root class="w-full border-none bg-accent bg-opacity-50">
						<Card.Header class="flex flex-col items-center justify-center">
							<Card.Title class="text-2xl text-[#F5F5D1]">Machine Washing And Drying</Card.Title>
							<img
								class="fill-current"
								src="/washingmachine.svg"
								alt="Machine Washing And Drying"
								width="25px"
							/>
						</Card.Header>
						<Card.Content class="flex w-full  flex-row ">
							<p class="text-xl font-medium text-current">
								Experience the convenience of our state-of-the-art washing and drying machines,
								designed to provide you with exceptional cleanliness and care for your garments. Our
								advanced technology ensures thorough cleaning and efficient drying, giving you peace
								of mind that your clothes will come out fresh, soft, and ready to wear. Whether you
								have delicate fabrics or everyday items, our machines cater to all your laundry
								needs, delivering quality results every time.
							</p>
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
				<Carousel.Item>
					<Card.Root class="h-full w-full border-none bg-accent bg-opacity-50">
						<Card.Header class="flex flex-col items-center justify-center">
							<Card.Title class="text-2xl text-[#F5F5D1]">Ironing</Card.Title>
							<img src="/iron.svg" alt="Ironing Services" width="25px" />
						</Card.Header>
						<Card.Content class="flex w-full  flex-row ">
							<p class="text-xl font-medium text-current">
								Your freshly laundered clothes are expertly pressed using advanced steam ironing
								techniques, ensuring a polished, professional finish on every garment. We prioritize
								attention to detail and quality, using the gentle power of steam to maintain fabric
								integrity and enhance the overall feel and appearance of your clothes. Experience
								the confidence of professionally pressed, impeccably prepared garments, delivered
								with precision and care.
							</p>
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
