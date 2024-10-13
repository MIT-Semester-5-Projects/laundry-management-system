<div class="flex min-h-screen flex-col">
	<div class="navbar bg-primary justify-between">
		<a href="/"
			><img class="w-24" src="/logo.png" alt="Quick Smart Wash - Caring For Second Skin" /></a
		>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li class="text-2xl"><a href="/">Home</a></li>
			</ul>
		</div>
	</div>
	<main class="flex-1">
		<slot></slot>
	</main>

	<footer class="footer bg-neutral text-primary items-center p-4">
		<aside class="grid-flow-col items-center">
			<img class="w-16" src="/grayLogo.png" alt="Quick Smart Wash logo" />
			<p class="hidden">
				Copyright © {new Date().getFullYear()} - All right reserved
			</p>
		</aside>
		<nav class="grid-flow-col pr-2 gap-4 md:place-self-center md:justify-self-end">
			<a href="https://www.instagram.com/">
				<svg
					width="30"
					height="30"
					viewBox="0 0 26 26"
					class="fill-none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
						stroke="#6d9dc5"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
						stroke="#6d9dc5"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<rect
						x="15.5"
						y="9"
						width="2"
						height="2"
						rx="1"
						transform="rotate(-90 15.5 9)"
						fill="#6d9dc5"
					/>
					<rect
						x="16"
						y="8.5"
						width="1"
						height="1"
						rx="0.5"
						transform="rotate(-90 16 8.5)"
						stroke="#6d9dc5"
						stroke-linecap="round"
					/>
				</svg>
			</a>
			<a href="https://www.youtube.com">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					></path>
				</svg>
			</a>
			<a href="https://facebook.com">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
				>
					<path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					></path>
				</svg>
			</a>
		</nav>
	</footer>
</div>
