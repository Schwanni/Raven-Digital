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
    },
  },
  plugins: [],
}

