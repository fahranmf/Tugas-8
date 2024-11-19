/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class', // Menambahkan opsi dark mode
  theme: {
    extend: {
      colors: {
        primary: '#047857', // Warna hijau
        secondary: '#EC4899', // Warna merah
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
