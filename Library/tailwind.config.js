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
        gold: '#d4af37',
        brown: {
          500: '#8b5e2b',
          600: '#6b4e24',
          700: '#6b4e24',
          lightbrown: 'rgb(196, 164, 132)',
          darkbrown: 'rgb(92, 64, 51)',
          avgbrown: 'rgb(139,69,19)',
        },
        
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

