// Response Typing
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

export async function validateUser(
	username: string,
	password: string,
	role: string
): Promise<LoginResponse | { error: string }> {
	try {
		// Use mock functions instead of real fetch call
		let response: LoginResponse;
		if (role === 'Admin') {
			response = await mockAdminLogin(username, password, role); // Ensure async handling
		} else {
			response = await mockStudentLogin(username, password, role); // Ensure async handling
		}

		if (!response.success) {
			return { error: 'Failed to authenticate with server' };
		}

		if (response.success && response.data) {
			return response;
		} else {
			return { error: response.message };
		}
	} catch (error) {
		console.error('Error while validating user details: ', error);
		return { error: 'Server error' };
	}
}

// Mock Admin Login
function mockAdminLogin(username: string, password: string, role: string): Promise<LoginResponse> {
	// Successful response mock
	if (username === 'Sudeep' && password === 'bruh' && role === 'Admin') {
		return Promise.resolve({
			success: true,
			message: 'Successfully Authenticated',
			data: {
				userId: '12',
				username: 'Sudeep',
				userRole: 'Admin',
				token: '1319O9we8r9weuawdfansdf12.129318203jdlfas'
			}
		});
	}
	// Failed response mock
	return Promise.resolve({
		success: false,
		message: 'Invalid username or password'
	});
}

// Mock Student Login
function mockStudentLogin(
	username: string,
	password: string,
	role: string
): Promise<LoginResponse> {
	// Successful response mock
	if (username === '225890312' && password === 'svelte' && role === 'Student') {
		return Promise.resolve({
			success: true,
			message: 'Successfully Authenticated',
			data: {
				userId: '12',
				username: 'Nived',
				userRole: 'Student',
				token: '1249dfalsdkfjaaskdfj'
			}
		});
	}
	// Failed response mock
	return Promise.resolve({
		success: false,
		message: 'Invalid username or password'
	});
}
