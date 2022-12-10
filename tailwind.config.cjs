/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f4f9",
          100: "#bfe1f2",
          200: "#99cfeb",
          300: "#72bbdf",
          400: "#4ba7d8",
          500: "#2493d1",
          600: "#1e7fb9",
          700: "#176ba1",
          800: "#105788",
          900: "#0a4460",
        },
      },
    }
  },
  plugins: [],
}
