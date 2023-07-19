const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
    // mode: "jit",
    content: ["./src/components/**/*.{js,jsx,ts,tsx,css}", "./src/pages/**/*.{js,jsx,ts,tsx,css}", "./src/theme/**/*.{css,js}"],
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
