/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        usedCarsTheme: {
          primary: "#FF6A00",

          secondary: "#D926A9",

          "base-100": "#f3f4f6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
