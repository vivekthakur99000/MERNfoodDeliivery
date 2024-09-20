/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'responsive': 'max(4.5vw, 22px)', // Define your custom font size here
      }
    },
  },
  plugins: [],
}

