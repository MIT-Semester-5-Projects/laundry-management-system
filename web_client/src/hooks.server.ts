import type { Handle } from '@sveltejs/kit';
const role: string = 'Admin';
export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/user')) {
		try {
			if (event.url.pathname.startsWith('/user/admin') && role !== 'Admin') {
				return Response.redirect('/login');
			}

			if (event.url.pathname.startsWith('/user/student') && role !== 'Student') {
				return Response.redirect('/login');
			}
		} catch (error) {
			console.error('JWT verification failed:', error);
			return Response.redirect('/login');
		}
	}

	return resolve(event);
};
