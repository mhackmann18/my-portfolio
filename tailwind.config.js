/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#e2e8f0",
        tertiary: "#ffd339",
        thing: "#181818",
        secondary_dark: "#1a202c",
        gradient_black: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        portico: ["Portico", "sans-serif"],
        portico_outline: ["Portico Outline", "sans-serif"],
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
