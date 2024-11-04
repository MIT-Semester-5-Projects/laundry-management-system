//Imports
//Response Typing
export interface LoginResponse {
	success: boolean;
	message: string;
	data?: {
		userId: string;
		username: string;
		userRole: string;
		token: string;
	};
}

export async function validateUser(username: string, password: string, role: string) {
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

		if (data.success && data.data) {
			return data;
		} else {
			return { error: data.message };
		}
	} catch (error) {
		console.error('Error while validating user details: ', error);
		return { error: 'Server error' };
	}
}

//// Testing Server Responses async function mockAdminLogin(username: string, password: string, role: string) {
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
