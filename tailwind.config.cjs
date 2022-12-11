/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        luckiestGuy: ["'Luckiest Guy'", "'sans-serif'"],
      },
      screens: {
        ch: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
}
