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
	//Variable Declarations
	let reg_no: string = '';
	let password: string = '';
	let isVisible: boolean = false;
	//Function Declarations
	function toggleVisibility(): void {
		isVisible = !isVisible;
	}
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Student</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Student Login</Dialog.Title>
			<Dialog.Description>Enter Student Details To View Status Updates</Dialog.Description>
		</Dialog.Header>
		<form action="/" method="POST" use:enhance>
			<div class="grid gap-4 py-4">
				<div class="flex flex-row items-center justify-center">
					<input type="hidden" id="role" value="Student" />
					<Label for="user" class="px-2 text-right"><User /></Label>
					<Input
						id="user"
						bind:value={reg_no}
						placeholder="Enter Registration Number..."
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
			</div>
			<Dialog.Footer>
				<Button class="mr-20 mt-2 w-1/2" type="submit">Login</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
