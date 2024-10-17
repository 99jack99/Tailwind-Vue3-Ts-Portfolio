/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        linked: ['linked'],
        space: ["space"],
        chalmone: ['chalmone'],
        organical: ['organical']
      },
      animation: {
        'haha': 'test 1s ease-in-out 0',
      },
      keyframes: {
        test: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}

