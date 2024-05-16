/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        card: `box-shadow: 0px 0px 64px 0px #00000040`,
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: "#02274f",
          secondary: "#FDCF00",
          neutral: "#FFFFFF",
          "base-100": "#f1f1f1",
          "primary-content": "#000000",
        },
        dark: {},
      },
    ],
  },
  plugins: [require("daisyui")],
};
