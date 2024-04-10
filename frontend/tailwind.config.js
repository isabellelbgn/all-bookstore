/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "320px",
        sm: "600px",
        nm: "800px",
        md: "1024px",
        lg: "1280px",
        xl: "1920px",
      },
      colors: {
        navigation: "#F1F1F1",
        search: "#3F2A2A",
        green: {
          50: "#A2AD84",
          70: "#6D7E5F",
          100: "#5A6D50",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    }),
  ],
};
