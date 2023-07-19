const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  style: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      },
    },
  },
};
