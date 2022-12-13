/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        specialWhite: "#fafafa",
        specialGray: "#696969",
        specialBlack: "#141414",
      },
      fontFamily: {
        Epilogue: ["Epilogue"],
      },
      width: {
        26: "6.5rem",
      },
      padding: {
        26: "6.5rem",
      },
    },
  },
  plugins: [],
};
