/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#ffffff',
      'blue': '#311b92',
      'orange': '#ff6f00',
      'blue': {
        100: '#4727d3',
        200: '#3f23bd',
        300: '#381fa8',
        DEFAULT: '#311b92',
        400: '#2a177c',
        500: '#231367',
        600: '#1b0f51',
      },
      'orange': {
        100: '#ff9a4d',
        200: '#ff8c33',
        300: '#ff7d1a',
        DEFAULT: '#ff6f00',
        400: '#e66400',
        500: '#cc5900',
        600: '#b34e00',
      },
    },
    fontFamily: {
      projectFont: ['Heebo', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
