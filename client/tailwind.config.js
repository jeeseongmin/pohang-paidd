// tailwind.config.js
module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			minHeight: (theme) => ({
				...theme("spacing"),
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide"), require("autoprefixer")],
};
