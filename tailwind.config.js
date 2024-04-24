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
        gradient_black: "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        portico: ["Portico", "sans-serif"],
        portico_outline: ["Portico Outline", "sans-serif"],
      },
    },
  },
  plugins: [],
};
