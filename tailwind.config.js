/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'setedBG': "#1E2329",
        'lightBlack': "#202329",
        'softBlack': "#476582",
        'newGray': "rgb(61 65 74)",
      },
      textColor: {
        'softDark': '#476582',
        'lighterOne': '#202329'
      },
      height: {
        'custom': 'calc(-60px + 50vh)',
      },
    },
  },
  plugins: [],
}