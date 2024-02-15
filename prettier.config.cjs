/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	bracketSameLine: true,
	arrowParens: 'avoid',
}

module.exports = config
