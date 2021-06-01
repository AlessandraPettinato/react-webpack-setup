//To transform the Tailwind directives into pure CSS

const tailwindcss = require("tailwindcss");

module.exports = {
	plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};
