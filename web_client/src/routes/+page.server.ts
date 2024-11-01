//Imports
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoadEvent, RequestEvent } from './$types';
import { validateAdmin, validateStudent } from '$lib/server/validate_user';
export const actions: Actions = {
	default: action
};
function validateInput(input: string): boolean {
	const pattern = /^2\d{8}$/;
	return pattern.test(input);
}

async function action(event: RequestEvent) {
	const formData = await event.request.formData();
	const username: string = formData.get('username') as string;
	const password: string = formData.get('password') as string;
	const role: string = formData.get('role') as string;
	if (username === '' || password === '') {
		return fail(400, {
			message: 'Empty Input Fields!!',
			password: ''
		});
	}
	if (role == 'Student' && !validateInput(username)) {
		return fail(400, {
			message: 'Incorrect Registration Number',
			password: ''
		});
	}
	if (role == 'Admin') {
		validateAdmin(username, password, role);
	} else if (role == 'Student') {
		validateStudent(username, password, role);
	} else {
		return fail(400, {
			message: 'Invalid Role',
			password: ''
		});
	}
}
