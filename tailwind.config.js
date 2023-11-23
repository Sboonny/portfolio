/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svg}"],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            "ul > li::marker": {
              fontWeight: "600",
            },
            "pre code::before": {
              "padding-left": "unset",
            },
            "pre code::after": {
              "padding-right": "unset",
            },
            code: {
              fontWeight: "400",
              "border-radius": "0.25rem",
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem",
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem",
            },
            a: {
              textDecoration: `none`,
              "&:hover": {
                textDecoration: `underline`,
              },
            },
          },
        },
      }),
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};