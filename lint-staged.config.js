/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*": "prettier . --check",
  "*.{js,jsx,ts,tsx}": "eslint",
};

export default config;
