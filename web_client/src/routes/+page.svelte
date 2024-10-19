<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import * as Dialog from '$lib/components/ui/dialog';
	import { enhance } from '$app/forms';
	import { redirect } from '@sveltejs/kit';

	let errorMsg: string = '';
	let username: string = '';
	let password: string = '';
	let wrongdeets: boolean = false;
	let role: string = '';

	// Enhanced form submission
	async function onSubmit({ data, form, update }: any) {
		wrongdeets = false; // Reset wrongdeets on submission
		errorMsg = '';

		if (data?.error) {
			wrongdeets = true;
			errorMsg = data.error;
			password = ''; // Clear password field on error
		} else {
			role = data.role; // Assume the server returns user role
			if (role === 'student') {
				throw redirect(303, '/user/student'); // Redirect to student dashboard
			} else if (role === 'admin') {
				throw redirect(303, '/user/admin'); // Redirect to admin dashboard
			} else {
				errorMsg = 'Unknown user role'; // Handle unexpected role
			}
		}
	}
</script>

<div
	class="flex h-1/3 w-2/4 flex-col items-center justify-start rounded-3xl bg-accent bg-opacity-70"
>
	<p class="font-urbanist text-radial pt-3 text-5xl">Laundromate</p>
	<p class="text-radial pt-9 text-2xl">Everything Laundry, One Click Away</p>
	<div class="flex items-center justify-between space-x-12 pt-9">
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'secondary' })}>Admin</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header class="items-center">
					<Dialog.Title>Admin Login</Dialog.Title>
					<Dialog.Description>Login As Admin To View Analytics</Dialog.Description>
				</Dialog.Header>
				<form action="/user/login" method="post" use:enhance={onSubmit}>
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								id="username"
								bind:value={username}
								placeholder="Enter Username..."
								class="col-span-3"
							/>
						</div>
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								type="password"
								placeholder="Enter Password..."
								id="password"
								class="col-span-3"
								bind:value={password}
							/>
						</div>
					</div>
					<Dialog.Footer class="flex items-center justify-center pr-20">
						{#if wrongdeets}
							<p class="text-sm text-destructive">{errorMsg}</p>
						{/if}
						<Button variant="default" type="submit">Login</Button>
					</Dialog.Footer>
				</form>
			</Dialog.Content>
		</Dialog.Root>
		<Dialog.Root>
			<Dialog.Trigger class={buttonVariants({ variant: 'secondary' })}>Student</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header class="items-center">
					<Dialog.Title>Student Login</Dialog.Title>
					<Dialog.Description>Login As Student To View Status Updates</Dialog.Description>
				</Dialog.Header>
				<form action="/user/login" method="post" use:enhance={onSubmit}>
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								id="username"
								bind:value={username}
								placeholder="Enter Registration No..."
								class="col-span-3"
							/>
						</div>
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								type="password"
								placeholder="Enter Password..."
								id="password"
								class="col-span-3"
								bind:value={password}
							/>
						</div>
					</div>
				</form>
				<Dialog.Footer class="flex items-center justify-center pr-20">
					<Button variant="default" type="submit">Login</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>
</div>
