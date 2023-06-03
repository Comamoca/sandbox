/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  // plugins: [require("daisyui")],
  plugins: [
    require("preline/plugin"),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
}
