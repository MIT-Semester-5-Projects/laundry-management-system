<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { slide } from 'svelte/transition';
	//import Dropdown from 'dropdown.svelte';
	function redirect() {
		location.href = '/services';
	}
	const popupFocusClick: PopupSettings = {
		event: 'focus-click',
		target: 'popupFocusClick',
		placement: 'bottom'
	};
</script>

<ul class="flex items-end">
	<li class="pr-5 text-white hover:text-blue-500">
		<button
			type="button"
			class="
btn rounded-3xl bg-transparent text-xl duration-300 ease-in active:bg-white"
			on:click={redirect}
			on:keypress={redirect}
		>
			Services
		</button>
	</li>
	<li class="pr-5 text-white hover:text-blue-500">
		<button
			type="button"
			class="btn rounded-3xl bg-transparent text-xl duration-300 ease-in active:bg-white"
			placeholder="Focus-Click"
			use:popup={popupFocusClick}
		>
			Contact Us
		</button>
	</li>
	<li class="pr-5 text-white hover:text-blue-500">
		<button
			type="button"
			class="btn rounded-3xl bg-transparent text-xl duration-300 ease-in active:bg-white"
		>
			Socials
		</button>
	</li>
</ul>

<ul
	transition:slide
	class="list grid items-start rounded-2xl border-2 border-red-700"
	data-popup="popupFocusClick"
>
	<li>
		<img class="pl-2" src="/phone.png" alt="phone number" width="25px" />
		<span class="flex-auto text-sm">+91 449029320</span>
	</li>
	<li>
		<img class="pl-2" src="/email.png" alt="email address: qswash@gmail.com" width="25px" />
		<span class="flex-auto text-sm">qswash@gmail.com</span>
	</li>
</ul>
