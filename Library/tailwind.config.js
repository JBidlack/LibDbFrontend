/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightbrown: 'rgb(196, 164, 132)',
        darkbrown: 'rgb(92, 64, 51)',
        brown: 'rgb(139,69,19)',
      },
      fontSize:{
        xxl: '2em',
      },
      fontFamily:{
        special:["special Elite", 'cursive'],
      }
    },
  },
  plugins: [],
}

