import { sessionStore } from '$lib/store/sessionStore';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

function getUserDetails(): Promise<string | undefined> {
	return new Promise((resolve) => {
		const unsubscribe = sessionStore.subscribe((session) => {
			if (session.userRole) {
				resolve(session.userRole); // Resolve the promise with the user role
			} else {
				resolve(undefined); // Resolve with undefined if no userRole found
			}
			unsubscribe(); // Unsubscribe to prevent memory leaks after getting the role
		});
	});
}

export const handle: Handle = async ({ event, resolve }) => {
	//Route Protection
	const role: string | undefined = await getUserDetails();
	if (event.url.pathname.startsWith('/user')) {
		try {
			if (!role) {
				throw redirect(302, '/');
			}
			// Redirect if the user is trying to access `/user/admin` without Admin role
			if (event.url.pathname.startsWith('/user/admin') && role !== 'Admin') {
				throw redirect(302, '/'); // Use throw redirect instead of Response.redirect
			}

			// Redirect if the user is trying to access `/user/student` without Student role
			if (event.url.pathname.startsWith('/user/student') && role !== 'Student') {
				throw redirect(302, '/'); // Use throw redirect instead of Response.redirect
			}
		} catch (error) {
			console.error('Auth Error', error);
			throw redirect(302, '/'); // Default redirect on error
		}
	}

	// If no redirects are triggered, continue with the request as usual
	return resolve(event);
};
