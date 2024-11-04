import { sessionStore } from '$lib/store/sessionStore';
import { fail } from '@sveltejs/kit';

export interface StudentDetails {
	success: boolean;
	data: {
		date_received: string;
		date_collected: string;
		remaining_cycles: number;
		status: string;
	};
}

export interface Analytics {
	success: boolean;
	data: {
		daily: {
			date: string;
			noOfBags: number;
		};
		weekly: {
			week: string;
			noOfBags: number;
		};
		stats: {
			avgTimeTaken: number;
			avgNoOfBags: number;
			DaysOperating: number;
		};
	};
}

export async function fetchStudentDetails() {
	let token: string | null = null;

	// Subscribe to sessionStore to get the token
	const unsubscribe = sessionStore.subscribe((session) => {
		token = session.token;
	});
	unsubscribe();

	if (!token) {
		// Return an error if token is missing
		return fail(401, { message: 'Unauthorized: No token provided' });
	}

	try {
		const response = await fetch('http://localhost:8000/laundry/details', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`, // Template literal for token
				'Content-Type': 'application/json'
			}
		});

		// Check if the response is OK
		if (!response.ok) {
			return fail(response.status, { message: 'Error Fetching Details' });
		}

		// Parse the JSON response
		const details = (await response.json()) as StudentDetails;

		// Return data if successful, else fail
		if (details.success) {
			return details.data;
		} else {
			return fail(400, { message: 'Error Fetching Details' });
		}
	} catch (error) {
		console.error('Error fetching student details:', error);
		return fail(500, { message: 'Internal Server Error' });
	}
}

export async function fetchAnalytics() {
	let token: string | null = null;

	// Subscribe to sessionStore to get the token
	const unsubscribe = sessionStore.subscribe((session) => {
		token = session.token;
	});
	unsubscribe();

	if (!token) {
		// Return an error if token is missing
		return fail(401, { message: 'Unauthorized: No token provided' });
	}

	try {
		const response = await fetch('http://localhost:8000/laundry/Analytics', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`, // Template literal for token
				'Content-Type': 'application/json'
			}
		});

		// Check if the response is OK
		if (!response.ok) {
			return fail(response.status, { message: 'Error Fetching Details' });
		}

		// Parse the JSON response
		const details = (await response.json()) as Analytics;

		// Return data if successful, else fail
		if (details.success) {
			return details.data;
		} else {
			return fail(400, { message: 'Error Fetching Details' });
		}
	} catch (error) {
		console.error('Error fetching Analytics:', error);
		return fail(500, { message: 'Internal Server Error' });
	}
}
