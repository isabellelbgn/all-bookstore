/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
