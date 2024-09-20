/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"selector",
  theme: {
    extend: {
      colors: {
        primary: "#E1D7C6",
        secondary:"#B99470",
        primary_hover: "#8967B3",
        placehold: "#6B8A7A",
        textColor :"#CD5C08",
        buttonCol: "#405D72",
        backHov: "#C69774",
        head :"#8D493A",
      },
      fontFamily:{
        title: ["Special Elite"],
        placehold :["Annie Use Your Telescope"],
        todos : ["Schoolbell"]
      }
    },
  },
  plugins: [],
}