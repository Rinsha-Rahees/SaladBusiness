/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightGreen": "#acd855"
      },
      backgroundImage: {
        'herobg': "url('../public/Images/wood.png')",
        'herobgSalad': "url('../public/Images/heroBg1.png')",
       }
    },
    
  },
  plugins: [],

}