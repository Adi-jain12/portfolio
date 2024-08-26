import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E1E8EF',
					100: '#D4DEE7',
					200: '#B7C7D7',
					300: '#99B0C7',
					400: '#7C99B6',
					500: '#5E82A6',
					600: '#4C6B8A',
					700: '#3C546C',
					800: '#2C3D4F',
					900: '#3e2723',
					950: '#141C24',
				},
				accent: {
					50: '#FAF5F0',
					100: '#F4ECE1',
					200: '#F5F5DC',
					300: '#DDC2A2',
					400: '#D2AF84',
					500: '#C69963',
					600: '#B78343',
					700: '#926835',
					800: '#6C4D28',
					900: '#4B351B',
					950: '#382814',
				},
			},
			animation: {
				'spin-slow': 'spin 0.3s linear infinite',
			},
		},
	},
	plugins: [],
};
export default config;
