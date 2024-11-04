<script lang="ts">
	let isLight = true;
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { sessionStore } from '$lib/store/sessionStore';
	import { onMount } from 'svelte';
	let token: string | null = null;
	let role: string | null = null;
	const unsubscribe = sessionStore.subscribe((session) => {
		token = session.token;
		role = session.userRole;
	});

	onMount(() => {
		return () => {
			unsubscribe();
		};
	});
	function logout() {
		sessionStore.clearSession();
		document.cookie = 'token=; Max-Age=0; path=/'; // Clear token cookie
	}

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

<nav class=" flex w-full flex-row items-center justify-center bg-primary">
	<div class="items-center">
		<a href="/"
			><img width="100px" src="/logo.png" alt="Quick Smart Wash - Caring For Second Skin" /></a
		>
	</div>
	<ul class="absolute right-0 flex space-x-4">
		{#if token !== null}
			<li class=" pr-5">
				<button
					on:click={logout}
					class="flex flex-row items-center gap-x-2 rounded-2xl bg-secondary p-3 text-primary-foreground hover:bg-accent"
					>Log Out <img src="/logout.png" width="20px" alt="Click Here To Log Out" /></button
				>
			</li>
		{/if}

		<li class="pr-5">
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
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 fill-primary transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 fill-white transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</li>
	</ul>
</nav>
