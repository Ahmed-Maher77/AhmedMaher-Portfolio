/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}", // Adjust if you have other file types
	],
	theme: {
		extend: {
			container: {
				center: true, // Centers the container horizontally
				padding: {
					DEFAULT: "1.5rem", // Default padding (adjust as needed)
				},
			},
		},
	},
	plugins: [],
};
