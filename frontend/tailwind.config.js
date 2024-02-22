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
        xs: "375px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
      }
    },
  },
  plugins: [],
}