/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      gridTemplateRows: {
        5: "repeat(5, 1fr)",
      },
    },
  },
  plugins: [],
};
