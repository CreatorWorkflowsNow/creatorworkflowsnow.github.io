module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',// custom breakpoint
      },
    },
  },
  plugins: [
  ],
  darkMode: ['class', '[data-theme="dark"]'],
};