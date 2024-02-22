/** @type {import('prettier').Config} */
const astro_prettier = import("prettier-plugin-astro");
const prettier_tailwind = import("prettier-plugin-tailwindcss");
export default {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    astro_prettier,
    prettier_tailwind, // MUST come last
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  astroAllowShorthand: false,
};
