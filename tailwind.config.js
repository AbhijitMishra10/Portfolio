/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(200px)' },
        },
      },
      animation: {
        slideRight: 'slideRight 1s ease-in-out forwards',
      },
    },
},
  plugins: [],
}
