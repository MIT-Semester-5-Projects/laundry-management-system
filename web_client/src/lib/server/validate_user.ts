import { fail, redirect } from '@sveltejs/kit';

export async function validateAdmin(username: string, password: string, role: string) {
	try {
		const server_response = await fetch('http://localhost:8000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/JSON'
			},
			body: JSON.stringify({ username, password, role })
		});
		if (!server_response.ok) {
			throw new Error('Please Try Again Later');
		}
		const data = await server_response.json();

		if (data.success) {
			return redirect(302, '/user/admin');
		} else {
			return fail(400, { message: 'Bad Credentials', password: '' });
		}
	} catch (error) {
		console.error('Error While Logging In: ', error);
		return fail(404, { message: error || 'Uh Oh! Server Error' });
	}
}

export async function validateStudent(regNo: string, password: string, role: string) {
	try {
		const server_response = await fetch('http://localhost:8000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/JSON'
			},
			body: JSON.stringify({ regNo, password, role })
		});
		if (!server_response.ok) {
			throw new Error('Please Try Again Later');
		}
		const data = await server_response.json();

		if (data.success) {
			return redirect(302, '/user/student');
		} else {
			return fail(400, { message: 'Bad Credentials', password: '' });
		}
	} catch (error) {
		console.error('Error While Logging In: ', error);
		return fail(404, { message: error || 'Uh Oh! Server Error' });
	}
}
