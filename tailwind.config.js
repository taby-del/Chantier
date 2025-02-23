/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./App.{js,jsx,ts,tsx}","./assets/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        customGreen: '#7ddd7d', // Add your custom color here
      },
      boxShadow: {
        'custom-black': '0 3px 9px rgba(0, 0, 255, 0.5)', // Button custom shadow color
        'custom2-black': '0 0 3px rgba(0, 0, 255, 0.5)' // Overall custom shadow color
      },
    },
  },
  plugins: [],
}