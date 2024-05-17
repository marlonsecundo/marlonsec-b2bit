/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      colors: {
        "base-secondary": "var(--base-secondary)",
      },
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
          "neutral-content": "#000000",
          "base-100": "#f1f1f1",
          "--base-secondary": "#f1f5f9",
        },
        dark: {},
      },
    ],
  },
  plugins: [require("daisyui")],
};
