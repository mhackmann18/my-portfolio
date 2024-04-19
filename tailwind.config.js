/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#e2e8f0",
        tertiary: "#ffd339",
      },
      fontFamily: {
        portico: ["Portico", "sans-serif"],
        portico_outline: ["Portico Outline", "sans-serif"],
      },
    },
  },
  plugins: [],
};
