<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import * as Dialog from '$lib/components/ui/dialog';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { ActionResult } from '@sveltejs/kit';

	interface FormEvent {
		data: ActionResult;
		form: HTMLFormElement;
		update: () => void;
	}

	let errorMsg: string = '';
	let username: string = '';
	let password: string = '';
	let wrongdeets: boolean = false;
	const url = 'localhost:8000/user/login';
	// Enhanced form submission
	async function onSubmit({ data, form, update }: FormEvent) {
		const role: string | null = form.getAttribute('data-role');
		const formData = new FormData(form);
		formData.append('role', role ?? '');
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				const result = await response.json();
				if (result.success) {
					if (role == 'admin') {
						goto('/user/admin');
					} else {
						goto('/user/student');
					}
				} else {
					wrongdeets = true;
					errorMsg = result.error || 'Bad Credentials';
					password = '';
				}
			} else {
				wrongdeets = true;
				errorMsg = 'Server Error. Please Try Again Later';
			}
		} catch (error) {
			wrongdeets = true;
			errorMsg = 'Network Error. Please Check Your Connection';
			console.log(error);
		}
		update();
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
				<form method="POST" use:enhance={onSubmit} data-role="admin">
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								name="username"
								bind:value={username}
								placeholder="Enter Username..."
								class="col-span-3"
							/>
						</div>
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								type="password"
								placeholder="Enter Password..."
								name="password"
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
				<form method="POST" use:enhance={onSubmit} data-role="student">
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								name="username"
								bind:value={username}
								placeholder="Enter Registration No..."
								class="col-span-3"
							/>
						</div>
						<div class="grid grid-cols-3 items-center gap-4">
							<Input
								type="password"
								placeholder="Enter Password..."
								name="password"
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
