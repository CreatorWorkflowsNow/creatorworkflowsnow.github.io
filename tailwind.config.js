/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // custom breakpoint
      },
      colors: {
        nowblue:'#24C2CE', 
        nowcyan:'#0ED3CF', 
        nowgray:'#4f4f4f', 
        nowwasabi:'#62D84E',
        nowinfblue: {
          100: '#032d42',
          200: '#00192C',
        },
        nowpink:'#FC7786', 
        nowpurple:'#5274FF', 
        polarispurple:'#4349B1', 
        polarispurpledarkbg:'#21233D', 
        polarispurpledarktxt:'#9EA1FB', 
        polarispurplehover:'#ECECF7', 
        noworange:'#F0964F', 
        nowgreen: {
          100: '#DDFFCA', 
          200: '#C0FFAE', 
          300: '#007E0A', 
          400: '#A3FF93', 
          400: '#86ED78',  // this is default
          500: '#69D05E', 
          600: '#4BB444', 
          700: '#2B992A', 
          800: '#007E0A', 
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
};