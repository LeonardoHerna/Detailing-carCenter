/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F",
        "primary-dark": "#B71C1C",

        background: {
          light: "#f9fafb",
          dark: "#0b0b0b",
        },

        surface: {
          light: "#ffffff",
          dark: "#111111",
        },
      },

      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },

      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.9)), url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
