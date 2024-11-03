// src/routes/+page.server.ts
import { validateAdmin, validateStudent } from '$lib/server/validate_user';
import { fail, redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

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

		let result;
		if (role === 'Admin') {
			result = await validateAdmin(username, password);
		} else if (role === 'Student') {
			result = await validateStudent(username, password);
		}
		if (result == undefined) {
			return fail(400, { message: 'Uh Oh, Our Systems Are Experiencing An Error', password: '' });
		}
		// Handle the result
		if (result.redirectUrl) {
			throw redirect(302, result.redirectUrl);
		} else if (result.error) {
			return fail(400, { message: result.error, password: '' });
		}

		return fail(500, { message: 'Unexpected error occurred.', password: '' });
	}
};

// Validation function for registration number
function validateInput(input: string): boolean {
	const pattern = /^2\d{8}$/; // Adjust based on your actual validation logic
	return pattern.test(input);
}
