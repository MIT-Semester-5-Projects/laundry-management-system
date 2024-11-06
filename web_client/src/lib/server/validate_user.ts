import { fail } from '@sveltejs/kit';
// Response Typing
export interface LoginResponse {
	token: string;
}

export async function validateUser(userName: string, password: string, role: string) {
	try {
		// Perform fetch call and await response
		const response = await fetch('http://localhost:3504/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ userName, password, role })
		});

		// Check if response is ok (status 200-299)
		if (!response.ok) {
			return fail(400, { message: 'Failed to authenticate with server' });
		}
		// Parse JSON response
		const json_response: LoginResponse = await response.json();
		const token: string = json_response.token;
		return token;
		// If the response contains success and it's true, return data
	} catch (error) {
		console.error('Error while validating user details:', error);
		return fail(500, { message: 'Server error' });
	}
}
