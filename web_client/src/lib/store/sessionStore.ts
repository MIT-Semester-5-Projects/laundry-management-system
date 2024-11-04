// src/lib/stores/sessionStore.ts
import { writable } from 'svelte/store';

interface Session {
	token: string | null;
	userRole: string | null;
	userName: string | null;
}

function createSessionStore() {
	const { subscribe, set, update } = writable<Session>({
		token: null,
		userRole: null,
		userName: null
	});

	return {
		subscribe,
		setToken: (token: string, userRole: string, userName: string) =>
			update((session) => ({ ...session, token, userRole, userName })),
		clearSession: () => set({ token: null, userRole: null, userName: null })
	};
}

export const sessionStore = createSessionStore();
