/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2a9d8f",
        secondary: "#264653",
        third: "#00509d",
      },
    },
  },
  plugins: [],
};
