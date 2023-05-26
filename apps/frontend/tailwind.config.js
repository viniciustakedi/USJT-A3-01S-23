/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to the Tremor module
    "../../node_modules/@tremor/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1db954',
        secondary: '#1A1A1A',
        baseBlack: '#121212',
        baseHighest: '#2A2A2A',
        baseHigh: '#181818'
      },
    },
  },
  plugins: [],
}

