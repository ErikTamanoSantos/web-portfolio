/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				neutralFace: ['NeutralFace', 'sans-serif'],
			},
			colors: {
				"light-color": "#E5E6E4",
				"dark-color": "#332E2F",
				"accent-color": "#403370",
			}
		},
	},
	plugins: [],
}
