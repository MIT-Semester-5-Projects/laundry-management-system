<script lang="ts">
	let isContactClicked = false;
	let isSocialsClicked = false;
	const handlecontactclick = () => {
		isContactClicked = !isContactClicked;
	};
	const handlesocialsclick = () => {
		isSocialsClicked = !isSocialsClicked;
	};
	const redirect = () => {
		location.href = '/services';
	};
</script>

<nav
	class="from-myblue to-mybrown flex h-[15vh] w-full items-end justify-between bg-gradient-to-r from-5% to-100% pt-2"
>
	<a href="/" class="pl-2">
		<img class="mt-2 w-[75%]" src="/logo.png" alt="Laundry Business Logo" />
	</a>
	<ul class="m-0 flex list-none pb-5 pl-5 pr-5 text-white">
		<li class="pr-8">
			<button
				type="button"
				class="text-2xl hover:text-blue-500"
				on:click={redirect}
				on:keydown={redirect}>Services</button
			>
		</li>
		<li class="pr-8">
			<button type="button" class="text-2xl hover:text-blue-500" on:click={handlecontactclick}>
				Contact Us
			</button>
		</li>
		<li class="pr-8 hover:text-blue-500">
			<button
				type="button"
				class="text-2xl hover:text-blue-500"
				on:keydown={handlecontactclick}
				on:click={handlecontactclick}
			>
				Socials
			</button>
		</li>
	</ul>
</nav>
