/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': {'raw': '(min-width: 1600px)'},
      },
      keyframes: {
        wave: {
          '0%' : {
              height: '0.5rem'
          },
          '50%' : {
              height: '480px'
          },
          '75%' : {
              height: '400px'
          },
          '100%' : {
              height: '450px'
          },
      },
      },
      animation: {
        wave: "wave 1s ease-in-out forwards"
      },
    },
  },
  plugins: [],
}

