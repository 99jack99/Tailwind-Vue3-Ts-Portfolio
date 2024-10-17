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
    },
  },
  plugins: [],
}

