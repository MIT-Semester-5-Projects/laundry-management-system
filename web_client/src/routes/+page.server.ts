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

function createSession(event: RequestEvent, token: string) {
	const maxAge = 60 * 60 * 1000;
	event.cookies.set('token', token, { maxAge, path: '/' });
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
		if (typeof result == 'object' && 'message' in result) {
			return fail(400, { message: result.message, password: '' });
		} else if (typeof result == 'string') {
			createSession(event, result);
			if (role === 'Student') {
				sessionStore.setToken(result, role, username);
				throw redirect(302, '/user/student');
			} else if (role === 'Admin') {
				sessionStore.setToken(result, role, username);
				throw redirect(302, '/user/admin');
			}
		}
	}
};
