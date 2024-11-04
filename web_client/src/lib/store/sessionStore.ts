// src/lib/stores/sessionStore.ts
import { writable } from 'svelte/store';

interface Session {
	token: string | null;
	userRole: string | null;
}

function createSessionStore() {
	const { subscribe, set, update } = writable<Session>({ token: null, userRole: null });

	return {
		subscribe,
		setToken: (token: string, userRole: string) =>
			update((session) => ({ ...session, token, userRole })),
		clearSession: () => set({ token: null, userRole: null })
	};
}

export const sessionStore = createSessionStore();
