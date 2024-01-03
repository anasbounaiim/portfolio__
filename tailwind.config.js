/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'guminert': ['Guminert', 'sans-serif'],
        'SFPROD': ['SFPROD', 'sans-serif'],
      },
    },
  },
  plugins: [],
}