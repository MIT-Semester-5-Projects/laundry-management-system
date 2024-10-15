import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				//CHATGPT COLOR SCHEME
				lightTheme: {
					primary: '#6d9dc5', // Softer blue tone for reduced intensity
					'primary-content': '#ffffff', // High contrast white for text on primary
					secondary: '#c56d9d', // Complementary to primary for better harmony
					'secondary-content': '#ffffff', // White for readability
					accent: '#6dc5a7', // Calming greenish hue
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
					primary: '#6d9dc5', // Same soft blue to maintain consistency
					'primary-content': '#ffffff', // White for clarity on dark backgrounds
					secondary: '#c56d9d', // Matching complementary color
					'secondary-content': '#ffffff', // White for readability
					accent: '#6dc5a7', // Harmonious accent color
					'accent-content': '#ffffff', // White for clarity
					neutral: '#2e3440', // Darker neutral background
					'neutral-content': '#d8dee9', // Light gray for text
					'base-100': '#1b1f27', // Deep black-gray for dark backgrounds
					'base-200': '#262a33', // Slightly lighter for contrast
					'base-300': '#333841', // Dark but not black
					'base-content': '#d8dee9', // Light gray for readability
					info: '#4ca1e0', // Matching info color
					'info-content': '#ffffff', // White for clarity
					success: '#7dc847', // Matching success green
					'success-content': '#ffffff', // White text for clarity
					warning: '#f9a825', // Matching warm warning color
					'warning-content': '#ffffff', // White for readability
					error: '#e57373', // Softer red for errors
					'error-content': '#ffffff'
				}
			}
		]
	},
	plugins: [daisyui]
} satisfies Config;
