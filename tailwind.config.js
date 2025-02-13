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
        'custom-black': '0 2px 5px rgba(0, 0, 255, 0.5)', // Example custom shadow color
      },
    },
  },
  plugins: [],
}