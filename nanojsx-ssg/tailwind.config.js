/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx", "*.tsx", "_dist/**/*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#838C74",

          "secondary": "#D9BA5F",

          "accent": "#8C594D",

          "neutral": "#F2DABD",

          "base-100": "#F2DABD",

          "info": "#75BFBF",

          "success": "#9AB7A6",

          "warning": "#F2C46D",

          "error": "#D9A3A3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
