/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#F37021",
        deepNavy: "#1C2A3A",
        darkGray: "#333333",
        lightGray: "#F9F9F9",
        peach: "#FFB074",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
