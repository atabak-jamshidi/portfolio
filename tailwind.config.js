/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mod:'jit',
  theme: {
    extend: {
      colors:{
        blue: '#2cbce9',
        red: '#dc4492',
        yellow: '#fdcc49',
        gray: '#ededed',
        'deep-blue': '#010026',
        'dark-gray': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35'
      },
      backgroundImage:(theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45a4 45.05%, ffba00 78.07% ',

          'gradient-rainblue':
          'linear-gradient(90deg, #24cbff 14.53%, #Fc59ff 69.36%, ffbd0c 117.73% ',
          
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans','sans-serif']
      },
      content: {
        brush: "url('./public./assets/assets/brush.png')",
        person2: "url('./src/assets/person-2.png')",
        person1: "url('./src/assets/person-1.png')",
        person3: "url('./src/assets/person-3.png')"
      },
      screens:{
        xs: '480px',
        sm: '768px',
        md:'1060px'
      }
    },
  },
  plugins: [],
}

