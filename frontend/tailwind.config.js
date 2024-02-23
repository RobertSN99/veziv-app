/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Bebas Neue'],
        body: ['Fredoka'],
        alternative: ['Karla']
      },
      screens: {
        xs: "360px",
        sm: "768px",
        md: "1280px",
        lg: "1920px",
      }
    },
  },
  plugins: [],
}