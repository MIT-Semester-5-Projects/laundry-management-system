import { sessionStore } from '../store/sessionStore';

export function getSessionToken(): string | null {
	let token: string | null = null;

	// Subscribe to sessionStore to get the token
	const unsubscribe = sessionStore.subscribe((session) => {
		token = session.token;
	});
	unsubscribe();
	return token;
}
