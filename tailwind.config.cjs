/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#8275FB",
        secondary:"#808080",
        bgColor: "#E8E6F5"
      }
    },
  },
  plugins: [],
}
