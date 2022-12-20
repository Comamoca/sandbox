/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../index.html", "../routes/**/*.tsx"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}
