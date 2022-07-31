/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,95%)',
        brightRedSuplight: 'hsl(12,88%,95%)',
        darkBlue: 'hsl(228,39%,23%)',
        darkgrayishBlue: 'hsl(223,12%,13%)',
        veryDarkBlue: 'hsl(13,100%,96%)',
        veryPaleRed: 'hsl(13,100%,96%)',
        veryLightGray: 'hsl(0,0%,90%)',
      }
    },
  },
  plugins: [],
}
