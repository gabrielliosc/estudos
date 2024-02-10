/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx", //Dertermina em quais tipos de arquivos sera aplicado o tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

