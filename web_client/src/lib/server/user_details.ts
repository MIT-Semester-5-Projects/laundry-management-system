import { fail } from '@sveltejs/kit';
import { getSessionToken } from './get_token';
export interface StudentDetails {
	success: boolean;
	message?: string;
	data?: {
		date_received: string;
		date_collected: string;
		remaining_cycles: number;
		status: string;
	};
}

export async function fetchStudentDetails() {
	const userToken: string | null = getSessionToken();
	if (!userToken) {
		return fail(400, { message: 'Not Authorized' });
	}
	try {
		const response = await fetch('http://localhost:3504/laundry/status', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userToken}`
			}
		});
		if (!response) {
			return fail(500, { message: 'Unable to communicate with server' });
		}
		if (!response.ok) {
			return { success: false, message: 'Failed To Fetch Student Details' };
		}
		const data: StudentDetails = await response.json();
		if (!data.success) {
			return { success: false, message: data.message };
		} else {
			return data;
		}
	} catch (error) {
		console.log('Uh Oh, Unexpected Error');
		return fail(500, { message: error || 'We are experiencing some difficulties, please wait' });
	}
}
