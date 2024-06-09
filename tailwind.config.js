/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "progress-bar": {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "progress-bar": "progress-bar 4s linear forwards",
      },
      spacing: {
        4: "1rem",
      },
      zIndex: {
        50: "50",
      },
      translate: {
        "1/2": "50%",
        "-1/2": "-50%",
      },
    },
  },
  plugins: [],
};
