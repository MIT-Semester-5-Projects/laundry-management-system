// Response Typing
export interface LoginResponse {
	success: boolean;
	message: string;
	data?: {
		userId: string;
		userName: string;
		userRole: string;
		// token: string;
	};
}

export async function validateUser(
	userName: string,
	password: string,
	role: string
): Promise<LoginResponse | { error: string }> {
	try {
		// Use mock functions instead of real fetch call
		const response = await fetch('http://localhost:3504/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ userName, password, role })
		});
	} catch (error) {
		console.error('Error while validating user details: ', error);
		return { error: 'Server error' };
	}
}
