//Imports
import { authToken, userRole } from '$lib/stores/auth';
//Response Typing
interface LoginResponse {
	success: boolean;
	message: string;
	data?: {
		userId: string;
		username: string;
		token: string;
	};
}

//// Testing Server Responses
//async function mockAdminLogin(username: string, password: string, role: string) {
//	// Successful response mock
//	console.log(role);
//	if (username === 'admin_user' && password === 'correct_password' && role === 'Admin') {
//		return {
//			success: true,
//			user: {
//				user_id: 12345,
//				username: 'admin_user',
//				role: 'Admin'
//			}
//		};
//	}
//	// Failed response mock
//	return {
//		success: false,
//		message: 'Invalid username or password'
//	};
//}
//async function mockStudentLogin(username: string, password: string, role: string) {
//	// Successful response mock
//	console.log(role);
//
//	if (username === '225890312' && password === 'correct_password' && role === 'Student') {
//		return {
//			success: true,
//			user: {
//				user_id: 12345,
//				username: '225890312',
//				role: 'Student'
//			}
//		};
//	}
//	// Failed response mock
//	return {
//		success: false,
//		message: 'Invalid username or password'
//	};
//}

export async function validateAdmin(username: string, password: string) {
	const role = 'Admin';
	try {
		const response = await fetch('http://localhost:8000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password, role })
		});

		if (!response.ok) {
			return { error: 'Failed to authenticate with server' };
		}

		const data = (await response.json()) as LoginResponse;

		if (data.success) {
			return { redirectUrl: '/user/admin' };
		} else {
			return { error: data.message };
		}
	} catch (error) {
		console.error('Error while validating Admin: ', error);
		return { error: 'Server error' };
	}
}
export async function validateStudent(username: string, password: string) {
	const role: string = 'Student';
	try {
		const server_response = await fetch('http://localhost:8000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'applications/json'
			},
			body: JSON.stringify({ username, password, role })
		});
		if (!server_response.ok) {
			return { error: 'Failed To Authenticate With Server' };
		}
		const response = (await server_response.json()) as LoginResponse;

		if (response.success) {
			return { redirectUrl: '/user/student' };
		} else {
			return { error: response.message };
		}
	} catch (error) {
		console.error('Error while validating Student: ', error);
		return { error: 'Uh Oh! Server Error' };
	}
}
