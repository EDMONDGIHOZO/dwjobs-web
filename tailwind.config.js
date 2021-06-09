const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
