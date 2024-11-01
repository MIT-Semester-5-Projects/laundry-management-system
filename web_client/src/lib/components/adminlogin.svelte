<script lang="ts">
	//Component Imports
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input/index';
	import { Label } from '$lib/components/ui/label/index';
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	//Icon Imports
	import User from 'lucide-svelte/icons/user';
	import Lock from 'lucide-svelte/icons/lock';
	import EyeOff from 'lucide-svelte/icons/eye-off';
	import Eye from 'lucide-svelte/icons/eye';
	//Misc Imports
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../routes/$types';
	//Variable Declarations
	let username: string = '';
	let password: string = '';
	let isVisible: boolean = false;
	export let form: ActionData;
	//Function Declarations
	function toggleVisibility() {
		console.log(username);
		console.log(password);
		isVisible = !isVisible;
	}
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Admin</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Admin Login</Dialog.Title>
			<Dialog.Description>Enter Admin Details To Access Analytics</Dialog.Description>
		</Dialog.Header>
		<form method="POST" use:enhance>
			<div class="grid gap-4 py-4">
				<input type="hidden" id="role" value="Admin" />
				<div class="flex flex-row items-center justify-center">
					<Label for="user" class="px-2 text-right"><User /></Label>
					<Input
						id="user"
						bind:value={username}
						placeholder="Enter Username..."
						class="col-span-3 border-accent"
					/>
				</div>
			</div>
			<div class="flex flex-row items-center justify-center">
				<Label for="password" class="px-2 text-right"><Lock /></Label>

				<div class="relative w-full">
					{#if isVisible}
						<Input
							id="password"
							placeholder="Enter Password.."
							bind:value={password}
							class="col-span-3 border-accent pr-10"
						/>
					{:else}
						<Input
							type="password"
							id="password"
							placeholder="Enter Password.."
							bind:value={password}
							class="col-span-3 border-accent pr-10"
						/>
					{/if}

					<button
						on:click={toggleVisibility}
						type="button"
						class="absolute inset-y-0 right-2 flex items-center text-secondary hover:text-accent"
						tabindex="-1"
					>
						{#if isVisible}
							<Eye />
						{:else}
							<EyeOff />
						{/if}
					</button>
				</div>
				<p>{form?.message ?? ''}</p>
			</div>
			<Dialog.Footer>
				<Button class="mr-20 mt-2 w-1/2" type="submit">Login</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
