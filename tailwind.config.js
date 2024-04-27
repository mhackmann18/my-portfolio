/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary_text: "#ccc",
        secondary: "#e2e8f0",
        tertiary: "#ffd339",
        secondary_dark: "black",
        transparent_black: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        neutro: ["Neutro", "sans-serif"],
        neutro_outline: ["Neutro Outline", "sans-serif"],
        gt_america: ["GT America", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
};
