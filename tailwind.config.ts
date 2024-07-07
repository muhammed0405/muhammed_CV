/** @format */

import { MdOpacity } from "react-icons/md"
import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				anton: ["Anton SC", "sans-serif"],
			},
			screens: {
				"3xl": "1800px",
			},
			keyframes: {
				"slide-in-from-left": {
					"0%": {
						opacity: "1",
						transform: "translateX(0)",
					},
					"50%": {
						opacity: "1",
						transform: "translateX(-100%)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"rotate-icon": {
					"0": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(350deg)",
					},
				},
				blink: {
					"0%, 100%": { opacity: "0" },
					"50%": { opacity: "1" },
				},
				"slide-out-from-right": {
					"0": {
						opacity: "0",
					},
				},
			},

			animation: {
				"slide-in-from-left": "slide-in-from-left 0.7s ease-in-out",
				blink: "blink 1s step-end infinite",
				"rotate-icon": "rotate-icon 10s linear infinite",
			},
		},
	},
	plugins: [],
}
export default config
