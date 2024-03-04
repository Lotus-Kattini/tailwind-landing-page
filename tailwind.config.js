/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:'#000'
      },
      keyframes:{
        movRight:{
          '0%':{transform:'translateX(0)'},
          '50%':{transform:'translateX(6px)'},
          '100%':{transform:'translateX(0)'},
        }
      },
      animation:{
        movRight:'movRight 1s infinite ease-in-out',
      },
      screens:{
        sm:'576px',
        md:"768px",
        lg:"992px",
        xl:'1200px',
        '2xl':'1400px'
      }
    },
  },
  plugins: [],
}