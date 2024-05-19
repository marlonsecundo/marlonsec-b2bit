/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "selector",

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
        dark: {
          primary: "#0d3b66",
          secondary: "#ffc107",
          neutral: "#121212",
          "neutral-content": "#e0e0e0",
          "base-100": "#1e1e1e",
          "--base-secondary": "#252525",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
