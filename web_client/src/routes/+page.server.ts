// src/routes/+page.server.ts
import { validateUser, type LoginResponse } from '$lib/server/validate_user';
import { fail, redirect } from '@sveltejs/kit';
import { sessionStore } from '$lib/store/sessionStore';
import type { RequestEvent } from './$types';

// Validation function for registration number
function validateInput(input: string): boolean {
	const pattern = /^2\d{8}$/; // Adjust based on your actual validation logic
	return pattern.test(input);
}

function createSession(event: RequestEvent, response: LoginResponse) {
	const maxAge = 1800000;
	if (response.success && response.data?.token) {
		event.cookies.set('token', response.data.token, { maxAge, path: '/' });
	}
}

export const actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		const role = formData.get('role') as string;

		// Check for empty fields
		if (!username || !password) {
			return fail(400, { message: 'Empty Input Fields!!', password: '' });
		}

		// Validate Student input if role is Student
		if (role === 'Student' && !validateInput(username)) {
			return fail(400, { message: 'Invalid Registration No.', password: '' });
		}

		const result = await validateUser(username, password, role);
		if (result == undefined) {
			return fail(400, { message: 'Uh Oh, Our Systems Are Experiencing An Error', password: '' });
		}
		if ('error' in result) {
			return fail(400, { message: result.error, password: '' });
		} else if (result.success && result.data) {
			createSession(event, result);
			sessionStore.setToken(result.data.token, result.data.userRole, username);
			if (role === 'Student') {
				throw redirect(302, '/user/student');
			} else if (role === 'Admin') {
				throw redirect(302, '/user/admin');
			}
		}
	}
};
