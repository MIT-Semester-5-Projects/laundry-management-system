import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
export default {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				//CHATGPT COLOR SCHEME
				lightTheme: {
					primary: '#6d9dc5', // Softer blue tone for reduced intensity
					'primary-content': '#ffffff', // High contrast white for text on primary
					secondary: '#0369a1', // Complementary to primary for better harmony
					'secondary-content': '#ffffff', // White for readability
					accent: '#0ea5e9', // Calming greenish hue
					'accent-content': '#ffffff', // White for clear text on accents
					neutral: '#e0e0e0', // Soft neutral for backgrounds
					'neutral-content': '#2c2c2c', // Dark gray for contrast
					'base-100': '#f4f4f4', // Light gray for backgrounds
					'base-200': '#e9ecef', // Slightly darker gray
					'base-300': '#ffffff', // Pure white for the brightest areas
					'base-content': '#333333', // Dark text for readability
					info: '#4ca1e0', // Calming blue for information
					'info-content': '#ffffff', // White for clarity
					success: '#7dc847', // Pleasant green for success
					'success-content': '#ffffff', // White text for contrast
					warning: '#f9a825', // Warm gold for warnings
					'warning-content': '#ffffff', // White for readability
					error: '#e57373', // Softer red for error
					'error-content': '#ffffff'
				},
				darkTheme: {
					primary: '#4b6a8a', // Muted blue tone for dark backgrounds
					'primary-content': '#e0e0e0', // Light gray for readable text on primary
					secondary: '#03466b', // Darker blue for harmony with primary
					'secondary-content': '#e0e0e0', // Light gray for readability
					accent: '#0a7fb9', // Calming bluish hue for accents
					'accent-content': '#f4f4f4', // Light gray for clear text on accents
					neutral: '#1c1c1c', // Dark neutral for backgrounds
					'neutral-content': '#f4f4f4', // Light gray for contrast
					'base-100': '#121212', // Very dark gray for the base background
					'base-200': '#1e1e1e', // Slightly lighter dark gray
					'base-300': '#2c2c2c', // Darker gray for contrast areas
					'base-content': '#e0e0e0', // Light text for readability
					info: '#4ca1e0', // Calming blue for information (same as light)
					'info-content': '#f4f4f4', // Light gray for clarity
					success: '#6ca63f', // Soft green for success on dark backgrounds
					'success-content': '#f4f4f4', // Light gray for contrast
					warning: '#e68a00', // Warmer orange for warning on dark backgrounds
					'warning-content': '#f4f4f4', // Light gray for readability
					error: '#cf6679', // Muted red for errors
					'error-content': '#f4f4f4' // Light gray for readability
				}
			}
		]
	},
	plugins: [daisyui]
} satisfies Config;
