<script lang="ts">
	let isLight = true;
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	function toggleBG() {
		const main = document.querySelector('main') as HTMLElement | null;
		isLight = !isLight;
		console.log(isLight);
		if (main) {
			if (isLight) {
				main.style.backgroundImage = "url('/lightbg.svg')";
			} else {
				main.style.backgroundImage = "url('/darkbg.svg')";
			}
		} else {
			console.error('Main Element Not Found');
		}
	}
</script>

<nav class="flex w-full items-center justify-between bg-primary">
	<div>
		<a href="/"
			><img width="100px" src="/logo.png" alt="Quick Smart Wash - Caring For Second Skin" /></a
		>
	</div>
	<ul class="flex space-x-4">
		<li>
			<Button variant="link" class="text-2xl text-primary-foreground">Services</Button>
		</li>

		<li>
			<Button
				on:click={() => {
					toggleMode();
					toggleBG();
				}}
				class="hover:bg-background"
				variant="default"
				size="icon"
			>
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 fill-black transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 fill-white transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</li>
	</ul>
</nav>
