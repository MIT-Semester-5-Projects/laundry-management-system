// Testing Server Responses
async function mockAdminLogin(username: string, password: string, role: string) {
	// Successful response mock
	console.log(role);
	if (username === 'admin_user' && password === 'correct_password' && role === 'Admin') {
		return {
			success: true,
			user: {
				user_id: 12345,
				username: 'admin_user',
				role: 'Admin'
			}
		};
	}
	// Failed response mock
	return {
		success: false,
		message: 'Invalid username or password'
	};
}
async function mockStudentLogin(username: string, password: string, role: string) {
	// Successful response mock
	console.log(role);

	if (username === '225890312' && password === 'correct_password' && role === 'Student') {
		return {
			success: true,
			user: {
				user_id: 12345,
				username: '225890312',
				role: 'Student'
			}
		};
	}
	// Failed response mock
	return {
		success: false,
		message: 'Invalid username or password'
	};
}

export async function validateAdmin(username: string, password: string) {
	try {
		const response = await mockAdminLogin(username, password, 'Admin');
		if (response.success) {
			return { redirectUrl: '/user/admin' };
		} else {
			return { error: response.message };
		}
	} catch (error) {
		console.error('Error while validating Admin: ', error);
		return { error: 'Uh Oh! Server Error' };
	}
}

export async function validateStudent(username: string, password: string) {
	try {
		const response = await mockStudentLogin(username, password, 'Student');
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
