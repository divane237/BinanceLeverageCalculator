// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    singleQuote: true,
    plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
