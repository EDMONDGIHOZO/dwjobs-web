const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#003f63",
      secondary: "#f2b138",
      white: "#fff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
