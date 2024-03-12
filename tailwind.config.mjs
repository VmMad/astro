/** @type {import('tailwindcss').Config} */
import uiKitPreset from "@iota/ui-kit/preset";
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@iota/ui-kit/**/*.{ts,js,svelte}",
	],
	presets: [uiKitPreset],
	theme: {
		extend: {},
	},
	plugins: [],
};
