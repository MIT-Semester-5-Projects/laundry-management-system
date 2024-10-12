<script>
	// your script goes here
	import Navlist from './navlist.svelte';
</script>

<nav class="from-myblue to-mybrown flex items-end justify-between bg-gradient-to-r from-5% to-100%">
	<a href="/"><img class="h-16 duration-500 ease-in hover:h-24" src="/logo.png" alt="" /></a>
	<div class="">
		<Navlist />
	</div>
	<slot />
</nav>
