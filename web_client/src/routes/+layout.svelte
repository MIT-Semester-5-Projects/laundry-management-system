<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Navbar } from '$lib/index';
	import { Footer } from '$lib/index';
</script>

<ModeWatcher />
<Navbar />
<main
	class="mb-auto flex min-h-screen flex-col items-center justify-center"
	style="background-image: url('/lightbg.svg'); background-repeat: no-repeat; background-position: center; background-size: cover;"
>
	<slot></slot>
</main>
<Footer />
