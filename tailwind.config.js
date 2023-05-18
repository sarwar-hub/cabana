/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#212529',
        light: '#7f8fa6',
        sec: '#0dcaf0',
      }
    },
  },
  plugins: [require("daisyui")],
}

