module.exports = {
  content: ["./index.html", "./src/**/*.{gleam,mjs}"],
  theme: {
    extend: {},
    colors: {
      neutral: {
        DEFAULT: "hsl(var(--neutral) / <alpha-value>)",
        foreground: "hsl(var(--neutral-foreground) / <alpha-value>)",
      },
      primary: {
        DEFAULT: "hsl(var(--primary) / <alpha-value>)",
        foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
        foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
      },
      info: {
        DEFAULT: "hsl(var(--info) / <alpha-value>)",
        foreground: "hsl(var(--info-foreground) / <alpha-value>)",
      },
      success: {
        DEFAULT: "hsl(var(--success) / <alpha-value>)",
        foreground: "hsl(var(--success-foreground) / <alpha-value>)",
      },
      warning: {
        DEFAULT: "hsl(var(--warning) / <alpha-value>)",
        foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
      },
      danger: {
        DEFAULT: "hsl(var(--danger) / <alpha-value>)",
        foreground: "hsl(var(--danger-foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
