/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  // content: ["all-book.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#f1f9fc',
        secondary: '#594cda',
        third: '#eb427e',
        fourth: '#252c38',
        five: '#6b747b',
      }
    },
  },
  plugins: [],
}